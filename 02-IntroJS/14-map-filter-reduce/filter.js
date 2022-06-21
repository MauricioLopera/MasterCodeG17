const arrayNumeros = [1,2,3,100,200,300,1000];
const arrayObjetos = [
  {
    id: 0,
    usuario: "Oscar",
    password: "asdfzxcv123",
    edad: 18,
  },
  {
    id: 1,
    usuario: "Andres",
    password: "qwerty",
    edad: 20,
  },
  {
    id: 2,
    usuario: "Sonia",
    password: "jkasdflka",
    edad: 15,
  },
]

const filtrarPorCantidad = function(numero) {
  return numero >= 100;
}

const resultado = arrayNumeros.filter(filtrarPorCantidad)
// console.log("🚀 ~ file: filter.js ~ line 8 ~ resultado", resultado) // [100,200,300,1000]

function filtrarMayoresDeEdad(item) {
  return item.edad >= 18
}

const usuariosMayores = arrayObjetos.filter(filtrarMayoresDeEdad)
console.log("usuariosMayores", usuariosMayores);
