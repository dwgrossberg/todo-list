import Task from "./task.js";
import Project from "./project.js";
import taskMaster from "./taskMaster.js";


const storage = (() => {

    // If no localStorage, set an empty array with the name of userTasks
    if (localStorage.length === 0) {
        localStorage.setItem('userTasks', '[]');
    } 

    const getLocalTasks = () => {
        const userList = JSON.parse(localStorage.getItem('userTasks'));
        const TaskObj = Task();
        delete TaskObj.task;   
        // Map Task Methods to JSON objects
        const userTasks = userList.map(task => {
            console.log(task);
            console.log(Object.getOwnPropertyNames(task));
            const TaskMethods = Object.getOwnPropertyNames(TaskObj);
            
            
            

            return {...task, ...TaskObj};
            
            
        });
       

        console.log(userList, userTasks);




        return userTasks;
    }

    const saveLocalTask = (item) => {
        let userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        userList.push(item);
        localStorage.setItem('userTasks', JSON.stringify(userList));
    }

    const removeLocalTask = (item) => {
        let userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        let index = userList.findIndex(task => task.task.title === item.task.title);
        userList.splice(index, 1);
        localStorage.setItem('userTasks', JSON.stringify(userList));
    }

    const updateLocalTaskTitle = (taskDetails, title) => {
        let userList = JSON.parse(localStorage.getItem('userTasks', '[]'));
        let index = userList.findIndex(task => task.task.details === taskDetails);
        console.log(userList);

        userList[index].changeTitle(title);
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