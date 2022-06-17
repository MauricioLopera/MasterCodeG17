// Declarar un array vacío
const miArray = [];

// Declarar un array con 5 elementos del mismo tipo
const otroArray = ["Gerardo", "Nava", "Pereda", "masculino", "27"];

// Obtener la longitud de mi array anterior e imprimirlo en consola
console.log(otroArray.length); // 5

// Obtener el primer elemento del array en consola
console.log(otroArray[0]);
// console.log(otroArray.shift());

// Obtener el elemento de más enmedio del array
console.log(otroArray[Math.round((otroArray.length - 1) / 2)]);

// Declara una variable con un arreglo que se llame tecnologias web
const tecnologiasWeb = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue",
  "NodeJS",
  "Ruby on Rails",
];

// agregar al final
tecnologiasWeb.push("Redux");
// unshift

// quitar al final
tecnologiasWeb.pop()
// shift

const indexReact = tecnologiasWeb.indexOf("React"); // -1

tecnologiasWeb.splice(indexReact, 1);

console.log("🚀 ~ file: arrays.js ~ line 28 ~ tecnologiasWeb", tecnologiasWeb);


// comprobar si existe un elemento en el aaray de tecnologias
console.log(tecnologiasWeb.includes("React"));

const tecnologiasWeb = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue",
  "NodeJS",
  "Ruby on Rails",
];

// unir 
console.log(tecnologiasWeb.join(', '));

// revertir o voltear
console.log(tecnologiasWeb.reverse().join(', '));

// order
console.log(tecnologiasWeb.sort());

const arrayDeNumeros = [1, 5000, 5555, 465498, 12345, 2, 3, 4, 5, 6, 10];
console.log(arrayDeNumeros.sort((a, b) => a - b));

