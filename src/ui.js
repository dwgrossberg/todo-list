import taskMaster from "./taskMaster.js";

const displayUI = (() => {
    
     


    const loadTaskContent = (taskList) => {
        const taskContent = document.getElementById('task-content');
        taskList.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.innerText = Object.entries(task.task);
            taskContent.appendChild(taskDiv);
        });

    }

    return {
        loadTaskContent
    }
})();

displayUI.loadTaskContent(taskMaster.taskList);

export default displayUI;
