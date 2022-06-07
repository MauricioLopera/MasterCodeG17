/* Crea un programa que pregunte al usuario un número.Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */

let valorDelUsuario = prompt("Escribe un número");
console.log("valorDelUsuario", valorDelUsuario, typeof valorDelUsuario);

let numeroDelUsuario = Number(valorDelUsuario);
console.log("numeroDelUsuario", numeroDelUsuario, typeof numeroDelUsuario);

if (typeof(numeroDelUsuario) === "number") {
  for (let i = 1; i <= valorDelUsuario; i++) {
    if(i % 5 === 0) {
      console.log(i);
    }
  }
}
