// 1. Select DOM elements at the top
const text = document.querySelector('input');
const addButton = document.getElementById('add-task');
const list = document.querySelector('ul');

// 2. Initialize your tasks array
let tasksArray = [];

// 3. Load tasks from localStorage when the page loads
const saved = localStorage.getItem('tasks');
if (saved) {
  tasksArray = JSON.parse(saved);
}
loadTasks();

// 4. Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

// 5. Function to render a single task
function renderTask(task) {
  const li = document.createElement('li')
  li.textContent = task;
  const deleteBtn = document.createElement('button');
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener('click', function () {
    li.remove();
    let index = tasksArray.indexOf(task);
    if (index > -1) {
      tasksArray.splice(index, 1);
      saveTasks();
    }
  });
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// 6. Function to render all tasks
function loadTasks() {
  list.innerHTML = "";
  tasksArray.forEach(renderTask);
}

// 7. Add task event (when button is clicked)
addButton.addEventListener('click', function () {
  let task = text.value.trim("");
  if (task) {
    tasksArray.push(task);
    saveTasks();
    renderTask(task);
    text.value = "";
  }
});

// 8. Add task event (when Enter is pressed)
text.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    addButton.click();

  }
});

