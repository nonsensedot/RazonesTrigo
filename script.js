document
  .getElementById("trigForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const angle = parseFloat(document.getElementById("angle").value);
    const radians = (angle * Math.PI) / 180;

    const sin = Math.sin(radians);
    const cos = Math.cos(radians);
    const tan = Math.tan(radians);

    document.getElementById("sin").textContent = sin.toFixed(4);
    document.getElementById("cos").textContent = cos.toFixed(4);
    document.getElementById("tan").textContent = tan.toFixed(4);
  });

function calcular() {
  const opuesto = parseFloat(document.getElementById("opu").value);
  const adyacente = parseFloat(document.getElementById("ady").value);
  const hipotenusa = parseFloat(document.getElementById("hip").value);

  let resultadoSeno, resultadoCoseno, resultadoTangente;

  if (!isNaN(opuesto) && !isNaN(hipotenusa)) {
    resultadoSeno = opuesto / hipotenusa;
  }

  if (!isNaN(adyacente) && !isNaN(hipotenusa)) {
    resultadoCoseno = adyacente / hipotenusa;
  }

  if (!isNaN(opuesto) && !isNaN(adyacente)) {
    resultadoTangente = opuesto / adyacente;
  }

  document.getElementById("result-sin").textContent = isNaN(resultadoSeno)
    ? "Valor no disponible"
    : resultadoSeno.toFixed(4);
  document.getElementById("result-cos").textContent = isNaN(resultadoCoseno)
    ? "Valor no disponible"
    : resultadoCoseno.toFixed(4);
  document.getElementById("result-tan").textContent = isNaN(resultadoTangente)
    ? "Valor no disponible"
    : resultadoTangente.toFixed(4);
}
