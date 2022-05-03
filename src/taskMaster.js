import Task from "./task.js";
import Project from "./project.js";

// Control the creation and manipulation of Projects & Tasks
// Module to be called from the DOM 
const taskMaster = (() => {

    // Default projects on page load
    const home = Project('Home');
    const today = Project('Today');
    const next7Days = Project('Next 7 Days');

    // Keep track of the current Projects
    const projectList = [home.project, today.project, next7Days.project];
    
    // Default tasks on page load
    const runTask = Task('Home', 'Run 10k practice pace for race', '10.2.22', 'Low', '', false, false);
    const studyTask = Task('Next 7 Days', 'Review Webpack.config.js configuration basics', '5/20/2022', 'medium', 'Revist the Webpack guides page and review relevant info', ['Asset Managment', 'Output', 'Development'], false);
    const funTask = Task('Today', 'Meet up with Lou for a beer', '5/3/22', 'high', 'Meet at Jax Brewery near 9th street', '', false);
    const emptyTask = Task();
    
    // Keep track of all Tasks
    const taskList = [runTask.task, studyTask.task, funTask.task, emptyTask.task];

    // Add default Tasks to designated Projects
    taskList.forEach(task => home.addTask(task));
    today.addTask(funTask.task);
    next7Days.addTask(studyTask.task);

    // Modify the taskList to be ordered by date
    const dateOrderTaskList = (taskList) => {
        taskList.sort(function(a, b) {
            if (a.dueDate < b.dueDate) return -1;
            if (a.dueDate > b.dueDate) return 1;
            return 0;
        });
        return {
            taskList
        }
    }
    
    
    
    
    

    console.log(projectList, home.project.tasks, dateOrderTaskList(taskList));


    return {
        projectList
    }
})();

export default taskMaster;
