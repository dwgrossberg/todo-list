import Task from "./task.js";

const storage = (() => {
  // If no localStorage, set an empty array with the name of userTasks
  if (localStorage.length === 0) {
    localStorage.setItem("userTasks", "[]");
    localStorage.setItem("userProjects", "[]");
  }

  const getLocalTasks = () => {
    const userList = JSON.parse(localStorage.getItem("userTasks", "[]"));
    const TaskObj = Task();
    // Remove task property in order to not overwrite
    delete TaskObj.task;
    // Map other Task Methods to new JSON objects
    const userTasks = userList.map((task) => {
      return { ...task, ...TaskObj };
    });
    return userTasks;
  };

  const saveLocalTask = (item) => {
    const userTasks = getLocalTasks();
    userTasks.push(item);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const removeLocalTask = (item) => {
    const userTasks = JSON.parse(localStorage.getItem("userTasks", "[]"));
    const index = userTasks.findIndex(
      (task) =>
        task.task.title === item.task.title &&
        task.task.details === item.task.details
    );
    userTasks.splice(index, 1);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const updateLocalTaskProject = (projectName, item) => {
    const userTasks = getLocalTasks();
    const index = userTasks.findIndex(
      (task) =>
        task.task.title === item.task.title &&
        task.task.details === item.task.details
    );
    userTasks[index].task.project = userTasks[index].changeProject(projectName);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const updateLocalTaskTitle = (item) => {
    const userTasks = getLocalTasks();
    const index = userTasks.findIndex(
      (task) =>
        task.task.details === item.task.details &&
        task.task.priority === item.task.priority
    );
    userTasks[index].task.title = userTasks[index].changeTitle(item.task.title);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const updateLocalTaskDueDate = (item) => {
    const userTasks = getLocalTasks();
    const index = userTasks.findIndex(
      (task) =>
        task.task.title === item.task.title &&
        task.task.details === item.task.details
    );
    userTasks[index].task.dueDate = userTasks[index].changeDueDate(
      item.task.dueDate
    );
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const updateLocalTaskPriority = (item) => {
    const userTasks = getLocalTasks();
    const index = userTasks.findIndex(
      (task) =>
        task.task.title === item.task.title &&
        task.task.details === item.task.details
    );
    userTasks[index].task.priority = userTasks[index].changePriority(
      item.task.priority
    );
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const updateLocalTaskDetails = (item) => {
    const userTasks = getLocalTasks();
    const index = userTasks.findIndex(
      (task) =>
        task.task.title === item.task.title &&
        task.task.priority === item.task.priority
    );
    userTasks[index].task.details = userTasks[index].changeDetails(
      item.task.details
    );
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const updateLocalTaskCompleteStatus = (item, status) => {
    const userTasks = getLocalTasks();
    const index = userTasks.findIndex(
      (task) =>
        task.task.title === item.task.title &&
        task.task.details === item.task.details
    );
    userTasks[index].task.complete =
      userTasks[index].changeCompleteStatus(status);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  };

  const getLocalProjects = () => {
    const userList = JSON.parse(localStorage.getItem("userProjects", "[]"));
    return userList;
  };

  const saveLocalProject = (item) => {
    const userProjects = getLocalProjects();
    userProjects.push(item);
    console.log(userProjects);
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
  };

  const removeLocalProject = (item) => {
    const userProjects = getLocalProjects();
    const index = userProjects.findIndex(
      (project) => project.project.name === item.project.name
    );
    userProjects.splice(index, 1);
    console.log(userProjects);
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
  };

  const updateLocalProjectName = (oldName, newName) => {
    const userProjects = JSON.parse(localStorage.getItem("userProjects", "[]"));
    userProjects.map((project) => {
      project.changeLocalName = (name) => {
        project.project.name = name;
      };
    });
    const index = userProjects.findIndex(
      (project) => project.project.name === oldName
    );
    if (userProjects[index]) {
      userProjects[index].changeLocalName(newName);
      localStorage.setItem("userProjects", JSON.stringify(userProjects));
    }
    // Update localStorage Tasks as well
    const userTasks = getLocalTasks();
    userTasks.forEach((task) => {
      if (task.task.project === oldName) {
        task.task.project = task.changeProject(newName);
        localStorage.setItem("userTasks", JSON.stringify(userTasks));
      }
    });
  };

  return {
    getLocalTasks,
    getLocalProjects,
    saveLocalTask,
    removeLocalTask,
    updateLocalTaskProject,
    updateLocalTaskTitle,
    updateLocalTaskDueDate,
    updateLocalTaskPriority,
    updateLocalTaskDetails,
    updateLocalTaskCompleteStatus,
    saveLocalProject,
    removeLocalProject,
    updateLocalProjectName,
  };
})();

export default storage;
