document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `${taskText} <button class='delete-btn'>Delete</button>`;

    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}
