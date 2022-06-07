/*
Crea un programa que solicite al usuario 2 números entre 1 y 50.

Posteriormente mostrar en consola los números del 1 hasta el 50,

pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */

let primerNumero = Number(prompt("Escribe un número entre 1 y 50"));
console.log("primerNumero", primerNumero, typeof(primerNumero))
let segundoNumero = Number(prompt("Escribe otro número entre 1 y 50"));
console.log("segundoNumero", segundoNumero, typeof(segundoNumero))

let contador = 0;

do {
  contador++;

  if (contador === primerNumero || contador === segundoNumero) {
    console.log("!Lotería!");
  } else {
    console.log(contador);
  }
} while (contador < 50);

// while () {};
// do {} while ();

