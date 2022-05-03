import { format } from 'date-fns';

const Task = (project, title, dueDate, priority, details, checklist, complete) => {

    const task = {
        project : project,
        title : title,
        dueDate : dueDate,
        priority : priority,
        details : details,
        checklist : (checklist || []),
        complete : complete
    }
    
    // Set dueDate to date-fns format if field is not undefined 
    if (dueDate !== undefined) {
        task.dueDate = format(new Date(dueDate), 'MMM/dd/yyyy')
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

    const addChecklistItem = (item) => {
        task.checklist.push(item);
    }

    const removeChecklistItem = (item) => {
        task.checklist.splice(task.checklist.findIndex(check => check === item), 1);
    }

    const changeChecklistItem = (item, newItem) => {
        const index = [task.checklist.findIndex(check => check === item)];
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
        addChecklistItem,
        removeChecklistItem,
        changeChecklistItem,
        changeCompleteStatus
    }
}

export default Task;