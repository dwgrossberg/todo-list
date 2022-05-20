import Task from "./task.js";
import Project from "./project.js";
import taskMaster from "./taskMaster.js";


const storage = (() => {

    localStorage.setItem('userTasks', '[]');

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
        if (localStorage.length > 0) {
            let userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
            userList.push(item);
            localStorage.setItem('userTasks', JSON.stringify(userList));
        } else {
            localStorage.setItem('userTasks', JSON.stringify(item));
        }
    }

    const saveLocalProject = () => {

    }

    return {
        getLocalTasks,
        getLocalProjects,
        saveLocalTask,
        saveLocalProject
    }

})();

export default storage;