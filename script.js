// Run when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();

  // Add task on Enter key
  document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed when clicked
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    saveTasks();
  }
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}


 
  

  
 

