import taskMaster from "./taskMaster.js";
import favicon from './assets/favicon.ico';
import { format } from "date-fns";

const displayUI = (() => {
    
    // Set favicon icon
    const faviconDOM = document.querySelector('link[rel~="icon"]');
    faviconDOM.href = favicon;



    const loadTaskCards = (taskList) => {
        const taskContent = document.getElementById('task-content');
        taskList.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.classList.add(task.task.priority); //Add task priority for css manipulation
            taskDiv.setAttribute('id', `task-${taskList.indexOf(task)}`); //Add task id for later deletion, etc.
            let dueDate;
            if (task.task.dueDate !== undefined) {
                dueDate = format(new Date(task.task.dueDate), 'dd MMM yy' );
            } else {
                dueDate = 'No Due Date';
            }
            taskDiv.innerHTML = `
            <div class="task-card-left">
                <span class="priority-label"></span>
                <label class="container">
                    <input type="checkbox" id="task-checkbox-${taskList.indexOf(task)}" name="task-checkbox-${taskList.indexOf(task)}" value="complete">
                    <span class="checkmark"></span>
                </label>    
                <p class="task-title">${task.task.title}</p>
                <p class="task-details">${task.task.details}</p>
            </div>
            <div class="task-card-right">
                <p class="due-date">${dueDate}</p>
                <div id="expand"></div>
                <div id="trash"></div>
            </div>
            `
            // details, edit, delete
            
            taskContent.appendChild(taskDiv);
        });

    }

    loadTaskCards(taskMaster.taskList);

    return {
        loadTaskCards
    }
})();


export default displayUI;
