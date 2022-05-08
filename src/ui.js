import taskMaster from "./taskMaster.js";
import { format } from "date-fns";

const displayUI = (() => {

    const loadTaskCards = (taskList) => {
        // Setup Task cards for display to the DOM
        const taskContent = document.getElementById('task-content');
        taskList.forEach(task => {

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.classList.add(task.task.priority); //Add task priority for css manipulation
            taskDiv.setAttribute('id', `task-${taskList.indexOf(task)}`); //Add task id for later deletion, etc.

            // Filter out underfined dates before formatting
            let dueDate;
            if (task.task.dueDate !== undefined) {
                dueDate = format(new Date(task.task.dueDate), 'dd MMM yy' );
            } else {
                dueDate = 'No Due Date';
            }

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
            let taskCardRight = document.createElement('div');
            taskCardRight.classList.add('task-card-right');
            let dueDateDOM = document.createElement('p');
            dueDateDOM.classList.add('due-date');
            dueDateDOM.innerText = `${dueDate}`;
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

    const updateTaskTitle = () => {
        // Setup mutation Observer to watch for changes to Task titles and update Task objects
        const taskTitles = Array.from(document.querySelectorAll('[id^="task-title-"]'));
        const config = { characterData: true, attributes: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                // Keep track of mutated DOM element and text content
                console.log(mutation.target.parentNode.id, mutation.target.textContent); 
                // Regex parse string to get final id # - corresponds with Task array index in taskMaster
                const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(mutation.target.parentNode.id)[0]);
                console.log(taskArrayIndex, taskMaster.taskList[taskArrayIndex]);
                taskMaster.taskList[taskArrayIndex].changeTitle(mutation.target.textContent);
                // if (mutation.target.parentNode.id === 'player-O-name') {
                    // player1.updatePlayerName(mutation.target.textContent, 'Player O');
                // } else if (mutation.target.parentNode.id === 'player-X-name') {
                    // player1.updatePlayerName(mutation.target.textContent, 'Player X');
                // }
            
            }
        }
        const observer = new MutationObserver(callback);
        taskTitles.forEach(title => observer.observe(title, config));
    }

    loadTaskCards(taskMaster.taskList);
    updateTaskTitle();

    return {

    }
})();


export default displayUI;
