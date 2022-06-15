// Crear un parrafo

const parrafo = document.createElement("p");
const nodeDeTexto = document.createTextNode("Avatar La leyenda de Korra");
parrafo.appendChild(nodeDeTexto);

// parrafo.innerHTML("Avatar La leyenda de Korra");

parrafo.style.color = "red"
parrafo.style.fontFamily = "Arial"

const padre = document.getElementById("padre");
padre.appendChild(parrafo);

// getters
// setters

{/* <a></a> */}
const link = document.createElement("a");
// "Ir a Google"
const linkTexto = document.createTextNode("Ir a Google");
{/* <a>Idiv.padre>ul>r a Google</a> */}
link.appendChild(linkTexto);

// link.click();

// href=""
const linkAtributo = document.createAttribute("href");
// href="https://www.google.com"
linkAtributo.value = "https://www.google.com";
// <a href="https://www.google.com">Ir a Google</a>
link.setAttributeNode(linkAtributo);
padre.appendChild(link);

// Remover elementos
const elementoARemover = document.getElementById("remover")
elementoARemover.remove();
