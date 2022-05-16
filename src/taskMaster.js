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

    const removeProject = (index) => {
        projectList.splice(index, 1);
        return projectList;
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
    
    const removeTask = (index) => {
        taskList.splice(index, 1);
        return taskList;
    }

    // Default Projects on page load
    const home = createProject('Home');
    const baby = createProject('Baby');
    const study = createProject('Study');
    const workout = createProject('Workout');

    // Default dates
    const date = new Date();
    const tomorrow = date.setDate(date.getDate() + 1);
    const inThreeDays = date.setDate(date.getDate() + 3);
    const inTenDays = date.setDate(date.getDate() + 10);
    const in30Days = date.setDate(date.getDate() + 30);
    const in60Days = date.setDate(date.getDate() + 10);
    
    // Default tasks on page load
    const workoutTask = createTask('Workout', 'Run 10k practice pace for race', in30Days, 'low', ' so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om', false);
    const studyTask = createTask('Study', 'Review Webpack.config.js basics', inTenDays, 'med', 'Revist the Webpack guides page and review relevant info', false);
    const babyTask = createTask('Baby', 'Prep Baby\'s favorite chicken dumplings', inThreeDays, 'med', 'Get the recipe from Uncle M who made it last New Year\'s', false);
    const funTask = createTask('Home', 'Meet up with Lou for a beer', tomorrow, 'high', 'Meet at Jax Brewery near 9th street', false);
    const emptyTask = createTask('Home', 'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitle TitleTitleTitle TitleTitleTitle', in60Days);

    // Sort the taskList so that it is ordered by date, with completed Tasks staying at the end of the array
    const dateOrderTaskList = (taskList) => {
        let sortedTaskList = taskList.sort(function(a, b) {
            if (a.task.dueDate < b.task.dueDate) return -1;
            if (a.task.dueDate > b.task.dueDate) return 1;
            return 0;
        });
        // Collect indexes of completed Tasks
        let completedTaskIndexes = [];
        sortedTaskList.forEach(task => {
            if (task.task.complete === true) {
                completedTaskIndexes.push(sortedTaskList.indexOf(task));
            }
        });
        // Remove completed Tasks in reverse order to preserve index order && save them
        let completedTasks = [];
        for (let i = completedTaskIndexes.length - 1; i >= 0; i--) {
            completedTasks.push(sortedTaskList.splice(completedTaskIndexes[i], 1)[0]);
        }
        // Reverse order to preserve date functionality with completion status
        completedTasks.reverse();
        // Push them back to the taskList
        completedTasks.forEach(task => sortedTaskList.push(task)[0]);
        return sortedTaskList;
    }
    
    dateOrderTaskList(taskList);

    return {
        projectList,
        createProject,
        removeProject,
        taskList,
        createTask,
        removeTask,
        dateOrderTaskList
    }

})();

export default taskMaster;