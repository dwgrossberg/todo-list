"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taskMaster = _interopRequireDefault(require("./taskMaster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = function Task(project, title, dueDate, priority, details, complete) {
  var task = {
    project: project,
    title: title,
    dueDate: new Date(dueDate),
    priority: priority || "none",
    details: details || "",
    complete: complete
  };
  var type = "task";

  var changeTaskProject = function changeTaskProject(oldProject, newProject, taskToChange) {
    // Update  the taskMaster projectList when a Task changes projects
    var oldProjectIndex = _taskMaster["default"].projectList.findIndex(function (project) {
      return project.project.name === oldProject;
    });

    var taskIndex = Array.from(_taskMaster["default"].projectList[oldProjectIndex].project.tasks).indexOf(taskToChange);

    var taskToMove = _taskMaster["default"].projectList[oldProjectIndex].delTask(taskIndex)[0];

    var newProjectIndex = _taskMaster["default"].projectList.findIndex(function (project) {
      return project.project.name === newProject;
    });

    _taskMaster["default"].projectList[newProjectIndex].addTask(taskToMove);

    return task.project = newProject;
  };

  var changeProject = function changeProject(project) {
    return task.project = project;
  };

  var changeTitle = function changeTitle(title) {
    return task.title = title;
  };

  var changeDueDate = function changeDueDate(dueDate) {
    return task.dueDate = dueDate;
  };

  var changePriority = function changePriority(priority) {
    return task.priority = priority;
  };

  var changeDetails = function changeDetails(details) {
    return task.details = details;
  };

  var changeCompleteStatus = function changeCompleteStatus(complete) {
    return task.complete = complete;
  };

  return {
    task: task,
    type: type,
    changeTaskProject: changeTaskProject,
    changeProject: changeProject,
    changeTitle: changeTitle,
    changeDueDate: changeDueDate,
    changePriority: changePriority,
    changeDetails: changeDetails,
    changeCompleteStatus: changeCompleteStatus
  };
};

var _default = Task;
exports["default"] = _default;