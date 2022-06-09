// global
var hi = "Hi"; // scope-function


// scope-bloque
const hola = "Hola";
let bonjour = "Bonjour";

// función
function saludar(nombre) {
  console.log(`Hola ${nombre} desde el bloque de función`);

  for (let index = 0; index < 5; index++) {
    console.log(index);
    console.log(`Hola ${nombre} desde el for`);

    if (index === 2) {
      let genero = "M";
      console.log(`Hola ${nombre} desde el if`);
      console.log(genero);
    }
  }

  console.log(index);
}

// bloque
// {}

// if () {};
// switch () {};

// for () {};
