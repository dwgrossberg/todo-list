const TaskFactory = (title) => {
    const task = {
        title : title

    }

    return {
        task
    }
}
const yoyo = TaskFactory('peaches');
console.log(yoyo, yoyo.task.title);