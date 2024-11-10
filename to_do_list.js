const taskList = [];
document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
  const task = document.getElementById("to-do-input").value;
  const taskDueDate = document.getElementById("date-input").value;

  taskList.push({
    task,
    taskDueDate,
  });

  renderTasks(taskList);
}

function renderTasks(taskList) {
  const taskListContainer = document.getElementById("task-list-container");
  let renderedTasks = "";

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    renderedTasks += `
      <p>
        ${task.task}
        ${task.taskDueDate}
        <button onclick="deleteTask(${i})">Delete</button>
      </p>
    `;
  }
  taskListContainer.innerHTML = renderedTasks;
}

function deleteTask(index) {
  const taskListContainer = document.getElementById("task-list-container");
  taskList.splice(index, 1);
  renderTasks(taskList);
}
