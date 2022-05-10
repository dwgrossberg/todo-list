import taskMaster from "./taskMaster.js";
import { format } from "date-fns";

const displayUI = (() => {

    const updateTaskCompleteStatus = () => {
        const taskCheckboxes = Array.from(document.querySelectorAll('[id^="task-checkbox-"]'));
        taskCheckboxes.forEach(checkbox => checkbox.addEventListener('change', (e) => {
            // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            console.log(taskArrayIndex);
            if (e.target.checked) {
                taskMaster.taskList[taskArrayIndex].changeCompleteStatus(true);
            } else {
                taskMaster.taskList[taskArrayIndex].changeCompleteStatus(false);
            }
            console.log(taskMaster.taskList[taskArrayIndex].task);
        }));
    }

    const updateTaskTitle = () => {
        // Setup mutation Observer to watch for changes to Task titles and update the corresponding Task objects
        const taskTitles = Array.from(document.querySelectorAll('[id^="task-title-"]'));
        const config = { characterData: true, attributes: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            for (const mutation of mutationsList) {
                // Keep track of mutated DOM element and text content
                console.log(mutation.target.parentNode.id, mutation.target.textContent); 
                // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
                const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(mutation.target.parentNode.id)[0]);
                console.log(taskMaster.taskList[taskArrayIndex].task);
                taskMaster.taskList[taskArrayIndex].changeTitle(mutation.target.textContent);
            }
        }
        const observer = new MutationObserver(callback);
        taskTitles.forEach(title => observer.observe(title, config));
    }

    const updateTaskDetails = () => {
        // Setup mutation Observer to watch for changes to Task titles and update the corresponding Task objects
        const taskDetails = Array.from(document.querySelectorAll('[id^="task-details-"]'));
        const config = { characterData: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
            for (const mutation of mutationsList) {
                // Keep track of mutated DOM element and text content
                console.log(mutation.target.parentNode.id, mutation.target.textContent); 
                // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
                const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(mutation.target.parentNode.id)[0]);
                console.log(taskMaster.taskList[taskArrayIndex].task);
                taskMaster.taskList[taskArrayIndex].changeDetails(mutation.target.textContent);
            }
        }
        const observer = new MutationObserver(callback);
        taskDetails.forEach(detail => observer.observe(detail, config));
    }

    const updateTaskDueDate = () => {
        // Add event listener to watch for changes to dueDate
        const taskDueDates = Array.from(document.querySelectorAll('[id^="task-dueDate-"]'));
        taskDueDates.forEach(dueDate => dueDate.addEventListener('change', (e) => {
            // Get the id # of the Task DOM object - matches the index of Task object in taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            const newDateFormatted = new Date(e.target.value);
            console.log(newDateFormatted);
            // Update the Task object dueDate
            taskMaster.taskList[taskArrayIndex].changeDueDate(newDateFormatted);
            console.log(taskMaster.taskList[taskArrayIndex].task);
            // Reorder the taskList according to new dates
            taskMaster.dateOrderTaskList(taskMaster.taskList);
            console.log(taskMaster.taskList);
            // Clear the task-content DOM section
            while (taskContent.firstChild) {
                taskContent.removeChild(taskContent.lastChild);
            }
            loadTaskCards(taskMaster.taskList);
            // Re-attach event listener functions to Task DOM objects
            updateTaskCompleteStatus();
            updateTaskDueDate();
            updateTaskPriority();
            expandTask();
            deleteTask();
        }));
    }

    const updateTaskPriority = () => {
        taskMaster.taskList.forEach(task => {
            let taskIndex = (taskMaster.taskList.indexOf(task));
            if (task.task.priority === 'none') {
                document.querySelector(`[name="priority-none-${taskIndex}"`).checked = true;
            } else if (task.task.priority === 'low') {
                document.querySelector(`[name="priority-low-${taskIndex}"`).checked = true;
            } else if (task.task.priority === 'med') {
                document.querySelector(`[name="priority-med-${taskIndex}"`).checked = true;
            } else if (task.task.priority === 'high') {
                document.querySelector(`[name="priority-high-${taskIndex}"`).checked = true;
            }
        });
        
    }

    const expandTask = () => {
        const taskExpanders = Array.from(document.querySelectorAll('[id^="task-expand-"]'));
        taskExpanders.forEach(expander => expander.addEventListener('mousedown', (e) => {
            const taskCard = e.target.parentNode.parentNode;
            const taskCardLeft = e.target.parentNode.parentNode.childNodes[0];
            const taskDetails = e.target.parentNode.parentNode.childNodes[0].childNodes[2];
            const taskPriority = e.target.parentNode.parentNode.childNodes[1].childNodes[3];
            if (taskCard.classList.contains('expanded')) {
                e.target.style.transform = '';
                e.target.style.color = '';
                taskCard.classList.remove('expanded');
                taskCard.style.height = '';
                taskCard.style.alignItems = '';
                taskCardLeft.style.display = '';
                taskDetails.style.whiteSpace = '';
                taskDetails.classList.remove('editable');
                taskDetails.setAttribute('contenteditable', 'false');
                taskPriority.style.display = '';
            } else {
                e.target.style.transform = 'rotate(-90deg) scale(1, 2)';
                e.target.style.color = '#d82775';
                taskCard.classList.add('expanded');
                taskCard.style.height = 'fit-content';
                taskCard.style.alignItems = 'flex-start';
                taskCardLeft.style.display = 'block';
                taskDetails.style.whiteSpace = 'normal';
                taskDetails.classList.add('editable');
                taskDetails.setAttribute('contenteditable', 'true');
                taskPriority.style.display = 'flex';
            }
        }));
    }
        
    const deleteTask = () => {
        const taskBins = Array.from(document.querySelectorAll('[id^="task-delete-"]'));
        taskBins.forEach(bin => bin.addEventListener('mousedown', (e) => {
            // Regex parse string to get final id # - corresponds with Task array index in taskMaster.taskList
            const taskArrayIndex = (/(?<=([^-]*-){2}).*/.exec(e.target.id)[0]);
            // Remove Task DOM object
            e.target.parentNode.parentNode.remove();
            // Remove the Task object from the taskMasker.taskList
            taskMaster.removeTask(taskArrayIndex);
            console.log(taskMaster.taskList)
        }));
    }
    
    const taskContent = document.getElementById('task-content');
    const loadTaskCards = (taskList) => {
        // Setup Task cards for display to the DOM
        taskList.forEach(task => {

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.classList.add(task.task.priority); //Add task priority for css manipulation
            taskDiv.setAttribute('id', `task-${taskList.indexOf(task)}`); //Add task id for later deletion, etc.

            // Create the html structure for each Task card
            // Priority color label
            let taskCardLeft = document.createElement('div');
            taskCardLeft.classList.add('task-card-left');
            let priorityLabel = document.createElement('span');
            priorityLabel.classList.add('priority-label');
            taskCardLeft.appendChild(priorityLabel);

            // Completion checkbox
            let checkboxTitle = document.createElement('div');
            checkboxTitle.classList.add('checkbox-title');
            let container = document.createElement('label');
            container.classList.add('container');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `task-checkbox-${taskList.indexOf(task)}`;
            checkbox.name= `task-checkbox-name-${taskList.indexOf(task)}`;
            // Add complete class to existing completed Tasks
            if (task.task.complete === true) {
                taskDiv.classList.add('complete');
                checkbox.checked = true;
            }
            // Add 'complete' class on clicking Task checkbox
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    taskDiv.classList.add('complete');
                } else {
                    taskDiv.classList.remove('complete');
                }
            });
            container.appendChild(checkbox);
            let checkmark = document.createElement('span');
            checkmark.classList.add('checkmark');
            container.appendChild(checkmark);
            checkboxTitle.appendChild(container);

            // Task title
            let taskTitle = document.createElement('p');
            taskTitle.classList.add('task-title');
            taskTitle.setAttribute('id', `task-title-${taskList.indexOf(task)}`)
            taskTitle.setAttribute('contenteditable', 'true')
            taskTitle.innerText = `${task.task.title}`;
            checkboxTitle.appendChild(taskTitle);
            taskCardLeft.appendChild(checkboxTitle);

            // Task details
            let taskDetails = document.createElement('p');
            taskDetails.classList.add('task-details');
            taskDetails.setAttribute('id', `task-details-${taskList.indexOf(task)}`);
            taskDetails.innerText = `${task.task.details}`;
            taskCardLeft.appendChild(taskDetails);
            taskDiv.appendChild(taskCardLeft);

            // Filter out underfined dates before formatting
            let dueDateValue;
            if (task.task.dueDate !== undefined) {
                dueDateValue = format(new Date(task.task.dueDate), 'yyyy-MM-dd');
            } else {
                dueDateValue = 'No Due Date';
            }
            
            // Due Date 
            // Using input type="date" in order to create an interactive
            // date picker that corresponds to each Task object
            let taskCardRight = document.createElement('div');
            taskCardRight.classList.add('task-card-right');
            let dueDateDOM = document.createElement('input');
            dueDateDOM.classList.add('due-date');
            dueDateDOM.setAttribute('id', `task-dueDate-${taskList.indexOf(task)}`);
            dueDateDOM.type = 'date';
            dueDateDOM.value = `${dueDateValue}`;
            taskCardRight.appendChild(dueDateDOM);

            // Expand button
            let expand = document.createElement('div');
            expand.classList.add('expand');
            expand.setAttribute('id', `task-expand-${taskList.indexOf(task)}`);
            let expandText = document.createTextNode('<<');
            expand.appendChild(expandText);
            taskCardRight.appendChild(expand);

            // Delete button
            let trash = document.createElement('div');
            trash.setAttribute('id', `task-delete-${taskList.indexOf(task)}`);
            taskCardRight.appendChild(trash);

            //Priority radio buttons
            let priority = document.createElement('div');
            priority.classList.add('task-priority');
            let header = document.createTextNode('Priority level');
            priority.appendChild(header);
            let radioButtonsContainer = document.createElement('div');
            radioButtonsContainer.classList.add('radio-buttons-container');

            let radioLabelOne = document.createElement('label');
            radioLabelOne.classList.add('radio-container');
            let radioPOne = document.createTextNode('none');
            radioLabelOne.appendChild(radioPOne);
            let radioInputOne = document.createElement('input');
            radioInputOne.type = 'radio';
            radioInputOne.name = `priority-none-${taskList.indexOf(task)}`;
            radioLabelOne.appendChild(radioInputOne);
            let radioSpanOne = document.createElement('span');
            radioSpanOne.classList.add('radio-checkmark');
            radioLabelOne.appendChild(radioSpanOne);
            radioButtonsContainer.appendChild(radioLabelOne);

            let radioLabelTwo = document.createElement('label');
            radioLabelTwo.classList.add('radio-container');
            let radioPTwo = document.createTextNode('low');
            radioLabelTwo.appendChild(radioPTwo);
            let radioInputTwo = document.createElement('input');
            radioInputTwo.type = 'radio';
            radioInputTwo.name = `priority-low-${taskList.indexOf(task)}`;
            radioLabelTwo.appendChild(radioInputTwo);
            let radioSpanTwo = document.createElement('span');
            radioSpanTwo.classList.add('radio-checkmark');
            radioLabelTwo.appendChild(radioSpanTwo);
            radioButtonsContainer.appendChild(radioLabelTwo);

            let radioLabelThree = document.createElement('label');
            radioLabelThree.classList.add('radio-container');
            let radioPThree = document.createTextNode('med');
            radioLabelThree.appendChild(radioPThree);
            let radioInputThree = document.createElement('input');
            radioInputThree.type = 'radio';
            radioInputThree.name = `priority-med-${taskList.indexOf(task)}`;
            radioLabelThree.appendChild(radioInputThree);
            let radioSpanThree = document.createElement('span');
            radioSpanThree.classList.add('radio-checkmark');
            radioLabelThree.appendChild(radioSpanThree);
            radioButtonsContainer.appendChild(radioLabelThree);

            let radioLabelFour = document.createElement('label');
            radioLabelFour.classList.add('radio-container');
            let radioPFour = document.createTextNode('high');
            radioLabelFour.appendChild(radioPFour);
            let radioInputFour = document.createElement('input');
            radioInputFour.type = 'radio';
            radioInputFour.name = `priority-high-${taskList.indexOf(task)}`;
            radioLabelFour.appendChild(radioInputFour);
            let radioSpanFour = document.createElement('span');
            radioSpanFour.classList.add('radio-checkmark');
            radioLabelFour.appendChild(radioSpanFour);
            radioButtonsContainer.appendChild(radioLabelFour);

            priority.appendChild(radioButtonsContainer);
            taskCardRight.appendChild(priority);
            taskDiv.appendChild(taskCardRight);

            // Add Task card to DOM
            taskContent.appendChild(taskDiv);

            // Call TaskTitle function here in order to reattach event
            // listeners to DOM objects each time loadTaskCards runs
            updateTaskTitle();
            updateTaskDetails();

        });
    }

    loadTaskCards(taskMaster.taskList);

    updateTaskCompleteStatus();
    updateTaskDueDate();
    updateTaskPriority();
    expandTask();
    deleteTask();

    return {}

})();

export default displayUI;