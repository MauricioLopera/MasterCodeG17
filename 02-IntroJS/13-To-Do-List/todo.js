// Create Read Update Delete (CRUD)

/* const tareas = ["asdf", "zxcv", "poiu"]

document.getElementById("agregar").addEventListener("click", agregarTarea);

function crearNuevoItem(texto) {
  document.getElementById('lista').innerHTML += `<li class="listItem">${texto}</li>`;
}

function agregarTarea() {
  const value = document.getElementById('texto').value;

  crearNuevoItem(value);
}

  tareas.forEach(tarea => {
    crearNuevoItem(tarea)
  })
*/

document.getElementById("agregar").addEventListener("click", agregarTarea);

// TODO: cabiar ids por uuids

function generarUuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const tareas = [
  {
    id: 'b804127f-052e-4094-a7a5-a78af3b817ad',
    texto: "Tarea A",
    isChecked: false,
    isEditing: false,
  },
  /* {
    id: 0,
    texto: "Tarea A",
    isChecked: false,
  },
  {
    id: 1,
    texto: "Tarea B",
    isChecked: false,
  },
  {
    id: 2,
    texto: "Tarea C",
    isChecked: false,
  }, */
]

// TODO: convertir functions en "arrow functions"(funciones flecha)
// {
//   id: 0,
//   texto: "Tarea A",
//   isChecked: false,
// }
// PascalCase
const MiLi = function (tarea) {
  if (tarea.isEditing) {
    return `
      <li class="list-group-item">
        <input type="text" id="${tarea.id}">
        <button onclick="editarPorId('${tarea.id}')">Cambiar</button>
      </li>
    `
  } else if (tarea.isChecked) {
    return `<li id="${tarea.id}" class="list-group-item list-group-item-success">
      <input
        onclick="tachar('${tarea.id}')"
        class="form-check-input me-1"
        type="checkbox"
        value="${tarea.id}"
        aria-label="${tarea.id}"
        checked
      >
      ${tarea.texto}
      <button onclick="renderizarInputEnLi('${tarea.id}')">
        Editar
      </button>
      <button onclick="borrarPorId('${tarea.id}')">
        Borrar
      </button>
    </li>`;
  }
  return `<li id="${tarea.id}" class="list-group-item">
    <input
      onclick="tachar('${tarea.id}')"
      class="form-check-input me-1"
      type="checkbox"
      value="${tarea.id}"
      aria-label="${tarea.id}"
    >
    ${tarea.texto}
    <button onclick="renderizarInputEnLi('${tarea.id}')">
      Editar
    </button>
    <button onclick="borrarPorId('${tarea.id}')">
      Borrar
    </button>
  </li>`;
}

// items = [strings]
const MiUl = function (items) {
  return `<ul class="list-group">${items.join("")}</ul>`
}


function renderizar() {
  console.time()
  let nuevasTareas = tareas.map(tarea => MiLi(tarea));
  const element = document.getElementById('contenedor');
  // element.insertAdjacentHTML('beforeend', MiUl(nuevasTareas)); // este repite el contenido una y otra vez
  element.innerHTML = MiUl(nuevasTareas);
  console.timeEnd()
}

function tachar(id) {
  const element = document.getElementById(id);
  // const itemActual = tareas.filter(function (item) { return item.id === id });
  // TODO: analizar arrow function diferencias con function
  const index = tareas.findIndex(item => item.id === id);
  if (tareas[index].isChecked) {
    element.classList.remove("list-group-item-success")
    tareas[index].isChecked = false;
  } else {
    element.classList.add("list-group-item-success")
    tareas[index].isChecked = true;
  }

  // const checkbox = document.querySelector(`[aria-label="${id}"]`);
  // console.log("tachar", event.target.id);
}

function agregarTarea() {
  const value = document.getElementById('texto').value;
  const tarea = {
    id: generarUuid(), // uuid generarUuid
    texto: value,
    isChecked: false,
    isEditing: false,
  };
  tareas.push(tarea);

  renderizar();
}

function renderizarInputEnLi(id) {
  // const index = tareas.findIndex(item => item.id === Number(id));
  const index = tareas.findIndex(item => item.id === id); // con uuid no se tiene que convertir
  tareas[index].isEditing = true;
  
  renderizar();
}

function editarPorId(id) {
  console.log("editar", id);
  // const index = tareas.findIndex(item => item.id === Number(id));
  const index = tareas.findIndex(item => item.id === id); // con uuid no se tiene que convertir
  const texto = document.getElementById(id).value;
  tareas[index].isEditing = false;
  tareas[index].texto = texto;

  renderizar();
}

function borrarPorId(id) {
  // const index = tareas.findIndex(item => item.id === Number(id));
  const index = tareas.findIndex(item => item.id === id); // con uuid no se tiene que convertir
  tareas.splice(index, 1);

  renderizar();
}

renderizar();
