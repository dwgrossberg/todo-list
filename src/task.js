import taskMaster from "./taskMaster.js";

const Task = (project, title, dueDate, priority, details, complete) => {

    const task = {
        project : 'Home', //default
        title : title,
        dueDate : dueDate,
        priority : (priority || 'none'),
        details : (details || ''),
        complete : complete
    }

    const type = 'task';
    
    // Change project name if project variable is not undefined
    if (project !== undefined) {
        task.project = project;
    } 

    // Set dueDate to date-fns format if dueDate variable is not undefined 
    if (dueDate !== undefined) {
        task.dueDate = new Date(dueDate)
    }

    const changeTaskProject = (oldProject, newProject, taskToChange) => {
        // Update  the taskMaster projectList when a Task changes projects
        const oldProjectIndex = taskMaster.projectList.findIndex(project => project.project.name === oldProject);
        const taskIndex = Array.from(taskMaster.projectList[oldProjectIndex].project.tasks).indexOf(taskToChange);
        const taskToMove = taskMaster.projectList[oldProjectIndex].delTask(taskIndex)[0];
        const newProjectIndex = taskMaster.projectList.findIndex(project => project.project.name === newProject);
        taskMaster.projectList[newProjectIndex].addTask(taskToMove);
        return task.project = newProject;
    }

    const changeTitle = (title) => {
        return task.title = title;
    }

    const changeDueDate = (dueDate) => {
        return task.dueDate = dueDate;
    }

    const changePriority = (priority) => {
        return task.priority = priority;
    }

    const changeDetails = (details) => {
        return task.details = details;
    }

    const changeCompleteStatus = (complete) => {
        return task.complete = complete;
    }

    return {
        task,
        type,
        changeTaskProject,
        changeTitle,
        changeDueDate,
        changePriority,
        changeDetails,
        changeCompleteStatus
    }
}

export default Task;