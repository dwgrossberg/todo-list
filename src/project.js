import taskMaster from "./taskMaster.js";

const Project = (name) => {

    const project = {
        name : name,
        tasks : []
    }

    const changeName = (name) => {
        let oldName = project.name;
        project.name = name
        updateTaskProjectNames(oldName, name);
    }

    const updateTaskProjectNames = (oldName, newName) => {
        taskMaster.taskList.forEach(task => {
            if (task.task.project === oldName) {
                task.changeProject(newName);
                console.log(task);
            }
        });
    }

    const addTask = (task) => {
        project.tasks.push(task)
    }

    const delTask = (title) => {
        project.tasks.splice(project.tasks.findIndex(task => task.title === title), 1);
    }

    return {
        project,
        changeName,
        addTask,
        delTask
    }
}

export default Project;