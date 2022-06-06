"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _task = _interopRequireDefault(require("./task.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storage = function () {
  // If no localStorage, set an empty array with the name of userTasks
  if (localStorage.length === 0) {
    localStorage.setItem("userTasks", "[]");
    localStorage.setItem("userProjects", "[]");
  }

  var getLocalTasks = function getLocalTasks() {
    var userList = JSON.parse(localStorage.getItem("userTasks", "[]"));
    var TaskObj = (0, _task["default"])(); // Remove task property in order to not overwrite

    delete TaskObj.task; // Map other Task Methods to new JSON objects

    var userTasks = userList.map(function (task) {
      return _objectSpread(_objectSpread({}, task), TaskObj);
    });
    return userTasks;
  };

  var saveLocalTask = function saveLocalTask(item) {
    var userTasks = getLocalTasks();
    userTasks.push(item);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var removeLocalTask = function removeLocalTask(item) {
    var userTasks = JSON.parse(localStorage.getItem("userTasks", "[]"));
    var index = userTasks.findIndex(function (task) {
      return task.task.title === item.task.title && task.task.details === item.task.details && task.task.project === item.task.project;
    });
    userTasks.splice(index, 1);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var updateLocalTaskProject = function updateLocalTaskProject(projectName, item) {
    var userTasks = getLocalTasks();
    var index = userTasks.findIndex(function (task) {
      return task.task.title === item.task.title && task.task.details === item.task.details;
    });
    userTasks[index].task.project = userTasks[index].changeProject(projectName);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var updateLocalTaskTitle = function updateLocalTaskTitle(item) {
    var userTasks = getLocalTasks();
    var index = userTasks.findIndex(function (task) {
      return task.task.details === item.task.details && task.task.priority === item.task.priority;
    });
    userTasks[index].task.title = userTasks[index].changeTitle(item.task.title);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var updateLocalTaskDueDate = function updateLocalTaskDueDate(item) {
    var userTasks = getLocalTasks();
    var index = userTasks.findIndex(function (task) {
      return task.task.title === item.task.title && task.task.details === item.task.details;
    });
    userTasks[index].task.dueDate = userTasks[index].changeDueDate(item.task.dueDate);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var updateLocalTaskPriority = function updateLocalTaskPriority(item) {
    var userTasks = getLocalTasks();
    var index = userTasks.findIndex(function (task) {
      return task.task.title === item.task.title && task.task.details === item.task.details;
    });
    userTasks[index].task.priority = userTasks[index].changePriority(item.task.priority);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var updateLocalTaskDetails = function updateLocalTaskDetails(item) {
    var userTasks = getLocalTasks();
    var index = userTasks.findIndex(function (task) {
      return task.task.title === item.task.title && task.task.priority === item.task.priority;
    });
    userTasks[index].task.details = userTasks[index].changeDetails(item.task.details);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var updateLocalTaskCompleteStatus = function updateLocalTaskCompleteStatus(item, status) {
    var userTasks = getLocalTasks();
    var index = userTasks.findIndex(function (task) {
      return task.task.title === item.task.title && task.task.details === item.task.details;
    });
    userTasks[index].task.complete = userTasks[index].changeCompleteStatus(status);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  var getLocalProjects = function getLocalProjects() {
    var userList = JSON.parse(localStorage.getItem("userProjects", "[]"));
    return userList;
  };

  var saveLocalProject = function saveLocalProject(item) {
    var userProjects = getLocalProjects();
    userProjects.push(item);
    console.log(userProjects);
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
  };

  var removeLocalProject = function removeLocalProject(item) {
    var userProjects = getLocalProjects();
    var index = userProjects.findIndex(function (project) {
      return project.project.name === item.project.name;
    });
    userProjects.splice(index, 1);
    console.log(userProjects);
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
  };

  var updateLocalProjectName = function updateLocalProjectName(oldName, newName) {
    var userProjects = JSON.parse(localStorage.getItem("userProjects", "[]"));
    userProjects.map(function (project) {
      project.changeLocalName = function (name) {
        project.project.name = name;
      };
    });
    var index = userProjects.findIndex(function (project) {
      return project.project.name === oldName;
    });

    if (userProjects[index]) {
      userProjects[index].changeLocalName(newName);
      localStorage.setItem("userProjects", JSON.stringify(userProjects));
    } // Update localStorage Tasks as well


    var userTasks = getLocalTasks();
    userTasks.forEach(function (task) {
      if (task.task.project === oldName) {
        task.task.project = task.changeProject(newName);
        localStorage.setItem("userTasks", JSON.stringify(userTasks));
      }
    });
  };

  return {
    getLocalTasks: getLocalTasks,
    getLocalProjects: getLocalProjects,
    saveLocalTask: saveLocalTask,
    removeLocalTask: removeLocalTask,
    updateLocalTaskProject: updateLocalTaskProject,
    updateLocalTaskTitle: updateLocalTaskTitle,
    updateLocalTaskDueDate: updateLocalTaskDueDate,
    updateLocalTaskPriority: updateLocalTaskPriority,
    updateLocalTaskDetails: updateLocalTaskDetails,
    updateLocalTaskCompleteStatus: updateLocalTaskCompleteStatus,
    saveLocalProject: saveLocalProject,
    removeLocalProject: removeLocalProject,
    updateLocalProjectName: updateLocalProjectName
  };
}();

var _default = storage;
exports["default"] = _default;