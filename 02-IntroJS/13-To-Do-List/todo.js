const tareas = ["asdf", "zxcv", "poiu"]

document.getElementById("agregar").addEventListener("click", agregarTarea);

function crearNuevoItem(texto) {
  document.getElementById('lista').innerHTML += `<li class="listItem">${texto}</li>`;
}

function agregarTarea() {
  const value = document.getElementById('texto').value;

  crearNuevoItem(value);
}