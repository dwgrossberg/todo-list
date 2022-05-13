import taskMaster from "./taskMaster.js";
import loadTaskCards from "./loadTaskCards.js";

const displayUI = (() => {

    const taskContent = document.getElementById('task-content');

    const updateTaskCompleteStatus = () => {
        const taskCheckboxes = Array.from(document.querySelectorAll('[id^="task-checkbox-"]'));
        taskCheckboxes.forEach(checkbox => checkbox.addEventListener('change', (e) => {
            // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            console.log(taskArrayIndex);
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
            while (taskContent.firstChild) {
                taskContent.removeChild(taskContent.lastChild);
            }
            // Reload the sorted task cards
            loadTaskCards.run(taskMaster.taskList);
            // Re-attach event listener functions to Task DOM objects
            runDOMFunctions();
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
    
    const runDOMFunctions = () => {
        updateTaskCompleteStatus();
        updateTaskProject();
        updateTaskDueDate();
        updateTaskPriority();
        expandTask();
        deleteTask();
    }

    const displayProject = () => {
        const home = document.getElementById('home');
        const today = document.getElementById('today');
        const next7Days = document.getElementById('next-seven-days');
        const projects = document.getElementById('projects');
        const baby = document.getElementById('baby');
        const study = document.getElementById('study');
        const workout = document.getElementById('workout');
        const notes = document.getElementById('notes');

        // Run the Home Project on page load (includes all Tasks by default)
        loadTaskCards.run(taskMaster.taskList);
        runDOMFunctions();

        today.addEventListener('mousedown', (e) => {
            const projectName = e;

            console.log(taskMaster.projectList, projectName);


        });
    }

    displayProject();

    return {}

})();

export default displayUI;