const usuarios = [
  {
    id: 0,
    nombre: "",
    edad: null,
    esAdulto: true,
  },
  {
    id: 1,
    nombre: "",
    edad: null,
    esVip: true,
  },
  {
    id: 2,
    nombre: "",
    edad: null,
  }
];

// Modificar el nombre del segundo objeto
// indexOf
// find
// findIndex

function validador(element) {
  return element.id === 2
}

const index = usuarios.findIndex(validador)

usuarios[index].nombre = "Carlos";
