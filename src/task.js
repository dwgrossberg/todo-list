const Task = (project, title, dueDate, priority, details, checklist, complete) => {

    const task = {
        project : 'Home', //default
        title : title,
        dueDate : dueDate,
        priority : (priority || 'none'),
        details : (details || ''),
        complete : complete
    }
    
    // Change project name if project variable is not undefined
    if (project !== undefined) {
        task.project = project;
    } 

    // Set dueDate to date-fns format if dueDate variable is not undefined 
    if (dueDate !== undefined) {
        task.dueDate = new Date(dueDate)
    }

    const changeProject = (project) => {
        return task.project = project;
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
        changeProject,
        changeTitle,
        changeDueDate,
        changePriority,
        changeDetails,
        changeCompleteStatus
    }
}

export default Task;