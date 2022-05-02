const createTask = (project, title, dueDate, priority, details, checklist, complete) => {
    const task = {
        project : project,
        title : title,
        dueDate : dueDate,
        priority : priority,
        details : details,
        checklist : checklist,
        complete : complete
    }
    
    const changeProject = (project) => {
        task.project = project;
    }

    const changeTitle = (title) => {
        task.title = title;
    }

    const changeDueDate = (dueDate) => {
        task.dueDate = dueDate;
    }

    const changePriority = (priority) => {
        task.priority = priority;
    }

    const changeDetails = (details) => {
        task.details = details;
    }

    const changeChecklist = (checklist) => {
        task.checklist = checklist;
    }

    const changeCompleteStatus = (complete) => {
        task.complete = complete;
    }

    return {
        task,
        changeProject,
        changeTitle,
        changeDueDate,
        changePriority,
        changeDetails,
        changeChecklist,
        changeCompleteStatus
    }
}

export default createTask;