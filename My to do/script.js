function getDateTime() {
  const now = new Date();
  return now.toLocaleString();
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>
      ${taskText}
      <span class="task-time">Added: ${getDateTime()}</span>
    </span>
    <div>
      <button class="action complete" onclick="completeTask(this)">✔</button>
      <button class="action edit" onclick="editTask(this)">✎</button>
      <button class="action delete" onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  document.getElementById("pendingTasks").appendChild(li);
  taskInput.value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.querySelector(".task-time").innerText = "Completed: " + getDateTime();

  button.remove(); // remove complete button from completed list
  document.getElementById("completedTasks").appendChild(li);
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const span = li.querySelector("span");
  const oldText = span.firstChild.textContent.trim();

  const newText = prompt("Edit Task:", oldText);
  if (newText !== null && newText.trim() !== "") {
    span.firstChild.textContent = newText + " ";
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
