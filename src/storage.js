import Task from "./task.js";
import Project from "./project.js";
import taskMaster from "./taskMaster.js";


const storage = (() => {

    // If no localStorage, set an empty array with the name of userTasks
    if (localStorage.length === 0) {
        localStorage.setItem('userTasks', '[]');
    } 

    const getLocalTasks = () => {
        const userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        const TaskObj = Task();
        // Remove task property in order to not overwrite
        delete TaskObj.task;   
        // Map other Task Methods to new JSON objects
        const userTasks = userList.map(task => {
            return {...task, ...TaskObj}
        });
        return userTasks;
    }

    const saveLocalTask = (item) => {
        const userTasks = getLocalTasks();
        if (userTasks.some(task => task.task.title === item.task.title && task.task.details === item.task.details)) return;
        else {
            userTasks.push(item);
            localStorage.setItem('userTasks', JSON.stringify(userTasks));
            console.log(item, userTasks);
        }
    }

    const removeLocalTask = (item) => {
        const userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        const index = userList.findIndex(task => task.task.title === item.task.title);
        userList.splice(index, 1);
        localStorage.setItem('userTasks', JSON.stringify(userList));
    }

    const updateLocalTaskTitle = (task) => {
        const userTasks = getLocalTasks();
        const index = userTasks.findIndex(item => item.task.details === task.task.details);
        userTasks[index].task.title = userTasks[index].changeTitle(task.task.title);
        localStorage.setItem('userTasks', JSON.stringify(userTasks));


    }

    const getLocalProjects = () => {

    }

    const saveLocalProject = () => {

    }

    return {
        getLocalTasks,
        getLocalProjects,
        saveLocalTask,
        removeLocalTask,
        updateLocalTaskTitle,
        saveLocalProject
    }

})();

export default storage;