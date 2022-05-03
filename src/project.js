const Project = (name) => {

    const project = {
        name : name,
        tasks : []
    }

    const changeName = (name) => {
        project.name = name
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