const circulos = document.querySelectorAll('.circulo');
let luzActiva = 0;

setInterval(() => {
  cambiarLuz();
}, 2000);

function cambiarLuz() {
  // apagamos el color de la luz activa
  circulos[luzActiva].className = 'circle';

  // reasignamos el valor de la luz activa
  luzActiva++;

  if(luzActiva > 2) {
    luzActiva = 0;
  }

  const luzActual = circulos[luzActiva]
  
  luzActual.classList.add(luzActual.getAttribute('color'));
}