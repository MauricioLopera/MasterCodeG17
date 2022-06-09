// const colores = ["green", "red", "yellow"];

const green = "green";
const red = "red";
const yellow = "yellow";

const colores = {
  green,
  red,
  yellow,
};

const indicadores = {
  ROJO: 3,
  AMARILLO: 2,
  VERDE: 1,
}

const { ROJO, AMARILLO, VERDE } = indicadores;

// const ROJO = 3;
// const AMARILLO = 2;
// const VERDE = 1;

const colorApagado = "#ececec";
// let color;
// let luzActual = -1;
// let siguienteLuz;
// let anteriorLuz;

const semaforo = {
  color: "red",
  luzActual: ROJO,
  siguienteLuz: "rojo",
  anteriorLuz: "",
}

const { color, siguienteLuz, anteriorLuz, luzActual } = semaforo;

function cambiarLuz() {
  switch (luzActual) {
    case ROJO:
      color = "green";
      siguienteLuz = "verde";
      anteriorLuz = "rojo";
      luzActual = VERDE;
      break;
    case VERDE:
      color = "yellow";
      siguienteLuz = "amarillo";
      anteriorLuz = "verde";
      luzActual = AMARILLO;
      break;
    case AMARILLO:
      color = "red";
      siguienteLuz = "rojo";
      anteriorLuz = "amarillo";
      luzActual = ROJO;
      break;
    default:
      color = "red";
      siguienteLuz = "rojo";
      luzActual = ROJO;
      break;
  }

  const prederLuz = document.getElementById(siguienteLuz);
  prederLuz.style.backgroundColor = color;

  const apagarLuz = document.getElementById(anteriorLuz);
  apagarLuz.style.backgroundColor = colorApagado;
  /* Es posible agregar un atributo de estilo con un valor a un elemento con setAttribute,
  pero no se recomienda porque puede sobrescribir las otras propiedades existentes,
  en el atributo de estilo. */
  // elem.setAttribute("style", "background-color: red;");
}

setInterval(cambiarLuz, 2000);
// cambiarLuz();
