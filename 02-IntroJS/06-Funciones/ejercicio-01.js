// La suma de dos valores
const sumaDeDosValores = function (primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
};

console.log(suma(4, 4));
console.log(suma(5, 8));
console.log(suma(2, 1));
console.log(suma(4, 5));
console.log(suma(6, 7));
console.log(suma(8, 9));

// La resta de dos valores
const resta = function (primerNumero, segundoNumero) {
  return primerNumero - segundoNumero;
};

let resultadoDeLaResta = resta(10, 5); // 5
console.log(resultadoDeLaResta);


// La multiplicación de dos valores
const multiplicacion = function (primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
};

let resultadoDeLaMultiplicacion = multiplicacion(1, 5); // 5
console.log(resultadoDeLaMultiplicacion);

console.log(sumaDeDosValores(resultadoDeLaResta, resultadoDeLaMultiplicacion)); // 10


// La división de dos valores
const division = function (primerNumero, segundoNumero) {
  return primerNumero / segundoNumero;
};

// El remanente de dos valores
const remanente = function (primerNumero, segundoNumero) {
  return primerNumero % segundoNumero;
};

// El exponente de dos valores
const exponente = function (primerNumero, segundoNumero) {
  return primerNumero ** segundoNumero;
};
