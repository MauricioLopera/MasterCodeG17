// setInterval(cambiarLuz, 2000);

// const colores = [];
const colores = {
  verde: "green",
  rojo: "red",
  amarillo: "yellow",
};

function cambiarLuz(name) {
  console.log("🚀 ~ file: index.js ~ line 6 ~ cambiarLuz ~ name", name);
  const elem = document.getElementById(name);
  console.log("🚀 ~ file: index.js ~ line 8 ~ cambiarLuz ~ elem", elem);
  elem.style.backgroundColor = colores[name];
  // Es posible agregar un atributo de estilo con un valor a un elemento, pero no se recomienda porque puede sobrescribir otras propiedades en el atributo de estilo.
  // elem.setAttribute("style", "background-color: red;");
}

cambiarLuz("rojo");
