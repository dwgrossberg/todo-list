/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/favicon.ico */ "./src/assets/favicon.ico");


var loadHome = function () {
  // Set favicon icon
  var faviconDOM = document.querySelector('link[rel~="icon"]');
  faviconDOM.href = _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_0__; // Basic html setup for toDo notes

  var content = document.getElementById("content");
  content.innerHTML = "\n    <div class=\"header\">\n        <div class=\"header-left\">\n            <div class=\"icon\"></div>\n            <h1>toDo lists</h1>\n        </div>\n        <div class=\"header-right\">\n            <div id=\"undo\"></div>\n            <button id=\"search-button\"></button>\n            <input type=\"search\" id=\"search\" placeholder=\"search for a task by title\">\n        </div>\n    </div>\n    \n    <div class=\"sidebar\">\n        <div id=\"Project-Home\">\n            <div id=\"project-counter-Home\"></div>\n            <div class=\"home-icon\"></div>\n            <div class=\"home-text\"><p>Home</p></div>\n        </div>\n        <div id=\"today\">\n            <div id=\"today-counter\"></div>\n            <div class=\"today-icon\"></div>\n            <div class=\"today-text\"><p>Today</p></div>\n        </div>\n        <div id=\"next-seven-days\">\n            <div id=\"next-seven-days-counter\"></div>\n            <div class=\"next-seven-days-icon\"></div>\n            <div class=\"next-seven-days-text\"><p>Next 7 Days</p></div>\n        </div>\n        <div id=\"projects\">\n            <div id=\"projects-counter\"></div>\n            <div class=\"projects-icon\"></div>\n            <div class=\"projects-text\"><p>Projects</p></div>\n            <div class=\"add-project\"></div>\n        </div>\n        <div id=\"project-sidebar-list\"></div>\n        <span id=\"add-task\">+</span>\n    </div>\n\n    <div id=\"task-content\"></div>\n\n    <div class=\"footer\">\n        <div class=\"made-by\">\n            <a href=\"https://www.theodinproject.com/\" target=\"_blank\">\n                <p>The Odin Project</p>\n            </a>\n            <a href=\"https://github.com/dwgrossberg\">\n                <img id=\"github-icon\" src=\"\">\n            </a>\n            <p>Made by Dan Grossberg</p>\n        </div>\n    </div>";
  return {};
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/loadTaskCards.js":
/*!******************************!*\
  !*** ./src/loadTaskCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskMaster.js */ "./src/taskMaster.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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
    projectCounter.innerText = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.length - 1; //Subtract one to account for Home as default Project

    _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.forEach(function (project) {
      if (project.project.name === "Home") {
        var homeCounter = document.getElementById("project-counter-Home");
        homeCounter.innerText = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.length;
      } else {
        var counterElem = document.getElementById("project-counter-".concat(project.project.name));
        counterElem.innerText = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.indexOf(project)].project.tasks.length;
      }
    });
    var todayCounter = document.getElementById("today-counter");
    var next7DaysCounter = document.getElementById("next-seven-days-counter");
    var todayList = [];
    var weekList = [];
    _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.forEach(function (task) {
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
          var taskDetails = mutation.target.parentNode.parentNode.parentNode.parentNode.childNodes[2].innerText; //Protect against removal of all content by user

          taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
            return task.task.details === taskDetails;
          });
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changeTitle(mutation.target.textContent); // Save changes to localStorage

          _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateLocalTaskTitle(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]);
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
          var taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
            return task.task.title === taskTitle;
          });
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changeDetails(mutation.target.textContent); // Save changes to localStorage

          _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateLocalTaskDetails(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]);
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

      _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.forEach(function (project) {
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
        dueDateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(task.task.dueDate), "yyyy-MM-dd");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTaskCards);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskMaster.js */ "./src/taskMaster.js");


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
    _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.forEach(function (task) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
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
    var TaskObj = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Remove task property in order to not overwrite

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskMaster.js */ "./src/taskMaster.js");


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
    var oldProjectIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.findIndex(function (project) {
      return project.project.name === oldProject;
    });
    var taskIndex = Array.from(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[oldProjectIndex].project.tasks).indexOf(taskToChange);
    var taskToMove = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[oldProjectIndex].delTask(taskIndex)[0];
    var newProjectIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.findIndex(function (project) {
      return project.project.name === newProject;
    });
    _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[newProjectIndex].addTask(taskToMove);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/taskMaster.js":
/*!***************************!*\
  !*** ./src/taskMaster.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


 // Control the creation and manipulation of Projects & Tasks
// Module to be called from the DOM

var taskMaster = function () {
  // Keep track of the current Projects && Tasks
  var projectList = [];
  var taskList = []; // Create new Projects and push them to the projectList

  var createProject = function createProject(project) {
    var newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
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

    var newTask = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, args);
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


  var homeProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Home");
  var babyProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Baby");
  var studyProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Study");
  var workoutProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Workout"); // If localStorage is empty, save a copy of the default Projects

  var storeDefaultProjects = function storeDefaultProjects() {
    if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects().length === 0) {
      _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalProject(homeProject);
      _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalProject(babyProject);
      _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalProject(studyProject);
      _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalProject(workoutProject);
    }
  };

  storeDefaultProjects(); // Default dates

  var date = new Date();
  var tomorrow = date.setDate(date.getDate() + 1);
  var inThreeDays = date.setDate(date.getDate() + 3);
  var inTenDays = date.setDate(date.getDate() + 10);
  var in30Days = date.setDate(date.getDate() + 30); // Default tasks on page load

  var workoutTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Workout", "Run 10k practice pace for race", in30Days, "low", "so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om so looonngngngngnng i am so long it is amazing how long i am omg omg om gomgo mgomgomgom ogm ogmogm om", false);
  var studyTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Study", "Review Webpack.config.js basics", inTenDays, "med", "Revist the Webpack guides page and review relevant info", false);
  var babyTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Baby", "Prep Baby's favorite chicken dumplings", inThreeDays, "med", "Get the recipe from Uncle M who made it last New Year's", false);
  var homeTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Home", "Meet up with Lou for a beer", tomorrow, "high", "Meet at Jax Brewery near 9th street", false); // If localStorage is empty, save a copy of the default Tasks

  var storeDefaultTasks = function storeDefaultTasks() {
    if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalTasks().length === 0) {
      if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Home";
      }).length > 0) {
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalTask(homeTask);
      }

      if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Workout";
      }).length > 0) {
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalTask(workoutTask);
      }

      if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Baby";
      }).length > 0) {
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalTask(babyTask);
      }

      if (_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects().filter(function (project) {
        return project.project.name === "Baby";
      }).length > 0) {
        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalTask(studyTask);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskMaster);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskMaster.js */ "./src/taskMaster.js");
/* harmony import */ var _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTaskCards.js */ "./src/loadTaskCards.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var displayUI = function () {
  var taskContent = document.getElementById("task-content");
  var home = document.getElementById("Project-Home");
  var today = document.getElementById("today");
  var next7Days = document.getElementById("next-seven-days");
  var deletedItems = [];

  var removeDOMContent = function removeDOMContent(content) {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  };

  var tabController = function tabController(taskProject) {
    // Display to the updated project list, unless the user is already on Home / Today /Next7Days tab
    var project = document.getElementById("Project-".concat(taskProject));
    if (home.style.color === "rgb(216, 39, 117)") return;else if (today.style.color === "rgb(216, 39, 117)" && document.createEvent) {
      today.dispatchEvent(new Event("mousedown"));
    } else if (next7Days.style.color === "rgb(216, 39, 117)" && document.createEvent) {
      next7Days.dispatchEvent(new Event("mousedown"));
    } else if (document.createEvent) {
      project.dispatchEvent(new Event("mousedown"));
    }
  }; // Tasks


  var updateTaskCompleteStatus = function updateTaskCompleteStatus() {
    var taskCheckboxes = Array.from(document.querySelectorAll('[id^="task-checkbox-"]'));
    taskCheckboxes.forEach(function (checkbox) {
      return checkbox.addEventListener("change", function (e) {
        var taskTitle = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText; // Find the index of the Task object with the matching title

        var taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });
        var taskProject = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task.project;
        console.log(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task);

        if (e.target.checked) {
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changeCompleteStatus(true); // Update localStorage

          _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateLocalTaskCompleteStatus(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex], true); // Move completed Task to end of the list

          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.push(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.splice(taskIndex, 1)[0]);
          removeDOMContent(taskContent);
          _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
          runDOMTaskFunctions();
        } else {
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changeCompleteStatus(false); // Update localStorage

          _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateLocalTaskCompleteStatus(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex], false); // Rerun dateOrderTaskList to reintegrate uncompleted Task into the normal flow

          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].dateOrderTaskList();
          removeDOMContent(taskContent);
          _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
          runDOMTaskFunctions();
        }

        tabController(taskProject);
      });
    });
  };

  var updateTaskProject = function updateTaskProject() {
    var taskProjects = Array.from(document.querySelectorAll('[id^="projects-select-"]'));
    taskProjects.forEach(function (project) {
      return project.addEventListener("change", function (e) {
        // Set select option to match Task object project
        var selectedOption = e.target[e.target.selectedIndex].innerText;
        var taskTitle = e.target.parentNode.parentNode.childNodes[1].innerText; // Find the index of the Task object with the matching title

        var taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });
        var task = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex];
        var taskProject = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task.project;
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changeTaskProject(taskProject, selectedOption, task); // Update localStorage

        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateLocalTaskProject(selectedOption, task);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSidebarCounters(); // Display the updated project list

        tabController(taskProject);
      });
    });
  };

  var updateTaskDueDate = function updateTaskDueDate() {
    // Add event listener to watch for changes to dueDate
    var taskDueDates = Array.from(document.querySelectorAll('[id^="task-dueDate-"]'));
    taskDueDates.forEach(function (dueDate) {
      return dueDate.addEventListener("change", function (e) {
        var taskTitle = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText; // Find the index of the Task object with the matching title

        var taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });
        var taskProject = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task.project;

        if (e.target.value !== "") {
          var newDateFormatted = new Date(e.target.value); // Update the Task object dueDate

          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changeDueDate(newDateFormatted);
          console.log(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task); // Update localStorage

          _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateLocalTaskDueDate(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]); // Reorder the taskList according to new dates

          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].dateOrderTaskList(); // Clear the task-content DOM section

          removeDOMContent(taskContent); // Reload the newly sorted task cards

          _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList); // Re-attach event listener functions to Task DOM objects

          runDOMTaskFunctions(); // Display to the updated project list, unless the user is already on Home / Today /Next7Days tab

          tabController(taskProject);
        }
      });
    });
  };

  var updateTaskPriority = function updateTaskPriority() {
    var taskRadios = Array.from(document.querySelectorAll('[name^="task-radio-"]'));
    taskRadios.forEach(function (radio) {
      return radio.addEventListener("change", function (e) {
        var taskCard = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        var taskTitle = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText; // Find the index of the Task object with the matching title

        var taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });
        var oldPriority = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task.priority;
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].changePriority(e.target.value); // Update localStorage

        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateLocalTaskPriority(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]);
        console.log(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task); // change css priority labels

        taskCard.classList.remove("".concat(oldPriority));
        taskCard.classList.add("".concat(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task.priority));
      });
    });
  };

  var expandTask = function expandTask() {
    var taskExpanders = Array.from(document.querySelectorAll('[id^="task-expand-"]'));
    taskExpanders.forEach(function (expander) {
      return expander.addEventListener("mousedown", function (e) {
        var taskCard = e.target.parentNode.parentNode;
        var taskCardLeft = e.target.parentNode.parentNode.childNodes[0];
        var taskProject = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[0];
        var taskTitle = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
        var taskDetails = e.target.parentNode.parentNode.childNodes[0].childNodes[2];
        var taskPriority = e.target.parentNode.parentNode.childNodes[1].childNodes[3];

        if (taskCard.classList.contains("expanded")) {
          e.target.style.transform = "";
          e.target.style.color = "";
          taskCard.classList.remove("expanded");
          taskCard.style.height = "";
          taskCard.style.alignItems = "";
          taskCardLeft.style.display = "";
          taskProject.style.opacity = "";
          taskProject.style.position = "";
          taskProject.style.zIndex = "";
          taskTitle.style.marginTop = "";
          taskDetails.style.whiteSpace = "";
          taskDetails.classList.remove("editable");
          taskDetails.setAttribute("contenteditable", "false");
          taskPriority.style.display = "";
        } else {
          e.target.style.transform = "rotate(-90deg) scale(1, 2)";
          e.target.style.color = "#d82775";
          taskCard.classList.add("expanded");
          taskCard.style.height = "fit-content";
          taskCard.style.alignItems = "flex-start";
          taskCardLeft.style.display = "block";
          taskProject.style.opacity = "1";
          taskProject.style.position = "static";
          taskProject.style.zIndex = "0";
          taskTitle.style.marginTop = "5px";
          taskDetails.style.whiteSpace = "normal";
          taskDetails.classList.add("editable");
          taskDetails.setAttribute("contenteditable", "true");
          taskPriority.style.display = "flex";
        }
      });
    });
  };

  var deleteTask = function deleteTask() {
    var taskBins = Array.from(document.querySelectorAll('[id^="task-delete-"]'));
    taskBins.forEach(function (bin) {
      return bin.addEventListener("mousedown", function (e) {
        var taskTitle = e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText;
        var taskDetails = e.target.parentNode.parentNode.childNodes[0].childNodes[2].innerText; // Find the index of the Task object with the matching title

        var taskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle && task.task.details === taskDetails;
        }); // Remove Task DOM object

        e.target.parentNode.parentNode.remove(); // Save the deleted Task for later use

        deletedItems.push(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]); // Remove Task from localStorage

        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeLocalTask(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]); // Remove Tasks from appropriate Project Objects

        var projectIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.findIndex(function (project) {
          return project.project.name === _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex].task.project;
        });
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].delTask(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[taskIndex]); // Remove the Task object from the taskMasker.taskList -- unnecessary with localStorage

        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(taskIndex);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSidebarCounters();
      });
    });
  };

  var runDOMTaskFunctions = function runDOMTaskFunctions() {
    updateTaskCompleteStatus();
    updateTaskProject();
    updateTaskDueDate();
    updateTaskPriority();
    expandTask();
    deleteTask();
  };

  var addTaskDOM = document.getElementById("add-task");

  var addTask = function addTask(e) {
    var taskNumber = function taskNumber() {
      var number = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalTasks().length + 1;
      _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.forEach(function (task) {
        if (task.task.title === "newTask ".concat(number)) {
          console.log(task);
          number += 1;
        }
      });
      return number;
    };

    var projects = Array.from(e.target.parentNode.childNodes[9].childNodes);
    var projectName = "Home";
    projects.forEach(function (project) {
      var projectSpan = project.childNodes[2];

      if (projectSpan.style.color === "rgb(216, 39, 117)") {
        projectName = projectSpan.textContent;
      }
    }); // Create a 'blank' Task card for the user to fill in

    var newTask = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTask("".concat(projectName), "newTask ".concat(taskNumber()), new Date(Date.now()), "none", "taskDetails", false); // Resort and reload the new Task cards

    removeDOMContent(taskContent); // Ensure that the new Task always displays first

    var newTaskIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.indexOf(newTask);
    var taskToFront = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.splice(newTaskIndex, 1);
    _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.unshift(taskToFront[0]);
    _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
    runDOMTaskFunctions();
    tabController(projectName); // Expand the new Task card

    var taskExpander = document.querySelector('[id="task-expand-0"]');

    if (document.createEvent) {
      taskExpander.dispatchEvent(new Event("mousedown"));
    } // Save Task to localStorage


    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalTask(newTask);
  };

  addTaskDOM.addEventListener("mousedown", addTask); // Projects

  var projectsSidebar = document.getElementById("project-sidebar-list");

  var editProjectStyles = function editProjectStyles() {
    var projectEdits = Array.from(document.getElementsByClassName("edit-project"));
    projectEdits.forEach(function (edit) {
      return edit.addEventListener("mousedown", projectEditSet);
    });
  };

  var projectEditSet = function projectEditSet(e) {
    if (e.target.classList[0] === "edit-project") {
      e.target.classList.remove("edit-project");
      e.target.classList.add("set-project");
      var projectName = e.target.parentNode.childNodes[2];
      projectName.classList.add("project-editable");
      projectName.setAttribute("contentEditable", true);
    } else if (e.target.classList[0] === "set-project") {
      e.target.classList.remove("set-project");
      e.target.classList.add("edit-project");
      var _projectName = e.target.parentNode.childNodes[2];

      _projectName.classList.remove("project-editable");

      _projectName.setAttribute("contentEditable", false);
    }
  };

  var updateProjectName = function updateProjectName() {
    // Setup mutation Observer to watch for changes to Project names and update the corresponding Project objects
    var projectNames = Array.from(document.querySelectorAll('span[id^="Project-"]'));
    var config = {
      characterData: true,
      childList: true,
      subtree: true
    };

    var callback = function callback(mutationsList) {
      var _iterator = _createForOfIteratorHelper(mutationsList),
          _step;

      try {
        var _loop = function _loop() {
          var mutation = _step.value;
          // Keep track of mutated DOM element and text content
          var projectElem = mutation.target.parentNode;
          var projectCounter = mutation.target.parentNode.parentNode.childNodes[0]; // Update Project DOM element id to match new name

          projectElem.setAttribute("id", "Project-".concat(mutation.target.textContent));
          projectCounter.setAttribute("id", "project-counter-".concat(mutation.target.textContent));
          console.log(mutation.target.parentNode.parentNode.id);
          var projectIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.findIndex(function (project) {
            return "project-origName-".concat(project.project.origName) === mutation.target.parentNode.parentNode.id;
          });
          var oldProjectName = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].project.name;
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].changeName(oldProjectName, mutation.target.textContent); // Update localStorage

          _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateLocalProjectName(oldProjectName, mutation.target.textContent); // Reload the Task cards to show the updated Project

          removeDOMContent(taskContent);
          _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
          runDOMTaskFunctions();
          tabController(mutation.target.textContent);
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
    projectNames.forEach(function (title) {
      return observer.observe(title, config);
    });
  };

  var deleteProject = function deleteProject() {
    var projectBins = Array.from(document.getElementsByClassName("delete-project"));
    projectBins.forEach(function (bin) {
      return bin.addEventListener("mousedown", function (e) {
        var projectName = e.target.parentNode.childNodes[2].textContent; // Find the index of the Task object with the matching title

        var projectIndex = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.findIndex(function (project) {
          return project.project.name === projectName;
        });
        var otherProjects = Array.from(e.target.parentNode.parentNode.childNodes);
        otherProjects.splice(projectIndex - 1, 1); // Remove Task DOM object

        e.target.parentNode.remove(); // Save the deleted Project for later use

        deletedItems.push(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex]); // Remove the Project from localStorage

        _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeLocalProject(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex]); // Remove relevant Project Tasks from localStorage

        var projectTasks = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].project.tasks;
        console.log(projectTasks);
        projectTasks.forEach(function (task) {
          _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeLocalTask(task);
        }); // Remove the Task objects related to that Project from the taskList

        projectTasks.forEach(function (task) {
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.indexOf(task));
        }); // Remove the Project object from the taskMasker.projectList

        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(projectIndex); // Remove the Task DOM objects related to that Project and reload the Task cards

        removeDOMContent(taskContent);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
        runDOMTaskFunctions();
        tabController("Home");
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSidebarCounters();
      });
    });
  };

  var loadProjects = function loadProjects() {
    // Dynamically load projects to the sidebar DOM element
    _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.forEach(function (project) {
      if (project.project.name === "Home") return;else {
        var projectDiv = document.createElement("div"); // Set index use for later use

        projectDiv.setAttribute("id", "project-origName-".concat(project.project.origName));
        var counterDiv = document.createElement("div");
        counterDiv.setAttribute("id", "project-counter-".concat(project.project.name));
        projectDiv.appendChild(counterDiv);
        var iconDiv = document.createElement("div");
        iconDiv.classList.add("project-icon");
        projectDiv.appendChild(iconDiv); // Set projectName as span for styling purposes

        var projectName = document.createElement("span");
        projectName.classList.add("project-name");
        projectName.setAttribute("id", "Project-".concat(project.project.name));
        projectName.innerText = project.project.name;
        projectDiv.appendChild(projectName);
        var editDiv = document.createElement("div");
        editDiv.classList.add("edit-project");
        editDiv.setAttribute("id", "edit-".concat(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.indexOf(project)));
        projectDiv.appendChild(editDiv);
        var deleteDiv = document.createElement("div");
        deleteDiv.classList.add("delete-project");
        projectDiv.appendChild(deleteDiv);
        projectsSidebar.appendChild(projectDiv);
        updateProjectName();
      }
    }); // Attach DOM event handlers

    editProjectStyles();
    deleteProject();
  }; // loadProjects();


  var addProjectDOM = document.getElementsByClassName("add-project")[0];

  var addProject = function addProject() {
    var projectNumber = function projectNumber() {
      var number = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects().length;
      _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.forEach(function (project) {
        if (project.project.name === "Project-".concat(number) || project.project.origName === "Project-".concat(number)) {
          number += 1;
        }
      });
      return number;
    };

    var thisProjectNumber = projectNumber();
    var createProject = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject("Project-".concat(thisProjectNumber)); // Save to localStorage

    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveLocalProject(createProject);
    removeDOMContent(projectsSidebar);
    loadProjects();
    _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSidebarCounters();
    var editProject = document.getElementById("edit-".concat(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.length - 1));

    if (document.createEvent) {
      editProject.dispatchEvent(new Event("mousedown"));
    }

    displayController("newProject"); // Display the new Project

    if (document.createEvent) {
      document.getElementById("Project-Project-".concat(thisProjectNumber)).dispatchEvent(new Event("mousedown"));
    } // Add a blank Task card


    if (document.createEvent) {
      document.getElementById("add-task").dispatchEvent(new Event("mousedown"));
    }
  };

  addProjectDOM.addEventListener("mousedown", addProject);
  var undoDOM = document.getElementById("undo");

  var undo = function undo() {
    if (deletedItems.length > 0) {
      if (undoDOM.style.transform === "rotate(-360deg)") {
        undoDOM.style.transform = "";
        undoDOM.style.transition = "";
        window.getComputedStyle(undoDOM).transform;
      }

      undoDOM.style.transition = "transform 0.3s ease-in-out";
      undoDOM.style.transform = "rotate(-360deg)";
      var undoItem = deletedItems.pop();
      console.log(deletedItems, undoItem);

      if (undoItem.type === "task") {
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.push(undoItem);
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].dateOrderTaskList();
        removeDOMContent(taskContent);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
        runDOMTaskFunctions();
        tabController(undoItem.task.project); // deletedItems = [];
      } else if (undoItem.type === "project") {
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.push(undoItem);
        removeDOMContent(projectsSidebar);
        loadProjects();
        var projectTasks = undoItem.project.tasks;
        projectTasks.forEach(function (task) {
          return _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.push(task);
        });
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].dateOrderTaskList();
        removeDOMContent(taskContent);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
        runDOMTaskFunctions();
        displayController("newProject"); // Display the restored Project

        tabController("Project-".concat(undoItem.project.name));
      }
    }
  };

  undoDOM.addEventListener("mousedown", undo);
  var projects = document.querySelectorAll('[id^="Project-"]');
  var searchDOM = document.getElementById("search");

  var runSearch = function runSearch() {
    var searchTitle = searchDOM.value.toLowerCase();
    var matchingTask = _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.filter(function (task) {
      return task.task.title.toLowerCase().includes(searchTitle);
    });
    removeDOMContent(taskContent);
    var searchResults = document.createTextNode("Search results:");
    taskContent.appendChild(searchResults);

    if (matchingTask.length === 0) {
      var imgDiv = document.createElement("div");
      imgDiv.classList.add("not-found");
      taskContent.appendChild(imgDiv);
    } else {
      _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(matchingTask);
    }

    runDOMTaskFunctions();
    home.style.color = "";
    home.style.fontWeight = "";
    today.style.color = "";
    today.style.fontWeight = "";
    next7Days.style.color = "";
    next7Days.style.fontWeight = "";
    projects.forEach(function (project) {
      project.style.color = "";
      project.style.fontWeight = "";
    });
    searchDOM.value = "";
  };

  searchDOM.addEventListener("search", runSearch); // displayController handles the running of the different sidebar tabs

  var displayController = function displayController(newProject) {
    if (newProject !== "newProject") {
      // Run the Home Project on page load (includes all Tasks by default)
      home.style.color = "#d82775";
      home.style.fontWeight = "bold"; // Check for localStorage && load Projects

      var localProjectList = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalProjects(); // Load stored Projects to the projectList & DOM

      localProjectList.forEach(function (project) {
        var name = Object.values(project)[0].name;
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(name);
      });
      loadProjects(); // Check for localStorage && load Tasks

      var localTaskList = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLocalTasks();

      if (localTaskList.length > 0) {
        // Load stored Tasks to the taskList & DOM
        localTaskList.forEach(function (task) {
          var args = Object.values(Object.values(task)[0]);
          _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTask.apply(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(args));
        });
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].dateOrderTaskList(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
      } else {
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
      }

      runDOMTaskFunctions();
    } // Home


    home.addEventListener("mousedown", function () {
      today.style.color = "";
      today.style.fontWeight = "";
      next7Days.style.color = "";
      next7Days.style.fontWeight = "";
      projects.forEach(function (project) {
        project.style.color = "";
        project.style.fontWeight = "";
      });
      home.style.color = "#d82775";
      home.style.fontWeight = "bold";
      removeDOMContent(taskContent);
      _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(_taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList);
      runDOMTaskFunctions();
    }); // Today

    var todayTasks = [];
    today.addEventListener("mousedown", function () {
      todayTasks = [];
      _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.forEach(function (task) {
        if (_loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].isToday(task.task.dueDate) && !todayTasks.includes(task)) {
          todayTasks.push(task);
        }
      }); // Set sidebar styles && reload Tasks

      home.style.color = "";
      home.style.fontWeight = "";
      next7Days.style.color = "";
      next7Days.style.fontWeight = "";
      projects.forEach(function (project) {
        project.style.color = "";
        project.style.fontWeight = "";
      });
      today.style.color = "#d82775";
      today.style.fontWeight = "bold";
      removeDOMContent(taskContent);
      _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(todayTasks);
      runDOMTaskFunctions();
    }); // Next 7 Days

    var next7DaysTasks = [];
    next7Days.addEventListener("mousedown", function () {
      next7DaysTasks = [];
      _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.forEach(function (task) {
        if (_loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNextWeek(task.task.dueDate)) {
          next7DaysTasks.push(task);
        }
      }); // Set sidebar styles && reload Tasks

      home.style.color = "";
      home.style.fontWeight = "";
      today.style.color = "";
      today.style.fontWeight = "";
      projects.forEach(function (project) {
        project.style.color = "";
        project.style.fontWeight = "";
      });
      next7Days.style.color = "#d82775";
      next7Days.style.fontWeight = "bold";
      removeDOMContent(taskContent);
      _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(next7DaysTasks);
      runDOMTaskFunctions();
    }); // Projects

    var projects = document.querySelectorAll('[id^="Project-"]');
    var projectTasks = [];
    projects.forEach(function (project) {
      return project.addEventListener("mousedown", function (e) {
        if (e.target.innerText === "Home" || e.target.classList[0] === "home-icon" || e.target.id === "Project-Home") return;
        projectTasks = [];
        var projectName = /(([^-]*-)).*/.exec(project.id)[0];
        console.log(projectName);
        _taskMaster_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.forEach(function (task) {
          if (task.task.project === projectName) {
            projectTasks.push(task);
          }
        }); // Set Project styles on sidebar && reload Tasks

        if (e.isTrusted) {
          var otherProjects = Array.from(project.parentNode.parentNode.childNodes);
          otherProjects.forEach(function (project) {
            var projectTag = project.childNodes[2];
            if (projectTag.innerText === e.target.innerText) return;else {
              projectTag.style.color = "";
              projectTag.style.fontWeight = "";
            }
          });
        }

        home.style.color = "";
        home.style.fontWeight = "";
        today.style.color = "";
        today.style.fontWeight = "";
        next7Days.style.color = "";
        next7Days.style.fontWeight = "";
        project.style.color = "#d82775";
        project.style.fontWeight = "bold";
        removeDOMContent(taskContent);
        _loadTaskCards_js__WEBPACK_IMPORTED_MODULE_1__["default"].run(projectTasks);
        runDOMTaskFunctions();
      });
    });
  };

  displayController();
  return {};
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayUI);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Retrofunkscriptpersonaluse-v6XO.otf */ "./src/assets/Retrofunkscriptpersonaluse-v6XO.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Lato-Regular.ttf */ "./src/assets/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Lato-Bold.ttf */ "./src/assets/Lato-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/list.png */ "./src/assets/list.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/search.png */ "./src/assets/search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/undo.png */ "./src/assets/undo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/undopink.png */ "./src/assets/undopink.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/home.png */ "./src/assets/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/today.png */ "./src/assets/today.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/week.png */ "./src/assets/week.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/projects.png */ "./src/assets/projects.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/project.png */ "./src/assets/project.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/close.png */ "./src/assets/close.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/edit.png */ "./src/assets/edit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/set.png */ "./src/assets/set.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/add-project.png */ "./src/assets/add-project.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/trash.png */ "./src/assets/trash.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/problem-solving.png */ "./src/assets/problem-solving.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/gitHubIconWhite.png */ "./src/assets/gitHubIconWhite.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color: #5f0f40;\n  --accent-color: #d82775;\n}\n\n@font-face {\n  font-family: \"retroFunks\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: bold;\n}\n\n/* Body */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden;\n}\n\n#content {\n  display: grid;\n  grid-template: 100px 1fr 50px / minmax(250px, 25%) 1fr;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n/* Header */\n\n.header {\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  background-color: var(--main-color);\n  align-items: center;\n  padding-left: 50px;\n  position: fixed;\n  height: 100px;\n  width: 100%;\n  z-index: 10;\n}\n\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.icon {\n  height: 60px;\n  width: 60px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 100%;\n}\n\n.header h1 {\n  font-family: \"retroFunks\", cursive;\n  font-size: 32px;\n  color: ghostwhite;\n}\n\n.header-right {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding-right: 20px;\n  gap: 20px;\n}\n\ninput[type=\"search\"] {\n  padding: 3px 7px;\n  border-radius: 5px;\n  position: relative;\n  background-color: ghostwhite;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  width: 190px;\n  height: 25px;\n  border: none;\n}\n\ninput[type=\"search\"]:hover {\n  outline: 3px solid var(--accent-color);\n}\n\ninput[type=\"search\"]:focus {\n  outline: 2px solid var(--accent-color);\n}\n\nbutton {\n  position: absolute;\n  right: 23px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: 100%;\n  background-position: center;\n  width: 17px;\n  height: 17px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  background-color: ghostwhite;\n  z-index: 1;\n}\n\nbutton:hover + input[type=\"search\"] {\n  outline: 3px solid var(--accent-color);\n}\n\n#undo {\n  width: 20px;\n  height: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: 100%;\n  position: relative;\n}\n\n#undo:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  cursor: pointer;\n}\n\n#undo:hover::after {\n  position: absolute;\n  content: \"undo delete\";\n  left: -30px;\n  top: -35px;\n  width: 60px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: #e0e0e0;\n  color: var(--main-color);\n  text-align: center;\n}\n\n/* Sidebar */\n\n.sidebar {\n  grid-area: 2 / 1 / 3 / 2;\n  background-color: #e0e0e0;\n  display: flex;\n  gap: 30px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 35px;\n  padding-left: 20px;\n  padding-right: 10px;\n  font-size: 13px;\n  position: fixed;\n  min-width: 250px;\n  width: 100%;\n  max-width: 25%;\n  height: calc(100vh - 150px);\n  top: 100px;\n  border-right: 0.5px solid var(--accent-color);\n  overflow-y: auto;\n  overflow-x: auto;\n  z-index: 100;\n}\n\n#Project-Home,\n#today,\n#next-seven-days,\n#projects {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n#Project-Home:hover,\n#today:hover,\n#next-seven-days:hover,\n#project-sidebar-list div:hover {\n  cursor: pointer;\n  color: var(--accent-color);\n}\n\n#project-counter-Home,\n#today-counter,\n#next-seven-days-counter,\n[id^=\"project-counter\"],\n#projects-counter {\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  margin-right: -5px;\n}\n\n.home-icon,\n.today-icon,\n.next-seven-days-icon,\n.projects-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.home-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-size: 100%;\n}\n\n.today-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-size: 100%;\n}\n\n.next-seven-days-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-size: 100%;\n}\n\n.projects-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-size: 100%;\n}\n\n#project-sidebar-list {\n  margin-top: -15px;\n  padding-left: 30px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n#project-sidebar-list div {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-name {\n  padding: 5px;\n  max-width: 55%;\n  word-break: break-all;\n  white-space: normal;\n}\n\n.project-icon {\n  display: flex;\n  gap: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  background-size: 100%;\n  width: 15px;\n  height: 15px;\n}\n\n.delete-project {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  background-size: 50%;\n}\n\n.edit-project {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-size: 90%;\n}\n\n.set-project {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  background-size: 60%;\n}\n\n.delete-project,\n.edit-project,\n.set-project,\n.add-project {\n  background-repeat: no-repeat;\n  background-position: center;\n  align-self: center;\n  height: 13px;\n  width: 13px;\n  right: 40px;\n  border-radius: 50%;\n  background-color: grey;\n  justify-content: center;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.add-project {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n  background-size: 60%;\n  height: 17px;\n  width: 17px;\n}\n\n.delete-project:hover,\n.edit-project:hover,\n.set-project:hover,\n.add-project:hover {\n  background-color: var(--accent-color);\n  transform: scale(1.15);\n}\n\n.delete-project:hover::after {\n  content: \"delete\";\n  width: 30px;\n}\n\n.edit-project:hover::after {\n  content: \"edit\";\n  width: 20px;\n}\n\n.set-project:hover::after {\n  content: \"set\";\n  width: 15px;\n}\n\n.delete-project:hover::after,\n.edit-project:hover::after,\n.set-project:hover::after,\n.project-editable:hover::after,\n.add-project:hover::after {\n  position: absolute;\n  left: -10px;\n  top: -30px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n  transform: scale(0.8);\n}\n\n.add-project:hover::after {\n  content: \"add project\";\n  width: 50px;\n  top: -6px;\n  left: 20px;\n}\n\n.project-editable:hover::after {\n  content: \"rename\";\n  width: 35px;\n  top: -2px;\n  left: -85px;\n}\n\n.delete-project:hover::after {\n  left: -30px;\n}\n\n#add-task {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 35px;\n  color: var(--accent-color);\n  position: sticky;\n  margin-left: auto;\n  margin-top: auto;\n  bottom: 40px;\n  right: 20px;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: ghostwhite;\n  box-shadow: 0.5px 0.5px var(--accent-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding-bottom: 3px;\n  cursor: pointer;\n}\n\n#add-task:hover {\n  box-shadow: 1px 1px ghostwhite;\n  background-color: var(--accent-color);\n  color: white;\n}\n\n#add-task:hover::after {\n  position: absolute;\n  content: \"add a new task\";\n  left: -110px;\n  top: 10px;\n  width: 75px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n/* Task Content  */\n\n#task-content {\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 20px;\n  justify-content: flex-start;\n  background-color: white;\n  padding: 30px;\n  padding-top: 30px;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.task {\n  padding: 10px;\n  padding-left: 15px;\n  font-size: 11px;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 400px;\n  height: fit-content;\n  background-color: ghostwhite;\n}\n\n.task:hover {\n  background-color: #f5f5f5;\n  box-shadow: 1px 1px #e0e0e0;\n}\n\n.none .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #e0e0e0;\n}\n\n.low .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #fcab5f;\n}\n\n.med .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #e36414;\n}\n\n.high .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #9a031e;\n}\n\n.complete {\n  background-color: #e0e0e0;\n}\n\n.complete .priority-label {\n  background-color: #0f4c5c;\n}\n\n.complete .task-project {\n  color: #0f4c5c;\n  text-decoration: line-through;\n}\n\n.complete select {\n  text-decoration: line-through;\n  color: #0f4c5c;\n}\n\n.complete .task-title {\n  color: grey;\n  text-decoration: line-through;\n}\n\n.complete .task-details {\n  color: #a9a9a9;\n  text-decoration: line-through;\n}\n\n.complete .due-date {\n  color: grey;\n}\n\n.complete #expand {\n  color: #a9a9a9;\n}\n\n.task-card-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 65%;\n}\n\n.task-card-right {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n  min-width: 35%;\n}\n\n.checkbox-title {\n  display: flex;\n  align-items: center;\n  min-width: fit-content;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n  height: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  height: 15px;\n  width: 15px;\n  background-color: #e0e0e0;\n  border-radius: 3px;\n}\n\n.container:hover::after {\n  position: absolute;\n  content: \"mark complete\";\n  left: -30px;\n  top: -35px;\n  width: 70px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.container:hover input ~ .checkmark {\n  background-color: #c8c8c8;\n}\n\n.container input:checked ~ .checkmark {\n  background-color: #0f4c5c;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.container input:checked ~ .checkmark::after {\n  display: block;\n}\n\n.container .checkmark:after {\n  content: \"\";\n  left: 5px;\n  top: 2px;\n  width: 3px;\n  height: 7px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.task-project {\n  font-size: 12.5px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n.task-project select {\n  margin-left: 5px;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #e0e0e0;\n  text-align: center;\n  font-family: \"Lato\", sans-serif;\n  font-size: 11px;\n}\n\n.task-project select:hover {\n  outline: 1px solid #0f4c5c;\n}\n\n.task-project select:focus {\n  outline: 2px solid #0f4c5c;\n}\n\n.task-project:hover::after {\n  position: absolute;\n  content: \"edit task project\";\n  left: 190px;\n  top: 9px;\n  width: 80px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.task-title,\n.editable,\n.task-project {\n  padding: 5px;\n  margin-left: 5px;\n}\n\n.task-title:empty,\n.editable:empty,\n.task-project:empty {\n  padding: 5px;\n  margin-left: 5px;\n}\n\n.editable {\n  margin-top: 5px;\n}\n\n.project-editable {\n  outline: 0.5px dotted #0f4c5c;\n  border-radius: 5px;\n  position: relative;\n}\n\n.task-title:hover,\n.editable:hover,\n.project-editable:hover {\n  outline: 1px dotted #0f4c5c;\n  border-radius: 5px;\n  cursor: text;\n}\n\n.task-title:focus,\n.editable:focus,\n.project-editable:focus {\n  outline: 2px dotted #0f4c5c;\n  border-radius: 5px;\n}\n\n.task-title:hover::after {\n  position: absolute;\n  content: \"edit task title\";\n  left: 200px;\n  top: 10px;\n  width: 60px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.editable:hover::after {\n  position: absolute;\n  content: \"edit task details\";\n  left: 200px;\n  top: 30px;\n  width: 70px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.task-details {\n  min-width: 0px;\n  max-width: 400px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 9.5px;\n  color: grey;\n}\n\n.due-date {\n  font-size: 10px;\n  min-width: 80px;\n  padding: 5px;\n  border-radius: 5px;\n  justify-content: end;\n  text-align: end;\n  border: none;\n  background-color: transparent;\n  color: grey;\n}\n\n.due-date:hover {\n  outline: 1px dotted #0f4c5c;\n}\n\n.due-date:focus {\n  outline: 2px dotted #0f4c5c;\n  font-size: 10px;\n  font-family: \"Lato\", sans-serif;\n  color: grey;\n}\n\n.due-date:hover::after {\n  position: absolute;\n  content: \"edit due date\";\n  right: 145px;\n  top: -22px;\n  width: 60px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n[class^=\"expand\"] {\n  /* background-image: url('./assets/chevron.png'); */\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 13px;\n  color: grey;\n  background-size: 100%;\n  min-width: 10px;\n  min-height: 10px;\n  transform: scale(1, 2);\n}\n\n[class^=\"expand\"]:hover {\n  cursor: pointer;\n  transform: rotate(-90deg) scale(1, 2);\n  color: var(--accent-color);\n}\n\n[class^=\"expand\"]:hover::after {\n  position: absolute;\n  content: \"show details / edit\";\n  left: -20px;\n  top: -20px;\n  width: 90px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n  transform: rotate(90deg) scale(0.5, 1);\n}\n\n[id^=\"task-delete\"] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n  background-size: 100%;\n  min-width: 12px;\n  min-height: 12px;\n}\n\n[id^=\"task-delete\"]:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n}\n\n[id^=\"task-delete\"]:hover::after {\n  position: absolute;\n  content: \"delete task\";\n  left: -42px;\n  top: -30px;\n  width: 50px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n  transform: scale(0.8);\n}\n\n.task-priority {\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 7px;\n  width: 35%;\n  height: 30px;\n  border-radius: 5px;\n  position: absolute;\n  right: 5px;\n  bottom: 20%;\n  font-size: 11px;\n}\n\n.radio-container {\n  position: relative;\n  padding-left: 13px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 10px;\n  text-align: center;\n}\n\n.radio-buttons-container {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n\n.radio-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.radio-checkmark {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 11px;\n  width: 11px;\n  background-color: #e0e0e0;\n  border-radius: 50%;\n}\n\n.radio-container:hover input ~ .radio-checkmark {\n  background-color: #ccc;\n}\n\n.radio-container input:checked ~ .radio-checkmark {\n  background-color: var(--main-color);\n}\n\n.radio-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.radio-container input:checked ~ .radio-checkmark:after {\n  display: block;\n}\n\n.radio-container .radio-checkmark:after {\n  top: 3.5px;\n  left: 3.5px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: white;\n}\n\n.not-found {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n  background-size: 100%;\n  width: 100px;\n  height: 100px;\n  opacity: 0.7;\n}\n\n/* Footer */\n\n.footer {\n  grid-area: 3 / 1 / 4 / 3;\n  display: flex;\n  align-items: center;\n  background-color: #5f0f40;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n}\n\n.made-by {\n  font-family: \"Lato\", sans-serif;\n  color: ghostwhite;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 12px;\n  padding: 7px;\n  border-radius: 7px;\n  width: 100%;\n}\n\n.made-by a {\n  text-decoration: none;\n  color: ghostwhite;\n}\n\n.made-by img {\n  height: 16px;\n  transition: transform 0.3s ease-in-out;\n}\n\n#github-icon {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n  max-height: 16px;\n}\n\n.made-by img:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main-color: #5f0f40;\n  --accent-color: #d82775;\n}\n\n@font-face {\n  font-family: \"retroFunks\";\n  src: url(\"./assets/Retrofunkscriptpersonaluse-v6XO.otf\") format(\"opentype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Lato\";\n  src: url(\"./assets/Lato-Regular.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Lato\";\n  src: url(\"./assets/Lato-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: bold;\n}\n\n/* Body */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden;\n}\n\n#content {\n  display: grid;\n  grid-template: 100px 1fr 50px / minmax(250px, 25%) 1fr;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n/* Header */\n\n.header {\n  grid-area: 1 / 1 / 2 / 3;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  background-color: var(--main-color);\n  align-items: center;\n  padding-left: 50px;\n  position: fixed;\n  height: 100px;\n  width: 100%;\n  z-index: 10;\n}\n\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.icon {\n  height: 60px;\n  width: 60px;\n  background-image: url(\"./assets/list.png\");\n  background-size: 100%;\n}\n\n.header h1 {\n  font-family: \"retroFunks\", cursive;\n  font-size: 32px;\n  color: ghostwhite;\n}\n\n.header-right {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding-right: 20px;\n  gap: 20px;\n}\n\ninput[type=\"search\"] {\n  padding: 3px 7px;\n  border-radius: 5px;\n  position: relative;\n  background-color: ghostwhite;\n  font-family: \"Lato\", sans-serif;\n  font-size: 12px;\n  width: 190px;\n  height: 25px;\n  border: none;\n}\n\ninput[type=\"search\"]:hover {\n  outline: 3px solid var(--accent-color);\n}\n\ninput[type=\"search\"]:focus {\n  outline: 2px solid var(--accent-color);\n}\n\nbutton {\n  position: absolute;\n  right: 23px;\n  background-image: url(\"./assets/search.png\");\n  background-size: 100%;\n  background-position: center;\n  width: 17px;\n  height: 17px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  background-color: ghostwhite;\n  z-index: 1;\n}\n\nbutton:hover + input[type=\"search\"] {\n  outline: 3px solid var(--accent-color);\n}\n\n#undo {\n  width: 20px;\n  height: 20px;\n  background-image: url(\"./assets/undo.png\");\n  background-size: 100%;\n  position: relative;\n}\n\n#undo:hover {\n  background-image: url(\"./assets/undopink.png\");\n  cursor: pointer;\n}\n\n#undo:hover::after {\n  position: absolute;\n  content: \"undo delete\";\n  left: -30px;\n  top: -35px;\n  width: 60px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: #e0e0e0;\n  color: var(--main-color);\n  text-align: center;\n}\n\n/* Sidebar */\n\n.sidebar {\n  grid-area: 2 / 1 / 3 / 2;\n  background-color: #e0e0e0;\n  display: flex;\n  gap: 30px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 35px;\n  padding-left: 20px;\n  padding-right: 10px;\n  font-size: 13px;\n  position: fixed;\n  min-width: 250px;\n  width: 100%;\n  max-width: 25%;\n  height: calc(100vh - 150px);\n  top: 100px;\n  border-right: 0.5px solid var(--accent-color);\n  overflow-y: auto;\n  overflow-x: auto;\n  z-index: 100;\n}\n\n#Project-Home,\n#today,\n#next-seven-days,\n#projects {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n#Project-Home:hover,\n#today:hover,\n#next-seven-days:hover,\n#project-sidebar-list div:hover {\n  cursor: pointer;\n  color: var(--accent-color);\n}\n\n#project-counter-Home,\n#today-counter,\n#next-seven-days-counter,\n[id^=\"project-counter\"],\n#projects-counter {\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  margin-right: -5px;\n}\n\n.home-icon,\n.today-icon,\n.next-seven-days-icon,\n.projects-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.home-icon {\n  background-image: url(\"./assets/home.png\");\n  background-size: 100%;\n}\n\n.today-icon {\n  background-image: url(\"./assets/today.png\");\n  background-size: 100%;\n}\n\n.next-seven-days-icon {\n  background-image: url(\"./assets/week.png\");\n  background-size: 100%;\n}\n\n.projects-icon {\n  background-image: url(\"./assets/projects.png\");\n  background-size: 100%;\n}\n\n#project-sidebar-list {\n  margin-top: -15px;\n  padding-left: 30px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n#project-sidebar-list div {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-name {\n  padding: 5px;\n  max-width: 55%;\n  word-break: break-all;\n  white-space: normal;\n}\n\n.project-icon {\n  display: flex;\n  gap: 20px;\n  background-image: url(\"./assets/project.png\");\n  background-size: 100%;\n  width: 15px;\n  height: 15px;\n}\n\n.delete-project {\n  background-image: url(\"./assets/close.png\");\n  background-size: 50%;\n}\n\n.edit-project {\n  background-image: url(\"./assets/edit.png\");\n  background-size: 90%;\n}\n\n.set-project {\n  background-image: url(\"./assets/set.png\");\n  background-size: 60%;\n}\n\n.delete-project,\n.edit-project,\n.set-project,\n.add-project {\n  background-repeat: no-repeat;\n  background-position: center;\n  align-self: center;\n  height: 13px;\n  width: 13px;\n  right: 40px;\n  border-radius: 50%;\n  background-color: grey;\n  justify-content: center;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.add-project {\n  background-image: url(\"./assets/add-project.png\");\n  background-size: 60%;\n  height: 17px;\n  width: 17px;\n}\n\n.delete-project:hover,\n.edit-project:hover,\n.set-project:hover,\n.add-project:hover {\n  background-color: var(--accent-color);\n  transform: scale(1.15);\n}\n\n.delete-project:hover::after {\n  content: \"delete\";\n  width: 30px;\n}\n\n.edit-project:hover::after {\n  content: \"edit\";\n  width: 20px;\n}\n\n.set-project:hover::after {\n  content: \"set\";\n  width: 15px;\n}\n\n.delete-project:hover::after,\n.edit-project:hover::after,\n.set-project:hover::after,\n.project-editable:hover::after,\n.add-project:hover::after {\n  position: absolute;\n  left: -10px;\n  top: -30px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n  transform: scale(0.8);\n}\n\n.add-project:hover::after {\n  content: \"add project\";\n  width: 50px;\n  top: -6px;\n  left: 20px;\n}\n\n.project-editable:hover::after {\n  content: \"rename\";\n  width: 35px;\n  top: -2px;\n  left: -85px;\n}\n\n.delete-project:hover::after {\n  left: -30px;\n}\n\n#add-task {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 35px;\n  color: var(--accent-color);\n  position: sticky;\n  margin-left: auto;\n  margin-top: auto;\n  bottom: 40px;\n  right: 20px;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: ghostwhite;\n  box-shadow: 0.5px 0.5px var(--accent-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding-bottom: 3px;\n  cursor: pointer;\n}\n\n#add-task:hover {\n  box-shadow: 1px 1px ghostwhite;\n  background-color: var(--accent-color);\n  color: white;\n}\n\n#add-task:hover::after {\n  position: absolute;\n  content: \"add a new task\";\n  left: -110px;\n  top: 10px;\n  width: 75px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n/* Task Content  */\n\n#task-content {\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 20px;\n  justify-content: flex-start;\n  background-color: white;\n  padding: 30px;\n  padding-top: 30px;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.task {\n  padding: 10px;\n  padding-left: 15px;\n  font-size: 11px;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 400px;\n  height: fit-content;\n  background-color: ghostwhite;\n}\n\n.task:hover {\n  background-color: #f5f5f5;\n  box-shadow: 1px 1px #e0e0e0;\n}\n\n.none .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #e0e0e0;\n}\n\n.low .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #fcab5f;\n}\n\n.med .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #e36414;\n}\n\n.high .priority-label {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  border-radius: 3px 0 0 3px;\n  height: 100%;\n  width: 5px;\n  background-color: #9a031e;\n}\n\n.complete {\n  background-color: #e0e0e0;\n}\n\n.complete .priority-label {\n  background-color: #0f4c5c;\n}\n\n.complete .task-project {\n  color: #0f4c5c;\n  text-decoration: line-through;\n}\n\n.complete select {\n  text-decoration: line-through;\n  color: #0f4c5c;\n}\n\n.complete .task-title {\n  color: grey;\n  text-decoration: line-through;\n}\n\n.complete .task-details {\n  color: #a9a9a9;\n  text-decoration: line-through;\n}\n\n.complete .due-date {\n  color: grey;\n}\n\n.complete #expand {\n  color: #a9a9a9;\n}\n\n.task-card-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 65%;\n}\n\n.task-card-right {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n  min-width: 35%;\n}\n\n.checkbox-title {\n  display: flex;\n  align-items: center;\n  min-width: fit-content;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 22px;\n  height: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  height: 15px;\n  width: 15px;\n  background-color: #e0e0e0;\n  border-radius: 3px;\n}\n\n.container:hover::after {\n  position: absolute;\n  content: \"mark complete\";\n  left: -30px;\n  top: -35px;\n  width: 70px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.container:hover input ~ .checkmark {\n  background-color: #c8c8c8;\n}\n\n.container input:checked ~ .checkmark {\n  background-color: #0f4c5c;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.container input:checked ~ .checkmark::after {\n  display: block;\n}\n\n.container .checkmark:after {\n  content: \"\";\n  left: 5px;\n  top: 2px;\n  width: 3px;\n  height: 7px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.task-project {\n  font-size: 12.5px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n.task-project select {\n  margin-left: 5px;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #e0e0e0;\n  text-align: center;\n  font-family: \"Lato\", sans-serif;\n  font-size: 11px;\n}\n\n.task-project select:hover {\n  outline: 1px solid #0f4c5c;\n}\n\n.task-project select:focus {\n  outline: 2px solid #0f4c5c;\n}\n\n.task-project:hover::after {\n  position: absolute;\n  content: \"edit task project\";\n  left: 190px;\n  top: 9px;\n  width: 80px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.task-title,\n.editable,\n.task-project {\n  padding: 5px;\n  margin-left: 5px;\n}\n\n.task-title:empty,\n.editable:empty,\n.task-project:empty {\n  padding: 5px;\n  margin-left: 5px;\n}\n\n.editable {\n  margin-top: 5px;\n}\n\n.project-editable {\n  outline: 0.5px dotted #0f4c5c;\n  border-radius: 5px;\n  position: relative;\n}\n\n.task-title:hover,\n.editable:hover,\n.project-editable:hover {\n  outline: 1px dotted #0f4c5c;\n  border-radius: 5px;\n  cursor: text;\n}\n\n.task-title:focus,\n.editable:focus,\n.project-editable:focus {\n  outline: 2px dotted #0f4c5c;\n  border-radius: 5px;\n}\n\n.task-title:hover::after {\n  position: absolute;\n  content: \"edit task title\";\n  left: 200px;\n  top: 10px;\n  width: 60px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.editable:hover::after {\n  position: absolute;\n  content: \"edit task details\";\n  left: 200px;\n  top: 30px;\n  width: 70px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n.task-details {\n  min-width: 0px;\n  max-width: 400px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 9.5px;\n  color: grey;\n}\n\n.due-date {\n  font-size: 10px;\n  min-width: 80px;\n  padding: 5px;\n  border-radius: 5px;\n  justify-content: end;\n  text-align: end;\n  border: none;\n  background-color: transparent;\n  color: grey;\n}\n\n.due-date:hover {\n  outline: 1px dotted #0f4c5c;\n}\n\n.due-date:focus {\n  outline: 2px dotted #0f4c5c;\n  font-size: 10px;\n  font-family: \"Lato\", sans-serif;\n  color: grey;\n}\n\n.due-date:hover::after {\n  position: absolute;\n  content: \"edit due date\";\n  right: 145px;\n  top: -22px;\n  width: 60px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n}\n\n[class^=\"expand\"] {\n  /* background-image: url('./assets/chevron.png'); */\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 13px;\n  color: grey;\n  background-size: 100%;\n  min-width: 10px;\n  min-height: 10px;\n  transform: scale(1, 2);\n}\n\n[class^=\"expand\"]:hover {\n  cursor: pointer;\n  transform: rotate(-90deg) scale(1, 2);\n  color: var(--accent-color);\n}\n\n[class^=\"expand\"]:hover::after {\n  position: absolute;\n  content: \"show details / edit\";\n  left: -20px;\n  top: -20px;\n  width: 90px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n  transform: rotate(90deg) scale(0.5, 1);\n}\n\n[id^=\"task-delete\"] {\n  background-image: url(\"./assets/trash.png\");\n  background-size: 100%;\n  min-width: 12px;\n  min-height: 12px;\n}\n\n[id^=\"task-delete\"]:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n}\n\n[id^=\"task-delete\"]:hover::after {\n  position: absolute;\n  content: \"delete task\";\n  left: -42px;\n  top: -30px;\n  width: 50px;\n  padding: 7px 10px;\n  border-radius: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 10px;\n  background-color: var(--main-color);\n  color: #e0e0e0;\n  text-align: center;\n  transform: scale(0.8);\n}\n\n.task-priority {\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 7px;\n  width: 35%;\n  height: 30px;\n  border-radius: 5px;\n  position: absolute;\n  right: 5px;\n  bottom: 20%;\n  font-size: 11px;\n}\n\n.radio-container {\n  position: relative;\n  padding-left: 13px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 10px;\n  text-align: center;\n}\n\n.radio-buttons-container {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n\n.radio-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.radio-checkmark {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 11px;\n  width: 11px;\n  background-color: #e0e0e0;\n  border-radius: 50%;\n}\n\n.radio-container:hover input ~ .radio-checkmark {\n  background-color: #ccc;\n}\n\n.radio-container input:checked ~ .radio-checkmark {\n  background-color: var(--main-color);\n}\n\n.radio-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.radio-container input:checked ~ .radio-checkmark:after {\n  display: block;\n}\n\n.radio-container .radio-checkmark:after {\n  top: 3.5px;\n  left: 3.5px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: white;\n}\n\n.not-found {\n  background-image: url(\"./assets/problem-solving.png\");\n  background-size: 100%;\n  width: 100px;\n  height: 100px;\n  opacity: 0.7;\n}\n\n/* Footer */\n\n.footer {\n  grid-area: 3 / 1 / 4 / 3;\n  display: flex;\n  align-items: center;\n  background-color: #5f0f40;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n}\n\n.made-by {\n  font-family: \"Lato\", sans-serif;\n  color: ghostwhite;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 12px;\n  padding: 7px;\n  border-radius: 7px;\n  width: 100%;\n}\n\n.made-by a {\n  text-decoration: none;\n  color: ghostwhite;\n}\n\n.made-by img {\n  height: 16px;\n  transition: transform 0.3s ease-in-out;\n}\n\n#github-icon {\n  content: url(\"./assets/gitHubIconWhite.png\");\n  max-height: 16px;\n}\n\n.made-by img:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Lato-Bold.ttf":
/*!**********************************!*\
  !*** ./src/assets/Lato-Bold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8acc961684668b6e28e9.ttf";

/***/ }),

/***/ "./src/assets/Lato-Regular.ttf":
/*!*************************************!*\
  !*** ./src/assets/Lato-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb14dc80e8b5d860fe9c.ttf";

/***/ }),

/***/ "./src/assets/Retrofunkscriptpersonaluse-v6XO.otf":
/*!********************************************************!*\
  !*** ./src/assets/Retrofunkscriptpersonaluse-v6XO.otf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6268b4f82d59f4b1ef4.otf";

/***/ }),

/***/ "./src/assets/add-project.png":
/*!************************************!*\
  !*** ./src/assets/add-project.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b70e07e8ac8aa5c707da.png";

/***/ }),

/***/ "./src/assets/close.png":
/*!******************************!*\
  !*** ./src/assets/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b77edf16d726d557a5e.png";

/***/ }),

/***/ "./src/assets/edit.png":
/*!*****************************!*\
  !*** ./src/assets/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "200af92e907ba0493da2.png";

/***/ }),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edfb7d081e86fc8a2613.ico";

/***/ }),

/***/ "./src/assets/gitHubIconWhite.png":
/*!****************************************!*\
  !*** ./src/assets/gitHubIconWhite.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d74fd76ac168df7723c.png";

/***/ }),

/***/ "./src/assets/home.png":
/*!*****************************!*\
  !*** ./src/assets/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63048c17ab1cc13bf1db.png";

/***/ }),

/***/ "./src/assets/list.png":
/*!*****************************!*\
  !*** ./src/assets/list.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08f147b4a19e0e4bbcf0.png";

/***/ }),

/***/ "./src/assets/problem-solving.png":
/*!****************************************!*\
  !*** ./src/assets/problem-solving.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42baedaff646724c1b89.png";

/***/ }),

/***/ "./src/assets/project.png":
/*!********************************!*\
  !*** ./src/assets/project.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a619977deddf62a9886c.png";

/***/ }),

/***/ "./src/assets/projects.png":
/*!*********************************!*\
  !*** ./src/assets/projects.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58b0f8cd6a68370501cf.png";

/***/ }),

/***/ "./src/assets/search.png":
/*!*******************************!*\
  !*** ./src/assets/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2550c90b4467ebb74694.png";

/***/ }),

/***/ "./src/assets/set.png":
/*!****************************!*\
  !*** ./src/assets/set.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7173be76cb40b977d64e.png";

/***/ }),

/***/ "./src/assets/today.png":
/*!******************************!*\
  !*** ./src/assets/today.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a78ebfe9d29add2facf.png";

/***/ }),

/***/ "./src/assets/trash.png":
/*!******************************!*\
  !*** ./src/assets/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4e35861d2606e76ed78.png";

/***/ }),

/***/ "./src/assets/undo.png":
/*!*****************************!*\
  !*** ./src/assets/undo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95b2caf175d2b7f4ac00.png";

/***/ }),

/***/ "./src/assets/undopink.png":
/*!*********************************!*\
  !*** ./src/assets/undopink.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c283dbe8571c6d81dc1e.png";

/***/ }),

/***/ "./src/assets/week.png":
/*!*****************************!*\
  !*** ./src/assets/week.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6251d9c12cb15ca1053.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



_home_js__WEBPACK_IMPORTED_MODULE_1__["default"];
_ui_js__WEBPACK_IMPORTED_MODULE_2__["default"];
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxRQUFRLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxVQUFVLFlBQVksT0FBTyxTQUFTLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxRQUFRLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFNBQVMsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFB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QVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxRUFBZTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQWU7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUVBQWU7QUFDN0IsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDajJCb0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDbkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLDBEQUEwRCxNQUFNO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMvRjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjJDO0FBQ1M7QUFDcEQsb0NBQW9DO0FBQ3BDOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QyQztBQUNtQjtBQUNRO0FBQ2xCO0FBQ3BELHNDQUFzQztBQUN0Qzs7QUFFZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUIsa0JBQWtCO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDUztBQUNVLENBQUM7QUFDL0Q7O0FBRWU7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVFQUFpQjs7QUFFekM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkM7QUFDYTtBQUNRO0FBQ1o7QUFDcEQsc0NBQXNDO0FBQ3RDOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSxvRUFBYyw0QkFBNEIsd0VBQWtCLDJCQUEyQjtBQUNwRztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ0k7QUFDVixDQUFDO0FBQy9DOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsK0RBQVM7QUFDeEYscUdBQXFHLCtEQUFTLGlDQUFpQzs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWM7O0FBRXRDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0EseUlBQXlJO0FBQ3pJLElBQUk7QUFDSixxSUFBcUk7QUFDckksSUFBSTtBQUNKLCtJQUErSTtBQUMvSSxJQUFJO0FBQ0osaUpBQWlKO0FBQ2pKO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkM7QUFDUyxDQUFDO0FBQ3JEOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkO0FBQ0EsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhEO0FBQ0E7QUFDVixDQUFDO0FBQ3JEOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDO0FBQ1M7QUFDTixDQUFDO0FBQy9DOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwrREFBUztBQUN0RSwwRUFBMEUsK0RBQVMsd0JBQXdCOztBQUUzRztBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0Q7QUFDSjtBQUNJO0FBQ1YsQ0FBQztBQUMvQzs7QUFFZTtBQUNmLEVBQUUsa0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsK0RBQVM7QUFDeEYscUdBQXFHLCtEQUFTO0FBQzlHLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBYztBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGtCQUFrQiw0REFBTTtBQUN4QixlQUFlLG1FQUFTO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CMEM7QUFDVztBQUNLO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTSxDQUFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQWpOLGdEQUFRO0FBQ1JpTiw4Q0FBUyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvYWRUYXNrQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tNYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi9hc3NldHMvZmF2aWNvbi5pY29cIjtcblxuY29uc3QgbG9hZEhvbWUgPSAoKCkgPT4ge1xuICAvLyBTZXQgZmF2aWNvbiBpY29uXG4gIGNvbnN0IGZhdmljb25ET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbH49XCJpY29uXCJdJyk7XG4gIGZhdmljb25ET00uaHJlZiA9IGZhdmljb247XG4gIC8vIEJhc2ljIGh0bWwgc2V0dXAgZm9yIHRvRG8gbm90ZXNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8aDE+dG9EbyBsaXN0czwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidW5kb1wiPjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlYXJjaC1idXR0b25cIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgYSB0YXNrIGJ5IHRpdGxlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJQcm9qZWN0LUhvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LWNvdW50ZXItSG9tZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtdGV4dFwiPjxwPkhvbWU8L3A+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidG9kYXlcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b2RheS1jb3VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZGF5LXRleHRcIj48cD5Ub2RheTwvcD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXh0LXNldmVuLWRheXNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuZXh0LXNldmVuLWRheXMtY291bnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5leHQtc2V2ZW4tZGF5cy1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1zZXZlbi1kYXlzLXRleHRcIj48cD5OZXh0IDcgRGF5czwvcD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWNvdW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtdGV4dFwiPjxwPlByb2plY3RzPC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1wcm9qZWN0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvamVjdC1zaWRlYmFyLWxpc3RcIj48L2Rpdj5cbiAgICAgICAgPHNwYW4gaWQ9XCJhZGQtdGFza1wiPis8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwidGFzay1jb250ZW50XCI+PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWRlLWJ5XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxwPlRoZSBPZGluIFByb2plY3Q8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2R3Z3Jvc3NiZXJnXCI+XG4gICAgICAgICAgICAgICAgPGltZyBpZD1cImdpdGh1Yi1pY29uXCIgc3JjPVwiXCI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8cD5NYWRlIGJ5IERhbiBHcm9zc2Jlcmc8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG5cbiAgcmV0dXJuIHt9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgdGFza01hc3RlciBmcm9tIFwiLi90YXNrTWFzdGVyLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgbG9hZFRhc2tDYXJkcyA9ICgoKSA9PiB7XG4gIC8vIENoZWNrIGlmIGEgZGF0ZSBpcyB0b2RheVxuICBjb25zdCBpc1RvZGF5ID0gKGRhdGUpID0+IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZGF0ZS5nZXREYXRlKCkgPT0gdG9kYXkuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSA9PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0b2RheS5nZXRGdWxsWWVhcigpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICAvLyBDaGVjayBpZiBhIGRhdGUgaXMgd2l0aGluIHRoZSBuZXh0IDcgZGF5c1xuICBjb25zdCBpc05leHRXZWVrID0gKGRhdGUpID0+IHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgbmV4dFdlZWsgPSBuZXcgRGF0ZShcbiAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgICAgdG9kYXkuZ2V0RGF0ZSgpICsgN1xuICAgICAgKTtcbiAgICAgIGlmIChuZXh0V2VlayA8IGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFNldCBzaWRlYmFyIFRhc2sgJiBQcm9qZWN0IGNvdW50ZXJzXG4gIGNvbnN0IHNldFNpZGViYXJDb3VudGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY291bnRlclwiKTtcbiAgICBwcm9qZWN0Q291bnRlci5pbm5lclRleHQgPSB0YXNrTWFzdGVyLnByb2plY3RMaXN0Lmxlbmd0aCAtIDE7IC8vU3VidHJhY3Qgb25lIHRvIGFjY291bnQgZm9yIEhvbWUgYXMgZGVmYXVsdCBQcm9qZWN0XG4gICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5wcm9qZWN0Lm5hbWUgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGNvbnN0IGhvbWVDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvdW50ZXItSG9tZVwiKTtcbiAgICAgICAgaG9tZUNvdW50ZXIuaW5uZXJUZXh0ID0gdGFza01hc3Rlci50YXNrTGlzdC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb3VudGVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgIGBwcm9qZWN0LWNvdW50ZXItJHtwcm9qZWN0LnByb2plY3QubmFtZX1gXG4gICAgICAgICk7XG4gICAgICAgIGNvdW50ZXJFbGVtLmlubmVyVGV4dCA9XG4gICAgICAgICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdFtcbiAgICAgICAgICAgIHRhc2tNYXN0ZXIucHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KVxuICAgICAgICAgIF0ucHJvamVjdC50YXNrcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdG9kYXlDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS1jb3VudGVyXCIpO1xuICAgIGNvbnN0IG5leHQ3RGF5c0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtc2V2ZW4tZGF5cy1jb3VudGVyXCIpO1xuICAgIGxldCB0b2RheUxpc3QgPSBbXTtcbiAgICBsZXQgd2Vla0xpc3QgPSBbXTtcbiAgICB0YXNrTWFzdGVyLnRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmIChpc1RvZGF5KHRhc2sudGFzay5kdWVEYXRlKSkge1xuICAgICAgICB0b2RheUxpc3QucHVzaChcInRvZGF5XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmV4dFdlZWsodGFzay50YXNrLmR1ZURhdGUpKSB7XG4gICAgICAgIHdlZWtMaXN0LnB1c2goXCJ3ZWVrXCIpO1xuICAgICAgfVxuICAgICAgdG9kYXlDb3VudGVyLmlubmVyVGV4dCA9IHRvZGF5TGlzdC5sZW5ndGg7XG4gICAgICBuZXh0N0RheXNDb3VudGVyLmlubmVyVGV4dCA9IHdlZWtMaXN0Lmxlbmd0aDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrVGl0bGUgPSAoKSA9PiB7XG4gICAgLy8gU2V0dXAgbXV0YXRpb24gT2JzZXJ2ZXIgdG8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gVGFzayB0aXRsZXMgYW5kIHVwZGF0ZSB0aGUgY29ycmVzcG9uZGluZyBUYXNrIG9iamVjdHNcbiAgICBjb25zdCB0YXNrVGl0bGVzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0YXNrLXRpdGxlLVwiXScpXG4gICAgKTtcbiAgICBjb25zdCBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgIGxldCB0YXNrSW5kZXg7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIFRhc2sgY2FyZCBkZXRhaWxzIHRvIG1hdGNoIHdpdGggdGhlIGNvcnJlY3QgVGFzayBvYmpcblxuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9XG4gICAgICAgICAgbXV0YXRpb24udGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgICAgIC5jaGlsZE5vZGVzWzJdLmlubmVyVGV4dDtcblxuICAgICAgICAvL1Byb3RlY3QgYWdhaW5zdCByZW1vdmFsIG9mIGFsbCBjb250ZW50IGJ5IHVzZXJcbiAgICAgICAgdGFza0luZGV4ID0gdGFza01hc3Rlci50YXNrTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgKHRhc2spID0+IHRhc2sudGFzay5kZXRhaWxzID09PSB0YXNrRGV0YWlsc1xuICAgICAgICApO1xuICAgICAgICB0YXNrTWFzdGVyLnRhc2tMaXN0W3Rhc2tJbmRleF0uY2hhbmdlVGl0bGUobXV0YXRpb24udGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgLy8gU2F2ZSBjaGFuZ2VzIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBzdG9yYWdlLnVwZGF0ZUxvY2FsVGFza1RpdGxlKHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB0YXNrVGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiBvYnNlcnZlci5vYnNlcnZlKHRpdGxlLCBjb25maWcpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrRGV0YWlscyA9ICgpID0+IHtcbiAgICAvLyBTZXR1cCBtdXRhdGlvbiBPYnNlcnZlciB0byB3YXRjaCBmb3IgY2hhbmdlcyB0byBUYXNrIHRpdGxlcyBhbmQgdXBkYXRlIHRoZSBjb3JyZXNwb25kaW5nIFRhc2sgb2JqZWN0c1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0YXNrLWRldGFpbHMtXCJdJylcbiAgICApO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIFRhc2sgY2FyZCB0aXRsZSB0byBtYXRjaCB3aXRoIHRoZSBjb3JyZWN0IFRhc2sgb2JqXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9XG4gICAgICAgICAgbXV0YXRpb24udGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV1cbiAgICAgICAgICAgIC5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza01hc3Rlci50YXNrTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgKHRhc2spID0+IHRhc2sudGFzay50aXRsZSA9PT0gdGFza1RpdGxlXG4gICAgICAgICk7XG4gICAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XS5jaGFuZ2VEZXRhaWxzKFxuICAgICAgICAgIG11dGF0aW9uLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICApO1xuICAgICAgICAvLyBTYXZlIGNoYW5nZXMgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIHN0b3JhZ2UudXBkYXRlTG9jYWxUYXNrRGV0YWlscyh0YXNrTWFzdGVyLnRhc2tMaXN0W3Rhc2tJbmRleF0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdGFza0RldGFpbHMuZm9yRWFjaCgoZGV0YWlsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGRldGFpbCwgY29uZmlnKSk7XG4gIH07XG5cbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY29udGVudFwiKTtcbiAgY29uc3QgcnVuID0gKHRhc2tMaXN0KSA9PiB7XG4gICAgLy8gU2V0dXAgVGFzayBjYXJkcyBmb3IgZGlzcGxheSB0byB0aGUgRE9NXG4gICAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKHRhc2sudGFzay5wcmlvcml0eSk7IC8vQWRkIHRhc2sgcHJpb3JpdHkgZm9yIGNzcyBtYW5pcHVsYXRpb25cbiAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stY2FyZC0ke3Rhc2tMaXN0LmluZGV4T2YodGFzayl9YCk7IC8vQWRkIHRhc2sgaWQgZm9yIGxhdGVyIGRlbGV0aW9uLCBldGMuXG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgaHRtbCBzdHJ1Y3R1cmUgZm9yIGVhY2ggVGFzayBjYXJkXG5cbiAgICAgIC8vIFByaW9yaXR5IGNvbG9yIGxhYmVsXG4gICAgICBsZXQgdGFza0NhcmRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tDYXJkTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkLWxlZnRcIik7XG4gICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbGFiZWxcIik7XG4gICAgICB0YXNrQ2FyZExlZnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICAgIC8vIENvbXBsZXRpb24gY2hlY2tib3hcbiAgICAgIGxldCBjaGVja2JveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNoZWNrYm94VGl0bGUuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LXRpdGxlXCIpO1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrYm94LmlkID0gYHRhc2stY2hlY2tib3gtJHt0YXNrTGlzdC5pbmRleE9mKHRhc2spfWA7XG4gICAgICBjaGVja2JveC5uYW1lID0gYHRhc2stY2hlY2tib3gtbmFtZS0ke3Rhc2tMaXN0LmluZGV4T2YodGFzayl9YDtcbiAgICAgIC8vIEFkZCBjb21wbGV0ZSBjbGFzcyB0byBleGlzdGluZyBjb21wbGV0ZWQgVGFza3NcbiAgICAgIGlmICh0YXNrLnRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gQWRkICdjb21wbGV0ZScgY2xhc3Mgb24gY2xpY2tpbmcgVGFzayBjaGVja2JveFxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBsZXQgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgY2hlY2tib3hUaXRsZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAvLyBUYXNrIHByb2plY3RcbiAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0c1wiKTtcbiAgICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay1wcm9qZWN0LSR7dGFza0xpc3QuaW5kZXhPZih0YXNrKX1gKTtcbiAgICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKFwidGFzay1wcm9qZWN0XCIpO1xuICAgICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdDpcIjtcbiAgICAgIGxldCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHByb2plY3RTZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RzXCIpO1xuICAgICAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiaWRcIixcbiAgICAgICAgYHByb2plY3RzLXNlbGVjdC0ke3Rhc2tMaXN0LmluZGV4T2YodGFzayl9YFxuICAgICAgKTtcbiAgICAgIC8vIExvb3AgdGhyb3VnaCBwcm9qZWN0TGlzdCB0byBjcmVhdGUgc2VsZWN0IGxpc3QgdmFsdWVzXG4gICAgICB0YXNrTWFzdGVyLnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnZhbHVlID0gYCR7cHJvamVjdC5wcm9qZWN0Lm5hbWV9YDtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHtwcm9qZWN0LnByb2plY3QubmFtZX1gO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgICAgfSk7XG4gICAgICAvLyBTZWxlY3QgdGhlIGNvcnJlY3Qgb3B0aW9uIGZvciBlYWNoIFRhc2tcbiAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSB0YXNrLnRhc2sucHJvamVjdDtcbiAgICAgIHByb2plY3RMYWJlbC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgICAvLyBUYXNrIHRpdGxlXG4gICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stdGl0bGUtJHt0YXNrTGlzdC5pbmRleE9mKHRhc2spfWApO1xuICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gYCR7dGFzay50YXNrLnRpdGxlfWA7XG4gICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgIGNoZWNrYm94VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgIHRhc2tDYXJkTGVmdC5hcHBlbmRDaGlsZChjaGVja2JveFRpdGxlKTtcblxuICAgICAgLy8gVGFzayBkZXRhaWxzXG4gICAgICBsZXQgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG4gICAgICB0YXNrRGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay1kZXRhaWxzLSR7dGFza0xpc3QuaW5kZXhPZih0YXNrKX1gKTtcbiAgICAgIHRhc2tEZXRhaWxzLmlubmVyVGV4dCA9IGAke3Rhc2sudGFzay5kZXRhaWxzfWA7XG4gICAgICB0YXNrQ2FyZExlZnQuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrQ2FyZExlZnQpO1xuXG4gICAgICAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZCBkYXRlcyBiZWZvcmUgZm9ybWF0dGluZ1xuICAgICAgbGV0IGR1ZURhdGVWYWx1ZTtcbiAgICAgIGlmICh0YXNrLnRhc2suZHVlRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGR1ZURhdGVWYWx1ZSA9IGZvcm1hdChuZXcgRGF0ZSh0YXNrLnRhc2suZHVlRGF0ZSksIFwieXl5eS1NTS1kZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1ZURhdGVWYWx1ZSA9IFwiTm8gRHVlIERhdGVcIjtcbiAgICAgIH1cblxuICAgICAgLy8gRHVlIERhdGVcbiAgICAgIC8vIFVzaW5nIGlucHV0IHR5cGU9XCJkYXRlXCIgaW4gb3JkZXIgdG8gY3JlYXRlIGFuIGludGVyYWN0aXZlXG4gICAgICAvLyBkYXRlIHBpY2tlciB0aGF0IGNvcnJlc3BvbmRzIHRvIGVhY2ggVGFzayBvYmplY3RcbiAgICAgIGxldCB0YXNrQ2FyZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tDYXJkUmlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZC1yaWdodFwiKTtcbiAgICAgIGxldCBkdWVEYXRlRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgZHVlRGF0ZURPTS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgICBkdWVEYXRlRE9NLnNldEF0dHJpYnV0ZShcImlkXCIsIGB0YXNrLWR1ZURhdGUtJHt0YXNrTGlzdC5pbmRleE9mKHRhc2spfWApO1xuICAgICAgZHVlRGF0ZURPTS50eXBlID0gXCJkYXRlXCI7XG4gICAgICBkdWVEYXRlRE9NLnZhbHVlID0gYCR7ZHVlRGF0ZVZhbHVlfWA7XG4gICAgICB0YXNrQ2FyZFJpZ2h0LmFwcGVuZENoaWxkKGR1ZURhdGVET00pO1xuXG4gICAgICAvLyBFeHBhbmQgYnV0dG9uXG4gICAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kXCIpO1xuICAgICAgZXhwYW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIGB0YXNrLWV4cGFuZC0ke3Rhc2tMaXN0LmluZGV4T2YodGFzayl9YCk7XG4gICAgICBsZXQgZXhwYW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiPDxcIik7XG4gICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kVGV4dCk7XG4gICAgICB0YXNrQ2FyZFJpZ2h0LmFwcGVuZENoaWxkKGV4cGFuZCk7XG5cbiAgICAgIC8vIERlbGV0ZSBidXR0b25cbiAgICAgIGxldCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0cmFzaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay1kZWxldGUtJHt0YXNrTGlzdC5pbmRleE9mKHRhc2spfWApO1xuICAgICAgdGFza0NhcmRSaWdodC5hcHBlbmRDaGlsZCh0cmFzaCk7XG5cbiAgICAgIC8vUHJpb3JpdHkgcmFkaW8gYnV0dG9uc1xuICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpO1xuICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJpb3JpdHkgbGV2ZWxcIik7XG4gICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgbGV0IHJhZGlvQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByYWRpb0J1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJhZGlvLWJ1dHRvbnMtY29udGFpbmVyXCIpO1xuICAgICAgLy8gJ25vbmUnIHJhZGlvIGJ1dHRvblxuICAgICAgbGV0IHJhZGlvTGFiZWxPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICByYWRpb0xhYmVsT25lLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1jb250YWluZXJcIik7XG4gICAgICBsZXQgcmFkaW9QT25lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJub25lXCIpO1xuICAgICAgcmFkaW9MYWJlbE9uZS5hcHBlbmRDaGlsZChyYWRpb1BPbmUpO1xuICAgICAgbGV0IHJhZGlvSW5wdXRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICByYWRpb0lucHV0T25lLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICByYWRpb0lucHV0T25lLnZhbHVlID0gXCJub25lXCI7XG4gICAgICByYWRpb0lucHV0T25lLm5hbWUgPSBgdGFzay1yYWRpby0ke3Rhc2tMaXN0LmluZGV4T2YodGFzayl9YDtcbiAgICAgIGlmICh0YXNrLnRhc2sucHJpb3JpdHkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIHJhZGlvSW5wdXRPbmUuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByYWRpb0xhYmVsT25lLmFwcGVuZENoaWxkKHJhZGlvSW5wdXRPbmUpO1xuICAgICAgbGV0IHJhZGlvU3Bhbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcmFkaW9TcGFuT25lLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1jaGVja21hcmtcIik7XG4gICAgICByYWRpb0xhYmVsT25lLmFwcGVuZENoaWxkKHJhZGlvU3Bhbk9uZSk7XG4gICAgICByYWRpb0J1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbE9uZSk7XG4gICAgICAvLyAnbG93JyByYWRpbyBidXR0b25cbiAgICAgIGxldCByYWRpb0xhYmVsVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgcmFkaW9MYWJlbFR3by5jbGFzc0xpc3QuYWRkKFwicmFkaW8tY29udGFpbmVyXCIpO1xuICAgICAgbGV0IHJhZGlvUFR3byA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwibG93XCIpO1xuICAgICAgcmFkaW9MYWJlbFR3by5hcHBlbmRDaGlsZChyYWRpb1BUd28pO1xuICAgICAgbGV0IHJhZGlvSW5wdXRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICByYWRpb0lucHV0VHdvLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICByYWRpb0lucHV0VHdvLnZhbHVlID0gXCJsb3dcIjtcbiAgICAgIHJhZGlvSW5wdXRUd28ubmFtZSA9IGB0YXNrLXJhZGlvLSR7dGFza0xpc3QuaW5kZXhPZih0YXNrKX1gO1xuICAgICAgaWYgKHRhc2sudGFzay5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICByYWRpb0lucHV0VHdvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmFkaW9MYWJlbFR3by5hcHBlbmRDaGlsZChyYWRpb0lucHV0VHdvKTtcbiAgICAgIGxldCByYWRpb1NwYW5Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHJhZGlvU3BhblR3by5jbGFzc0xpc3QuYWRkKFwicmFkaW8tY2hlY2ttYXJrXCIpO1xuICAgICAgcmFkaW9MYWJlbFR3by5hcHBlbmRDaGlsZChyYWRpb1NwYW5Ud28pO1xuICAgICAgcmFkaW9CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxUd28pO1xuICAgICAgLy8gJ21lZCcgcmFkaW8gYnV0dG9uXG4gICAgICBsZXQgcmFkaW9MYWJlbFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgcmFkaW9MYWJlbFRocmVlLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1jb250YWluZXJcIik7XG4gICAgICBsZXQgcmFkaW9QVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIm1lZFwiKTtcbiAgICAgIHJhZGlvTGFiZWxUaHJlZS5hcHBlbmRDaGlsZChyYWRpb1BUaHJlZSk7XG4gICAgICBsZXQgcmFkaW9JbnB1dFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgcmFkaW9JbnB1dFRocmVlLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICByYWRpb0lucHV0VGhyZWUudmFsdWUgPSBcIm1lZFwiO1xuICAgICAgcmFkaW9JbnB1dFRocmVlLm5hbWUgPSBgdGFzay1yYWRpby0ke3Rhc2tMaXN0LmluZGV4T2YodGFzayl9YDtcbiAgICAgIGlmICh0YXNrLnRhc2sucHJpb3JpdHkgPT09IFwibWVkXCIpIHtcbiAgICAgICAgcmFkaW9JbnB1dFRocmVlLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmFkaW9MYWJlbFRocmVlLmFwcGVuZENoaWxkKHJhZGlvSW5wdXRUaHJlZSk7XG4gICAgICBsZXQgcmFkaW9TcGFuVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHJhZGlvU3BhblRocmVlLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1jaGVja21hcmtcIik7XG4gICAgICByYWRpb0xhYmVsVGhyZWUuYXBwZW5kQ2hpbGQocmFkaW9TcGFuVGhyZWUpO1xuICAgICAgcmFkaW9CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxUaHJlZSk7XG4gICAgICAvLyAnaGlnaCcgcmFkaW8gYnV0dG9uXG4gICAgICBsZXQgcmFkaW9MYWJlbEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICByYWRpb0xhYmVsRm91ci5jbGFzc0xpc3QuYWRkKFwicmFkaW8tY29udGFpbmVyXCIpO1xuICAgICAgbGV0IHJhZGlvUEZvdXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcImhpZ2hcIik7XG4gICAgICByYWRpb0xhYmVsRm91ci5hcHBlbmRDaGlsZChyYWRpb1BGb3VyKTtcbiAgICAgIGxldCByYWRpb0lucHV0Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHJhZGlvSW5wdXRGb3VyLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICByYWRpb0lucHV0Rm91ci52YWx1ZSA9IFwiaGlnaFwiO1xuICAgICAgcmFkaW9JbnB1dEZvdXIubmFtZSA9IGB0YXNrLXJhZGlvLSR7dGFza0xpc3QuaW5kZXhPZih0YXNrKX1gO1xuICAgICAgaWYgKHRhc2sudGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgcmFkaW9JbnB1dEZvdXIuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByYWRpb0lucHV0Rm91ci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiaWRcIixcbiAgICAgICAgYHByaW9yaXR5LWhpZ2gtJHt0YXNrTGlzdC5pbmRleE9mKHRhc2spfWBcbiAgICAgICk7XG4gICAgICByYWRpb0xhYmVsRm91ci5hcHBlbmRDaGlsZChyYWRpb0lucHV0Rm91cik7XG4gICAgICBsZXQgcmFkaW9TcGFuRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcmFkaW9TcGFuRm91ci5jbGFzc0xpc3QuYWRkKFwicmFkaW8tY2hlY2ttYXJrXCIpO1xuICAgICAgcmFkaW9MYWJlbEZvdXIuYXBwZW5kQ2hpbGQocmFkaW9TcGFuRm91cik7XG4gICAgICByYWRpb0J1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEZvdXIpO1xuICAgICAgLy8gQnJpbmdpbmcgdGhlIGRpdidzIHRvZ2V0aGVyXG4gICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChyYWRpb0J1dHRvbnNDb250YWluZXIpO1xuICAgICAgdGFza0NhcmRSaWdodC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tDYXJkUmlnaHQpO1xuXG4gICAgICAvLyBBZGQgVGFzayBjYXJkIHRvIERPTVxuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICAgIC8vIENhbGwgVGFza1RpdGxlIGZ1bmN0aW9uIGhlcmUgaW4gb3JkZXIgdG8gcmVhdHRhY2ggbXV0YXRpb25cbiAgICAgIC8vIG9ic2VydmVycyB0byBET00gb2JqZWN0cyBlYWNoIHRpbWUgbG9hZFRhc2tDYXJkcyBydW5zXG4gICAgICB1cGRhdGVUYXNrVGl0bGUoKTtcbiAgICAgIHVwZGF0ZVRhc2tEZXRhaWxzKCk7XG5cbiAgICAgIHNldFNpZGViYXJDb3VudGVycygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0U2lkZWJhckNvdW50ZXJzLFxuICAgIGlzVG9kYXksXG4gICAgaXNOZXh0V2VlayxcbiAgICBydW4sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGFza0NhcmRzO1xuIiwiaW1wb3J0IHRhc2tNYXN0ZXIgZnJvbSBcIi4vdGFza01hc3Rlci5qc1wiO1xuXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IHtcbiAgICBuYW1lOiBuYW1lIHx8IFwiXCIsXG4gICAgb3JpZ05hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xuXG4gIGNvbnN0IHR5cGUgPSBcInByb2plY3RcIjtcblxuICBjb25zdCBjaGFuZ2VOYW1lID0gKG9sZE5hbWUsIG5ld05hbWUpID0+IHtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuZXdOYW1lO1xuICAgIHVwZGF0ZVRhc2tQcm9qZWN0TmFtZXMob2xkTmFtZSwgbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFza1Byb2plY3ROYW1lcyA9IChvbGROYW1lLCBuZXdOYW1lKSA9PiB7XG4gICAgdGFza01hc3Rlci50YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50YXNrLnByb2plY3QgPT09IG9sZE5hbWUpIHtcbiAgICAgICAgdGFzay50YXNrLnByb2plY3QgPSBuZXdOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUxvY2FsTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH07XG5cbiAgY29uc3QgZGVsVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IG9sZFRhc2sgPSBwcm9qZWN0LnRhc2tzLnNwbGljZShcbiAgICAgIHByb2plY3QudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0aXRsZSksXG4gICAgICAxXG4gICAgKTtcbiAgICByZXR1cm4gb2xkVGFzaztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3QsXG4gICAgdHlwZSxcbiAgICBjaGFuZ2VOYW1lLFxuICAgIGNoYW5nZUxvY2FsTmFtZSxcbiAgICBhZGRUYXNrLFxuICAgIGRlbFRhc2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgLy8gSWYgbm8gbG9jYWxTdG9yYWdlLCBzZXQgYW4gZW1wdHkgYXJyYXkgd2l0aCB0aGUgbmFtZSBvZiB1c2VyVGFza3NcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJUYXNrc1wiLCBcIltdXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclByb2plY3RzXCIsIFwiW11cIik7XG4gIH1cblxuICBjb25zdCBnZXRMb2NhbFRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJUYXNrc1wiLCBcIltdXCIpKTtcbiAgICBjb25zdCBUYXNrT2JqID0gVGFzaygpO1xuICAgIC8vIFJlbW92ZSB0YXNrIHByb3BlcnR5IGluIG9yZGVyIHRvIG5vdCBvdmVyd3JpdGVcbiAgICBkZWxldGUgVGFza09iai50YXNrO1xuICAgIC8vIE1hcCBvdGhlciBUYXNrIE1ldGhvZHMgdG8gbmV3IEpTT04gb2JqZWN0c1xuICAgIGNvbnN0IHVzZXJUYXNrcyA9IHVzZXJMaXN0Lm1hcCgodGFzaykgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4udGFzaywgLi4uVGFza09iaiB9O1xuICAgIH0pO1xuICAgIHJldHVybiB1c2VyVGFza3M7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUxvY2FsVGFzayA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgdXNlclRhc2tzID0gZ2V0TG9jYWxUYXNrcygpO1xuICAgIHVzZXJUYXNrcy5wdXNoKGl0ZW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJUYXNrcykpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUxvY2FsVGFzayA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgdXNlclRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJUYXNrc1wiLCBcIltdXCIpKTtcbiAgICBjb25zdCBpbmRleCA9IHVzZXJUYXNrcy5maW5kSW5kZXgoXG4gICAgICAodGFzaykgPT5cbiAgICAgICAgdGFzay50YXNrLnRpdGxlID09PSBpdGVtLnRhc2sudGl0bGUgJiZcbiAgICAgICAgdGFzay50YXNrLmRldGFpbHMgPT09IGl0ZW0udGFzay5kZXRhaWxzICYmXG4gICAgICAgIHRhc2sudGFzay5wcm9qZWN0ID09PSBpdGVtLnRhc2sucHJvamVjdFxuICAgICk7XG4gICAgdXNlclRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXNlclRhc2tzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxUYXNrUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHVzZXJUYXNrcyA9IGdldExvY2FsVGFza3MoKTtcbiAgICBjb25zdCBpbmRleCA9IHVzZXJUYXNrcy5maW5kSW5kZXgoXG4gICAgICAodGFzaykgPT5cbiAgICAgICAgdGFzay50YXNrLnRpdGxlID09PSBpdGVtLnRhc2sudGl0bGUgJiZcbiAgICAgICAgdGFzay50YXNrLmRldGFpbHMgPT09IGl0ZW0udGFzay5kZXRhaWxzXG4gICAgKTtcbiAgICB1c2VyVGFza3NbaW5kZXhdLnRhc2sucHJvamVjdCA9IHVzZXJUYXNrc1tpbmRleF0uY2hhbmdlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXNlclRhc2tzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxUYXNrVGl0bGUgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHVzZXJUYXNrcyA9IGdldExvY2FsVGFza3MoKTtcbiAgICBjb25zdCBpbmRleCA9IHVzZXJUYXNrcy5maW5kSW5kZXgoXG4gICAgICAodGFzaykgPT5cbiAgICAgICAgdGFzay50YXNrLmRldGFpbHMgPT09IGl0ZW0udGFzay5kZXRhaWxzICYmXG4gICAgICAgIHRhc2sudGFzay5wcmlvcml0eSA9PT0gaXRlbS50YXNrLnByaW9yaXR5XG4gICAgKTtcbiAgICB1c2VyVGFza3NbaW5kZXhdLnRhc2sudGl0bGUgPSB1c2VyVGFza3NbaW5kZXhdLmNoYW5nZVRpdGxlKGl0ZW0udGFzay50aXRsZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXNlclRhc2tzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxUYXNrRHVlRGF0ZSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgdXNlclRhc2tzID0gZ2V0TG9jYWxUYXNrcygpO1xuICAgIGNvbnN0IGluZGV4ID0gdXNlclRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PlxuICAgICAgICB0YXNrLnRhc2sudGl0bGUgPT09IGl0ZW0udGFzay50aXRsZSAmJlxuICAgICAgICB0YXNrLnRhc2suZGV0YWlscyA9PT0gaXRlbS50YXNrLmRldGFpbHNcbiAgICApO1xuICAgIHVzZXJUYXNrc1tpbmRleF0udGFzay5kdWVEYXRlID0gdXNlclRhc2tzW2luZGV4XS5jaGFuZ2VEdWVEYXRlKFxuICAgICAgaXRlbS50YXNrLmR1ZURhdGVcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJUYXNrcykpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUxvY2FsVGFza1ByaW9yaXR5ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB1c2VyVGFza3MgPSBnZXRMb2NhbFRhc2tzKCk7XG4gICAgY29uc3QgaW5kZXggPSB1c2VyVGFza3MuZmluZEluZGV4KFxuICAgICAgKHRhc2spID0+XG4gICAgICAgIHRhc2sudGFzay50aXRsZSA9PT0gaXRlbS50YXNrLnRpdGxlICYmXG4gICAgICAgIHRhc2sudGFzay5kZXRhaWxzID09PSBpdGVtLnRhc2suZGV0YWlsc1xuICAgICk7XG4gICAgdXNlclRhc2tzW2luZGV4XS50YXNrLnByaW9yaXR5ID0gdXNlclRhc2tzW2luZGV4XS5jaGFuZ2VQcmlvcml0eShcbiAgICAgIGl0ZW0udGFzay5wcmlvcml0eVxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXNlclRhc2tzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxUYXNrRGV0YWlscyA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgdXNlclRhc2tzID0gZ2V0TG9jYWxUYXNrcygpO1xuICAgIGNvbnN0IGluZGV4ID0gdXNlclRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PlxuICAgICAgICB0YXNrLnRhc2sudGl0bGUgPT09IGl0ZW0udGFzay50aXRsZSAmJlxuICAgICAgICB0YXNrLnRhc2sucHJpb3JpdHkgPT09IGl0ZW0udGFzay5wcmlvcml0eVxuICAgICk7XG4gICAgdXNlclRhc2tzW2luZGV4XS50YXNrLmRldGFpbHMgPSB1c2VyVGFza3NbaW5kZXhdLmNoYW5nZURldGFpbHMoXG4gICAgICBpdGVtLnRhc2suZGV0YWlsc1xuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXNlclRhc2tzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxUYXNrQ29tcGxldGVTdGF0dXMgPSAoaXRlbSwgc3RhdHVzKSA9PiB7XG4gICAgY29uc3QgdXNlclRhc2tzID0gZ2V0TG9jYWxUYXNrcygpO1xuICAgIGNvbnN0IGluZGV4ID0gdXNlclRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PlxuICAgICAgICB0YXNrLnRhc2sudGl0bGUgPT09IGl0ZW0udGFzay50aXRsZSAmJlxuICAgICAgICB0YXNrLnRhc2suZGV0YWlscyA9PT0gaXRlbS50YXNrLmRldGFpbHNcbiAgICApO1xuICAgIHVzZXJUYXNrc1tpbmRleF0udGFzay5jb21wbGV0ZSA9XG4gICAgICB1c2VyVGFza3NbaW5kZXhdLmNoYW5nZUNvbXBsZXRlU3RhdHVzKHN0YXR1cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXNlclRhc2tzKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TG9jYWxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyUHJvamVjdHNcIiwgXCJbXVwiKSk7XG4gICAgcmV0dXJuIHVzZXJMaXN0O1xuICB9O1xuXG4gIGNvbnN0IHNhdmVMb2NhbFByb2plY3QgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGdldExvY2FsUHJvamVjdHMoKTtcbiAgICB1c2VyUHJvamVjdHMucHVzaChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyh1c2VyUHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJQcm9qZWN0cykpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUxvY2FsUHJvamVjdCA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgdXNlclByb2plY3RzID0gZ2V0TG9jYWxQcm9qZWN0cygpO1xuICAgIGNvbnN0IGluZGV4ID0gdXNlclByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3QubmFtZSA9PT0gaXRlbS5wcm9qZWN0Lm5hbWVcbiAgICApO1xuICAgIHVzZXJQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJQcm9qZWN0cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodXNlclByb2plY3RzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxQcm9qZWN0TmFtZSA9IChvbGROYW1lLCBuZXdOYW1lKSA9PiB7XG4gICAgY29uc3QgdXNlclByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJQcm9qZWN0c1wiLCBcIltdXCIpKTtcbiAgICB1c2VyUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmNoYW5nZUxvY2FsTmFtZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3QucHJvamVjdC5uYW1lID0gbmFtZTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgaW5kZXggPSB1c2VyUHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdC5uYW1lID09PSBvbGROYW1lXG4gICAgKTtcbiAgICBpZiAodXNlclByb2plY3RzW2luZGV4XSkge1xuICAgICAgdXNlclByb2plY3RzW2luZGV4XS5jaGFuZ2VMb2NhbE5hbWUobmV3TmFtZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh1c2VyUHJvamVjdHMpKTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSBUYXNrcyBhcyB3ZWxsXG4gICAgY29uc3QgdXNlclRhc2tzID0gZ2V0TG9jYWxUYXNrcygpO1xuICAgIHVzZXJUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50YXNrLnByb2plY3QgPT09IG9sZE5hbWUpIHtcbiAgICAgICAgdGFzay50YXNrLnByb2plY3QgPSB0YXNrLmNoYW5nZVByb2plY3QobmV3TmFtZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJUYXNrcykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TG9jYWxUYXNrcyxcbiAgICBnZXRMb2NhbFByb2plY3RzLFxuICAgIHNhdmVMb2NhbFRhc2ssXG4gICAgcmVtb3ZlTG9jYWxUYXNrLFxuICAgIHVwZGF0ZUxvY2FsVGFza1Byb2plY3QsXG4gICAgdXBkYXRlTG9jYWxUYXNrVGl0bGUsXG4gICAgdXBkYXRlTG9jYWxUYXNrRHVlRGF0ZSxcbiAgICB1cGRhdGVMb2NhbFRhc2tQcmlvcml0eSxcbiAgICB1cGRhdGVMb2NhbFRhc2tEZXRhaWxzLFxuICAgIHVwZGF0ZUxvY2FsVGFza0NvbXBsZXRlU3RhdHVzLFxuICAgIHNhdmVMb2NhbFByb2plY3QsXG4gICAgcmVtb3ZlTG9jYWxQcm9qZWN0LFxuICAgIHVwZGF0ZUxvY2FsUHJvamVjdE5hbWUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xuIiwiaW1wb3J0IHRhc2tNYXN0ZXIgZnJvbSBcIi4vdGFza01hc3Rlci5qc1wiO1xuXG5jb25zdCBUYXNrID0gKHByb2plY3QsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGV0YWlscywgY29tcGxldGUpID0+IHtcbiAgY29uc3QgdGFzayA9IHtcbiAgICBwcm9qZWN0OiBwcm9qZWN0LFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZShkdWVEYXRlKSxcbiAgICBwcmlvcml0eTogcHJpb3JpdHkgfHwgXCJub25lXCIsXG4gICAgZGV0YWlsczogZGV0YWlscyB8fCBcIlwiLFxuICAgIGNvbXBsZXRlOiBjb21wbGV0ZSxcbiAgfTtcblxuICBjb25zdCB0eXBlID0gXCJ0YXNrXCI7XG5cbiAgY29uc3QgY2hhbmdlVGFza1Byb2plY3QgPSAob2xkUHJvamVjdCwgbmV3UHJvamVjdCwgdGFza1RvQ2hhbmdlKSA9PiB7XG4gICAgLy8gVXBkYXRlICB0aGUgdGFza01hc3RlciBwcm9qZWN0TGlzdCB3aGVuIGEgVGFzayBjaGFuZ2VzIHByb2plY3RzXG4gICAgY29uc3Qgb2xkUHJvamVjdEluZGV4ID0gdGFza01hc3Rlci5wcm9qZWN0TGlzdC5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0Lm5hbWUgPT09IG9sZFByb2plY3RcbiAgICApO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IEFycmF5LmZyb20oXG4gICAgICB0YXNrTWFzdGVyLnByb2plY3RMaXN0W29sZFByb2plY3RJbmRleF0ucHJvamVjdC50YXNrc1xuICAgICkuaW5kZXhPZih0YXNrVG9DaGFuZ2UpO1xuICAgIGNvbnN0IHRhc2tUb01vdmUgPVxuICAgICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdFtvbGRQcm9qZWN0SW5kZXhdLmRlbFRhc2sodGFza0luZGV4KVswXTtcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5kZXggPSB0YXNrTWFzdGVyLnByb2plY3RMaXN0LmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3QubmFtZSA9PT0gbmV3UHJvamVjdFxuICAgICk7XG4gICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdFtuZXdQcm9qZWN0SW5kZXhdLmFkZFRhc2sodGFza1RvTW92ZSk7XG4gICAgcmV0dXJuICh0YXNrLnByb2plY3QgPSBuZXdQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gKHRhc2sucHJvamVjdCA9IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVRpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgcmV0dXJuICh0YXNrLnRpdGxlID0gdGl0bGUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgIHJldHVybiAodGFzay5kdWVEYXRlID0gZHVlRGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4gKHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlRGV0YWlscyA9IChkZXRhaWxzKSA9PiB7XG4gICAgcmV0dXJuICh0YXNrLmRldGFpbHMgPSBkZXRhaWxzKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VDb21wbGV0ZVN0YXR1cyA9IChjb21wbGV0ZSkgPT4ge1xuICAgIHJldHVybiAodGFzay5jb21wbGV0ZSA9IGNvbXBsZXRlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRhc2ssXG4gICAgdHlwZSxcbiAgICBjaGFuZ2VUYXNrUHJvamVjdCxcbiAgICBjaGFuZ2VQcm9qZWN0LFxuICAgIGNoYW5nZVRpdGxlLFxuICAgIGNoYW5nZUR1ZURhdGUsXG4gICAgY2hhbmdlUHJpb3JpdHksXG4gICAgY2hhbmdlRGV0YWlscyxcbiAgICBjaGFuZ2VDb21wbGV0ZVN0YXR1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbi8vIENvbnRyb2wgdGhlIGNyZWF0aW9uIGFuZCBtYW5pcHVsYXRpb24gb2YgUHJvamVjdHMgJiBUYXNrc1xuLy8gTW9kdWxlIHRvIGJlIGNhbGxlZCBmcm9tIHRoZSBET01cbmNvbnN0IHRhc2tNYXN0ZXIgPSAoKCkgPT4ge1xuICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IFByb2plY3RzICYmIFRhc2tzXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGNvbnN0IHRhc2tMaXN0ID0gW107XG5cbiAgLy8gQ3JlYXRlIG5ldyBQcm9qZWN0cyBhbmQgcHVzaCB0aGVtIHRvIHRoZSBwcm9qZWN0TGlzdFxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgfTtcblxuICAvLyBDcmVhdGUgbmV3IFRhc2tzIGFuZCBwdXNoIHRoZW0gdG8gdGhlIHRhc2tMaXN0XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmICghYXJnc1swXSkge1xuICAgICAgYXJnc1swXSA9IFwiSG9tZVwiOyAvL0RlZmF1bHQgUHJvamVjdCB2YWx1ZSBpZiBub25lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKC4uLmFyZ3MpO1xuICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7IC8vS2VlcCB0cmFjayBvZiBhbGwgbmV3IFRhc2tzIGluIHRoZSB0YXNrTGlzdCBhcnJheVxuICAgIGlmIChhcmdzWzBdICE9PSBcIkhvbWVcIikge1xuICAgICAgaG9tZVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTsgLy9BZGQgYWxsIG5ldyBUYXNrcyB0byB0aGUgSG9tZSBQcm9qZWN0IGJ5IGRlZmF1bHQgd2l0aG91dCBkdXBsaWNhdGluZ1xuICAgIH1cbiAgICAvLyBNYXRjaCB0aGUgYXJnWzBdIHN0cmluZyB3aXRoIHRoZSBjb3JyZWN0IFByb2plY3Qgb2JqZWN0IHZpYSB0aGUgbmFtZSBwcm9wZXJ0eVxuICAgIGxldCB0YXNrUHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0Lm5hbWUgPT09IGFyZ3NbMF1cbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LCB0YXNrUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgdGFza1Byb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdGFza0xpc3Q7XG4gIH07XG5cbiAgLy8gRGVmYXVsdCBQcm9qZWN0cyBvbiBwYWdlIGxvYWRcbiAgY29uc3QgaG9tZVByb2plY3QgPSBQcm9qZWN0KFwiSG9tZVwiKTtcbiAgY29uc3QgYmFieVByb2plY3QgPSBQcm9qZWN0KFwiQmFieVwiKTtcbiAgY29uc3Qgc3R1ZHlQcm9qZWN0ID0gUHJvamVjdChcIlN0dWR5XCIpO1xuICBjb25zdCB3b3Jrb3V0UHJvamVjdCA9IFByb2plY3QoXCJXb3Jrb3V0XCIpO1xuXG4gIC8vIElmIGxvY2FsU3RvcmFnZSBpcyBlbXB0eSwgc2F2ZSBhIGNvcHkgb2YgdGhlIGRlZmF1bHQgUHJvamVjdHNcbiAgY29uc3Qgc3RvcmVEZWZhdWx0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2UuZ2V0TG9jYWxQcm9qZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RvcmFnZS5zYXZlTG9jYWxQcm9qZWN0KGhvbWVQcm9qZWN0KTtcbiAgICAgIHN0b3JhZ2Uuc2F2ZUxvY2FsUHJvamVjdChiYWJ5UHJvamVjdCk7XG4gICAgICBzdG9yYWdlLnNhdmVMb2NhbFByb2plY3Qoc3R1ZHlQcm9qZWN0KTtcbiAgICAgIHN0b3JhZ2Uuc2F2ZUxvY2FsUHJvamVjdCh3b3Jrb3V0UHJvamVjdCk7XG4gICAgfVxuICB9O1xuICBzdG9yZURlZmF1bHRQcm9qZWN0cygpO1xuXG4gIC8vIERlZmF1bHQgZGF0ZXNcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIGNvbnN0IGluVGhyZWVEYXlzID0gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMyk7XG4gIGNvbnN0IGluVGVuRGF5cyA9IGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEwKTtcbiAgY29uc3QgaW4zMERheXMgPSBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAzMCk7XG5cbiAgLy8gRGVmYXVsdCB0YXNrcyBvbiBwYWdlIGxvYWRcbiAgY29uc3Qgd29ya291dFRhc2sgPSBUYXNrKFxuICAgIFwiV29ya291dFwiLFxuICAgIFwiUnVuIDEwayBwcmFjdGljZSBwYWNlIGZvciByYWNlXCIsXG4gICAgaW4zMERheXMsXG4gICAgXCJsb3dcIixcbiAgICBcInNvIGxvb29ubmduZ25nbmdubmcgaSBhbSBzbyBsb25nIGl0IGlzIGFtYXppbmcgaG93IGxvbmcgaSBhbSBvbWcgb21nIG9tIGdvbWdvIG1nb21nb21nb20gb2dtIG9nbW9nbSBvbSBzbyBsb29vbm5nbmduZ25nbm5nIGkgYW0gc28gbG9uZyBpdCBpcyBhbWF6aW5nIGhvdyBsb25nIGkgYW0gb21nIG9tZyBvbSBnb21nbyBtZ29tZ29tZ29tIG9nbSBvZ21vZ20gb21cIixcbiAgICBmYWxzZVxuICApO1xuICBjb25zdCBzdHVkeVRhc2sgPSBUYXNrKFxuICAgIFwiU3R1ZHlcIixcbiAgICBcIlJldmlldyBXZWJwYWNrLmNvbmZpZy5qcyBiYXNpY3NcIixcbiAgICBpblRlbkRheXMsXG4gICAgXCJtZWRcIixcbiAgICBcIlJldmlzdCB0aGUgV2VicGFjayBndWlkZXMgcGFnZSBhbmQgcmV2aWV3IHJlbGV2YW50IGluZm9cIixcbiAgICBmYWxzZVxuICApO1xuICBjb25zdCBiYWJ5VGFzayA9IFRhc2soXG4gICAgXCJCYWJ5XCIsXG4gICAgXCJQcmVwIEJhYnkncyBmYXZvcml0ZSBjaGlja2VuIGR1bXBsaW5nc1wiLFxuICAgIGluVGhyZWVEYXlzLFxuICAgIFwibWVkXCIsXG4gICAgXCJHZXQgdGhlIHJlY2lwZSBmcm9tIFVuY2xlIE0gd2hvIG1hZGUgaXQgbGFzdCBOZXcgWWVhcidzXCIsXG4gICAgZmFsc2VcbiAgKTtcbiAgY29uc3QgaG9tZVRhc2sgPSBUYXNrKFxuICAgIFwiSG9tZVwiLFxuICAgIFwiTWVldCB1cCB3aXRoIExvdSBmb3IgYSBiZWVyXCIsXG4gICAgdG9tb3Jyb3csXG4gICAgXCJoaWdoXCIsXG4gICAgXCJNZWV0IGF0IEpheCBCcmV3ZXJ5IG5lYXIgOXRoIHN0cmVldFwiLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgLy8gSWYgbG9jYWxTdG9yYWdlIGlzIGVtcHR5LCBzYXZlIGEgY29weSBvZiB0aGUgZGVmYXVsdCBUYXNrc1xuICBjb25zdCBzdG9yZURlZmF1bHRUYXNrcyA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZS5nZXRMb2NhbFRhc2tzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHN0b3JhZ2VcbiAgICAgICAgICAuZ2V0TG9jYWxQcm9qZWN0cygpXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0Lm5hbWUgPT09IFwiSG9tZVwiKS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgc3RvcmFnZS5zYXZlTG9jYWxUYXNrKGhvbWVUYXNrKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgc3RvcmFnZVxuICAgICAgICAgIC5nZXRMb2NhbFByb2plY3RzKClcbiAgICAgICAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3QubmFtZSA9PT0gXCJXb3Jrb3V0XCIpLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBzdG9yYWdlLnNhdmVMb2NhbFRhc2sod29ya291dFRhc2spO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBzdG9yYWdlXG4gICAgICAgICAgLmdldExvY2FsUHJvamVjdHMoKVxuICAgICAgICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdC5uYW1lID09PSBcIkJhYnlcIikubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIHN0b3JhZ2Uuc2F2ZUxvY2FsVGFzayhiYWJ5VGFzayk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHN0b3JhZ2VcbiAgICAgICAgICAuZ2V0TG9jYWxQcm9qZWN0cygpXG4gICAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0Lm5hbWUgPT09IFwiQmFieVwiKS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgc3RvcmFnZS5zYXZlTG9jYWxUYXNrKHN0dWR5VGFzayk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0b3JlRGVmYXVsdFRhc2tzKCk7XG5cbiAgLy8gU29ydCB0aGUgdGFza0xpc3Qgc28gdGhhdCBpdCBpcyBvcmRlcmVkIGJ5IGRhdGUsIHdpdGggY29tcGxldGVkIFRhc2tzIHN0YXlpbmcgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgY29uc3QgZGF0ZU9yZGVyVGFza0xpc3QgPSAoKSA9PiB7XG4gICAgbGV0IHNvcnRlZFRhc2tMaXN0ID0gdGFza0xpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGEudGFzay5kdWVEYXRlIDwgYi50YXNrLmR1ZURhdGUpIHJldHVybiAtMTtcbiAgICAgIGlmIChhLnRhc2suZHVlRGF0ZSA+IGIudGFzay5kdWVEYXRlKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIENvbGxlY3QgaW5kZXhlcyBvZiBjb21wbGV0ZWQgVGFza3NcbiAgICBsZXQgY29tcGxldGVkVGFza0luZGV4ZXMgPSBbXTtcbiAgICBzb3J0ZWRUYXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tJbmRleGVzLnB1c2goc29ydGVkVGFza0xpc3QuaW5kZXhPZih0YXNrKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gUmVtb3ZlIGNvbXBsZXRlZCBUYXNrcyBpbiByZXZlcnNlIG9yZGVyIHRvIHByZXNlcnZlIGluZGV4IG9yZGVyICYmIHNhdmUgdGhlbVxuICAgIGxldCBjb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBjb21wbGV0ZWRUYXNrSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29tcGxldGVkVGFza3MucHVzaChzb3J0ZWRUYXNrTGlzdC5zcGxpY2UoY29tcGxldGVkVGFza0luZGV4ZXNbaV0sIDEpWzBdKTtcbiAgICB9XG4gICAgLy8gUmV2ZXJzZSBvcmRlciB0byBwcmVzZXJ2ZSBkYXRlIGZ1bmN0aW9uYWxpdHkgd2l0aCBjb21wbGV0aW9uIHN0YXR1c1xuICAgIGNvbXBsZXRlZFRhc2tzLnJldmVyc2UoKTtcbiAgICAvLyBQdXNoIHRoZW0gYmFjayB0byB0aGUgdGFza0xpc3RcbiAgICBjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBzb3J0ZWRUYXNrTGlzdC5wdXNoKHRhc2spWzBdKTtcbiAgICByZXR1cm4gc29ydGVkVGFza0xpc3Q7XG4gIH07XG5cbiAgZGF0ZU9yZGVyVGFza0xpc3QodGFza0xpc3QpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHRhc2tMaXN0LFxuICAgIGNyZWF0ZVRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBkYXRlT3JkZXJUYXNrTGlzdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNYXN0ZXI7XG4iLCJpbXBvcnQgdGFza01hc3RlciBmcm9tIFwiLi90YXNrTWFzdGVyLmpzXCI7XG5pbXBvcnQgbG9hZFRhc2tDYXJkcyBmcm9tIFwiLi9sb2FkVGFza0NhcmRzLmpzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGRpc3BsYXlVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlByb2plY3QtSG9tZVwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xuICBjb25zdCBuZXh0N0RheXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtc2V2ZW4tZGF5c1wiKTtcbiAgbGV0IGRlbGV0ZWRJdGVtcyA9IFtdO1xuXG4gIGNvbnN0IHJlbW92ZURPTUNvbnRlbnQgPSAoY29udGVudCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0YWJDb250cm9sbGVyID0gKHRhc2tQcm9qZWN0KSA9PiB7XG4gICAgLy8gRGlzcGxheSB0byB0aGUgdXBkYXRlZCBwcm9qZWN0IGxpc3QsIHVubGVzcyB0aGUgdXNlciBpcyBhbHJlYWR5IG9uIEhvbWUgLyBUb2RheSAvTmV4dDdEYXlzIHRhYlxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgUHJvamVjdC0ke3Rhc2tQcm9qZWN0fWApO1xuICAgIGlmIChob21lLnN0eWxlLmNvbG9yID09PSBcInJnYigyMTYsIDM5LCAxMTcpXCIpIHJldHVybjtcbiAgICBlbHNlIGlmIChcbiAgICAgIHRvZGF5LnN0eWxlLmNvbG9yID09PSBcInJnYigyMTYsIDM5LCAxMTcpXCIgJiZcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50XG4gICAgKSB7XG4gICAgICB0b2RheS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcIm1vdXNlZG93blwiKSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG5leHQ3RGF5cy5zdHlsZS5jb2xvciA9PT0gXCJyZ2IoMjE2LCAzOSwgMTE3KVwiICYmXG4gICAgICBkb2N1bWVudC5jcmVhdGVFdmVudFxuICAgICkge1xuICAgICAgbmV4dDdEYXlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICBwcm9qZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGFza3NcblxuICBjb25zdCB1cGRhdGVUYXNrQ29tcGxldGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInRhc2stY2hlY2tib3gtXCJdJylcbiAgICApO1xuICAgIHRhc2tDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PlxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPVxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xuICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgVGFzayBvYmplY3Qgd2l0aCB0aGUgbWF0Y2hpbmcgdGl0bGVcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza01hc3Rlci50YXNrTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgKHRhc2spID0+IHRhc2sudGFzay50aXRsZSA9PT0gdGFza1RpdGxlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gdGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdLnRhc2sucHJvamVjdDtcbiAgICAgICAgY29uc29sZS5sb2codGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdLnRhc2spO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XS5jaGFuZ2VDb21wbGV0ZVN0YXR1cyh0cnVlKTtcbiAgICAgICAgICAvLyBVcGRhdGUgbG9jYWxTdG9yYWdlXG4gICAgICAgICAgc3RvcmFnZS51cGRhdGVMb2NhbFRhc2tDb21wbGV0ZVN0YXR1cyhcbiAgICAgICAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIE1vdmUgY29tcGxldGVkIFRhc2sgdG8gZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgdGFza01hc3Rlci50YXNrTGlzdC5wdXNoKHRhc2tNYXN0ZXIudGFza0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSlbMF0pO1xuICAgICAgICAgIHJlbW92ZURPTUNvbnRlbnQodGFza0NvbnRlbnQpO1xuICAgICAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKHRhc2tNYXN0ZXIudGFza0xpc3QpO1xuICAgICAgICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrTWFzdGVyLnRhc2tMaXN0W3Rhc2tJbmRleF0uY2hhbmdlQ29tcGxldGVTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICBzdG9yYWdlLnVwZGF0ZUxvY2FsVGFza0NvbXBsZXRlU3RhdHVzKFxuICAgICAgICAgICAgdGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFJlcnVuIGRhdGVPcmRlclRhc2tMaXN0IHRvIHJlaW50ZWdyYXRlIHVuY29tcGxldGVkIFRhc2sgaW50byB0aGUgbm9ybWFsIGZsb3dcbiAgICAgICAgICB0YXNrTWFzdGVyLmRhdGVPcmRlclRhc2tMaXN0KCk7XG4gICAgICAgICAgcmVtb3ZlRE9NQ29udGVudCh0YXNrQ29udGVudCk7XG4gICAgICAgICAgbG9hZFRhc2tDYXJkcy5ydW4odGFza01hc3Rlci50YXNrTGlzdCk7XG4gICAgICAgICAgcnVuRE9NVGFza0Z1bmN0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHRhYkNvbnRyb2xsZXIodGFza1Byb2plY3QpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2tQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0cyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwicHJvamVjdHMtc2VsZWN0LVwiXScpXG4gICAgKTtcbiAgICB0YXNrUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAvLyBTZXQgc2VsZWN0IG9wdGlvbiB0byBtYXRjaCBUYXNrIG9iamVjdCBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZS50YXJnZXRbZS50YXJnZXQuc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPVxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcbiAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIFRhc2sgb2JqZWN0IHdpdGggdGhlIG1hdGNoaW5nIHRpdGxlXG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tNYXN0ZXIudGFza0xpc3QuZmluZEluZGV4KFxuICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2sudGl0bGUgPT09IHRhc2tUaXRsZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XS50YXNrLnByb2plY3Q7XG4gICAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XS5jaGFuZ2VUYXNrUHJvamVjdChcbiAgICAgICAgICB0YXNrUHJvamVjdCxcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbixcbiAgICAgICAgICB0YXNrXG4gICAgICAgICk7XG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgc3RvcmFnZS51cGRhdGVMb2NhbFRhc2tQcm9qZWN0KHNlbGVjdGVkT3B0aW9uLCB0YXNrKTtcbiAgICAgICAgbG9hZFRhc2tDYXJkcy5zZXRTaWRlYmFyQ291bnRlcnMoKTtcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgdXBkYXRlZCBwcm9qZWN0IGxpc3RcbiAgICAgICAgdGFiQ29udHJvbGxlcih0YXNrUHJvamVjdCk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFza0R1ZURhdGUgPSAoKSA9PiB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHdhdGNoIGZvciBjaGFuZ2VzIHRvIGR1ZURhdGVcbiAgICBjb25zdCB0YXNrRHVlRGF0ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInRhc2stZHVlRGF0ZS1cIl0nKVxuICAgICk7XG4gICAgdGFza0R1ZURhdGVzLmZvckVhY2goKGR1ZURhdGUpID0+XG4gICAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID1cbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdXG4gICAgICAgICAgICAuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcbiAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIFRhc2sgb2JqZWN0IHdpdGggdGhlIG1hdGNoaW5nIHRpdGxlXG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tNYXN0ZXIudGFza0xpc3QuZmluZEluZGV4KFxuICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2sudGl0bGUgPT09IHRhc2tUaXRsZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XS50YXNrLnByb2plY3Q7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IG5ld0RhdGVGb3JtYXR0ZWQgPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBUYXNrIG9iamVjdCBkdWVEYXRlXG4gICAgICAgICAgdGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdLmNoYW5nZUR1ZURhdGUobmV3RGF0ZUZvcm1hdHRlZCk7XG4gICAgICAgICAgY29uc29sZS5sb2codGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdLnRhc2spO1xuICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICBzdG9yYWdlLnVwZGF0ZUxvY2FsVGFza0R1ZURhdGUodGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdKTtcbiAgICAgICAgICAvLyBSZW9yZGVyIHRoZSB0YXNrTGlzdCBhY2NvcmRpbmcgdG8gbmV3IGRhdGVzXG4gICAgICAgICAgdGFza01hc3Rlci5kYXRlT3JkZXJUYXNrTGlzdCgpO1xuICAgICAgICAgIC8vIENsZWFyIHRoZSB0YXNrLWNvbnRlbnQgRE9NIHNlY3Rpb25cbiAgICAgICAgICByZW1vdmVET01Db250ZW50KHRhc2tDb250ZW50KTtcbiAgICAgICAgICAvLyBSZWxvYWQgdGhlIG5ld2x5IHNvcnRlZCB0YXNrIGNhcmRzXG4gICAgICAgICAgbG9hZFRhc2tDYXJkcy5ydW4odGFza01hc3Rlci50YXNrTGlzdCk7XG4gICAgICAgICAgLy8gUmUtYXR0YWNoIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9ucyB0byBUYXNrIERPTSBvYmplY3RzXG4gICAgICAgICAgcnVuRE9NVGFza0Z1bmN0aW9ucygpO1xuICAgICAgICAgIC8vIERpc3BsYXkgdG8gdGhlIHVwZGF0ZWQgcHJvamVjdCBsaXN0LCB1bmxlc3MgdGhlIHVzZXIgaXMgYWxyZWFkeSBvbiBIb21lIC8gVG9kYXkgL05leHQ3RGF5cyB0YWJcbiAgICAgICAgICB0YWJDb250cm9sbGVyKHRhc2tQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2tQcmlvcml0eSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrUmFkaW9zID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXj1cInRhc2stcmFkaW8tXCJdJylcbiAgICApO1xuICAgIHRhc2tSYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID1cbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgICAgICAgICAuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XG4gICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBUYXNrIG9iamVjdCB3aXRoIHRoZSBtYXRjaGluZyB0aXRsZVxuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrTWFzdGVyLnRhc2tMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAodGFzaykgPT4gdGFzay50YXNrLnRpdGxlID09PSB0YXNrVGl0bGVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb2xkUHJpb3JpdHkgPSB0YXNrTWFzdGVyLnRhc2tMaXN0W3Rhc2tJbmRleF0udGFzay5wcmlvcml0eTtcbiAgICAgICAgdGFza01hc3Rlci50YXNrTGlzdFt0YXNrSW5kZXhdLmNoYW5nZVByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZVxuICAgICAgICBzdG9yYWdlLnVwZGF0ZUxvY2FsVGFza1ByaW9yaXR5KHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XS50YXNrKTtcbiAgICAgICAgLy8gY2hhbmdlIGNzcyBwcmlvcml0eSBsYWJlbHNcbiAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LnJlbW92ZShgJHtvbGRQcmlvcml0eX1gKTtcbiAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBgJHt0YXNrTWFzdGVyLnRhc2tMaXN0W3Rhc2tJbmRleF0udGFzay5wcmlvcml0eX1gXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZXhwYW5kVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRXhwYW5kZXJzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0YXNrLWV4cGFuZC1cIl0nKVxuICAgICk7XG4gICAgdGFza0V4cGFuZGVycy5mb3JFYWNoKChleHBhbmRlcikgPT5cbiAgICAgIGV4cGFuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkTGVmdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXVxuICAgICAgICAgICAgLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID1cbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdXG4gICAgICAgICAgICAuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9XG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1syXTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID1cbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzNdO1xuICAgICAgICBpZiAodGFza0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICAgICAgdGFza0NhcmQuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICAgICAgICB0YXNrQ2FyZC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJcIjtcbiAgICAgICAgICB0YXNrQ2FyZExlZnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgdGFza1Byb2plY3Quc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICAgICAgdGFza1Byb2plY3Quc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgICAgICAgIHRhc2tQcm9qZWN0LnN0eWxlLnpJbmRleCA9IFwiXCI7XG4gICAgICAgICAgdGFza1RpdGxlLnN0eWxlLm1hcmdpblRvcCA9IFwiXCI7XG4gICAgICAgICAgdGFza0RldGFpbHMuc3R5bGUud2hpdGVTcGFjZSA9IFwiXCI7XG4gICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LnJlbW92ZShcImVkaXRhYmxlXCIpO1xuICAgICAgICAgIHRhc2tEZXRhaWxzLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEsIDIpXCI7XG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiNkODI3NzVcIjtcbiAgICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgICAgICAgdGFza0NhcmQuc3R5bGUuaGVpZ2h0ID0gXCJmaXQtY29udGVudFwiO1xuICAgICAgICAgIHRhc2tDYXJkLnN0eWxlLmFsaWduSXRlbXMgPSBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgICB0YXNrQ2FyZExlZnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICB0YXNrUHJvamVjdC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgdGFza1Byb2plY3Quc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xuICAgICAgICAgIHRhc2tQcm9qZWN0LnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuICAgICAgICAgIHRhc2tUaXRsZS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjVweFwiO1xuICAgICAgICAgIHRhc2tEZXRhaWxzLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vcm1hbFwiO1xuICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcbiAgICAgICAgICB0YXNrRGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgIHRhc2tQcmlvcml0eS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tCaW5zID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0YXNrLWRlbGV0ZS1cIl0nKVxuICAgICk7XG4gICAgdGFza0JpbnMuZm9yRWFjaCgoYmluKSA9PlxuICAgICAgYmluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID1cbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdXG4gICAgICAgICAgICAuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPVxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMl0uaW5uZXJUZXh0O1xuICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgVGFzayBvYmplY3Qgd2l0aCB0aGUgbWF0Y2hpbmcgdGl0bGVcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza01hc3Rlci50YXNrTGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgKHRhc2spID0+XG4gICAgICAgICAgICB0YXNrLnRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSAmJiB0YXNrLnRhc2suZGV0YWlscyA9PT0gdGFza0RldGFpbHNcbiAgICAgICAgKTtcbiAgICAgICAgLy8gUmVtb3ZlIFRhc2sgRE9NIG9iamVjdFxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIC8vIFNhdmUgdGhlIGRlbGV0ZWQgVGFzayBmb3IgbGF0ZXIgdXNlXG4gICAgICAgIGRlbGV0ZWRJdGVtcy5wdXNoKHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XSk7XG4gICAgICAgIC8vIFJlbW92ZSBUYXNrIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlTG9jYWxUYXNrKHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XSk7XG4gICAgICAgIC8vIFJlbW92ZSBUYXNrcyBmcm9tIGFwcHJvcHJpYXRlIFByb2plY3QgT2JqZWN0c1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0YXNrTWFzdGVyLnByb2plY3RMaXN0LmZpbmRJbmRleChcbiAgICAgICAgICAocHJvamVjdCkgPT5cbiAgICAgICAgICAgIHByb2plY3QucHJvamVjdC5uYW1lID09PSB0YXNrTWFzdGVyLnRhc2tMaXN0W3Rhc2tJbmRleF0udGFzay5wcm9qZWN0XG4gICAgICAgICk7XG4gICAgICAgIHRhc2tNYXN0ZXIucHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5kZWxUYXNrKFxuICAgICAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3RbdGFza0luZGV4XVxuICAgICAgICApO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIFRhc2sgb2JqZWN0IGZyb20gdGhlIHRhc2tNYXNrZXIudGFza0xpc3QgLS0gdW5uZWNlc3Nhcnkgd2l0aCBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdGFza01hc3Rlci5yZW1vdmVUYXNrKHRhc2tJbmRleCk7XG4gICAgICAgIGxvYWRUYXNrQ2FyZHMuc2V0U2lkZWJhckNvdW50ZXJzKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcnVuRE9NVGFza0Z1bmN0aW9ucyA9ICgpID0+IHtcbiAgICB1cGRhdGVUYXNrQ29tcGxldGVTdGF0dXMoKTtcbiAgICB1cGRhdGVUYXNrUHJvamVjdCgpO1xuICAgIHVwZGF0ZVRhc2tEdWVEYXRlKCk7XG4gICAgdXBkYXRlVGFza1ByaW9yaXR5KCk7XG4gICAgZXhwYW5kVGFzaygpO1xuICAgIGRlbGV0ZVRhc2soKTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcbiAgY29uc3QgYWRkVGFzayA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza051bWJlciA9ICgpID0+IHtcbiAgICAgIGxldCBudW1iZXIgPSBzdG9yYWdlLmdldExvY2FsVGFza3MoKS5sZW5ndGggKyAxO1xuICAgICAgdGFza01hc3Rlci50YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnRhc2sudGl0bGUgPT09IGBuZXdUYXNrICR7bnVtYmVyfWApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgICAgICBudW1iZXIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH07XG4gICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1s5XS5jaGlsZE5vZGVzKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBcIkhvbWVcIjtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBsZXQgcHJvamVjdFNwYW4gPSBwcm9qZWN0LmNoaWxkTm9kZXNbMl07XG4gICAgICBpZiAocHJvamVjdFNwYW4uc3R5bGUuY29sb3IgPT09IFwicmdiKDIxNiwgMzksIDExNylcIikge1xuICAgICAgICBwcm9qZWN0TmFtZSA9IHByb2plY3RTcGFuLnRleHRDb250ZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIENyZWF0ZSBhICdibGFuaycgVGFzayBjYXJkIGZvciB0aGUgdXNlciB0byBmaWxsIGluXG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrTWFzdGVyLmNyZWF0ZVRhc2soXG4gICAgICBgJHtwcm9qZWN0TmFtZX1gLFxuICAgICAgYG5ld1Rhc2sgJHt0YXNrTnVtYmVyKCl9YCxcbiAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLFxuICAgICAgXCJub25lXCIsXG4gICAgICBcInRhc2tEZXRhaWxzXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgLy8gUmVzb3J0IGFuZCByZWxvYWQgdGhlIG5ldyBUYXNrIGNhcmRzXG4gICAgcmVtb3ZlRE9NQ29udGVudCh0YXNrQ29udGVudCk7XG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIG5ldyBUYXNrIGFsd2F5cyBkaXNwbGF5cyBmaXJzdFxuICAgIGxldCBuZXdUYXNrSW5kZXggPSB0YXNrTWFzdGVyLnRhc2tMaXN0LmluZGV4T2YobmV3VGFzayk7XG4gICAgbGV0IHRhc2tUb0Zyb250ID0gdGFza01hc3Rlci50YXNrTGlzdC5zcGxpY2UobmV3VGFza0luZGV4LCAxKTtcbiAgICB0YXNrTWFzdGVyLnRhc2tMaXN0LnVuc2hpZnQodGFza1RvRnJvbnRbMF0pO1xuICAgIGxvYWRUYXNrQ2FyZHMucnVuKHRhc2tNYXN0ZXIudGFza0xpc3QpO1xuICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICB0YWJDb250cm9sbGVyKHByb2plY3ROYW1lKTtcbiAgICAvLyBFeHBhbmQgdGhlIG5ldyBUYXNrIGNhcmRcbiAgICBjb25zdCB0YXNrRXhwYW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJ0YXNrLWV4cGFuZC0wXCJdJyk7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICB0YXNrRXhwYW5kZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJtb3VzZWRvd25cIikpO1xuICAgIH1cbiAgICAvLyBTYXZlIFRhc2sgdG8gbG9jYWxTdG9yYWdlXG4gICAgc3RvcmFnZS5zYXZlTG9jYWxUYXNrKG5ld1Rhc2spO1xuICB9O1xuICBhZGRUYXNrRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgYWRkVGFzayk7XG5cbiAgLy8gUHJvamVjdHNcblxuICBjb25zdCBwcm9qZWN0c1NpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtc2lkZWJhci1saXN0XCIpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0U3R5bGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFZGl0cyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1wcm9qZWN0XCIpXG4gICAgKTtcbiAgICBwcm9qZWN0RWRpdHMuZm9yRWFjaCgoZWRpdCkgPT5cbiAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwcm9qZWN0RWRpdFNldClcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RFZGl0U2V0ID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcImVkaXQtcHJvamVjdFwiKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdC1wcm9qZWN0XCIpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNldC1wcm9qZWN0XCIpO1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzJdO1xuICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWRpdGFibGVcIik7XG4gICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwic2V0LXByb2plY3RcIikge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNldC1wcm9qZWN0XCIpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdFwiKTtcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1syXTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LWVkaXRhYmxlXCIpO1xuICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgLy8gU2V0dXAgbXV0YXRpb24gT2JzZXJ2ZXIgdG8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gUHJvamVjdCBuYW1lcyBhbmQgdXBkYXRlIHRoZSBjb3JyZXNwb25kaW5nIFByb2plY3Qgb2JqZWN0c1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2lkXj1cIlByb2plY3QtXCJdJylcbiAgICApO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkge1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgbXV0YXRlZCBET00gZWxlbWVudCBhbmQgdGV4dCBjb250ZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gbXV0YXRpb24udGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb3VudGVyID1cbiAgICAgICAgICBtdXRhdGlvbi50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIC8vIFVwZGF0ZSBQcm9qZWN0IERPTSBlbGVtZW50IGlkIHRvIG1hdGNoIG5ldyBuYW1lXG4gICAgICAgIHByb2plY3RFbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgYFByb2plY3QtJHttdXRhdGlvbi50YXJnZXQudGV4dENvbnRlbnR9YFxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0Q291bnRlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJpZFwiLFxuICAgICAgICAgIGBwcm9qZWN0LWNvdW50ZXItJHttdXRhdGlvbi50YXJnZXQudGV4dENvbnRlbnR9YFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhtdXRhdGlvbi50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGFza01hc3Rlci5wcm9qZWN0TGlzdC5maW5kSW5kZXgoXG4gICAgICAgICAgKHByb2plY3QpID0+XG4gICAgICAgICAgICBgcHJvamVjdC1vcmlnTmFtZS0ke3Byb2plY3QucHJvamVjdC5vcmlnTmFtZX1gID09PVxuICAgICAgICAgICAgbXV0YXRpb24udGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvbGRQcm9qZWN0TmFtZSA9XG4gICAgICAgICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnByb2plY3QubmFtZTtcbiAgICAgICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLmNoYW5nZU5hbWUoXG4gICAgICAgICAgb2xkUHJvamVjdE5hbWUsXG4gICAgICAgICAgbXV0YXRpb24udGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgICk7XG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgc3RvcmFnZS51cGRhdGVMb2NhbFByb2plY3ROYW1lKFxuICAgICAgICAgIG9sZFByb2plY3ROYW1lLFxuICAgICAgICAgIG11dGF0aW9uLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICApO1xuICAgICAgICAvLyBSZWxvYWQgdGhlIFRhc2sgY2FyZHMgdG8gc2hvdyB0aGUgdXBkYXRlZCBQcm9qZWN0XG4gICAgICAgIHJlbW92ZURPTUNvbnRlbnQodGFza0NvbnRlbnQpO1xuICAgICAgICBsb2FkVGFza0NhcmRzLnJ1bih0YXNrTWFzdGVyLnRhc2tMaXN0KTtcbiAgICAgICAgcnVuRE9NVGFza0Z1bmN0aW9ucygpO1xuICAgICAgICB0YWJDb250cm9sbGVyKG11dGF0aW9uLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBwcm9qZWN0TmFtZXMuZm9yRWFjaCgodGl0bGUpID0+IG9ic2VydmVyLm9ic2VydmUodGl0bGUsIGNvbmZpZykpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEJpbnMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0XCIpXG4gICAgKTtcbiAgICBwcm9qZWN0Qmlucy5mb3JFYWNoKChiaW4pID0+XG4gICAgICBiaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudDtcbiAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIFRhc2sgb2JqZWN0IHdpdGggdGhlIG1hdGNoaW5nIHRpdGxlXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRhc2tNYXN0ZXIucHJvamVjdExpc3QuZmluZEluZGV4KFxuICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3RoZXJQcm9qZWN0cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNcbiAgICAgICAgKTtcbiAgICAgICAgb3RoZXJQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4IC0gMSwgMSk7XG4gICAgICAgIC8vIFJlbW92ZSBUYXNrIERPTSBvYmplY3RcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgLy8gU2F2ZSB0aGUgZGVsZXRlZCBQcm9qZWN0IGZvciBsYXRlciB1c2VcbiAgICAgICAgZGVsZXRlZEl0ZW1zLnB1c2godGFza01hc3Rlci5wcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBQcm9qZWN0IGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlTG9jYWxQcm9qZWN0KHRhc2tNYXN0ZXIucHJvamVjdExpc3RbcHJvamVjdEluZGV4XSk7XG4gICAgICAgIC8vIFJlbW92ZSByZWxldmFudCBQcm9qZWN0IFRhc2tzIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHRhc2tNYXN0ZXIucHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5wcm9qZWN0LnRhc2tzO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza3MpO1xuICAgICAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlTG9jYWxUYXNrKHRhc2spO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBUYXNrIG9iamVjdHMgcmVsYXRlZCB0byB0aGF0IFByb2plY3QgZnJvbSB0aGUgdGFza0xpc3RcbiAgICAgICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICB0YXNrTWFzdGVyLnJlbW92ZVRhc2sodGFza01hc3Rlci50YXNrTGlzdC5pbmRleE9mKHRhc2spKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgUHJvamVjdCBvYmplY3QgZnJvbSB0aGUgdGFza01hc2tlci5wcm9qZWN0TGlzdFxuICAgICAgICB0YXNrTWFzdGVyLnJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBUYXNrIERPTSBvYmplY3RzIHJlbGF0ZWQgdG8gdGhhdCBQcm9qZWN0IGFuZCByZWxvYWQgdGhlIFRhc2sgY2FyZHNcbiAgICAgICAgcmVtb3ZlRE9NQ29udGVudCh0YXNrQ29udGVudCk7XG4gICAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKHRhc2tNYXN0ZXIudGFza0xpc3QpO1xuICAgICAgICBydW5ET01UYXNrRnVuY3Rpb25zKCk7XG4gICAgICAgIHRhYkNvbnRyb2xsZXIoXCJIb21lXCIpO1xuICAgICAgICBsb2FkVGFza0NhcmRzLnNldFNpZGViYXJDb3VudGVycygpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBEeW5hbWljYWxseSBsb2FkIHByb2plY3RzIHRvIHRoZSBzaWRlYmFyIERPTSBlbGVtZW50XG4gICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5wcm9qZWN0Lm5hbWUgPT09IFwiSG9tZVwiKSByZXR1cm47XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIFNldCBpbmRleCB1c2UgZm9yIGxhdGVyIHVzZVxuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgYHByb2plY3Qtb3JpZ05hbWUtJHtwcm9qZWN0LnByb2plY3Qub3JpZ05hbWV9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb3VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY291bnRlckRpdi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJpZFwiLFxuICAgICAgICAgIGBwcm9qZWN0LWNvdW50ZXItJHtwcm9qZWN0LnByb2plY3QubmFtZX1gXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoY291bnRlckRpdik7XG4gICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG4gICAgICAgIC8vIFNldCBwcm9qZWN0TmFtZSBhcyBzcGFuIGZvciBzdHlsaW5nIHB1cnBvc2VzXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIGBQcm9qZWN0LSR7cHJvamVjdC5wcm9qZWN0Lm5hbWV9YCk7XG4gICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVkaXREaXYuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdFwiKTtcbiAgICAgICAgZWRpdERpdi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJpZFwiLFxuICAgICAgICAgIGBlZGl0LSR7dGFza01hc3Rlci5wcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpfWBcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChlZGl0RGl2KTtcbiAgICAgICAgY29uc3QgZGVsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVsZXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVEaXYpO1xuICAgICAgICBwcm9qZWN0c1NpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgIHVwZGF0ZVByb2plY3ROYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQXR0YWNoIERPTSBldmVudCBoYW5kbGVyc1xuICAgIGVkaXRQcm9qZWN0U3R5bGVzKCk7XG4gICAgZGVsZXRlUHJvamVjdCgpO1xuICB9O1xuXG4gIC8vIGxvYWRQcm9qZWN0cygpO1xuICBjb25zdCBhZGRQcm9qZWN0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1wcm9qZWN0XCIpWzBdO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSAoKSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gc3RvcmFnZS5nZXRMb2NhbFByb2plY3RzKCkubGVuZ3RoO1xuICAgICAgdGFza01hc3Rlci5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9qZWN0LnByb2plY3QubmFtZSA9PT0gYFByb2plY3QtJHtudW1iZXJ9YCB8fFxuICAgICAgICAgIHByb2plY3QucHJvamVjdC5vcmlnTmFtZSA9PT0gYFByb2plY3QtJHtudW1iZXJ9YFxuICAgICAgICApIHtcbiAgICAgICAgICBudW1iZXIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH07XG4gICAgY29uc3QgdGhpc1Byb2plY3ROdW1iZXIgPSBwcm9qZWN0TnVtYmVyKCk7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHRhc2tNYXN0ZXIuY3JlYXRlUHJvamVjdChcbiAgICAgIGBQcm9qZWN0LSR7dGhpc1Byb2plY3ROdW1iZXJ9YFxuICAgICk7XG4gICAgLy8gU2F2ZSB0byBsb2NhbFN0b3JhZ2VcbiAgICBzdG9yYWdlLnNhdmVMb2NhbFByb2plY3QoY3JlYXRlUHJvamVjdCk7XG4gICAgcmVtb3ZlRE9NQ29udGVudChwcm9qZWN0c1NpZGViYXIpO1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIGxvYWRUYXNrQ2FyZHMuc2V0U2lkZWJhckNvdW50ZXJzKCk7XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGBlZGl0LSR7dGFza01hc3Rlci5wcm9qZWN0TGlzdC5sZW5ndGggLSAxfWBcbiAgICApO1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgZWRpdFByb2plY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJtb3VzZWRvd25cIikpO1xuICAgIH1cbiAgICBkaXNwbGF5Q29udHJvbGxlcihcIm5ld1Byb2plY3RcIik7XG4gICAgLy8gRGlzcGxheSB0aGUgbmV3IFByb2plY3RcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChgUHJvamVjdC1Qcm9qZWN0LSR7dGhpc1Byb2plY3ROdW1iZXJ9YClcbiAgICAgICAgLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKTtcbiAgICB9XG4gICAgLy8gQWRkIGEgYmxhbmsgVGFzayBjYXJkXG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKTtcbiAgICB9XG4gIH07XG4gIGFkZFByb2plY3RET00uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhZGRQcm9qZWN0KTtcblxuICBjb25zdCB1bmRvRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bmRvXCIpO1xuICBjb25zdCB1bmRvID0gKCkgPT4ge1xuICAgIGlmIChkZWxldGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHVuZG9ET00uc3R5bGUudHJhbnNmb3JtID09PSBcInJvdGF0ZSgtMzYwZGVnKVwiKSB7XG4gICAgICAgIHVuZG9ET00uc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgdW5kb0RPTS5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodW5kb0RPTSkudHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgdW5kb0RPTS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dFwiO1xuICAgICAgdW5kb0RPTS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtMzYwZGVnKVwiO1xuICAgICAgY29uc3QgdW5kb0l0ZW0gPSBkZWxldGVkSXRlbXMucG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhkZWxldGVkSXRlbXMsIHVuZG9JdGVtKTtcbiAgICAgIGlmICh1bmRvSXRlbS50eXBlID09PSBcInRhc2tcIikge1xuICAgICAgICB0YXNrTWFzdGVyLnRhc2tMaXN0LnB1c2godW5kb0l0ZW0pO1xuICAgICAgICB0YXNrTWFzdGVyLmRhdGVPcmRlclRhc2tMaXN0KCk7XG4gICAgICAgIHJlbW92ZURPTUNvbnRlbnQodGFza0NvbnRlbnQpO1xuICAgICAgICBsb2FkVGFza0NhcmRzLnJ1bih0YXNrTWFzdGVyLnRhc2tMaXN0KTtcbiAgICAgICAgcnVuRE9NVGFza0Z1bmN0aW9ucygpO1xuICAgICAgICB0YWJDb250cm9sbGVyKHVuZG9JdGVtLnRhc2sucHJvamVjdCk7XG4gICAgICAgIC8vIGRlbGV0ZWRJdGVtcyA9IFtdO1xuICAgICAgfSBlbHNlIGlmICh1bmRvSXRlbS50eXBlID09PSBcInByb2plY3RcIikge1xuICAgICAgICB0YXNrTWFzdGVyLnByb2plY3RMaXN0LnB1c2godW5kb0l0ZW0pO1xuICAgICAgICByZW1vdmVET01Db250ZW50KHByb2plY3RzU2lkZWJhcik7XG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSB1bmRvSXRlbS5wcm9qZWN0LnRhc2tzO1xuICAgICAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGFza01hc3Rlci50YXNrTGlzdC5wdXNoKHRhc2spKTtcbiAgICAgICAgdGFza01hc3Rlci5kYXRlT3JkZXJUYXNrTGlzdCgpO1xuICAgICAgICByZW1vdmVET01Db250ZW50KHRhc2tDb250ZW50KTtcbiAgICAgICAgbG9hZFRhc2tDYXJkcy5ydW4odGFza01hc3Rlci50YXNrTGlzdCk7XG4gICAgICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIoXCJuZXdQcm9qZWN0XCIpO1xuICAgICAgICAvLyBEaXNwbGF5IHRoZSByZXN0b3JlZCBQcm9qZWN0XG4gICAgICAgIHRhYkNvbnRyb2xsZXIoYFByb2plY3QtJHt1bmRvSXRlbS5wcm9qZWN0Lm5hbWV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB1bmRvRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdW5kbyk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiUHJvamVjdC1cIl0nKTtcbiAgY29uc3Qgc2VhcmNoRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gIGNvbnN0IHJ1blNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUaXRsZSA9IHNlYXJjaERPTS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IG1hdGNoaW5nVGFzayA9IHRhc2tNYXN0ZXIudGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PlxuICAgICAgdGFzay50YXNrLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGl0bGUpXG4gICAgKTtcbiAgICByZW1vdmVET01Db250ZW50KHRhc2tDb250ZW50KTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZWFyY2ggcmVzdWx0czpcIik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0cyk7XG4gICAgaWYgKG1hdGNoaW5nVGFzay5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcIm5vdC1mb3VuZFwiKTtcbiAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKG1hdGNoaW5nVGFzayk7XG4gICAgfVxuICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICBob21lLnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICBob21lLnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgIHRvZGF5LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICB0b2RheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICBuZXh0N0RheXMuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgIG5leHQ3RGF5cy5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgIHByb2plY3Quc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgfSk7XG4gICAgc2VhcmNoRE9NLnZhbHVlID0gXCJcIjtcbiAgfTtcbiAgc2VhcmNoRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWFyY2hcIiwgcnVuU2VhcmNoKTtcblxuICAvLyBkaXNwbGF5Q29udHJvbGxlciBoYW5kbGVzIHRoZSBydW5uaW5nIG9mIHRoZSBkaWZmZXJlbnQgc2lkZWJhciB0YWJzXG4gIGNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdCAhPT0gXCJuZXdQcm9qZWN0XCIpIHtcbiAgICAgIC8vIFJ1biB0aGUgSG9tZSBQcm9qZWN0IG9uIHBhZ2UgbG9hZCAoaW5jbHVkZXMgYWxsIFRhc2tzIGJ5IGRlZmF1bHQpXG4gICAgICBob21lLnN0eWxlLmNvbG9yID0gXCIjZDgyNzc1XCI7XG4gICAgICBob21lLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgIC8vIENoZWNrIGZvciBsb2NhbFN0b3JhZ2UgJiYgbG9hZCBQcm9qZWN0c1xuICAgICAgY29uc3QgbG9jYWxQcm9qZWN0TGlzdCA9IHN0b3JhZ2UuZ2V0TG9jYWxQcm9qZWN0cygpO1xuICAgICAgLy8gTG9hZCBzdG9yZWQgUHJvamVjdHMgdG8gdGhlIHByb2plY3RMaXN0ICYgRE9NXG4gICAgICBsb2NhbFByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBPYmplY3QudmFsdWVzKHByb2plY3QpWzBdLm5hbWU7XG4gICAgICAgIHRhc2tNYXN0ZXIuY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgIH0pO1xuICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAvLyBDaGVjayBmb3IgbG9jYWxTdG9yYWdlICYmIGxvYWQgVGFza3NcbiAgICAgIGNvbnN0IGxvY2FsVGFza0xpc3QgPSBzdG9yYWdlLmdldExvY2FsVGFza3MoKTtcbiAgICAgIGlmIChsb2NhbFRhc2tMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gTG9hZCBzdG9yZWQgVGFza3MgdG8gdGhlIHRhc2tMaXN0ICYgRE9NXG4gICAgICAgIGxvY2FsVGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGxldCBhcmdzID0gT2JqZWN0LnZhbHVlcyhPYmplY3QudmFsdWVzKHRhc2spWzBdKTtcbiAgICAgICAgICB0YXNrTWFzdGVyLmNyZWF0ZVRhc2soLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrTWFzdGVyLmRhdGVPcmRlclRhc2tMaXN0KHRhc2tNYXN0ZXIudGFza0xpc3QpO1xuICAgICAgICBsb2FkVGFza0NhcmRzLnJ1bih0YXNrTWFzdGVyLnRhc2tMaXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKHRhc2tNYXN0ZXIudGFza0xpc3QpO1xuICAgICAgfVxuICAgICAgcnVuRE9NVGFza0Z1bmN0aW9ucygpO1xuICAgIH1cblxuICAgIC8vIEhvbWVcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgICAgdG9kYXkuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgdG9kYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICBuZXh0N0RheXMuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgbmV4dDdEYXlzLnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgIH0pO1xuICAgICAgaG9tZS5zdHlsZS5jb2xvciA9IFwiI2Q4Mjc3NVwiO1xuICAgICAgaG9tZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICByZW1vdmVET01Db250ZW50KHRhc2tDb250ZW50KTtcbiAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKHRhc2tNYXN0ZXIudGFza0xpc3QpO1xuICAgICAgcnVuRE9NVGFza0Z1bmN0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgLy8gVG9kYXlcbiAgICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgICAgdG9kYXlUYXNrcyA9IFtdO1xuICAgICAgdGFza01hc3Rlci50YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsb2FkVGFza0NhcmRzLmlzVG9kYXkodGFzay50YXNrLmR1ZURhdGUpICYmXG4gICAgICAgICAgIXRvZGF5VGFza3MuaW5jbHVkZXModGFzaylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdG9kYXlUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIFNldCBzaWRlYmFyIHN0eWxlcyAmJiByZWxvYWQgVGFza3NcbiAgICAgIGhvbWUuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgaG9tZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgIG5leHQ3RGF5cy5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICBuZXh0N0RheXMuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3Quc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgfSk7XG4gICAgICB0b2RheS5zdHlsZS5jb2xvciA9IFwiI2Q4Mjc3NVwiO1xuICAgICAgdG9kYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgcmVtb3ZlRE9NQ29udGVudCh0YXNrQ29udGVudCk7XG4gICAgICBsb2FkVGFza0NhcmRzLnJ1bih0b2RheVRhc2tzKTtcbiAgICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICB9KTtcblxuICAgIC8vIE5leHQgNyBEYXlzXG4gICAgbGV0IG5leHQ3RGF5c1Rhc2tzID0gW107XG4gICAgbmV4dDdEYXlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgICAgbmV4dDdEYXlzVGFza3MgPSBbXTtcbiAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAobG9hZFRhc2tDYXJkcy5pc05leHRXZWVrKHRhc2sudGFzay5kdWVEYXRlKSkge1xuICAgICAgICAgIG5leHQ3RGF5c1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gU2V0IHNpZGViYXIgc3R5bGVzICYmIHJlbG9hZCBUYXNrc1xuICAgICAgaG9tZS5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICBob21lLnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgdG9kYXkuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgdG9kYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3Quc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgfSk7XG4gICAgICBuZXh0N0RheXMuc3R5bGUuY29sb3IgPSBcIiNkODI3NzVcIjtcbiAgICAgIG5leHQ3RGF5cy5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICByZW1vdmVET01Db250ZW50KHRhc2tDb250ZW50KTtcbiAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKG5leHQ3RGF5c1Rhc2tzKTtcbiAgICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICB9KTtcblxuICAgIC8vIFByb2plY3RzXG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIlByb2plY3QtXCJdJyk7XG4gICAgbGV0IHByb2plY3RUYXNrcyA9IFtdO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJIb21lXCIgfHxcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwiaG9tZS1pY29uXCIgfHxcbiAgICAgICAgICBlLnRhcmdldC5pZCA9PT0gXCJQcm9qZWN0LUhvbWVcIlxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0VGFza3MgPSBbXTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSAvKChbXi1dKi0pKS4qLy5leGVjKHByb2plY3QuaWQpWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2tNYXN0ZXIudGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGlmICh0YXNrLnRhc2sucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIHByb2plY3RUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNldCBQcm9qZWN0IHN0eWxlcyBvbiBzaWRlYmFyICYmIHJlbG9hZCBUYXNrc1xuICAgICAgICBpZiAoZS5pc1RydXN0ZWQpIHtcbiAgICAgICAgICBjb25zdCBvdGhlclByb2plY3RzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHByb2plY3QucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNcbiAgICAgICAgICApO1xuICAgICAgICAgIG90aGVyUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhZyA9IHByb2plY3QuY2hpbGROb2Rlc1syXTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0VGFnLmlubmVyVGV4dCA9PT0gZS50YXJnZXQuaW5uZXJUZXh0KSByZXR1cm47XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvamVjdFRhZy5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgICAgICAgIHByb2plY3RUYWcuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaG9tZS5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgIGhvbWUuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICAgIHRvZGF5LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgdG9kYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICAgIG5leHQ3RGF5cy5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgIG5leHQ3RGF5cy5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5jb2xvciA9IFwiI2Q4Mjc3NVwiO1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgcmVtb3ZlRE9NQ29udGVudCh0YXNrQ29udGVudCk7XG4gICAgICAgIGxvYWRUYXNrQ2FyZHMucnVuKHByb2plY3RUYXNrcyk7XG4gICAgICAgIHJ1bkRPTVRhc2tGdW5jdGlvbnMoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBkaXNwbGF5Q29udHJvbGxlcigpO1xuXG4gIHJldHVybiB7fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlVSTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9SZXRyb2Z1bmtzY3JpcHRwZXJzb25hbHVzZS12NlhPLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9MYXRvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbGlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvdW5kby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy91bmRvcGluay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9ob21lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3RvZGF5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3dlZWsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3Byb2plY3RzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9wcm9qZWN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9jbG9zZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZWRpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2V0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9hZGQtcHJvamVjdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvdHJhc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3Byb2JsZW0tc29sdmluZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZ2l0SHViSWNvbldoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogIzVmMGY0MDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZDgyNzc1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmV0cm9GdW5rc1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcblxcbi8qIEJvZHkgKi9cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMDBweCAxZnIgNTBweCAvIG1pbm1heCgyNTBweCwgMjUlKSAxZnI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5pY29uIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBmb250LWZhbWlseTogXFxcInJldHJvRnVua3NcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIHBhZGRpbmc6IDNweCA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiAxOTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06aG92ZXIge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIzcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDE3cHg7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyICsgaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbiN1bmRvIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3VuZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VuZG86aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJ1bmRvIGRlbGV0ZVxcXCI7XFxuICBsZWZ0OiAtMzBweDtcXG4gIHRvcDogLTM1cHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xcbiAgdG9wOiAxMDBweDtcXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4jUHJvamVjdC1Ib21lLFxcbiN0b2RheSxcXG4jbmV4dC1zZXZlbi1kYXlzLFxcbiNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI1Byb2plY3QtSG9tZTpob3ZlcixcXG4jdG9kYXk6aG92ZXIsXFxuI25leHQtc2V2ZW4tZGF5czpob3ZlcixcXG4jcHJvamVjdC1zaWRlYmFyLWxpc3QgZGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4jcHJvamVjdC1jb3VudGVyLUhvbWUsXFxuI3RvZGF5LWNvdW50ZXIsXFxuI25leHQtc2V2ZW4tZGF5cy1jb3VudGVyLFxcbltpZF49XFxcInByb2plY3QtY291bnRlclxcXCJdLFxcbiNwcm9qZWN0cy1jb3VudGVyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogOXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbn1cXG5cXG4uaG9tZS1pY29uLFxcbi50b2RheS1pY29uLFxcbi5uZXh0LXNldmVuLWRheXMtaWNvbixcXG4ucHJvamVjdHMtaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmhvbWUtaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4udG9kYXktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubmV4dC1zZXZlbi1kYXlzLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0LXNpZGViYXItbGlzdCB7XFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1zaWRlYmFyLWxpc3QgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWF4LXdpZHRoOiA1NSU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4ucHJvamVjdC1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xcbn1cXG5cXG4uc2V0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LFxcbi5lZGl0LXByb2plY3QsXFxuLnNldC1wcm9qZWN0LFxcbi5hZGQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgd2lkdGg6IDEzcHg7XFxuICByaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgd2lkdGg6IDE3cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlcixcXG4uZWRpdC1wcm9qZWN0OmhvdmVyLFxcbi5zZXQtcHJvamVjdDpob3ZlcixcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImRlbGV0ZVxcXCI7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImVkaXRcXFwiO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5zZXQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcInNldFxcXCI7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyOjphZnRlcixcXG4uZWRpdC1wcm9qZWN0OmhvdmVyOjphZnRlcixcXG4uc2V0LXByb2plY3Q6aG92ZXI6OmFmdGVyLFxcbi5wcm9qZWN0LWVkaXRhYmxlOmhvdmVyOjphZnRlcixcXG4uYWRkLXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiAtMzBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImFkZCBwcm9qZWN0XFxcIjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZWRpdGFibGU6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJyZW5hbWVcXFwiO1xcbiAgd2lkdGg6IDM1cHg7XFxuICB0b3A6IC0ycHg7XFxuICBsZWZ0OiAtODVweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICBsZWZ0OiAtMzBweDtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvdHRvbTogNDBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMC41cHggMC41cHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2s6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCBnaG9zdHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZC10YXNrOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiYWRkIGEgbmV3IHRhc2tcXFwiO1xcbiAgbGVmdDogLTExMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBUYXNrIENvbnRlbnQgICovXFxuXFxuI3Rhc2stY29udGVudCB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggI2UwZTBlMDtcXG59XFxuXFxuLm5vbmUgLnByaW9yaXR5LWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5sb3cgLnByaW9yaXR5LWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2FiNWY7XFxufVxcblxcbi5tZWQgLnByaW9yaXR5LWxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzY0MTQ7XFxufVxcblxcbi5oaWdoIC5wcmlvcml0eS1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWEwMzFlO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmNvbXBsZXRlIC5wcmlvcml0eS1sYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzVjO1xcbn1cXG5cXG4uY29tcGxldGUgLnRhc2stcHJvamVjdCB7XFxuICBjb2xvcjogIzBmNGM1YztcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29tcGxldGUgc2VsZWN0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICMwZjRjNWM7XFxufVxcblxcbi5jb21wbGV0ZSAudGFzay10aXRsZSB7XFxuICBjb2xvcjogZ3JleTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29tcGxldGUgLnRhc2stZGV0YWlscyB7XFxuICBjb2xvcjogI2E5YTlhOTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY29tcGxldGUgLmR1ZS1kYXRlIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY29tcGxldGUgI2V4cGFuZCB7XFxuICBjb2xvcjogI2E5YTlhOTtcXG59XFxuXFxuLnRhc2stY2FyZC1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWluLXdpZHRoOiA2NSU7XFxufVxcblxcbi50YXNrLWNhcmQtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMTBweDtcXG4gIG1pbi13aWR0aDogMzUlO1xcbn1cXG5cXG4uY2hlY2tib3gtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uY29udGFpbmVyOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwibWFyayBjb21wbGV0ZVxcXCI7XFxuICBsZWZ0OiAtMzBweDtcXG4gIHRvcDogLTM1cHg7XFxuICB3aWR0aDogNzBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxufVxcblxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM1YztcXG59XFxuXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiA1cHg7XFxuICB0b3A6IDJweDtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4udGFzay1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi50YXNrLXByb2plY3Qgc2VsZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuLnRhc2stcHJvamVjdCBzZWxlY3Q6aG92ZXIge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwZjRjNWM7XFxufVxcblxcbi50YXNrLXByb2plY3Qgc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMGY0YzVjO1xcbn1cXG5cXG4udGFzay1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiZWRpdCB0YXNrIHByb2plY3RcXFwiO1xcbiAgbGVmdDogMTkwcHg7XFxuICB0b3A6IDlweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdGl0bGUsXFxuLmVkaXRhYmxlLFxcbi50YXNrLXByb2plY3Qge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnRhc2stdGl0bGU6ZW1wdHksXFxuLmVkaXRhYmxlOmVtcHR5LFxcbi50YXNrLXByb2plY3Q6ZW1wdHkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmVkaXRhYmxlIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZWRpdGFibGUge1xcbiAgb3V0bGluZTogMC41cHggZG90dGVkICMwZjRjNWM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLXRpdGxlOmhvdmVyLFxcbi5lZGl0YWJsZTpob3ZlcixcXG4ucHJvamVjdC1lZGl0YWJsZTpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkICMwZjRjNWM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi50YXNrLXRpdGxlOmZvY3VzLFxcbi5lZGl0YWJsZTpmb2N1cyxcXG4ucHJvamVjdC1lZGl0YWJsZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggZG90dGVkICMwZjRjNWM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLXRpdGxlOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiZWRpdCB0YXNrIHRpdGxlXFxcIjtcXG4gIGxlZnQ6IDIwMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdGFibGU6aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJlZGl0IHRhc2sgZGV0YWlsc1xcXCI7XFxuICBsZWZ0OiAyMDBweDtcXG4gIHRvcDogMzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBtaW4td2lkdGg6IDBweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC1zaXplOiA5LjVweDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZHVlLWRhdGU6aG92ZXIge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCAjMGY0YzVjO1xcbn1cXG5cXG4uZHVlLWRhdGU6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjMGY0YzVjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZHVlLWRhdGU6aG92ZXI6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJlZGl0IGR1ZSBkYXRlXFxcIjtcXG4gIHJpZ2h0OiAxNDVweDtcXG4gIHRvcDogLTIycHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5bY2xhc3NePVxcXCJleHBhbmRcXFwiXSB7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2NoZXZyb24ucG5nJyk7ICovXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIG1pbi13aWR0aDogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDIpO1xcbn1cXG5cXG5bY2xhc3NePVxcXCJleHBhbmRcXFwiXTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEsIDIpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbltjbGFzc149XFxcImV4cGFuZFxcXCJdOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwic2hvdyBkZXRhaWxzIC8gZWRpdFxcXCI7XFxuICBsZWZ0OiAtMjBweDtcXG4gIHRvcDogLTIwcHg7XFxuICB3aWR0aDogOTBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDAuNSwgMSk7XFxufVxcblxcbltpZF49XFxcInRhc2stZGVsZXRlXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEycHg7XFxuICBtaW4taGVpZ2h0OiAxMnB4O1xcbn1cXG5cXG5baWRePVxcXCJ0YXNrLWRlbGV0ZVxcXCJdOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuW2lkXj1cXFwidGFzay1kZWxldGVcXFwiXTpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcImRlbGV0ZSB0YXNrXFxcIjtcXG4gIGxlZnQ6IC00MnB4O1xcbiAgdG9wOiAtMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMzUlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIGJvdHRvbTogMjAlO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4ucmFkaW8tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmFkaW8tYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ucmFkaW8tY2hlY2ttYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTFweDtcXG4gIHdpZHRoOiAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJhZGlvLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5yYWRpby1jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1jaGVja21hcms6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XFxuICB0b3A6IDMuNXB4O1xcbiAgbGVmdDogMy41cHg7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1mb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYwZjQwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5tYWRlLWJ5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWRlLWJ5IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxufVxcblxcbi5tYWRlLWJ5IGltZyB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2dpdGh1Yi1pY29uIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fICsgXCIpO1xcbiAgbWF4LWhlaWdodDogMTZweDtcXG59XFxuXFxuLm1hZGUtYnkgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsK0RBQTJFO0VBQzNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0RBQXdEO0VBQ3hELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsK0RBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzREFBc0Q7RUFDdEQsaUJBQWlCO0VBQ2pC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OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwREFBcUQ7RUFDckQscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLFdBQVc7O0FBRVg7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaURBQTRDO0VBQzVDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICM1ZjBmNDA7XFxuICAtLWFjY2VudC1jb2xvcjogI2Q4Mjc3NTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInJldHJvRnVua3NcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL1JldHJvZnVua3NjcmlwdHBlcnNvbmFsdXNlLXY2WE8ub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL0xhdG8tUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvTGF0by1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuXFxuLyogQm9keSAqL1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDFmciA1MHB4IC8gbWlubWF4KDI1MHB4LCAyNSUpIDFmcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5oZWFkZXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmljb24ge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2xpc3QucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZXRyb0Z1bmtzXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICBwYWRkaW5nOiAzcHggN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTkwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmhvdmVyIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyM3B4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9zZWFyY2gucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMTdweDtcXG4gIGhlaWdodDogMTdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5idXR0b246aG92ZXIgKyBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuI3VuZG8ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3VuZG8ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiN1bmRvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvdW5kb3BpbmsucG5nXFxcIik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1bmRvOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwidW5kbyBkZWxldGVcXFwiO1xcbiAgbGVmdDogLTMwcHg7XFxuICB0b3A6IC0zNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogMzVweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcXG4gIHRvcDogMTAwcHg7XFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuI1Byb2plY3QtSG9tZSxcXG4jdG9kYXksXFxuI25leHQtc2V2ZW4tZGF5cyxcXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNQcm9qZWN0LUhvbWU6aG92ZXIsXFxuI3RvZGF5OmhvdmVyLFxcbiNuZXh0LXNldmVuLWRheXM6aG92ZXIsXFxuI3Byb2plY3Qtc2lkZWJhci1saXN0IGRpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuI3Byb2plY3QtY291bnRlci1Ib21lLFxcbiN0b2RheS1jb3VudGVyLFxcbiNuZXh0LXNldmVuLWRheXMtY291bnRlcixcXG5baWRePVxcXCJwcm9qZWN0LWNvdW50ZXJcXFwiXSxcXG4jcHJvamVjdHMtY291bnRlciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDlweDtcXG4gIG1hcmdpbi1yaWdodDogLTVweDtcXG59XFxuXFxuLmhvbWUtaWNvbixcXG4udG9kYXktaWNvbixcXG4ubmV4dC1zZXZlbi1kYXlzLWljb24sXFxuLnByb2plY3RzLWljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5ob21lLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9ob21lLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4udG9kYXktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3RvZGF5LnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubmV4dC1zZXZlbi1kYXlzLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy93ZWVrLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMtaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3Byb2plY3RzLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdC1zaWRlYmFyLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuI3Byb2plY3Qtc2lkZWJhci1saXN0IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1heC13aWR0aDogNTUlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnByb2plY3QtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9wcm9qZWN0LnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2Nsb3NlLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9lZGl0LnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XFxufVxcblxcbi5zZXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3NldC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QsXFxuLmVkaXQtcHJvamVjdCxcXG4uc2V0LXByb2plY3QsXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEzcHg7XFxuICB3aWR0aDogMTNweDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvYWRkLXByb2plY3QucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcXG4gIGhlaWdodDogMTdweDtcXG4gIHdpZHRoOiAxN3B4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIsXFxuLmVkaXQtcHJvamVjdDpob3ZlcixcXG4uc2V0LXByb2plY3Q6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJkZWxldGVcXFwiO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5lZGl0LXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJlZGl0XFxcIjtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uc2V0LXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJzZXRcXFwiO1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3Zlcjo6YWZ0ZXIsXFxuLmVkaXQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIsXFxuLnNldC1wcm9qZWN0OmhvdmVyOjphZnRlcixcXG4ucHJvamVjdC1lZGl0YWJsZTpob3Zlcjo6YWZ0ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTBweDtcXG4gIHRvcDogLTMwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJhZGQgcHJvamVjdFxcXCI7XFxuICB3aWR0aDogNTBweDtcXG4gIHRvcDogLTZweDtcXG4gIGxlZnQ6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWVkaXRhYmxlOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwicmVuYW1lXFxcIjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgdG9wOiAtMnB4O1xcbiAgbGVmdDogLTg1cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgbGVmdDogLTMwcHg7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3R0b206IDQwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggZ2hvc3R3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtdGFzazpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcImFkZCBhIG5ldyB0YXNrXFxcIjtcXG4gIGxlZnQ6IC0xMTBweDtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogVGFzayBDb250ZW50ICAqL1xcblxcbiN0YXNrLWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4ICNlMGUwZTA7XFxufVxcblxcbi5ub25lIC5wcmlvcml0eS1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4ubG93IC5wcmlvcml0eS1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhYjVmO1xcbn1cXG5cXG4ubWVkIC5wcmlvcml0eS1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM2NDE0O1xcbn1cXG5cXG4uaGlnaCAucHJpb3JpdHktbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhMDMxZTtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5jb21wbGV0ZSAucHJpb3JpdHktbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM1YztcXG59XFxuXFxuLmNvbXBsZXRlIC50YXNrLXByb2plY3Qge1xcbiAgY29sb3I6ICMwZjRjNWM7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbXBsZXRlIHNlbGVjdCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjMGY0YzVjO1xcbn1cXG5cXG4uY29tcGxldGUgLnRhc2stdGl0bGUge1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbXBsZXRlIC50YXNrLWRldGFpbHMge1xcbiAgY29sb3I6ICNhOWE5YTk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNvbXBsZXRlIC5kdWUtZGF0ZSB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmNvbXBsZXRlICNleHBhbmQge1xcbiAgY29sb3I6ICNhOWE5YTk7XFxufVxcblxcbi50YXNrLWNhcmQtbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1pbi13aWR0aDogNjUlO1xcbn1cXG5cXG4udGFzay1jYXJkLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDEwcHg7XFxuICBtaW4td2lkdGg6IDM1JTtcXG59XFxuXFxuLmNoZWNrYm94LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uY2hlY2ttYXJrIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIm1hcmsgY29tcGxldGVcXFwiO1xcbiAgbGVmdDogLTMwcHg7XFxuICB0b3A6IC0zNXB4O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbn1cXG5cXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjRjNWM7XFxufVxcblxcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAycHg7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnRhc2stcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEyLjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4udGFzay1wcm9qZWN0IHNlbGVjdCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbi50YXNrLXByb2plY3Qgc2VsZWN0OmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMGY0YzVjO1xcbn1cXG5cXG4udGFzay1wcm9qZWN0IHNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzBmNGM1YztcXG59XFxuXFxuLnRhc2stcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcImVkaXQgdGFzayBwcm9qZWN0XFxcIjtcXG4gIGxlZnQ6IDE5MHB4O1xcbiAgdG9wOiA5cHg7XFxuICB3aWR0aDogODBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi5lZGl0YWJsZSxcXG4udGFzay1wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi50YXNrLXRpdGxlOmVtcHR5LFxcbi5lZGl0YWJsZTplbXB0eSxcXG4udGFzay1wcm9qZWN0OmVtcHR5IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5lZGl0YWJsZSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWVkaXRhYmxlIHtcXG4gIG91dGxpbmU6IDAuNXB4IGRvdHRlZCAjMGY0YzVjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlcixcXG4uZWRpdGFibGU6aG92ZXIsXFxuLnByb2plY3QtZWRpdGFibGU6aG92ZXIge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCAjMGY0YzVjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4udGFzay10aXRsZTpmb2N1cyxcXG4uZWRpdGFibGU6Zm9jdXMsXFxuLnByb2plY3QtZWRpdGFibGU6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjMGY0YzVjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay10aXRsZTpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcImVkaXQgdGFzayB0aXRsZVxcXCI7XFxuICBsZWZ0OiAyMDBweDtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRhYmxlOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiZWRpdCB0YXNrIGRldGFpbHNcXFwiO1xcbiAgbGVmdDogMjAwcHg7XFxuICB0b3A6IDMwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgbWluLXdpZHRoOiAwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZvbnQtc2l6ZTogOS41cHg7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmR1ZS1kYXRlOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgIzBmNGM1YztcXG59XFxuXFxuLmR1ZS1kYXRlOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzBmNGM1YztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmR1ZS1kYXRlOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiZWRpdCBkdWUgZGF0ZVxcXCI7XFxuICByaWdodDogMTQ1cHg7XFxuICB0b3A6IC0yMnB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuW2NsYXNzXj1cXFwiZXhwYW5kXFxcIl0ge1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9jaGV2cm9uLnBuZycpOyAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAyKTtcXG59XFxuXFxuW2NsYXNzXj1cXFwiZXhwYW5kXFxcIl06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSBzY2FsZSgxLCAyKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5bY2xhc3NePVxcXCJleHBhbmRcXFwiXTpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcInNob3cgZGV0YWlscyAvIGVkaXRcXFwiO1xcbiAgbGVmdDogLTIwcHg7XFxuICB0b3A6IC0yMHB4O1xcbiAgd2lkdGg6IDkwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgwLjUsIDEpO1xcbn1cXG5cXG5baWRePVxcXCJ0YXNrLWRlbGV0ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvdHJhc2gucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEycHg7XFxuICBtaW4taGVpZ2h0OiAxMnB4O1xcbn1cXG5cXG5baWRePVxcXCJ0YXNrLWRlbGV0ZVxcXCJdOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuW2lkXj1cXFwidGFzay1kZWxldGVcXFwiXTpob3Zlcjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcImRlbGV0ZSB0YXNrXFxcIjtcXG4gIGxlZnQ6IC00MnB4O1xcbiAgdG9wOiAtMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMzUlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIGJvdHRvbTogMjAlO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4ucmFkaW8tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmFkaW8tYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ucmFkaW8tY2hlY2ttYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTFweDtcXG4gIHdpZHRoOiAxMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJhZGlvLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5yYWRpby1jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1jaGVja21hcms6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5yYWRpby1jb250YWluZXIgLnJhZGlvLWNoZWNrbWFyazphZnRlciB7XFxuICB0b3A6IDMuNXB4O1xcbiAgbGVmdDogMy41cHg7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLm5vdC1mb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3Byb2JsZW0tc29sdmluZy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWYwZjQwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5tYWRlLWJ5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogZ2hvc3R3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWRlLWJ5IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxufVxcblxcbi5tYWRlLWJ5IGltZyB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2dpdGh1Yi1pY29uIHtcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9hc3NldHMvZ2l0SHViSWNvbldoaXRlLnBuZ1xcXCIpO1xcbiAgbWF4LWhlaWdodDogMTZweDtcXG59XFxuXFxuLm1hZGUtYnkgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgZGlzcGxheVVJIGZyb20gXCIuL3VpLmpzXCI7XG5cbmxvYWRIb21lO1xuZGlzcGxheVVJO1xuIl0sIm5hbWVzIjpbImZhdmljb24iLCJsb2FkSG9tZSIsImZhdmljb25ET00iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJocmVmIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidGFza01hc3RlciIsImZvcm1hdCIsInN0b3JhZ2UiLCJsb2FkVGFza0NhcmRzIiwiaXNUb2RheSIsImRhdGUiLCJ0b2RheSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImlzTmV4dFdlZWsiLCJuZXh0V2VlayIsInNldFNpZGViYXJDb3VudGVycyIsInByb2plY3RDb3VudGVyIiwiaW5uZXJUZXh0IiwicHJvamVjdExpc3QiLCJsZW5ndGgiLCJmb3JFYWNoIiwicHJvamVjdCIsIm5hbWUiLCJob21lQ291bnRlciIsInRhc2tMaXN0IiwiY291bnRlckVsZW0iLCJpbmRleE9mIiwidGFza3MiLCJ0b2RheUNvdW50ZXIiLCJuZXh0N0RheXNDb3VudGVyIiwidG9kYXlMaXN0Iiwid2Vla0xpc3QiLCJ0YXNrIiwiZHVlRGF0ZSIsInB1c2giLCJ1cGRhdGVUYXNrVGl0bGUiLCJ0YXNrVGl0bGVzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbmZpZyIsImNoYXJhY3RlckRhdGEiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwidGFza0luZGV4IiwiY2FsbGJhY2siLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJ0YXNrRGV0YWlscyIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZmluZEluZGV4IiwiZGV0YWlscyIsImNoYW5nZVRpdGxlIiwidGV4dENvbnRlbnQiLCJ1cGRhdGVMb2NhbFRhc2tUaXRsZSIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInRpdGxlIiwib2JzZXJ2ZSIsInVwZGF0ZVRhc2tEZXRhaWxzIiwidGFza1RpdGxlIiwiY2hhbmdlRGV0YWlscyIsInVwZGF0ZUxvY2FsVGFza0RldGFpbHMiLCJkZXRhaWwiLCJ0YXNrQ29udGVudCIsInJ1biIsInRhc2tEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJpb3JpdHkiLCJzZXRBdHRyaWJ1dGUiLCJ0YXNrQ2FyZExlZnQiLCJwcmlvcml0eUxhYmVsIiwiYXBwZW5kQ2hpbGQiLCJjaGVja2JveFRpdGxlIiwiY29udGFpbmVyIiwiY2hlY2tib3giLCJ0eXBlIiwiaWQiLCJjb21wbGV0ZSIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZSIsImNoZWNrbWFyayIsInByb2plY3RUaXRsZSIsInByb2plY3RMYWJlbCIsInByb2plY3RTZWxlY3QiLCJwcm9qZWN0T3B0aW9uIiwidmFsdWUiLCJkdWVEYXRlVmFsdWUiLCJ1bmRlZmluZWQiLCJ0YXNrQ2FyZFJpZ2h0IiwiZHVlRGF0ZURPTSIsImV4cGFuZCIsImV4cGFuZFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInRyYXNoIiwiaGVhZGVyIiwicmFkaW9CdXR0b25zQ29udGFpbmVyIiwicmFkaW9MYWJlbE9uZSIsInJhZGlvUE9uZSIsInJhZGlvSW5wdXRPbmUiLCJyYWRpb1NwYW5PbmUiLCJyYWRpb0xhYmVsVHdvIiwicmFkaW9QVHdvIiwicmFkaW9JbnB1dFR3byIsInJhZGlvU3BhblR3byIsInJhZGlvTGFiZWxUaHJlZSIsInJhZGlvUFRocmVlIiwicmFkaW9JbnB1dFRocmVlIiwicmFkaW9TcGFuVGhyZWUiLCJyYWRpb0xhYmVsRm91ciIsInJhZGlvUEZvdXIiLCJyYWRpb0lucHV0Rm91ciIsInJhZGlvU3BhbkZvdXIiLCJQcm9qZWN0Iiwib3JpZ05hbWUiLCJjaGFuZ2VOYW1lIiwib2xkTmFtZSIsIm5ld05hbWUiLCJ1cGRhdGVUYXNrUHJvamVjdE5hbWVzIiwiY2hhbmdlTG9jYWxOYW1lIiwiYWRkVGFzayIsImRlbFRhc2siLCJvbGRUYXNrIiwic3BsaWNlIiwiVGFzayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRMb2NhbFRhc2tzIiwidXNlckxpc3QiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwiVGFza09iaiIsInVzZXJUYXNrcyIsIm1hcCIsInNhdmVMb2NhbFRhc2siLCJpdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlTG9jYWxUYXNrIiwiaW5kZXgiLCJ1cGRhdGVMb2NhbFRhc2tQcm9qZWN0IiwicHJvamVjdE5hbWUiLCJjaGFuZ2VQcm9qZWN0IiwidXBkYXRlTG9jYWxUYXNrRHVlRGF0ZSIsImNoYW5nZUR1ZURhdGUiLCJ1cGRhdGVMb2NhbFRhc2tQcmlvcml0eSIsImNoYW5nZVByaW9yaXR5IiwidXBkYXRlTG9jYWxUYXNrQ29tcGxldGVTdGF0dXMiLCJzdGF0dXMiLCJjaGFuZ2VDb21wbGV0ZVN0YXR1cyIsImdldExvY2FsUHJvamVjdHMiLCJzYXZlTG9jYWxQcm9qZWN0IiwidXNlclByb2plY3RzIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUxvY2FsUHJvamVjdCIsInVwZGF0ZUxvY2FsUHJvamVjdE5hbWUiLCJjaGFuZ2VUYXNrUHJvamVjdCIsIm9sZFByb2plY3QiLCJuZXdQcm9qZWN0IiwidGFza1RvQ2hhbmdlIiwib2xkUHJvamVjdEluZGV4IiwidGFza1RvTW92ZSIsIm5ld1Byb2plY3RJbmRleCIsImNyZWF0ZVByb2plY3QiLCJyZW1vdmVQcm9qZWN0IiwiY3JlYXRlVGFzayIsImFyZ3MiLCJuZXdUYXNrIiwiaG9tZVByb2plY3QiLCJ0YXNrUHJvamVjdCIsImZpbmQiLCJyZW1vdmVUYXNrIiwiYmFieVByb2plY3QiLCJzdHVkeVByb2plY3QiLCJ3b3Jrb3V0UHJvamVjdCIsInN0b3JlRGVmYXVsdFByb2plY3RzIiwidG9tb3Jyb3ciLCJzZXREYXRlIiwiaW5UaHJlZURheXMiLCJpblRlbkRheXMiLCJpbjMwRGF5cyIsIndvcmtvdXRUYXNrIiwic3R1ZHlUYXNrIiwiYmFieVRhc2siLCJob21lVGFzayIsInN0b3JlRGVmYXVsdFRhc2tzIiwiZmlsdGVyIiwiZGF0ZU9yZGVyVGFza0xpc3QiLCJzb3J0ZWRUYXNrTGlzdCIsInNvcnQiLCJhIiwiYiIsImNvbXBsZXRlZFRhc2tJbmRleGVzIiwiY29tcGxldGVkVGFza3MiLCJpIiwicmV2ZXJzZSIsImRpc3BsYXlVSSIsImhvbWUiLCJuZXh0N0RheXMiLCJkZWxldGVkSXRlbXMiLCJyZW1vdmVET01Db250ZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwidGFiQ29udHJvbGxlciIsInN0eWxlIiwiY29sb3IiLCJjcmVhdGVFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInVwZGF0ZVRhc2tDb21wbGV0ZVN0YXR1cyIsInRhc2tDaGVja2JveGVzIiwicnVuRE9NVGFza0Z1bmN0aW9ucyIsInVwZGF0ZVRhc2tQcm9qZWN0IiwidGFza1Byb2plY3RzIiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwidXBkYXRlVGFza0R1ZURhdGUiLCJ0YXNrRHVlRGF0ZXMiLCJuZXdEYXRlRm9ybWF0dGVkIiwidXBkYXRlVGFza1ByaW9yaXR5IiwidGFza1JhZGlvcyIsInJhZGlvIiwidGFza0NhcmQiLCJvbGRQcmlvcml0eSIsImV4cGFuZFRhc2siLCJ0YXNrRXhwYW5kZXJzIiwiZXhwYW5kZXIiLCJ0YXNrUHJpb3JpdHkiLCJjb250YWlucyIsInRyYW5zZm9ybSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJkaXNwbGF5Iiwib3BhY2l0eSIsInBvc2l0aW9uIiwiekluZGV4IiwibWFyZ2luVG9wIiwid2hpdGVTcGFjZSIsImRlbGV0ZVRhc2siLCJ0YXNrQmlucyIsImJpbiIsInByb2plY3RJbmRleCIsImFkZFRhc2tET00iLCJ0YXNrTnVtYmVyIiwibnVtYmVyIiwicHJvamVjdHMiLCJwcm9qZWN0U3BhbiIsIm5vdyIsIm5ld1Rhc2tJbmRleCIsInRhc2tUb0Zyb250IiwidW5zaGlmdCIsInRhc2tFeHBhbmRlciIsInByb2plY3RzU2lkZWJhciIsImVkaXRQcm9qZWN0U3R5bGVzIiwicHJvamVjdEVkaXRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImVkaXQiLCJwcm9qZWN0RWRpdFNldCIsInVwZGF0ZVByb2plY3ROYW1lIiwicHJvamVjdE5hbWVzIiwicHJvamVjdEVsZW0iLCJvbGRQcm9qZWN0TmFtZSIsImRlbGV0ZVByb2plY3QiLCJwcm9qZWN0QmlucyIsIm90aGVyUHJvamVjdHMiLCJwcm9qZWN0VGFza3MiLCJsb2FkUHJvamVjdHMiLCJwcm9qZWN0RGl2IiwiY291bnRlckRpdiIsImljb25EaXYiLCJlZGl0RGl2IiwiZGVsZXRlRGl2IiwiYWRkUHJvamVjdERPTSIsImFkZFByb2plY3QiLCJwcm9qZWN0TnVtYmVyIiwidGhpc1Byb2plY3ROdW1iZXIiLCJlZGl0UHJvamVjdCIsImRpc3BsYXlDb250cm9sbGVyIiwidW5kb0RPTSIsInVuZG8iLCJ0cmFuc2l0aW9uIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInVuZG9JdGVtIiwicG9wIiwic2VhcmNoRE9NIiwicnVuU2VhcmNoIiwic2VhcmNoVGl0bGUiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoaW5nVGFzayIsImluY2x1ZGVzIiwic2VhcmNoUmVzdWx0cyIsImltZ0RpdiIsImZvbnRXZWlnaHQiLCJsb2NhbFByb2plY3RMaXN0IiwiT2JqZWN0IiwidmFsdWVzIiwibG9jYWxUYXNrTGlzdCIsInRvZGF5VGFza3MiLCJuZXh0N0RheXNUYXNrcyIsImV4ZWMiLCJpc1RydXN0ZWQiLCJwcm9qZWN0VGFnIl0sInNvdXJjZVJvb3QiOiIifQ==