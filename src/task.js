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

    const changeProject = (oldProject, newProject) => {
        // const oldProjectTasks = taskMaster.projectList[taskMaster.projectList.findIndex(project => project.project.name === newProject)].project.tasks[0];
        // console.log(oldProjectTasks);



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
        changeProject,
        changeTitle,
        changeDueDate,
        changePriority,
        changeDetails,
        changeCompleteStatus
    }
}

export default Task;