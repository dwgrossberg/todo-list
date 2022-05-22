import Task from "./task.js";
import Project from "./project.js";
import taskMaster from "./taskMaster.js";


const storage = (() => {

    // If no localStorage, set an empty array with the name of userTasks
    if (localStorage.length === 0) {
        localStorage.setItem('userTasks', '[]');
        localStorage.setItem('userProjects', '[]');
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
        // Ignore duplicate Tasks
        if (userTasks.some(task => task.task.title === item.task.title && task.task.details === item.task.details)) return;
        else {
            userTasks.push(item);
            localStorage.setItem('userTasks', JSON.stringify(userTasks));
        }
    }

    const removeLocalTask = (item) => {
        const userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        const index = userList.findIndex(task => task.task.title === item.task.title && task.task.details === item.task.details);
        userList.splice(index, 1);
        localStorage.setItem('userTasks', JSON.stringify(userList));
    }

    const updateLocalTaskProject = () => {
        const userTasks = getLocalTasks();


    }

    const updateLocalTaskTitle = (item) => {
        const userTasks = getLocalTasks();
        const index = userTasks.findIndex(task => task.task.details === item.task.details);
        userTasks[index].task.title = userTasks[index].changeTitle(item.task.title);
        localStorage.setItem('userTasks', JSON.stringify(userTasks));
    }

    const getLocalProjects = () => {
        const userList = JSON.parse(localStorage.getItem('userProjects', '[]'));
        // const ProjectObj = Project('home');
        // Remove name property in order to not overwrite
        // delete ProjectObj.name;   
        // Map other Project Methods to new JSON objects
        // const userProjects = userList.map(project => {
            // console.log(project.tasks);
            // return {...project, ...ProjectObj}
        // });
        return userList;
    }

    const saveLocalProject = (item) => {
        const userList = JSON.parse(localStorage.getItem('userProjects', '[]'));
        // Ignore duplicate Projects
        if (userList.some(project => project.project.name === item.project.name && project.project.tasks === item.project.tasks)) return;
        else {
            userList.push(item);
            console.log(item, userList);
            localStorage.setItem('userProjects', JSON.stringify(userList));
        }
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