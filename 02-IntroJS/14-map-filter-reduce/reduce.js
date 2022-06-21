const arrayNumeros = [1,2,3,100,200,300,1000];

const valorInicial = 0;

const sumarNumeros = function (accumulador, valorActual) {
  return accumulador + valorActual;
}

const resultado = arrayNumeros.reduce(sumarNumeros, valorInicial);
console.log("🚀 ~ file: reduce.js ~ line 10 ~ resultado", resultado); // 1606
