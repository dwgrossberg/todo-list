import taskMaster from "./taskMaster.js";
import loadTaskCards from "./loadTaskCards.js";

const displayUI = (() => {

    const taskContent = document.getElementById('task-content');
    const home = document.getElementById('Project-Home');
    const today = document.getElementById('today');
    const next7Days = document.getElementById('next-seven-days');

    const removeDOMTasks = (content) => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    }

    // Check if a date is today
    const isToday = (date) => {
        if (date) {
            const today = new Date();
            return date.getDate() == today.getDate() &&
                date.getMonth() == today.getMonth() &&
                date.getFullYear() == today.getFullYear();
        }
    }
    
    // Check if a date is within the next 7 days
    const isNextWeek = (date) => {
        if (date) {
            const today = new Date();
            const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
            if (nextWeek < date) {
                return false;
            } else {
                return true;
            }
        }
    }

    const tabController = (taskProject) => {
        // Display to the updated project list, unless the user is already on Home / Today /Next7Days tab
        const project = document.getElementById(`Project-${taskProject}`);
        if (home.style.color === "rgb(216, 39, 117)") return;
        else if (today.style.color === "rgb(216, 39, 117)" && document.createEvent) {
            today.dispatchEvent(new Event('mousedown'));
        } else if (next7Days.style.color ===  "rgb(216, 39, 117)" && document.createEvent) {
            next7Days.dispatchEvent(new Event('mousedown'));
        }
        else if (document.createEvent) {
            project.dispatchEvent(new Event('mousedown'));
        }
    }

    const updateTaskCompleteStatus = () => {
        const taskCheckboxes = Array.from(document.querySelectorAll('[id^="task-checkbox-"]'));
        taskCheckboxes.forEach(checkbox => checkbox.addEventListener('change', (e) => {
            const taskTitle = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
            // Find the index of the Task object with the matching title
            const taskIndex = taskMaster.taskList.findIndex(task => task.task.title === taskTitle);
            const taskProject = taskMaster.taskList[taskIndex].task.project;
            console.log(taskMaster.taskList[taskIndex].task);
            if (e.target.checked) {                
                taskMaster.taskList[taskIndex].changeCompleteStatus(true);
                // Move completed Task to end of the list
                taskMaster.taskList.push(taskMaster.taskList.splice(taskIndex, 1)[0]);
                removeDOMTasks(taskContent);
                loadTaskCards.run(taskMaster.taskList);
                runDOMTaskFunctions();
            } else {
                taskMaster.taskList[taskIndex].changeCompleteStatus(false);
                // Rerun dateOrderTaskList to reintegrate uncompleted Task into the normal flow
                taskMaster.dateOrderTaskList(taskMaster.taskList);
                removeDOMTasks(taskContent);
                loadTaskCards.run(taskMaster.taskList);
                runDOMTaskFunctions();
            }
            tabController(taskProject);
        }));
    }

    const updateTaskProject = () => {
        const taskProjects = Array.from(document.querySelectorAll('[id^="projects-select-"]'));
        taskProjects.forEach(project => project.addEventListener('change', (e) => {
            // Set select option to match Task object project
            const selectedOption = e.target[e.target.selectedIndex].innerText;
            const taskTitle = e.target.parentNode.parentNode.childNodes[1].innerText;
            // Find the index of the Task object with the matching title
            const taskIndex = taskMaster.taskList.findIndex(task => task.task.title === taskTitle);
            const taskProject = taskMaster.taskList[taskIndex].task.project;
            taskMaster.taskList[taskIndex].changeProject(selectedOption);
            console.log(taskMaster.taskList[taskIndex].task);
            // Display the updated project list
            tabController(taskProject);
        }));
    }

    const updateTaskDueDate = () => {
        // Add event listener to watch for changes to dueDate
        const taskDueDates = Array.from(document.querySelectorAll('[id^="task-dueDate-"]'));
        taskDueDates.forEach(dueDate => dueDate.addEventListener('change', (e) => {
            const taskTitle = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText;
            // Find the index of the Task object with the matching title
            const taskIndex = taskMaster.taskList.findIndex(task => task.task.title === taskTitle);
            const taskProject = taskMaster.taskList[taskIndex].task.project;
            const newDateFormatted = new Date(e.target.value);
            // Update the Task object dueDate
            taskMaster.taskList[taskIndex].changeDueDate(newDateFormatted);
            console.log(taskMaster.taskList[taskIndex].task);
            // Reorder the taskList according to new dates
            taskMaster.dateOrderTaskList(taskMaster.taskList);
            // Clear the task-content DOM section
            removeDOMTasks(taskContent);
            // Reload the newly sorted task cards
            loadTaskCards.run(taskMaster.taskList);
            // Re-attach event listener functions to Task DOM objects
            runDOMTaskFunctions();
            // Display to the updated project list, unless the user is already on Home / Today /Next7Days tab
            tabController(taskProject);
            }));
    }

    const updateTaskPriority = () => {
        const taskRadios = Array.from(document.querySelectorAll('[name^="task-radio-"]'));
        taskRadios.forEach(radio => radio.addEventListener('change', (e) => {
            const taskCard = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            const taskTitle = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText;
            // Find the index of the Task object with the matching title
            const taskIndex = taskMaster.taskList.findIndex(task => task.task.title === taskTitle);
            const oldPriority = taskMaster.taskList[taskIndex].task.priority;
            taskMaster.taskList[taskIndex].changePriority(e.target.value);
            console.log(taskMaster.taskList[taskIndex].task);
            // change css priority labels
            taskCard.classList.remove(`${oldPriority}`);
            taskCard.classList.add(`${taskMaster.taskList[taskIndex].task.priority}`);
        }));
    }

    const expandTask = () => {
        const taskExpanders = Array.from(document.querySelectorAll('[id^="task-expand-"]'));
        taskExpanders.forEach(expander => expander.addEventListener('mousedown', (e) => {
            const taskCard = e.target.parentNode.parentNode;
            const taskCardLeft = e.target.parentNode.parentNode.childNodes[0];
            const taskProject = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[0];
            const taskTitle = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
            const taskDetails = e.target.parentNode.parentNode.childNodes[0].childNodes[2];
            const taskPriority = e.target.parentNode.parentNode.childNodes[1].childNodes[3];
            if (taskCard.classList.contains('expanded')) {
                e.target.style.transform = '';
                e.target.style.color = '';
                taskCard.classList.remove('expanded');
                taskCard.style.height = '';
                taskCard.style.alignItems = '';
                taskCardLeft.style.display = '';
                taskProject.style.opacity = '';
                taskProject.style.position = '';
                taskProject.style.zIndex = '';
                taskTitle.style.marginTop = '';
                taskDetails.style.whiteSpace = '';
                taskDetails.classList.remove('editable');
                taskDetails.setAttribute('contenteditable', 'false');
                taskPriority.style.display = '';
            } else {
                e.target.style.transform = 'rotate(-90deg) scale(1, 2)';
                e.target.style.color = '#d82775';
                taskCard.classList.add('expanded');
                taskCard.style.height = 'fit-content';
                taskCard.style.alignItems = 'flex-start';
                taskCardLeft.style.display = 'block';
                taskProject.style.opacity = '1';
                taskProject.style.position = 'static';
                taskProject.style.zIndex = '0';
                taskTitle.style.marginTop = '5px';
                taskDetails.style.whiteSpace = 'normal';
                taskDetails.classList.add('editable');
                taskDetails.setAttribute('contenteditable', 'true');
                taskPriority.style.display = 'flex';
            }
        }));
    }
        
    const deleteTask = () => {
        const taskBins = Array.from(document.querySelectorAll('[id^="task-delete-"]'));
        taskBins.forEach(bin => bin.addEventListener('mousedown', (e) => {
            const taskTitle = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText;
            // Find the index of the Task object with the matching title
            const taskIndex = taskMaster.taskList.findIndex(task => task.task.title === taskTitle);
            console.log(taskTitle);
            // Remove Task DOM object
            e.target.parentNode.parentNode.remove();
            // Remove the Task object from the taskMasker.taskList
            taskMaster.removeTask(taskIndex);
            console.log(taskMaster.taskList);
        }));
    }
    
    const runDOMTaskFunctions = () => {
        updateTaskCompleteStatus();
        updateTaskProject();
        updateTaskDueDate();
        updateTaskPriority();
        expandTask();
        deleteTask();
    }

    const addTaskList = [];
    const addTaskDOM = document.getElementById('add-task');
    const addTask = (e) => {
        const projects = Array.from(e.target.parentNode.childNodes[9].childNodes);
        let projectName = 'Home';
        projects.forEach(project => {
            let projectSpan = project.childNodes[2];
            if (projectSpan.style.color === "rgb(216, 39, 117)") {
                projectName = projectSpan.textContent;
            }
        });
        // Create a 'blank' Task card for the user to fill in
        addTaskList.push('task')
        let newTask = taskMaster.createTask(`${projectName}`, `newTask ${addTaskList.length}`, new Date(Date.now()), 'none', 'taskDetails', false);
        // Resort and reload the new Task cards
        removeDOMTasks(taskContent);
        taskMaster.dateOrderTaskList(taskMaster.taskList);
        // Ensure that the new Task always displays first
        let newTaskIndex = taskMaster.taskList.indexOf(newTask);
        let taskToFront = taskMaster.taskList.splice(newTaskIndex, 1);
        taskMaster.taskList.unshift(taskToFront[0]);
        console.log(newTaskIndex, taskToFront, taskMaster.taskList);
        // taskMaster.taskList.unshift(;
        loadTaskCards.run(taskMaster.taskList);
        runDOMTaskFunctions();
        tabController(projectName);
        // Expand the new Task card
        const taskExpander = document.querySelector('[id="task-expand-0"]');
        if (document.createEvent) {
            taskExpander.dispatchEvent(new Event('mousedown'));
        }
    }
    addTaskDOM.addEventListener('mousedown', addTask);


    const setSidebarCounters = () => {
        const projectCounter = document.getElementById('projects-counter');
        projectCounter.innerText = taskMaster.projectList.length - 1; //Subtract one to account for Home as default Project
        // Set project Task counters, including Home
        taskMaster.projectList.forEach(project => {
            let counterElem = document.getElementById(`project-counter-${project.project.name}`);
            counterElem.innerText = taskMaster.projectList[taskMaster.projectList.indexOf(project)].project.tasks.length;
        });
        // Set Today and Next7Days counters
        const todayCounter = document.getElementById('today-counter');
        const next7DaysCounter = document.getElementById('next-seven-days-counter');
        taskMaster.taskList.forEach(task => {
            if (isToday(task.task.dueDate)) {
                todayCounter.innerText++;
            } 
            if (isNextWeek(task.task.dueDate)) {
                next7DaysCounter.innerText++;
            }
        });
    }

    const changeSidebarCounter = (task) => {
        
        //todo

    }

    const projectsSidebar = document.getElementById('project-sidebar-list');

    const editProjectStyles = () => {
        const projectEdits = Array.from(document.getElementsByClassName('edit-project'));
        projectEdits.forEach(edit => edit.addEventListener('mousedown', projectEditSet));

    }

    const projectEditSet = (e) => {
        if (e.target.classList[0] === 'edit-project') {
            e.target.classList.remove('edit-project');
            e.target.classList.add('set-project');
            let projectName = e.target.parentNode.childNodes[2];
            projectName.classList.add('project-editable');
            projectName.setAttribute('contentEditable', true);
        } else if (e.target.classList[0] === 'set-project') {
            e.target.classList.remove('set-project');
            e.target.classList.add('edit-project');
            let projectName = e.target.parentNode.childNodes[2];
            projectName.classList.remove('project-editable');
            projectName.setAttribute('contentEditable', false);
        }
    }

    const updateProjectName = () => {
         // Setup mutation Observer to watch for changes to Project names and update the corresponding Project objects
        const projectNames = Array.from(document.querySelectorAll('span[id^="Project-"]'));
        const config = { characterData: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            for (const mutation of mutationsList) {
                // Keep track of mutated DOM element and text content
                const projectElem = mutation.target.parentNode;
                // Update Project DOM element id to match new name
                projectElem.setAttribute('id', `Project-${mutation.target.textContent}`)
                // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
                const projectIndex = (/(?<=([^-]*-){2}).*/.exec(mutation.target.parentNode.parentNode.id)[0]);
                taskMaster.projectList[projectIndex].changeName(mutation.target.textContent);
                console.log(taskMaster.projectList[projectIndex].project);
                // Reload the Task cards to show the updated Project
                removeDOMTasks(taskContent);
                loadTaskCards.run(taskMaster.taskList);
                runDOMTaskFunctions();
                tabController(mutation.target.textContent);
            }
        }
        const observer = new MutationObserver(callback);
        projectNames.forEach(title => observer.observe(title, config));
    }

    const deleteProject = () => {
        const projectBins = Array.from(document.getElementsByClassName('delete-project'));
        projectBins.forEach(bin => bin.addEventListener('mousedown', (e) => {
            const projectName = e.target.parentNode.childNodes[2].textContent;
            console.log(projectName);
            // Find the index of the Task object with the matching title
            const projectIndex = taskMaster.projectList.findIndex(project => project.project.name === projectName);
            console.log(projectIndex);
            // Remove Task DOM object
            e.target.parentNode.remove();
            // Remove the Task objects related to that Project from the taskList
            const projectTasks = taskMaster.projectList[projectIndex].project.tasks;
            projectTasks.forEach(task => taskMaster.removeTask(taskMaster.taskList.indexOf(task)));
            // Remove the Project object from the taskMasker.projectList
            taskMaster.removeProject(projectIndex);
            // Remove the Task DOM objects related to that Project and reload the Task cards
            removeDOMTasks(taskContent);
            loadTaskCards.run(taskMaster.taskList);
            runDOMTaskFunctions();
            tabController('Home');
        }));
    }

    const loadProjects = () => {
        // Dynamically load projects to the sidebar DOM element
        taskMaster.projectList.forEach(project => {
            if (project.project.name === 'Home') return;
            else {
                const projectDiv = document.createElement('div');
                // Set index use for later use
                projectDiv.setAttribute('id', `project-index-${taskMaster.projectList.indexOf(project)}`);
                const counterDiv = document.createElement('div');
                counterDiv.setAttribute('id', `project-counter-${project.project.name}`);
                projectDiv.appendChild(counterDiv);
                const iconDiv = document.createElement('div');
                iconDiv.classList.add('project-icon');
                projectDiv.appendChild(iconDiv);
                // Set projectName as span for styling purposes 
                const projectName = document.createElement('span');
                projectName.classList.add('project-name');
                projectName.setAttribute('id', `Project-${project.project.name}`);
                projectName.innerText = project.project.name;
                projectDiv.appendChild(projectName);
                const editDiv = document.createElement('div');
                editDiv.classList.add('edit-project');
                projectDiv.appendChild(editDiv);
                const deleteDiv = document.createElement('div');
                deleteDiv.classList.add('delete-project');
                projectDiv.appendChild(deleteDiv);
                projectsSidebar.appendChild(projectDiv);
                updateProjectName();
            }
        });
        // Attach DOM event handlers
        editProjectStyles();
        deleteProject();
    }
    
    loadProjects();

    const displayController = () => {

        const projects = document.querySelectorAll('[id^="Project-"]');
        // Run the Home Project on page load (includes all Tasks by default)
        home.style.color = "#d82775";
        home.style.fontWeight = 'bold';
        loadTaskCards.run(taskMaster.taskList);
        runDOMTaskFunctions();
        setSidebarCounters();

        // Home
        home.addEventListener('mousedown', (e) => {
            today.style.color = '';
            today.style.fontWeight = '';
            next7Days.style.color = '';
            next7Days.style.fontWeight = '';
            projects.forEach(project => {
                project.style.color = '';
                project.style.fontWeight = '';

            });
            home.style.color = "#d82775";
            home.style.fontWeight = 'bold';
            removeDOMTasks(taskContent);
            console.log(taskMaster.taskList);   
            loadTaskCards.run(taskMaster.taskList);
            runDOMTaskFunctions();
        });

        // Today    
        let todayTasks = [];    
        today.addEventListener('mousedown', (e) => {
            todayTasks = [];
            taskMaster.taskList.forEach(task => {
                if (isToday(task.task.dueDate) && !todayTasks.includes(task)) {;
                    todayTasks.push(task);
                } ;
            });
            // Set sidebar styles && reload Tasks
            home.style.color = '';
            home.style.fontWeight = '';
            next7Days.style.color = '';
            next7Days.style.fontWeight = '';
            projects.forEach(project => {
                project.style.color = '';
                project.style.fontWeight = '';
            });
            today.style.color = "#d82775";
            today.style.fontWeight = 'bold'; 
            removeDOMTasks(taskContent);
            loadTaskCards.run(todayTasks);
            runDOMTaskFunctions();
        });

        // Next 7 Days
        let next7DaysTasks = [];
        next7Days.addEventListener('mousedown', (e) => {
            next7DaysTasks = [];
            taskMaster.taskList.forEach(task => {
                if (isNextWeek(task.task.dueDate)) {
                    next7DaysTasks.push(task);
                } ;
            });
            // Set sidebar styles && reload Tasks
            home.style.color = '';
            home.style.fontWeight = '';
            today.style.color = '';
            today.style.fontWeight = '';
            projects.forEach(project => {
                project.style.color = '';
                project.style.fontWeight = '';
            });
            next7Days.style.color = "#d82775";
            next7Days.style.fontWeight = 'bold';     
            removeDOMTasks(taskContent);
            loadTaskCards.run(next7DaysTasks);
            runDOMTaskFunctions();
        });

        // Projects
        let projectTasks = [];
        projects.forEach(project => project.addEventListener('mousedown', (e) => {
            if (e.target.innerText === 'Home') return;
            projectTasks = [];
            const projectName = (/(?<=([^-]*-)).*/.exec(project.id)[0]);
            taskMaster.taskList.forEach(task => {
                if (task.task.project === projectName) {
                    projectTasks.push(task);
                }
            });
            // Set Project styles on sidebar && reload Tasks
            let otherProjects = Array.from(project.parentNode.parentNode.childNodes);
            otherProjects.forEach(project => {
                let projectTag = project.childNodes[2];
                if (projectTag.innerText === e.target.innerText) return;
                else {
                    projectTag.style.color = '';
                    projectTag.style.fontWeight = '';
                }
            });
            home.style.color = '';
            home.style.fontWeight = '';
            today.style.color = '';
            today.style.fontWeight = '';
            next7Days.style.color = '';
            next7Days.style.fontWeight = ''; 
            project.style.color = "#d82775";
            project.style.fontWeight = 'bold';
            removeDOMTasks(taskContent);
            loadTaskCards.run(projectTasks);
            runDOMTaskFunctions();
        }));
    }

    displayController();

    return {}

})();

export default displayUI;