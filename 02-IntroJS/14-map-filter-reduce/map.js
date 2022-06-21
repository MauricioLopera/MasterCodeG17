const arrayStrings = ["a", "b", "c"];
const arrayNumeros = [1,2,3];
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
  }
]

/* for (let index = 0; index < arrayStrings.length; index++) {
  const element = arrayStrings[index];
  console.log("🚀 ~ file: map.js ~ line 20 ~ element", element)
}; */

/* function imprimirElementosDelArray(element) {
  console.log("🚀 ~ file: map.js ~ line 20 ~ element", element)
} */

// arrayStrings.forEach(imprimirElementosDelArray)

function obtenerNombres(element) {
  return element.id + ' ' + element.usuario
}

const resultado = arrayObjetos.map(obtenerNombres)
console.log("🚀 ~ file: map.js ~ line 34 ~ resultado", resultado)
// ["OSCAR", "ANDRES"]
