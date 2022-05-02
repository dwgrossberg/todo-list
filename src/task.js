const TaskFactory = (project, title, dueDate, priority, details, checklist) => {
    const task = {
        project : project,
        title : title,
        dueDate : dueDate,
        priority : priority,
        details : details,
        checklist : checklist
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

    return {
        task,
        changeProject,
        changeTitle,
        changeDueDate,
        changePriority,
        changeDetails,
        changeChecklist
    }
}

const yoyo = TaskFactory();
console.log(yoyo.task)

yoyo.changeProject('yo');
yoyo.changeTitle('piss');
yoyo.changeDueDate('oct. 2');
yoyo.changePriority('muy importanto');
yoyo.changeDetails('so many details the detaisl');
yoyo.changeChecklist('now 3 checks so many the boxes');

console.log(yoyo.task);
