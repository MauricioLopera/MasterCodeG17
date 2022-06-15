// NODOS:
// Elementos
// Atributos
// Texto

// Seleccionar nodos
const elemento = document.getElementById("cielo");
console.log("🚀 ~ file: dom.js ~ line 8 ~ elemento", elemento);
const elementos = document.getElementsByClassName("tierra");
console.log("🚀 ~ file: dom.js ~ line 10 ~ elementos", elementos)


const elemento2 = document.querySelector(".tierra");

const elementos2 = document.querySelectorAll(".tierra");


const elementoDeListaRoja = document.querySelector("li[color='rojo']");
console.log("🚀 ~ file: dom.js ~ line 19 ~ elementoDeListaRoja", elementoDeListaRoja);

elementoDeListaRoja.style.color = "#ff0000";



// document.getElementsByName
// document.getElementByTagName

// Crear nodos

// Agregar nodos

// Borrar nodos

// removeElement

// Sustituirlos