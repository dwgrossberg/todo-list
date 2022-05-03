const Task = (project, title, dueDate, priority, details, checklist, complete) => {

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

    const changeChecklist = (item, newItem) => {
        const index = [task.checklist.findIndex(check => check === item)];
        console.log(task.checklist, index);
        task.checklist[index] = newItem;
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

export default Task;