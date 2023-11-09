function addTask() {
  let taskInput = document.getElementById('new-task');
  let categorySelect = document.getElementById('task-category');
  let taskList = document.getElementById('task-list');

  let taskValue = taskInput.value.trim();
  let categoryValue = categorySelect.value;

  // if(taskInput.value.trim() !== '') {
  if(taskValue !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = 
    `${taskValue} - Category: ${categoryValue}`;
    taskList.appendChild(listItem);
    taskInput.value = '';
    categorySelect.selectedIndex = 0;

    listItem.addEventListener('click', () => toggleTaskComplete(listItem));
  }

  list.addEventListener('click', () => toggleTaskComplete(listItem));
}

function toggleTaskComplete(taskItem) {
  taskItem.classList.toggle('completed');
}

const fetchTasks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Task 1', 'Task 2', 'Task 3']);
    }, 1000);
  });
}

// document.addEventListener('DOMContentLoaded', (event) => {
//   fetchTasks().then(tasks => {
//     tasks.forEach(task => addTaskToDOM(task));
//   });
// });

document.addEventListener('DOMContentLoaded', async (event) => {
  try {
    const tasks = await fetchTasks();
    tasks.forEach(task => addTaskToDOM(task));
  } catch (error) {
    console.error('Failed to fetch tasks: ', error);
  }
});

const addTaskToDOM = (taskContent, taskCategory) => {
  let taskList = document.getElementById('task-list');
  let listItem = document.createElement('li');
  // listItem.textContent = taskContent;
  listItem.textContent = `${taskContent} - Category: ${taskCategory}`;
  taskList.appendChild(listItem);
}

// const saveTask = (taskContent) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Task saved:', taskContent);
//       resolve(taskContent);
//     }, 500);
//   });
// }

const saveTask = async (taskContent, taskCategory) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task saved:', taskContent, 'Category: ', taskCategory);
      resolve({ content: taskContent, category: taskCategory });
    }, 500);
  });
};

// const handleAddTask = () => {
//   let taskInput = document.getElementById('new-task');
//   let taskContent = taskInput.value.trim();

//   if(taskContent) {
//     saveTask(taskContent).then(task => {
//       addTaskToDOM(task);
//       taskInput.value = '';
//     }).catch(error => {
//       console.error('Failed to save task:', error);
//     });
//   }
// }

const handleAddTask = async () => {
  let taskInput = document.getElementById('new-task');
  let categorySelect = document.getElementById('task-category');
  let taskContent = taskInput.value.trim();
  let taskCategory = categorySelect.value;

  if(taskContent) {
    try {
      const task = await saveTask(taskContent, taskCategory);
      addTaskToDOM(task, taskCategory);
      taskInput.value = '';
      categorySelect.selectedIndex = 0;
    }catch (error) {
      console.error('Failed to save task: ', error);
    }
  }
};

// document.addEventListener('DOMContentLoaded', (event) => {
//   const addButton = document.getElementById('add-task-btn');
//   addButton.addEventListener('click', handleAddTask);
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const addButton = document.getElementById('add-task-btn');
  addButton.addEventListener('click', () => handleAddTask());
});