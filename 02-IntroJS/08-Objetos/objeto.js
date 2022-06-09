const gato = {
  nombre: "alfa",
  alias: "peluchin",
  apodo: "gato bola",
  raza: "Siames",
  edad: 6,
  color: ["blanco", "gris"],
  vacunas: {
    tripefelina: "sí",
    rabia: "no",
  },
};
gato.nombre = "Bolay";

console.log(gato.edad);
console.log(gato["edad"]);

console.log(gato.vacunas.tripefelina.toUpperCase()); // "SÍ"
console.log(gato?.vacunas?.influenza?.toUpperCase());

// DESTRUCTURACIÓN
const { nombre, alias, apodo, raza, edad, color, vacunas } = gato;

/* Es lo mismo que la línea de arriba
const nombre = gato.nombre;
const alias = gato.alias;
const apodo = gato.apodo;
const raza = gato.raza;
const edad = gato.edad;
const color = gato.color;
const vacunas = gato.vacunas; */

console.log(nombre);
console.log(alias);
console.log(apodo);
console.log(raza);
console.log(edad);
console.log(color);
console.log(vacunas);

const miArray = ["string", 4, [], {}];
miArray.length;

// arregloDeStrings
const razas = ["siames", "bengala", "carey", "persa", "bombay", "egipcio"];

// arregloDeNumeros
const pesos = [5, 2, 1, 3, 4];
