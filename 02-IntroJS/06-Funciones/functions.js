// function declaration - declaración de función
function saludar(nombre, apellidoPaterno, apellidoMaterno) {
  console.log(`Hola ${apellidoPaterno} ${apellidoMaterno} ${nombre}`);
}

saludar("Juan", "Pérez", "Lopéz");

// function expression - expreción de función
const saludar = function () {};

// azucar sintactica
// arrow function
const saludar = () => {};
