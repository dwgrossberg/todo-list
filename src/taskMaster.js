import Task from "./task.js";
import Project from "./project.js";

// Control the creation and manipulation of Projects & Tasks
// Module to be called from the DOM 
const taskMaster = (() => {

    // Keep track of the current Projects && Tasks
    const projectList = [];
    const taskList = [];

    // Create new Projects and push them to the projectList
    const createProject = (project) => {
        const newProject = Project(project);
        projectList.push(newProject);
        return newProject;
    }
    // Default Projects on page load
    const home = createProject('Home');
    const today = createProject('Today');
    const next7Days = createProject('Next 7 Days');

    // Create new Tasks and push them to the taskList
    const createTask = (...args) => {
        const newTask = Task(...args);
        taskList.push(newTask); //Keep track of all Tasks in the taskList array
        if (args[0] !== home) { //Add all Tasks to the Home Project by default without duplicating
            home.addTask(newTask);
        } 
        args[0].addTask(newTask); //Automatically add the new Task to the correct Project task array
        return newTask;
    }

    // Default tasks on page load
    const runTask = createTask(home, 'Run 10k practice pace for race', '10.2.22', 'Low', '', false, false);
    const studyTask = createTask(next7Days, 'Review Webpack.config.js configuration basics', '5/20/2022', 'medium', 'Revist the Webpack guides page and review relevant info', ['Asset Managment', 'Output', 'Development'], false);
    const funTask = createTask(today, 'Meet up with Lou for a beer', '5/3/22', 'high', 'Meet at Jax Brewery near 9th street', '', false);
    const emptyTask = createTask(home);

    // Sort the taskList so that it is ordered by date
    const dateOrderTaskList = () => {
        let sortedTaskList = taskList.sort(function(a, b) {
            if (a.task.dueDate < b.task.dueDate) return -1;
            if (a.task.dueDate > b.task.dueDate) return 1;
            return 0;
        });
        return sortedTaskList;
    }
    
    console.log(projectList, home.project.tasks, dateOrderTaskList());


    return {
        projectList
    }
})();

export default taskMaster;
