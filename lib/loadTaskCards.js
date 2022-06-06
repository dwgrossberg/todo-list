"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taskMaster = _interopRequireDefault(require("./taskMaster.js"));

var _dateFns = require("date-fns");

var _storage = _interopRequireDefault(require("./storage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var loadTaskCards = function () {
  // Check if a date is today
  var isToday = function isToday(date) {
    if (date) {
      var today = new Date();
      return date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear();
    }
  }; // Check if a date is within the next 7 days


  var isNextWeek = function isNextWeek(date) {
    if (date) {
      var today = new Date();
      var nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

      if (nextWeek < date) {
        return false;
      } else {
        return true;
      }
    }
  }; // Set sidebar Task & Project counters


  var setSidebarCounters = function setSidebarCounters() {
    var projectCounter = document.getElementById("projects-counter");
    projectCounter.innerText = _taskMaster["default"].projectList.length - 1; //Subtract one to account for Home as default Project

    _taskMaster["default"].projectList.forEach(function (project) {
      if (project.project.name === "Home") {
        var homeCounter = document.getElementById("project-counter-Home");
        homeCounter.innerText = _taskMaster["default"].taskList.length;
      } else {
        var counterElem = document.getElementById("project-counter-".concat(project.project.name));
        counterElem.innerText = _taskMaster["default"].projectList[_taskMaster["default"].projectList.indexOf(project)].project.tasks.length;
      }
    });

    var todayCounter = document.getElementById("today-counter");
    var next7DaysCounter = document.getElementById("next-seven-days-counter");
    var todayList = [];
    var weekList = [];

    _taskMaster["default"].taskList.forEach(function (task) {
      if (isToday(task.task.dueDate)) {
        todayList.push("today");
      }

      if (isNextWeek(task.task.dueDate)) {
        weekList.push("week");
      }

      todayCounter.innerText = todayList.length;
      next7DaysCounter.innerText = weekList.length;
    });
  };

  var updateTaskTitle = function updateTaskTitle() {
    // Setup mutation Observer to watch for changes to Task titles and update the corresponding Task objects
    var taskTitles = Array.from(document.querySelectorAll('[id^="task-title-"]'));
    var config = {
      characterData: true,
      childList: true,
      subtree: true
    };
    var taskIndex;

    var callback = function callback(mutationsList) {
      var _iterator = _createForOfIteratorHelper(mutationsList),
          _step;

      try {
        var _loop = function _loop() {
          var mutation = _step.value;
          // Find the Task card details to match with the correct Task obj
          var taskDetails = mutation.target.parentNode.parentNode.parentNode.parentNode.childNodes[2].innerText;
          taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
            return task.task.details === taskDetails;
          });

          _taskMaster["default"].taskList[taskIndex].changeTitle(mutation.target.textContent);

          console.log(_taskMaster["default"].taskList[taskIndex].task); // Save changes to localStorage

          _storage["default"].updateLocalTaskTitle(_taskMaster["default"].taskList[taskIndex]);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var observer = new MutationObserver(callback);
    taskTitles.forEach(function (title) {
      return observer.observe(title, config);
    });
  };

  var updateTaskDetails = function updateTaskDetails() {
    // Setup mutation Observer to watch for changes to Task titles and update the corresponding Task objects
    var taskDetails = Array.from(document.querySelectorAll('[id^="task-details-"]'));
    var config = {
      characterData: true,
      childList: true,
      subtree: true
    };

    var callback = function callback(mutationsList) {
      var _iterator2 = _createForOfIteratorHelper(mutationsList),
          _step2;

      try {
        var _loop2 = function _loop2() {
          var mutation = _step2.value;
          // Find the Task card title to match with the correct Task obj
          var taskTitle = mutation.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].innerText;

          var taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
            return task.task.title === taskTitle;
          });

          _taskMaster["default"].taskList[taskIndex].changeDetails(mutation.target.textContent);

          console.log(_taskMaster["default"].taskList[taskIndex].task); // Save changes to localStorage

          _storage["default"].updateLocalTaskDetails(_taskMaster["default"].taskList[taskIndex]);
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };

    var observer = new MutationObserver(callback);
    taskDetails.forEach(function (detail) {
      return observer.observe(detail, config);
    });
  };

  var taskContent = document.getElementById("task-content");

  var run = function run(taskList) {
    // Setup Task cards for display to the DOM
    taskList.forEach(function (task) {
      var taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      taskDiv.classList.add(task.task.priority); //Add task priority for css manipulation

      taskDiv.setAttribute("id", "task-card-".concat(taskList.indexOf(task))); //Add task id for later deletion, etc.
      // Create the html structure for each Task card
      // Priority color label

      var taskCardLeft = document.createElement("div");
      taskCardLeft.classList.add("task-card-left");
      var priorityLabel = document.createElement("span");
      priorityLabel.classList.add("priority-label");
      taskCardLeft.appendChild(priorityLabel); // Completion checkbox

      var checkboxTitle = document.createElement("div");
      checkboxTitle.classList.add("checkbox-title");
      var container = document.createElement("label");
      container.classList.add("container");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "task-checkbox-".concat(taskList.indexOf(task));
      checkbox.name = "task-checkbox-name-".concat(taskList.indexOf(task)); // Add complete class to existing completed Tasks

      if (task.task.complete === true) {
        taskDiv.classList.add("complete");
        checkbox.checked = true;
      } // Add 'complete' class on clicking Task checkbox


      checkbox.addEventListener("change", function (e) {
        if (e.target.checked) {
          taskDiv.classList.add("complete");
        } else {
          taskDiv.classList.remove("complete");
        }
      });
      container.appendChild(checkbox);
      var checkmark = document.createElement("span");
      checkmark.classList.add("checkmark");
      container.appendChild(checkmark);
      checkboxTitle.appendChild(container); // Task project

      var projectTitle = document.createElement("div");
      var projectLabel = document.createElement("label");
      projectLabel.setAttribute("for", "projects");
      projectLabel.setAttribute("id", "task-project-".concat(taskList.indexOf(task)));
      projectLabel.classList.add("task-project");
      projectLabel.innerText = "Project:";
      var projectSelect = document.createElement("select");
      projectSelect.setAttribute("name", "projects");
      projectSelect.setAttribute("id", "projects-select-".concat(taskList.indexOf(task))); // Loop through projectList to create select list values

      _taskMaster["default"].projectList.forEach(function (project) {
        var projectOption = document.createElement("option");
        projectOption.value = "".concat(project.project.name);
        projectOption.innerText = "".concat(project.project.name);
        projectSelect.appendChild(projectOption);
      }); // Select the correct option for each Task


      projectSelect.value = task.task.project;
      projectLabel.appendChild(projectSelect);
      projectTitle.appendChild(projectLabel); // Task title

      var taskTitle = document.createElement("p");
      taskTitle.classList.add("task-title");
      taskTitle.setAttribute("id", "task-title-".concat(taskList.indexOf(task)));
      taskTitle.setAttribute("contenteditable", "true");
      taskTitle.innerText = "".concat(task.task.title);
      projectTitle.appendChild(taskTitle);
      checkboxTitle.appendChild(projectTitle);
      taskCardLeft.appendChild(checkboxTitle); // Task details

      var taskDetails = document.createElement("p");
      taskDetails.classList.add("task-details");
      taskDetails.setAttribute("id", "task-details-".concat(taskList.indexOf(task)));
      taskDetails.innerText = "".concat(task.task.details);
      taskCardLeft.appendChild(taskDetails);
      taskDiv.appendChild(taskCardLeft); // Filter out undefined dates before formatting

      var dueDateValue;

      if (task.task.dueDate !== undefined) {
        dueDateValue = (0, _dateFns.format)(new Date(task.task.dueDate), "yyyy-MM-dd");
      } else {
        dueDateValue = "No Due Date";
      } // Due Date
      // Using input type="date" in order to create an interactive
      // date picker that corresponds to each Task object


      var taskCardRight = document.createElement("div");
      taskCardRight.classList.add("task-card-right");
      var dueDateDOM = document.createElement("input");
      dueDateDOM.classList.add("due-date");
      dueDateDOM.setAttribute("id", "task-dueDate-".concat(taskList.indexOf(task)));
      dueDateDOM.type = "date";
      dueDateDOM.value = "".concat(dueDateValue);
      taskCardRight.appendChild(dueDateDOM); // Expand button

      var expand = document.createElement("div");
      expand.classList.add("expand");
      expand.setAttribute("id", "task-expand-".concat(taskList.indexOf(task)));
      var expandText = document.createTextNode("<<");
      expand.appendChild(expandText);
      taskCardRight.appendChild(expand); // Delete button

      var trash = document.createElement("div");
      trash.setAttribute("id", "task-delete-".concat(taskList.indexOf(task)));
      taskCardRight.appendChild(trash); //Priority radio buttons

      var priority = document.createElement("div");
      priority.classList.add("task-priority");
      var header = document.createTextNode("Priority level");
      priority.appendChild(header);
      var radioButtonsContainer = document.createElement("div");
      radioButtonsContainer.classList.add("radio-buttons-container"); // 'none' radio button

      var radioLabelOne = document.createElement("label");
      radioLabelOne.classList.add("radio-container");
      var radioPOne = document.createTextNode("none");
      radioLabelOne.appendChild(radioPOne);
      var radioInputOne = document.createElement("input");
      radioInputOne.type = "radio";
      radioInputOne.value = "none";
      radioInputOne.name = "task-radio-".concat(taskList.indexOf(task));

      if (task.task.priority === "none") {
        radioInputOne.checked = true;
      }

      radioLabelOne.appendChild(radioInputOne);
      var radioSpanOne = document.createElement("span");
      radioSpanOne.classList.add("radio-checkmark");
      radioLabelOne.appendChild(radioSpanOne);
      radioButtonsContainer.appendChild(radioLabelOne); // 'low' radio button

      var radioLabelTwo = document.createElement("label");
      radioLabelTwo.classList.add("radio-container");
      var radioPTwo = document.createTextNode("low");
      radioLabelTwo.appendChild(radioPTwo);
      var radioInputTwo = document.createElement("input");
      radioInputTwo.type = "radio";
      radioInputTwo.value = "low";
      radioInputTwo.name = "task-radio-".concat(taskList.indexOf(task));

      if (task.task.priority === "low") {
        radioInputTwo.checked = true;
      }

      radioLabelTwo.appendChild(radioInputTwo);
      var radioSpanTwo = document.createElement("span");
      radioSpanTwo.classList.add("radio-checkmark");
      radioLabelTwo.appendChild(radioSpanTwo);
      radioButtonsContainer.appendChild(radioLabelTwo); // 'med' radio button

      var radioLabelThree = document.createElement("label");
      radioLabelThree.classList.add("radio-container");
      var radioPThree = document.createTextNode("med");
      radioLabelThree.appendChild(radioPThree);
      var radioInputThree = document.createElement("input");
      radioInputThree.type = "radio";
      radioInputThree.value = "med";
      radioInputThree.name = "task-radio-".concat(taskList.indexOf(task));

      if (task.task.priority === "med") {
        radioInputThree.checked = true;
      }

      radioLabelThree.appendChild(radioInputThree);
      var radioSpanThree = document.createElement("span");
      radioSpanThree.classList.add("radio-checkmark");
      radioLabelThree.appendChild(radioSpanThree);
      radioButtonsContainer.appendChild(radioLabelThree); // 'high' radio button

      var radioLabelFour = document.createElement("label");
      radioLabelFour.classList.add("radio-container");
      var radioPFour = document.createTextNode("high");
      radioLabelFour.appendChild(radioPFour);
      var radioInputFour = document.createElement("input");
      radioInputFour.type = "radio";
      radioInputFour.value = "high";
      radioInputFour.name = "task-radio-".concat(taskList.indexOf(task));

      if (task.task.priority === "high") {
        radioInputFour.checked = true;
      }

      radioInputFour.setAttribute("id", "priority-high-".concat(taskList.indexOf(task)));
      radioLabelFour.appendChild(radioInputFour);
      var radioSpanFour = document.createElement("span");
      radioSpanFour.classList.add("radio-checkmark");
      radioLabelFour.appendChild(radioSpanFour);
      radioButtonsContainer.appendChild(radioLabelFour); // Bringing the div's together

      priority.appendChild(radioButtonsContainer);
      taskCardRight.appendChild(priority);
      taskDiv.appendChild(taskCardRight); // Add Task card to DOM

      taskContent.appendChild(taskDiv); // Call TaskTitle function here in order to reattach mutation
      // observers to DOM objects each time loadTaskCards runs

      updateTaskTitle();
      updateTaskDetails();
      setSidebarCounters();
    });
  };

  return {
    setSidebarCounters: setSidebarCounters,
    isToday: isToday,
    isNextWeek: isNextWeek,
    run: run
  };
}();

var _default = loadTaskCards;
exports["default"] = _default;