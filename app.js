function operacion() {
  const num1 = parseFloat(document.getElementById("n1").value);
  const num2 = parseFloat(document.getElementById("n2").value);
  const op = document.getElementById("operación");
  const resultado = document.getElementById("resultado");

  if (op.value === "+") {
    resultado.innerHTML = num1 + num2;
  } else if (op.value === "-") {
    resultado.innerHTML = num1 - num2;
  } else if (op.value === "*") {
    resultado.innerHTML = num1 * num2;
  } else if (op.value === "/") {
    resultado.innerHTML = num1 / num2;
  }
}
