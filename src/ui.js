import taskMaster from "./taskMaster.js";
import { format } from "date-fns";

const displayUI = (() => {
    
     


    const loadTaskCards = (taskList) => {
        const taskContent = document.getElementById('task-content');
        taskList.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.classList.add(task.task.priority); //Add task priority for css manipulation
            taskDiv.setAttribute('id', `task-${taskList.indexOf(task)}`); //Add task id for later deletion, etc.
            let dueDate = format(new Date(task.task.dueDate), 'dd MMM yy' );
            taskDiv.innerHTML = `
            <div>
                <span class="priority-label"></span>
                <label class="container">
                    <input type="checkbox" id="task-checkbox-${taskList.indexOf(task)}" name="task-checkbox-${taskList.indexOf(task)}" value="complete">
                    <span class="checkmark"></span>
                </label>    
                <p class="task-title">${task.task.title}</p>
                <p class="task-details">${task.task.details}</p>
            </div>
            <p class="due-date">${dueDate}</p>
            `

            taskContent.appendChild(taskDiv);
        });

    }

    return {
        loadTaskCards
    }
})();

displayUI.loadTaskCards(taskMaster.taskList);

export default displayUI;
