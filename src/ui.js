import taskMaster from "./taskMaster.js";
import { format, parseISO } from "date-fns";

const displayUI = (() => {

    const loadTaskCards = (taskList) => {
        // Setup Task cards for display to the DOM
        const taskContent = document.getElementById('task-content');
        taskList.forEach(task => {

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.classList.add(task.task.priority); //Add task priority for css manipulation
            taskDiv.setAttribute('id', `task-${taskList.indexOf(task)}`); //Add task id for later deletion, etc.

            // Create the html structure for each Task card
            // Priority color label
            let taskCardLeft = document.createElement('div');
            taskCardLeft.classList.add('task-card-left');
            let priorityLabel = document.createElement('span');
            priorityLabel.classList.add('priority-label');
            taskCardLeft.appendChild(priorityLabel);

            // Completion checkbox
            let container = document.createElement('label');
            container.classList.add('container');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `task-checkbox-${taskList.indexOf(task)}`;
            checkbox.name= `task-checkbox-name-${taskList.indexOf(task)}`;
            // Add 'complete' class on clicking Task checkbox 
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    taskDiv.classList.add('complete');
                } else {
                    taskDiv.classList.remove('complete');
                }
            });
            container.appendChild(checkbox);
            let checkmark = document.createElement('span');
            checkmark.classList.add('checkmark');
            container.appendChild(checkmark);
            taskCardLeft.appendChild(container);

            // Task title
            let taskTitle = document.createElement('p');
            taskTitle.classList.add('task-title');
            taskTitle.setAttribute('id', `task-title-${taskList.indexOf(task)}`)
            taskTitle.setAttribute('contenteditable', 'true')
            taskTitle.innerText = `${task.task.title}`;
            taskCardLeft.appendChild(taskTitle);

            // Task details
            let taskDetails = document.createElement('p');
            taskDetails.classList.add('task-details');
            taskDetails.innerText = `${task.task.details}`;
            taskCardLeft.appendChild(taskDetails);
            taskDiv.appendChild(taskCardLeft);

            // Due Date
            // let taskCardRight = document.createElement('div');
            // taskCardRight.classList.add('task-card-right');
            // let dueDateDOM = document.createElement('p');
            // dueDateDOM.classList.add('due-date');
            // dueDateDOM.innerText = `${dueDate}`;
            // taskCardRight.appendChild(dueDateDOM);

            // Filter out underfined dates before formatting
            let dueDateValue;
            if (task.task.dueDate !== undefined) {
                dueDateValue = format(new Date(task.task.dueDate), 'yyyy-MM-dd');
            } else {
                dueDateValue = 'No Due Date';
            }
            
            // Due Date 
            // Using input type="date" in order to create an interactive
            // date picker that corresponds to each Task object
            let taskCardRight = document.createElement('div');
            taskCardRight.classList.add('task-card-right');
            let dueDateDOM = document.createElement('input');
            dueDateDOM.classList.add('due-date');
            dueDateDOM.setAttribute('id', `task-dueDate-${taskList.indexOf(task)}`);
            dueDateDOM.type = 'date';
            dueDateDOM.value = `${dueDateValue}`;
            taskCardRight.appendChild(dueDateDOM);

            // Expand button
            let expand = document.createElement('div');
            expand.setAttribute('id', 'expand');
            let expandText = document.createTextNode('<<');
            expand.appendChild(expandText);
            taskCardRight.appendChild(expand);

            // Delete button
            let trash = document.createElement('div');
            trash.setAttribute('id', 'delete-task');
            taskCardRight.appendChild(trash);
            taskDiv.appendChild(taskCardRight);

            // Add Task card to DOM
            taskContent.appendChild(taskDiv);
        });
    }

    loadTaskCards(taskMaster.taskList);

    const updateTaskTitle = () => {
        // Setup mutation Observer to watch for changes to Task titles and update the corresponding Task objects
        const taskTitles = Array.from(document.querySelectorAll('[id^="task-title-"]'));
        const config = { characterData: true, attributes: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                // Keep track of mutated DOM element and text content
                console.log(mutation.target.parentNode.id, mutation.target.textContent); 
                // Regex parse string to get final id # - corresponds with Task array index in taskMaster
                const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(mutation.target.parentNode.id)[0]);
                console.log(taskMaster.taskList[taskArrayIndex].task);
                taskMaster.taskList[taskArrayIndex].changeTitle(mutation.target.textContent);
            }
        }
        const observer = new MutationObserver(callback);
        taskTitles.forEach(title => observer.observe(title, config));
    }

    updateTaskTitle();

    const updateTaskDueDate = () => {
        // Add event listener to watch for changes to dueDate
        const taskDueDates = Array.from(document.querySelectorAll('[id^="task-dueDate-"]'));
        taskDueDates.forEach(dueDate => dueDate.addEventListener('change', (e) => {
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            taskMaster.taskList[taskArrayIndex].changeDueDate(e.target.value);
            console.log(taskMaster.taskList[taskArrayIndex].task);
        }));
    }
    
    updateTaskDueDate();

    return {

    }
})();


export default displayUI;
