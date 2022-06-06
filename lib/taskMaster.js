"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _task = _interopRequireDefault(require("./task.js"));

var _project = _interopRequireDefault(require("./project.js"));

var _storage = _interopRequireDefault(require("./storage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Control the creation and manipulation of Projects & Tasks
// Module to be called from the DOM
var taskMaster = function () {
  // Keep track of the current Projects && Tasks
  var projectList = [];
  var taskList = []; // Create new Projects and push them to the projectList

  var createProject = function createProject(project) {
    var newProject = (0, _project["default"])(project);
    projectList.push(newProject);
    return newProject;
  };

  var removeProject = function removeProject(index) {
    projectList.splice(index, 1);
    return projectList;
  }; // Create new Tasks and push them to the taskList


  var createTask = function createTask() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!args[0]) {
      args[0] = "Home"; //Default Project value if none is provided
    }

    var newTask = _task["default"].apply(void 0, args);

    taskList.push(newTask); //Keep track of all new Tasks in the taskList array

    if (args[0] !== "Home") {
      homeProject.addTask(newTask); //Add all new Tasks to the Home Project by default without duplicating
    } // Match the arg[0] string with the correct Project object via the name property


    var taskProject = projectList.find(function (project) {
      return project.project.name === args[0];
    }); // console.log(projectList, taskProject);

    console.log(newTask);
    taskProject.addTask(newTask);
    return newTask;
  };

  var removeTask = function removeTask(index) {
    taskList.splice(index, 1);
    return taskList;
  }; // Default Projects on page load


  var homeProject = (0, _project["default"])("Home");
  var babyProject = (0, _project["default"])("Baby");
  var studyProject = (0, _project["default"])("Study");
  var workoutProject = (0, _project["default"])("Workout"); // If localStorage is empty, save a copy of the default Projects

  var storeDefaultProjects = function storeDefaultProjects() {
    if (_storage["default"].getLocalProjects().length === 0) {
      _storage["default"].saveLocalProject(homeProject);

      _storage["default"].saveLocalProject(babyProject);

      _storage["default"].saveLocalProject(studyProject);

      _storage["default"].saveLocalProject(workoutProject);
    }
  };

  storeDefaultProjects(); // Default dates

  var date = new Date();
  var tomorrow = date.setDate(date.getDate() + 1);
  var inThreeDays = date.setDate(date.getDate() + 3);
  var inTenDays = date.setDate(date.getDate() + 10);
  var in30Days = date.setDate(date.getDate() + 30); // Default tasks on page load

  var workoutTask = (0, _task["default"])("Workout", "Run 10k practice pace for race", in30Days, "low", "so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om", false);
  var studyTask = (0, _task["default"])("Study", "Review Webpack.config.js basics", inTenDays, "med", "Revist the Webpack guides page and review relevant info", false);
  var babyTask = (0, _task["default"])("Baby", "Prep Baby's favorite chicken dumplings", inThreeDays, "med", "Get the recipe from Uncle M who made it last New Year's", false);
  var homeTask = (0, _task["default"])("Home", "Meet up with Lou for a beer", tomorrow, "high", "Meet at Jax Brewery near 9th street", false); // If localStorage is empty, save a copy of the default Tasks

  var storeDefaultTasks = function storeDefaultTasks() {
    if (_storage["default"].getLocalTasks().length === 0) {
      if (_storage["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Home";
      }).length > 0) {
        _storage["default"].saveLocalTask(homeTask);
      }

      if (_storage["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Workout";
      }).length > 0) {
        _storage["default"].saveLocalTask(workoutTask);
      }

      if (_storage["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Baby";
      }).length > 0) {
        _storage["default"].saveLocalTask(babyTask);
      }

      if (_storage["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Baby";
      }).length > 0) {
        _storage["default"].saveLocalTask(studyTask);
      }
    }
  };

  storeDefaultTasks(); // Sort the taskList so that it is ordered by date, with completed Tasks staying at the end of the array

  var dateOrderTaskList = function dateOrderTaskList() {
    var sortedTaskList = taskList.sort(function (a, b) {
      if (a.task.dueDate < b.task.dueDate) return -1;
      if (a.task.dueDate > b.task.dueDate) return 1;
      return 0;
    }); // Collect indexes of completed Tasks

    var completedTaskIndexes = [];
    sortedTaskList.forEach(function (task) {
      if (task.task.complete === true) {
        completedTaskIndexes.push(sortedTaskList.indexOf(task));
      }
    }); // Remove completed Tasks in reverse order to preserve index order && save them

    var completedTasks = [];

    for (var i = completedTaskIndexes.length - 1; i >= 0; i--) {
      completedTasks.push(sortedTaskList.splice(completedTaskIndexes[i], 1)[0]);
    } // Reverse order to preserve date functionality with completion status


    completedTasks.reverse(); // Push them back to the taskList

    completedTasks.forEach(function (task) {
      return sortedTaskList.push(task)[0];
    });
    return sortedTaskList;
  };

  dateOrderTaskList(taskList);
  return {
    projectList: projectList,
    createProject: createProject,
    removeProject: removeProject,
    taskList: taskList,
    createTask: createTask,
    removeTask: removeTask,
    dateOrderTaskList: dateOrderTaskList
  };
}();

var _default = taskMaster;
exports["default"] = _default;