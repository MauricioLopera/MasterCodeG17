// Cuente el número de vocales en un string (cadane de caracteres);
const vocales = ["a", "e", "i", "o", "u"];

const contarVocales = function(string) {
  let contadorDeVocales = 0;
  const arregloDeMiNombre = string.split("");
  console.log("Longitud", arregloDeMiNombre.length, "FIN");

  for(let i = 0; i < arregloDeMiNombre.length; i++) {
    if (vocales.includes(arregloDeMiNombre[i])) {
      contadorDeVocales++;
      // contadorDeVocales = contadorDeVocales + 1;
    };
  }
  return contadorDeVocales;
};

const misVocales = contarVocales("Gerardo Nava Pereda");
console.log(misVocales);

function esMultiploDe5(number1, number2) {
  console.log(number1 % 5);
  console.log(number2 % 5);
};

esMultiploDe5(150);
