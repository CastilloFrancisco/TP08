function actualizarNum(num) {

  const resultado = document.getElementById("resultado");

  if (resultado.innerHTML === "Resultado" || resultado.innerHTML === "Error") {

    resultado.innerHTML = num;

  } else {

    resultado.innerHTML += num;
  }
}

function agregarSimbolo(simbolo) {

  const resultado = document.getElementById("resultado");


  if ((resultado.innerHTML === "Resultado" || resultado.innerHTML === "Error" || resultado.innerHTML === "+" || resultado.innerHTML === "-") && (simbolo === "+" || simbolo === "-")) {

    resultado.innerHTML = simbolo;

  } else if (resultado.innerHTML === "Resultado" || resultado.innerHTML === "Error" || resultado.innerHTML === "+" || resultado.innerHTML === "-") {

    resultado.innerHTML = "Error"

  } else if ((resultado.innerHTML).slice(-1) !== "+" && (resultado.innerHTML).slice(-1) !== "-") {

    let operador = null;
    let res;

    if (resultado.innerHTML.indexOf("*") !== -1) {
      operador = "*"
    } else if (resultado.innerHTML.indexOf("/") !== -1) {
      operador = "/"
    } else if (resultado.innerHTML.indexOf("+") > 0 && resultado.innerHTML.indexOf("*") === -1 && resultado.innerHTML.indexOf("/") === -1) {
      operador = "+"
    } else if (resultado.innerHTML.indexOf("-") > 0 && resultado.innerHTML.indexOf("*") === -1 && resultado.innerHTML.indexOf("/") === -1) {
      operador = "-"
    }

    let partes = resultado.innerHTML.split(operador);
    let a = parseFloat(partes[0]);
    let b = parseFloat(partes[1]);

    if (isNaN(a) || isNaN(b)) {

      resultado.innerHTML += simbolo
      return
    }

    if (operador === "+") res = a + b
    if (operador === "-") res = a - b
    if (operador === "*") res = a * b
    if (operador === "/" && b !== 0) res = a / b
    if (b === 0) res = 0

    resultado.innerHTML = res + simbolo
    memoria()

  } else {

    resultado.innerHTML = (resultado.innerHTML).slice(0, -1)
    resultado.innerHTML += simbolo
  }
}

function borrar() {
  const resultado = document.getElementById("resultado");

  if (resultado.innerHTML !== "Resultado" && resultado.innerHTML !== "Error") {

    resultado.innerHTML = (resultado.innerHTML).slice(0, -1)

    if (resultado.innerHTML === "" || resultado.innerHTML === "Error") {

      resultado.innerHTML = "Resultado"

    }

  }
}

function igual() {
  const resultado = document.getElementById("resultado");

  let operador = null;
  let res;

  if (resultado.innerHTML.indexOf("*") !== -1) {
    operador = "*"
  } else if (resultado.innerHTML.indexOf("/") !== -1) {
    operador = "/"
  } else if (resultado.innerHTML.indexOf("+") > 0 && resultado.innerHTML.indexOf("*") === -1 && resultado.innerHTML.indexOf("/") === -1) {
    operador = "+"
  } else if (resultado.innerHTML.indexOf("-") > 0 && resultado.innerHTML.indexOf("*") === -1 && resultado.innerHTML.indexOf("/") === -1) {
    operador = "-"
  }

  let partes = resultado.innerHTML.split(operador);
  let a = parseFloat(partes[0]);
  let b = parseFloat(partes[1]);

  if (isNaN(a) || isNaN(b)) {

    resultado.innerHTML += simbolo
    return
  }

  if (operador === "+") res = a + b
  if (operador === "-") res = a - b
  if (operador === "*") res = a * b
  if (operador === "/" && b !== 0) res = a / b
  if (b === 0) res = 0

  resultado.innerHTML = res
  memoria()

}

let mem

function memoria() {

  const resultado = document.getElementById("resultado");

  let res = parseFloat(resultado.innerHTML);
  if (!isNaN(res)) {
    mem = res;
  }
}
function ponerMemoria() {
  const resultado = document.getElementById("resultado");

  if (mem !== undefined) {

    if (resultado.innerHTML === "Resultado" || resultado.innerHTML === "Error") {
      resultado.innerHTML = mem;
    } else {
      resultado.innerHTML += mem;
    }

  }
}
function C() {

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = 0;

}

