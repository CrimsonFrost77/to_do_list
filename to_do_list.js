const taskList = [];
document.getElementById("add-task-button").addEventListener("click", addTask);

function addTask() {
  let taskInputElement = document.getElementById("to-do-input");
  const task = taskInputElement.value;
  let dueDateElement = document.getElementById("date-input");
  const taskDueDate = dueDateElement.value;

  taskList.push({
    task,
    taskDueDate,
  });
  taskInputElement.value = "";
  dueDateElement.value = "";
  renderTasks(taskList);
}

function renderTasks(taskList) {
  const taskListContainer = document.getElementById("task-list-container");
  let renderedTasks = "";

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    renderedTasks += `
        <div>
          ${task.task}
        </div>
        <div>
          ${task.taskDueDate}
        </div>
        <button class="delete-task-button" onclick="deleteTask(${i})">Delete</button>
    `;
  }
  taskListContainer.innerHTML = renderedTasks;
}

function deleteTask(index) {
  const taskListContainer = document.getElementById("task-list-container");
  taskList.splice(index, 1);
  renderTasks(taskList);
}
