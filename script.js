// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const newTask = taskInput.value.trim();

  // Check if input is empty
  if (newTask === "") {
    alert("Please enter a task.");
    return;
  }

  // Check for duplicate tasks (case insensitive)
  const tasks = taskList.getElementsByTagName("li");
  for (let task of tasks) {
    if (task.firstChild.textContent.toLowerCase() === newTask.toLowerCase()) {
      alert("Task already exists!");
      return;
    }
  }

  // Create new list item
  const li = document.createElement("li");

  // Create span for task text
  const taskText = document.createElement("span");
  taskText.textContent = newTask;
  taskText.style.cursor = "pointer";

  // Toggle done/undone on clicking task text
  taskText.onclick = function () {
    this.classList.toggle("done");
  };

  li.appendChild(taskText);

  // Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete";

  // Delete task on clicking delete button
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input box after adding
  taskInput.value = "";
}

// Add event listener for Enter key to add task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
