document.getElementById("agregar").addEventListener("click", crearElementoLista);

function generarLista(texto) {
  document.getElementById('listGroup').innerHTML += `<li class="list-group-item">${texto}</li>`
}

function crearElementoLista() {
  // TODO: limpiar value
  // * validar string vacío
  const value = document.querySelector("#tarea").value;

  generarLista(value)
}