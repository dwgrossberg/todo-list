"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _favicon = _interopRequireDefault(require("./assets/favicon.ico"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadHome = function () {
  // Set favicon icon
  var faviconDOM = document.querySelector('link[rel~="icon"]');
  faviconDOM.href = _favicon["default"]; // Basic html setup for toDo notes

  var content = document.getElementById("content");
  content.innerHTML = "\n    <div class=\"header\">\n        <div class=\"header-left\">\n            <div class=\"icon\"></div>\n            <h1>toDo lists</h1>\n        </div>\n        <div class=\"header-right\">\n            <div id=\"undo\"></div>\n            <button id=\"search-button\"></button>\n            <input type=\"search\" id=\"search\" placeholder=\"search for a task by title\">\n        </div>\n    </div>\n    \n    <div class=\"sidebar\">\n        <div id=\"Project-Home\">\n            <div id=\"project-counter-Home\"></div>\n            <div class=\"home-icon\"></div>\n            <div class=\"home-text\"><p>Home</p></div>\n        </div>\n        <div id=\"today\">\n            <div id=\"today-counter\"></div>\n            <div class=\"today-icon\"></div>\n            <div class=\"today-text\"><p>Today</p></div>\n        </div>\n        <div id=\"next-seven-days\">\n            <div id=\"next-seven-days-counter\"></div>\n            <div class=\"next-seven-days-icon\"></div>\n            <div class=\"next-seven-days-text\"><p>Next 7 Days</p></div>\n        </div>\n        <div id=\"projects\">\n            <div id=\"projects-counter\"></div>\n            <div class=\"projects-icon\"></div>\n            <div class=\"projects-text\"><p>Projects</p></div>\n            <div class=\"add-project\"></div>\n        </div>\n        <div id=\"project-sidebar-list\"></div>\n        <span id=\"add-task\">+</span>\n    </div>\n\n    <div id=\"task-content\"></div>\n\n    <div class=\"footer\">\n        <div class=\"made-by\">\n            <a href=\"https://www.theodinproject.com/\" target=\"_blank\">\n                <p>The Odin Project</p>\n            </a>\n            <a href=\"https://github.com/dwgrossberg\">\n                <img id=\"github-icon\" src=\"\">\n            </a>\n            <p>Made by Dan Grossberg</p>\n        </div>\n    </div>";
  return {};
}();

var _default = loadHome;
exports["default"] = _default;