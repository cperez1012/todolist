function addTask() {
  let taskInput = document.getElementById('new-task');
  let taskList = document.getElementById('task-list');

  if(taskInput.value.trim() !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = taskInput.value.trim();
    taskList.appendChild(listItem);
    taskInput.value = '';
  }

  list.addEventListener('click', () => toggleTaskComplete(listItem));
}

function toggleTaskComplete(taskItem) {
  taskItem.classList.toggle('completed');
}