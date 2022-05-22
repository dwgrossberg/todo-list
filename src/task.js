import taskMaster from "./taskMaster.js";

const Task = (project, title, dueDate, priority, details, complete) => {

    const task = {
        project : project,
        title : title,
        dueDate : new Date(dueDate),
        priority : (priority || 'none'),
        details : (details || ''),
        complete : complete,
    }

    const type = 'task';

    const changeTaskProject = (oldProject, newProject, taskToChange) => {
        // Update  the taskMaster projectList when a Task changes projects
        const oldProjectIndex = taskMaster.projectList.findIndex(project => project.project.name === oldProject);
        const taskIndex = Array.from(taskMaster.projectList[oldProjectIndex].project.tasks).indexOf(taskToChange);
        const taskToMove = taskMaster.projectList[oldProjectIndex].delTask(taskIndex)[0];
        const newProjectIndex = taskMaster.projectList.findIndex(project => project.project.name === newProject);
        taskMaster.projectList[newProjectIndex].addTask(taskToMove);
        return task.project = newProject;
    }

    const changeProject = (project) => {
        return task.project = project;
    }

    const changeTitle = (title) => {
        return task.title = title;
    }

    const changeDueDate = (dueDate) => {
        return task.dueDate = dueDate;
    }

    const changePriority = (priority) => {
        return task.priority = priority;
    }

    const changeDetails = (details) => {
        return task.details = details;
    }

    const changeCompleteStatus = (complete) => {
        return task.complete = complete;
    }

    return {
        task,
        type,
        changeTaskProject,
        changeProject,
        changeTitle,
        changeDueDate,
        changePriority,
        changeDetails,
        changeCompleteStatus
    }
}

export default Task;