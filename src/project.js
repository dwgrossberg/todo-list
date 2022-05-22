import taskMaster from "./taskMaster.js";

const Project = (name) => {

    const project = {
        name : name || '',
        tasks : []
    }

    const type = 'project';

    const changeName = (oldName, newName) => {
        project.name = newName;
        updateTaskProjectNames(oldName, newName);
    }

    const updateTaskProjectNames = (oldName, newName) => {
        console.log(oldName, newName);
        taskMaster.taskList.forEach(task => {
            if (task.task.project === oldName) {
                task.task.project = newName;
            }
        });
    }

    const addTask = (task) => {
        project.tasks.push(task);
        return task;
    }

    const delTask = (title) => {
        let oldTask = project.tasks.splice(project.tasks.findIndex(task => task.title === title), 1);
        return oldTask;
    }

    return {
        project,
        type,
        changeName,
        addTask,
        delTask
    }
}

export default Project;