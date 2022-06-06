"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taskMaster = _interopRequireDefault(require("./taskMaster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = function Project(name) {
  var project = {
    name: name || "",
    origName: name,
    tasks: []
  };
  var type = "project";

  var changeName = function changeName(oldName, newName) {
    project.name = newName;
    updateTaskProjectNames(oldName, newName);
  };

  var updateTaskProjectNames = function updateTaskProjectNames(oldName, newName) {
    _taskMaster["default"].taskList.forEach(function (task) {
      if (task.task.project === oldName) {
        task.task.project = newName;
      }
    });
  };

  var changeLocalName = function changeLocalName(name) {
    project.name = name;
  };

  var addTask = function addTask(task) {
    project.tasks.push(task);
    return task;
  };

  var delTask = function delTask(title) {
    var oldTask = project.tasks.splice(project.tasks.findIndex(function (task) {
      return task.title === title;
    }), 1);
    return oldTask;
  };

  return {
    project: project,
    type: type,
    changeName: changeName,
    changeLocalName: changeLocalName,
    addTask: addTask,
    delTask: delTask
  };
};

var _default = Project;
exports["default"] = _default;