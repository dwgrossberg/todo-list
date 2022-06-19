"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taskMaster = _interopRequireDefault(require("./taskMaster.js"));

var _loadTaskCards = _interopRequireDefault(require("./loadTaskCards.js"));

var _storage = _interopRequireDefault(require("./storage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

        var taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });

        var taskProject = _taskMaster["default"].taskList[taskIndex].task.project;
        console.log(_taskMaster["default"].taskList[taskIndex].task);

        if (e.target.checked) {
          _taskMaster["default"].taskList[taskIndex].changeCompleteStatus(true); // Update localStorage


          _storage["default"].updateLocalTaskCompleteStatus(_taskMaster["default"].taskList[taskIndex], true); // Move completed Task to end of the list


          _taskMaster["default"].taskList.push(_taskMaster["default"].taskList.splice(taskIndex, 1)[0]);

          removeDOMContent(taskContent);

          _loadTaskCards["default"].run(_taskMaster["default"].taskList);

          runDOMTaskFunctions();
        } else {
          _taskMaster["default"].taskList[taskIndex].changeCompleteStatus(false); // Update localStorage


          _storage["default"].updateLocalTaskCompleteStatus(_taskMaster["default"].taskList[taskIndex], false); // Rerun dateOrderTaskList to reintegrate uncompleted Task into the normal flow


          _taskMaster["default"].dateOrderTaskList();

          removeDOMContent(taskContent);

          _loadTaskCards["default"].run(_taskMaster["default"].taskList);

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

        var taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });

        var task = _taskMaster["default"].taskList[taskIndex];
        var taskProject = _taskMaster["default"].taskList[taskIndex].task.project;

        _taskMaster["default"].taskList[taskIndex].changeTaskProject(taskProject, selectedOption, task); // Update localStorage


        _storage["default"].updateLocalTaskProject(selectedOption, task);

        _loadTaskCards["default"].setSidebarCounters(); // Display the updated project list


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

        var taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });

        var taskProject = _taskMaster["default"].taskList[taskIndex].task.project;

        if (e.target.value !== "") {
          var newDateFormatted = new Date(e.target.value); // Update the Task object dueDate

          _taskMaster["default"].taskList[taskIndex].changeDueDate(newDateFormatted);

          console.log(_taskMaster["default"].taskList[taskIndex].task); // Update localStorage

          _storage["default"].updateLocalTaskDueDate(_taskMaster["default"].taskList[taskIndex]); // Reorder the taskList according to new dates


          _taskMaster["default"].dateOrderTaskList(); // Clear the task-content DOM section


          removeDOMContent(taskContent); // Reload the newly sorted task cards

          _loadTaskCards["default"].run(_taskMaster["default"].taskList); // Re-attach event listener functions to Task DOM objects


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

        var taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle;
        });

        var oldPriority = _taskMaster["default"].taskList[taskIndex].task.priority;

        _taskMaster["default"].taskList[taskIndex].changePriority(e.target.value); // Update localStorage


        _storage["default"].updateLocalTaskPriority(_taskMaster["default"].taskList[taskIndex]);

        console.log(_taskMaster["default"].taskList[taskIndex].task); // change css priority labels

        taskCard.classList.remove("".concat(oldPriority));
        taskCard.classList.add("".concat(_taskMaster["default"].taskList[taskIndex].task.priority));
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

        var taskIndex = _taskMaster["default"].taskList.findIndex(function (task) {
          return task.task.title === taskTitle && task.task.details === taskDetails;
        }); // Remove Task DOM object


        e.target.parentNode.parentNode.remove(); // Save the deleted Task for later use

        deletedItems.push(_taskMaster["default"].taskList[taskIndex]); // Remove Task from localStorage

        _storage["default"].removeLocalTask(_taskMaster["default"].taskList[taskIndex]); // Remove Tasks from appropriate Project Objects


        var projectIndex = _taskMaster["default"].projectList.findIndex(function (project) {
          return project.project.name === _taskMaster["default"].taskList[taskIndex].task.project;
        });

        _taskMaster["default"].projectList[projectIndex].delTask(_taskMaster["default"].taskList[taskIndex]); // Remove the Task object from the taskMasker.taskList -- unnecessary with localStorage


        _taskMaster["default"].removeTask(taskIndex);

        _loadTaskCards["default"].setSidebarCounters();
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
      var number = _storage["default"].getLocalTasks().length + 1;

      _taskMaster["default"].taskList.forEach(function (task) {
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

    var newTask = _taskMaster["default"].createTask("".concat(projectName), "newTask ".concat(taskNumber()), new Date(Date.now()), "none", "taskDetails", false); // Resort and reload the new Task cards


    removeDOMContent(taskContent); // Ensure that the new Task always displays first

    var newTaskIndex = _taskMaster["default"].taskList.indexOf(newTask);

    var taskToFront = _taskMaster["default"].taskList.splice(newTaskIndex, 1);

    _taskMaster["default"].taskList.unshift(taskToFront[0]);

    _loadTaskCards["default"].run(_taskMaster["default"].taskList);

    runDOMTaskFunctions();
    tabController(projectName); // Expand the new Task card

    var taskExpander = document.querySelector('[id="task-expand-0"]');

    if (document.createEvent) {
      taskExpander.dispatchEvent(new Event("mousedown"));
    } // Save Task to localStorage


    _storage["default"].saveLocalTask(newTask);
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
          try {
            var projectElem = mutation.target.parentNode;
            var projectCounter = mutation.target.parentNode.parentNode.childNodes[0]; // Update Project DOM element id to match new name

            projectElem.setAttribute("id", "Project-".concat(mutation.target.textContent));
            projectCounter.setAttribute("id", "project-counter-".concat(mutation.target.textContent));

            var projectIndex = _taskMaster["default"].projectList.findIndex(function (project) {
              return "project-origName-".concat(project.project.origName) === mutation.target.parentNode.parentNode.id;
            });

            var oldProjectName = _taskMaster["default"].projectList[projectIndex].project.name;

            _taskMaster["default"].projectList[projectIndex].changeName(oldProjectName, mutation.target.textContent); // Update localStorage


            _storage["default"].updateLocalProjectName(oldProjectName, mutation.target.textContent); // Reload the Task cards to show the updated Project


            removeDOMContent(taskContent);

            _loadTaskCards["default"].run(_taskMaster["default"].taskList);

            runDOMTaskFunctions();
            tabController(mutation.target.textContent);
          } catch (err) {//Protect against removal of all content by user
          }
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

        var projectIndex = _taskMaster["default"].projectList.findIndex(function (project) {
          return project.project.name === projectName;
        });

        var otherProjects = Array.from(e.target.parentNode.parentNode.childNodes);
        otherProjects.splice(projectIndex - 1, 1); // Remove Task DOM object

        e.target.parentNode.remove(); // Save the deleted Project for later use

        deletedItems.push(_taskMaster["default"].projectList[projectIndex]); // Remove the Project from localStorage

        _storage["default"].removeLocalProject(_taskMaster["default"].projectList[projectIndex]); // Remove relevant Project Tasks from localStorage


        var projectTasks = _taskMaster["default"].projectList[projectIndex].project.tasks;
        console.log(projectTasks);
        projectTasks.forEach(function (task) {
          _storage["default"].removeLocalTask(task);
        }); // Remove the Task objects related to that Project from the taskList

        projectTasks.forEach(function (task) {
          _taskMaster["default"].removeTask(_taskMaster["default"].taskList.indexOf(task));
        }); // Remove the Project object from the taskMasker.projectList

        _taskMaster["default"].removeProject(projectIndex); // Remove the Task DOM objects related to that Project and reload the Task cards


        removeDOMContent(taskContent);

        _loadTaskCards["default"].run(_taskMaster["default"].taskList);

        runDOMTaskFunctions();
        tabController("Home");

        _loadTaskCards["default"].setSidebarCounters();
      });
    });
  };

  var loadProjects = function loadProjects() {
    // Dynamically load projects to the sidebar DOM element
    _taskMaster["default"].projectList.forEach(function (project) {
      if (project.project.name === "Home") return;else {
        var projectDiv = document.createElement("div"); // Set index use for later use

        projectDiv.setAttribute("id", "project-origName-".concat(project.project.origName));
        var counterDiv = document.createElement("div");
        counterDiv.setAttribute("id", "project-counter-".concat(project.project.name));
        projectDiv.appendChild(counterDiv);
        var iconDiv = document.createElement("div");
        iconDiv.classList.add("project-icon");
        projectDiv.appendChild(iconDiv); // Set projectName as span for styling purposes

        var containerDiv = document.createElement("div");
        containerDiv.setAttribute("contentEditable", false);
        containerDiv.classList.add("project-name-container");
        var projectName = document.createElement("span");
        projectName.classList.add("project-name");
        projectName.setAttribute("id", "Project-".concat(project.project.name));
        projectName.innerText = project.project.name;
        containerDiv.appendChild(projectName);
        projectDiv.appendChild(containerDiv);
        var editDiv = document.createElement("div");
        editDiv.classList.add("edit-project");
        editDiv.setAttribute("id", "edit-".concat(_taskMaster["default"].projectList.indexOf(project)));
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
      var number = _storage["default"].getLocalProjects().length;

      _taskMaster["default"].projectList.forEach(function (project) {
        if (project.project.name === "Project-".concat(number) || project.project.origName === "Project-".concat(number)) {
          number += 1;
        }
      });

      return number;
    };

    var thisProjectNumber = projectNumber();

    var createProject = _taskMaster["default"].createProject("Project-".concat(thisProjectNumber)); // Save to localStorage


    _storage["default"].saveLocalProject(createProject);

    removeDOMContent(projectsSidebar);
    loadProjects();

    _loadTaskCards["default"].setSidebarCounters();

    var editProject = document.getElementById("edit-".concat(_taskMaster["default"].projectList.length - 1));

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
        _taskMaster["default"].taskList.push(undoItem);

        _taskMaster["default"].dateOrderTaskList();

        removeDOMContent(taskContent);

        _loadTaskCards["default"].run(_taskMaster["default"].taskList);

        runDOMTaskFunctions();
        tabController(undoItem.task.project); // deletedItems = [];
      } else if (undoItem.type === "project") {
        _taskMaster["default"].projectList.push(undoItem);

        removeDOMContent(projectsSidebar);
        loadProjects();
        var projectTasks = undoItem.project.tasks;
        projectTasks.forEach(function (task) {
          return _taskMaster["default"].taskList.push(task);
        });

        _taskMaster["default"].dateOrderTaskList();

        removeDOMContent(taskContent);

        _loadTaskCards["default"].run(_taskMaster["default"].taskList);

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

    var matchingTask = _taskMaster["default"].taskList.filter(function (task) {
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
      _loadTaskCards["default"].run(matchingTask);
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

      var localProjectList = _storage["default"].getLocalProjects(); // Load stored Projects to the projectList & DOM


      localProjectList.forEach(function (project) {
        var name = Object.values(project)[0].name;

        _taskMaster["default"].createProject(name);
      });
      loadProjects(); // Check for localStorage && load Tasks

      var localTaskList = _storage["default"].getLocalTasks();

      if (localTaskList.length > 0) {
        // Load stored Tasks to the taskList & DOM
        localTaskList.forEach(function (task) {
          var args = Object.values(Object.values(task)[0]);

          _taskMaster["default"].createTask.apply(_taskMaster["default"], _toConsumableArray(args));
        });

        _taskMaster["default"].dateOrderTaskList(_taskMaster["default"].taskList);

        _loadTaskCards["default"].run(_taskMaster["default"].taskList);
      } else {
        _loadTaskCards["default"].run(_taskMaster["default"].taskList);
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

      _loadTaskCards["default"].run(_taskMaster["default"].taskList);

      runDOMTaskFunctions();
    }); // Today

    var todayTasks = [];
    today.addEventListener("mousedown", function () {
      todayTasks = [];

      _taskMaster["default"].taskList.forEach(function (task) {
        if (_loadTaskCards["default"].isToday(task.task.dueDate) && !todayTasks.includes(task)) {
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

      _loadTaskCards["default"].run(todayTasks);

      runDOMTaskFunctions();
    }); // Next 7 Days

    var next7DaysTasks = [];
    next7Days.addEventListener("mousedown", function () {
      next7DaysTasks = [];

      _taskMaster["default"].taskList.forEach(function (task) {
        if (_loadTaskCards["default"].isNextWeek(task.task.dueDate)) {
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

      _loadTaskCards["default"].run(next7DaysTasks);

      runDOMTaskFunctions();
    }); // Projects

    var projects = document.querySelectorAll('[id^="Project-"]');
    var projectTasks = [];
    projects.forEach(function (project) {
      return project.addEventListener("mousedown", function (e) {
        if (e.target.innerText === "Home" || e.target.classList[0] === "home-icon" || e.target.id === "Project-Home") return;
        projectTasks = [];
        var projectName = project.id.split("-")[1];

        _taskMaster["default"].taskList.forEach(function (task) {
          if (task.task.project === projectName) {
            projectTasks.push(task);
          }
        }); // Set Project styles on sidebar && reload Tasks


        if (e.isTrusted) {
          var otherProjects = Array.from(project.parentNode.parentNode.parentNode.childNodes);
          otherProjects.forEach(function (project) {
            var projectTag = project.childNodes[2].childNodes[0]; // Span

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

        _loadTaskCards["default"].run(projectTasks);

        runDOMTaskFunctions();
      });
    });
  };

  displayController();
  return {};
}();

var _default = displayUI;
exports["default"] = _default;