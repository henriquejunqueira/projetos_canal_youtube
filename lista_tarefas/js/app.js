const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const taskInput = document.getElementById('task');

  const task = taskInput.value.trim();

  if (!task) return alert('Digite uma tarefa válida!');

  renderTask(task);
  saveTask(task);

  taskInput.value = '';
}

function renderTask(task) {
  const li = document.createElement('li');

  li.innerHTML = `${task} <span class="remove" onclick="removeTask(this)">X</span>`;

  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(element) {
  const task = element.parentElement.firstChild.textContent.trim();

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks = tasks.filter((t) => t !== task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  element.parentElement.remove();
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach((task) => renderTask(task));
}
