
const text = document.querySelector('input');
const addButton = document.getElementById('addTask');
const list = document.querySelector('ul');


addButton.addEventListener('click', function () {
  let task = text.value.trim("");

  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
    text.value = "";
  }
});

