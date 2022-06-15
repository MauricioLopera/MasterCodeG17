// Escribe en una sola linea un comentario
// Esto es un comentario de una sola linea

// Escribe en varias lineas un comentario que diga bienveni@ a DevF
/***---------
 * Bienvenid@
 * a
 * DevF
 * --------***/

// Declara una variable
var miVariable;
let miVariable;

// Declara y asigna una variable de tipo string
let otraVariable = "palabras lorem"
otraVariable = "palabras nuevas"

// Declara y asigna una variable por cada tipo de dato primitivo
const miCadenaDeCaracteres = 'string asdf asdf "asdf" ñ çÇ¨``´´';
const miBoolean = true;
const miNumero = 4;
const miValorNulo = null;
const miValorNoDefinido = undefined; // valor por defecto de las variable declaradas

// Declara y asigna una variable de los principales datos de objeto(prototipo)
const miArray = [];
const miObjeto = {};
const fechas = new Date();

// Declara cuatro cuatro variable sin asignar valor en una sola línea
let primer, segunda, tercera, cuarta;

// Declara cuatro variable con un valor asignado
let camelCase = 1;
let snake_case = 2;
let PascalCase = 4;
const AMARILLO = 0;
// let kebak-case = 3; no es válido en JS

/* Declara las siguientes variables en multiples lineas y asignales un valor correspondiente
nombre,
primerApellido,
segundoApellido,
ciudad,
numeroDeMascotas,
numeroDePlantas */
const nombre = "Gerardo";
const primerApellido = "Nava";
const segundoApellido = "Pereda";
const ciudad = "Tecámac";
const numeroDeMascotas = 7;
const numeroDePlantas = 5;

/* Declara las siguientes variables en multiples lineas y asignales un valor correspondiente
pero dentro de un objeto literal
nombre,
primerApellido,
segundoApellido,
ciudad,
numeroDeMascotas,
numeroDePlantas */
const misDatos = {
  nombre: "Gerardo",
  primerApellido: "Nava",
  segundoApellido: "Pereda",
  ciudad: "Tecámac",
  numeroDeMascotas: 7,
  numeroDePlantas: 5,
};

/* const {
  nombre,
  primerApellido,
  segundoApellido,
  ciudad,
  numeroDeMascotas,
  numeroDePlantas,
} = misDatos; */

// Declarar una variable que se llame miEdad, y otra que se llame tuEdad y asignar un valor númerico a cada una
const miEdad = 27;
const tuEdad = 22;

console.log(miEdad > tuEdad);
