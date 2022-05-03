import { format } from 'date-fns';
import { th } from 'date-fns/locale/index.js';

const Task = (project, title, dueDate, priority, details, checklist, complete) => {

    const task = {
        project : 'Home', //default
        title : title,
        dueDate : dueDate,
        priority : priority,
        details : details,
        checklist : (checklist || []), //set up empty array if checklist is undefined
        complete : complete
    }
    
    // Change project name if project variable is not undefined
    if (project !== undefined) {
        task.project = project;
    } 

    // Set dueDate to date-fns format if dueDate variable is not undefined 
    if (dueDate !== undefined) {
        task.dueDate = new Date(dueDate);
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

    const addChecklistItem = (item) => {
        return task.checklist.push(item);
    }

    const removeChecklistItem = (item) => {
        return task.checklist.splice(task.checklist.findIndex(check => check === item), 1);
    }

    const changeChecklistItem = (item, newItem) => {
        const index = [task.checklist.findIndex(check => check === item)];
        return task.checklist[index] = newItem;
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
        addChecklistItem,
        removeChecklistItem,
        changeChecklistItem,
        changeCompleteStatus
    }
}

export default Task;