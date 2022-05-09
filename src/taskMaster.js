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

    const updateProject = () => {

    }

    // Create new Tasks and push them to the taskList
    const createTask = (...args) => {
        if (!args[0]) {
            args[0] = 'Home'; //Default Project value if none is provided
        }
        const newTask = Task(...args);
        taskList.push(newTask); //Keep track of all new Tasks in the taskList array
        if (args[0] !== 'Home') { 
            home.addTask(newTask); //Add all new Tasks to the Home Project by default without duplicating
        }
        // match the arg[0] string with the correct Project object via the name property
        let taskProject = projectList.find(project => project.project.name === args[0]);
        taskProject.addTask(newTask);
        return newTask;
    }   
    
    const updateTask = (index, task) => {
        taskList.splice(index, 1, task);
        return taskList;
    }

    // Default Projects on page load
    const home = createProject('Home');
    const today = createProject('Today');
    const next7Days = createProject('Next 7 Days');
    
    // Default tasks on page load
    const runTask = createTask('Home', 'Run 10k practice pace for race', '10.2.22', 'low', ' so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om', false, false);
    const studyTask = createTask('Next 7 Days', 'Review Webpack.config.js basics', '5/20/2022', 'medium', 'Revist the Webpack guides page and review relevant info', ['Asset Managment', 'Output', 'Development'], false);
    const funTask = createTask('Today', 'Meet up with Lou for a beer', '5/3/22', 'high', 'Meet at Jax Brewery near 9th street', '', false);
    const emptyTask = createTask('Home', 'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitle TitleTitleTitle TitleTitleTitle');

    // Sort the taskList so that it is ordered by date
    const dateOrderTaskList = (taskList) => {
        let sortedTaskList = taskList.sort(function(a, b) {
            if (a.task.dueDate < b.task.dueDate) return -1;
            if (a.task.dueDate > b.task.dueDate) return 1;
            return 0;
        });
        return sortedTaskList;
    }
    
    dateOrderTaskList(taskList);

    return {
        projectList,
        taskList,
        updateTask,
        dateOrderTaskList
    }

})();

export default taskMaster;