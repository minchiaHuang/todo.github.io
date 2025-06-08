
const text = document.querySelector('input');
const addButton = document.getElementById('addTask');
const list = document.querySelector('ul');

let tasksArray = [];
const saved = localStorage.getItem('tasks');
if (saved) {
  tasksArray = JSON.parse(saved);
  for (let i = 0; i < tasksArray.length; i++) {
    const li = document.createElement('li');
    li.textContent = tasksArray[i]
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', function (event) {
      li.remove();
      tasksArray.splice(i, 1)
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

text.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
})

addButton.addEventListener('click', function () {
  let task = text.value.trim("");
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', function (event) {
      li.remove();
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
    text.value = "";
    tasksArray.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }
  s
});

