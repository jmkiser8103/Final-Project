// JavaScript source code
// Final Project - Web 115-0001
// Mark Kiser
// jmkiser@waketech.edu
const taskForm = document.getElementById('taskForm');
const taskManager = document.getElementById('taskmanager');

let tasks = [];
let taskIdCounter = 1;

// Handle form submission
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('taskName').value.trim();
  const priority = document.getElementById('priority').value;
  const isImportant = document.getElementById('isImportant').checked;
  const isCompleted = document.getElementById('isCompleted').checked;
  const date = new Date().toLocaleString();

  if (!name) {
    alert("Task name cannot be empty.");
    return;
  }

  const task = {
    id: taskIdCounter++,
    name,
    priority,
    isImportant,
    isCompleted,
    date
  };

  tasks.push(task);
  renderTasks();
  logTasks();

  taskForm.reset();
});

// Render tasks
function renderTasks() {
  taskManager.innerHTML = '';

  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    if (task.isImportant) taskDiv.classList.add('important');
    if (task.isCompleted) taskDiv.classList.add('completed');

    const content = `
      <div>
        <p class="task-name"><strong>${task.name}</strong></p>
        <p>Priority: ${task.priority}</p>
        <p>Added on: ${task.date}</p>
      </div>
      <div class="task-actions">
        <button onclick="toggleCompletion(${task.id})">${task.isCompleted ? 'Undo' : 'Done'}</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    taskDiv.innerHTML = content;
    taskManager.appendChild(taskDiv);
  });
}

// Toggle task completion
function toggleCompletion(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.isCompleted = !task.isCompleted;
    renderTasks();
    logTasks();
  }
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  logTasks();
}

// Log task list as JSON
function logTasks() {
  console.log(JSON.stringify(tasks, null, 2));
}
