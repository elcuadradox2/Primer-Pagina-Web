const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.querySelector("#taskList ul");

// Agregar tarea
function addTask() {
  const taskName = prompt("Ingrese la tarea");
  if (taskName !== null && taskName !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `<span>${taskName}</span>
      <button class="delete">Eliminar</button>
      <button class="update">Actualizar</button>`;
    taskList.appendChild(newTask);
  }
}

// Actualizar tarea
function updateTask(event) {
  const taskName = prompt("Ingrese el nuevo nombre de la tarea", event.target.parentNode.querySelector("span").innerText);
  if (taskName !== null && taskName !== "") {
    event.target.parentNode.querySelector("span").innerText = taskName;
  }
}

// Eliminar tarea
function deleteTask(event) {
  if (confirm("¿Está seguro de que desea eliminar esta tarea?")) {
    event.target.parentNode.remove();
  }
}

// Escuchar evento click en el botón Agregar tarea
addTaskBtn.addEventListener("click", addTask);

// Escuchar evento click en el botón Actualizar tarea
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("update")) {
    updateTask(event);
  }
});

// Escuchar evento click en el botón Eliminar tarea
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    deleteTask(event);
  }
});