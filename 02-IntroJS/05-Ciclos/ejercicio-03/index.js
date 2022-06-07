/*
Solicitar al usuario que ingrese tres números

y mostrar cuál de los tres es el número mayor.

Considerar el caso en que 2 números sean iguales.
*/

let primerValor = prompt("Ingresa un número");
let segundoValor = prompt("Ingresa otro número");
let tercerValor = prompt("Ingresa un último número");

// validación isNaN

let primerNumero = Number(primerValor);
let segundoNumero = Number(segundoValor);
let tercerNumero = Number(tercerValor);

const arregloDeNumeros = [primerNumero, segundoNumero, tercerNumero];
console.log("arregloDeNumeros", arregloDeNumeros);

const arregloOrdenado = arregloDeNumeros.sort(function comparar(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a es igual que b
  return 0;
});
console.log("arregloOrdenado", arregloOrdenado);

let numeroMayor = null;

for (let i = 0; i < arregloDeNumeros.length; i++) {
  let valorActual = arregloDeNumeros[i];
  let valorAnterior = arregloDeNumeros[i - 1];

  if (valorActual > valorAnterior) {
    numeroMayor = valorActual;
  } else if (valorActual < valorAnterior) {
    numeroMayor = valorAnterior;
  }
  // los dos valores son iguales
}

console.log(`El número mayor es ${numeroMayor}`);
