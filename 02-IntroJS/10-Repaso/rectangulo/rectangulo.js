function calcularArea(base, altura) {
  return base * altura;
}

function obtenerArea() {
  const ladoA = document.getElementById("base");
  ladoA.style.color = "green";
  ladoA.style.borderColor = "green";
  const valorDeLaBase = Number(ladoA.value);

  const ladoB = document.getElementById("altura");
  ladoB.style.color = "green";
  ladoB.style.borderColor = "green";
  const valorDeLaAltura = Number(ladoB.value);

  const area = calcularArea(valorDeLaBase, valorDeLaAltura);

  const areaElement = document.getElementById("area");
  areaElement.value = area;
}
