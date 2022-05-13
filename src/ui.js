import taskMaster from "./taskMaster.js";
import loadTaskCards from "./loadTaskCards.js";

const displayUI = (() => {

    const taskContent = document.getElementById('task-content');

    const removeDOMTasks = () => {
        while (taskContent.firstChild) {
            taskContent.removeChild(taskContent.lastChild);
        }
    }

    const updateTaskCompleteStatus = () => {
        const taskCheckboxes = Array.from(document.querySelectorAll('[id^="task-checkbox-"]'));
        taskCheckboxes.forEach(checkbox => checkbox.addEventListener('change', (e) => {
            // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            if (e.target.checked) {
                taskMaster.taskList[taskArrayIndex].changeCompleteStatus(true);
            } else {
                taskMaster.taskList[taskArrayIndex].changeCompleteStatus(false);
            }
            console.log(taskMaster.taskList[taskArrayIndex].task);
        }));
    }

    const updateTaskProject = () => {
        const taskProjects = Array.from(document.querySelectorAll('[id^="projects-select-"]'));
        taskProjects.forEach(project => project.addEventListener('change', (e) => {
            // Set select option to match Task object project
            const selectedOption = e.target[e.target.selectedIndex].innerText;
            // Get the id # of the Task DOM object - matches the index of Task object in taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            taskMaster.taskList[taskArrayIndex].changeProject(selectedOption);
            console.log(taskMaster.taskList[taskArrayIndex].task);
        }));
    }

    const updateTaskDueDate = () => {
        // Add event listener to watch for changes to dueDate
        const taskDueDates = Array.from(document.querySelectorAll('[id^="task-dueDate-"]'));
        taskDueDates.forEach(dueDate => dueDate.addEventListener('change', (e) => {
            // Get the id # of the Task DOM object - matches the index of Task object in taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            const newDateFormatted = new Date(e.target.value);
            // Update the Task object dueDate
            taskMaster.taskList[taskArrayIndex].changeDueDate(newDateFormatted);
            console.log(taskMaster.taskList[taskArrayIndex].task);
            // Reorder the taskList according to new dates
            taskMaster.dateOrderTaskList(taskMaster.taskList);
            // Clear the task-content DOM section
            removeDOMTasks();
            // Reload the sorted task cards
            loadTaskCards.run(taskMaster.taskList);
            // Re-attach event listener functions to Task DOM objects
            runDOMTaskFunctions();
        }));
    }

    const updateTaskPriority = () => {
        const taskRadios = Array.from(document.querySelectorAll('[name^="task-radio-"]'));
        taskRadios.forEach(radio => radio.addEventListener('change', (e) => {
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.name)[0]);
            const oldPriority = taskMaster.taskList[taskArrayIndex].task.priority;
            taskMaster.taskList[taskArrayIndex].changePriority(e.target.value);
            console.log(taskMaster.taskList[taskArrayIndex].task);
            const taskCard = document.getElementById(`task-card-${taskArrayIndex}`);
            // change css priority labels
            taskCard.classList.remove(`${oldPriority}`);
            taskCard.classList.add(`${taskMaster.taskList[taskArrayIndex].task.priority}`);
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
            // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            // Remove Task DOM object
            e.target.parentNode.parentNode.remove();
            // Remove the Task object from the taskMasker.taskList
            taskMaster.removeTask(taskArrayIndex);
            console.log(taskMaster.taskList)
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

    // load projects
    // counter

    const displayController = () => {
        const home = document.getElementById('home');
        const homeCounter = document.getElementById('home-counter');
        const today = document.getElementById('today');
        const todayCounter = document.getElementById('today-counter');
        const next7Days = document.getElementById('next-seven-days');
        const next7DaysCounter = document.getElementById('next-seven-days-counter');
        const projectCounter = document.getElementById('projects-counter');
        const projects = document.querySelectorAll('[id^="Project-"]');

        const baby = document.getElementById('project-baby');
        const babyCounter = document.getElementById('project-counter-baby');
        const study = document.getElementById('study');
        const workout = document.getElementById('workout');
        const notes = document.getElementById('notes');

        // Run the Home Project on page load (includes all Tasks by default)
        home.style.color = "#d82775";
        home.style.fontWeight = 'bold';
        loadTaskCards.run(taskMaster.taskList);
        runDOMTaskFunctions();

        // Home
        home.addEventListener('mousedown', (e) => {
            today.style.color = '';
            today.style.fontWeight = '';
            next7Days.style.color = '';
            next7Days.style.fontWeight = '';
            home.style.color = "#d82775";
            home.style.fontWeight = 'bold';
            removeDOMTasks();
            loadTaskCards.run(taskMaster.taskList);
            runDOMTaskFunctions();
        });

        // Today    
        let todayTasks = [];    
        today.addEventListener('mousedown', (e) => {
            todayTasks = [];
            // Check to find Task dueDates that match today
            const isToday = (date) => {
                if (date) {
                    const today = new Date();
                    return date.getDate() == today.getDate() &&
                        date.getMonth() == today.getMonth() &&
                        date.getFullYear() == today.getFullYear();
                }
            }
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
            today.style.color = "#d82775";
            today.style.fontWeight = 'bold'; 
            removeDOMTasks();
            loadTaskCards.run(todayTasks);
            runDOMTaskFunctions();
        });

        // Next 7 Days
        let next7DaysTasks = [];
        next7Days.addEventListener('mousedown', (e) => {
            next7DaysTasks = [];
            // Check to find Task dueDates that match next7Days
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
            next7Days.style.color = "#d82775";
            next7Days.style.fontWeight = 'bold'; 
            removeDOMTasks();
            loadTaskCards.run(next7DaysTasks);
            runDOMTaskFunctions();
        });

        // Projects
        let projectTasks = [];
        projects.forEach(project => project.addEventListener('mousedown', () => {
            projectTasks = [];
            const projectName = (/(?<=([^-]*-)).*/.exec(project.id)[0]);
            console.log(projectName);
            taskMaster.taskList.forEach(task => {
                if (task.task.project === projectName) {
                    projectTasks.push(task);
                }
            });

            // Set Project styles on sidebar && reload Tasks
            let otherProjects = Array.from(project.parentNode.childNodes);
            otherProjects.forEach(project => {
                if (otherProjects.indexOf(project) % 2 !== 0) {
                    project.style.color = '';
                    project.style.fontWeight = '';
                }
            })
            home.style.color = '';
            home.style.fontWeight = '';
            today.style.color = '';
            today.style.fontWeight = '';
            next7Days.style.color = '';
            next7Days.style.fontWeight = ''; 
            project.style.color = "#d82775";
            project.style.fontWeight = 'bold';
            removeDOMTasks();
            loadTaskCards.run(projectTasks);
            runDOMTaskFunctions();
        }));
    

        // homeCounter.innerText = taskMaster.taskList.length;
        // todayCounter.innerText = todayTasks.length;
        // next7DaysCounter.innerText = next7DaysTasks.length;
        // projectCounter.innerText = taskMaster.projectList.length;
    }

    displayController();

    return {}

})();

export default displayUI;