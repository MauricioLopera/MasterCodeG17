// declarar un objeto de perro
const perro = {
  // id
  nombre: "",
  patas: null,
  color: "chocolate",
  edad: 6,
  ladrar: function () {
    return "gua gua";
  },
};

// 
console.log(perro.nombre); // "choco"

perro.nombre = "chocolata"

console.log(perro.nombre); // "chocolata"

perro.id = 0;

console.log(perro.id); // 0

console.log(perro.ladrar()); // gua gua

