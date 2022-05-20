import Task from "./task.js";
import Project from "./project.js";
import taskMaster from "./taskMaster.js";


const storage = (() => {

    if (localStorage.length === 0) {
        localStorage.setItem('userTasks', '[]');
    } 


    // see if local storage exists
    const getLocalTasks = () => {
        const userTasks = JSON.parse(localStorage.getItem('userTasks'));
        console.log(userTasks);
        return userTasks;
    }

    const getLocalProjects = () => {

    }
    // if so parse the json string
    // else launch the app with default tasks / projects


    // save Task and Project objects
    // save modifications to each Object
    const saveLocalTask = (item) => {
        let userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        userList.push(item);
        localStorage.setItem('userTasks', JSON.stringify(userList));
    }

    const removeLocalTask = (item) => {
        let userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        let index = userList.findIndex(task => task === item);
        userList.splice(index, 1);
        localStorage.setItem('userTasks', JSON.stringify(userList));
    }

    const saveLocalProject = () => {

    }

    return {
        getLocalTasks,
        getLocalProjects,
        saveLocalTask,
        removeLocalTask,
        saveLocalProject
    }

})();

export default storage;