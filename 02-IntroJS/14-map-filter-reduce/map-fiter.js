const arrayObjetos = [
  {
    id: 0,
    usuario: "Oscar",
    password: "asdfzxcv123",
    edad: 18,
    saldo: 500,
  },
  {
    id: 1,
    usuario: "Andres",
    password: "qwerty",
    edad: 19,
    saldo: 501,
  },
  {
    id: 2,
    usuario: "Andres 02",
    password: "qwerty",
    edad: 20,
    saldo: 1502,
  },
  {
    id: 3,
    usuario: "Andres",
    password: "qwerty",
    edad: 21,
    saldo: 503,
  },
  {
    id: 4,
    usuario: "Andres 01",
    password: "qwerty",
    edad: 20,
    saldo: 1504,
  },
]

function obtenerNombresYEdades(item) {
  return {
    nombre: item.usuario,
    saldo: item.saldo,
  }
}

function filterUsuarioConSaldoMayor(item) {
  return item.saldo > 1000;
}

const resultado = arrayObjetos.map(obtenerNombresYEdades).filter(filterUsuarioConSaldoMayor);
console.log("🚀 ~ file: map-fiter.js ~ line 51 ~ resultado", resultado);
