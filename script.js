document.addEventListener("DOMContentLoaded", () => {
  let tasksData = [];
  const taskList = document.getElementById("taskList");
  const frame = document.getElementById("contentFrame");

  fetch("data/tasks.json")
    .then((res) => res.json())
    .then((tasks) => {
      tasksData = tasks;
      displayTasks(tasksData);
    });

  function displayTasks(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const btn = document.createElement("button");
      btn.textContent = task.title;
      btn.onclick = () => {
        frame.src = task.file;
      };
      taskList.appendChild(btn);
    });
  }
});
