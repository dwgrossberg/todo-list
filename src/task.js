const TaskFactory = (project, title, details, dueDate, priority) => {
    const task = {
        project : project,
        title : title,
        details : details,
        dueDate : dueDate,
        priority : priority
    }
    
    const editTitle = (title) => {
        task.title = title;
    }

    return {
        task,
        editTitle
    }
}
const yoyo = TaskFactory('home', 'peaches', 'eat peaches', 'nov. 2nd', 'very high');
console.log(yoyo, yoyo.task.title)

yoyo.editTitle('piss');
console.log(yoyo, yoyo.task.title);
