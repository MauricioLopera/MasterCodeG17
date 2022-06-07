/*

Solicitar al usuario que ingrese tres números

y mostrar cuál de los tres es el número mayor.

Considerar el caso en que 2 números sean iguales.
 */

let primerValor = 5;
let segundoValor = 10;
let tercerValor =20;

// validación isNaN

let primerNumero = Number(primerValor);
let segundoNumero = Number(segundoValor);
let tercerNumero = Number(tercerValor);

const arregloDeNumeros = [primerNumero, segundoNumero, tercerNumero];

const ordenarNumeros = arregloDeNumeros.sort(function compare(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  // a must be equal to b
  return 0;
});

let numeroMayor = null;

for(let i = 0; arregloDeNumeros.length > 0; i++) {
  let valorActual = arregloDeNumeros[i];
  let valorAnterior = arregloDeNumeros[i - 1];

  if (valorActual > valorAnterior) {
    numeroMayor = valorActual;
  } else if (valorActual === valorAnterior) {
    numeroMayor = valorAnterior;
  } else {
    numeroMayor = valorAnterior;
  }
}

console.log(`El número mayor es ${numeroMayor}`);
