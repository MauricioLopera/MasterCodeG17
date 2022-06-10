const parrafo = document.createElement("p");

const nodeDeTexto = document.createTextNode("Avatar La leyenda de Korra");
parrafo.appendChild(nodeDeTexto);

const padre = document.getElementById("padre");
padre.appendChild(parrafo);