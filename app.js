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

    resultado.innerHTML += simbolo

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

function resultado() {
  const resultado = document.getElementById("resultado");

  if (resultado.innerHTML !== "Resultado" && resultado.innerHTML !== "Error") {

    términos = resultado.innerHTML.split("+", "-", "*", "/")

    /*término.array.forEach(op => {
      console.log(op)
      num = op.split("*", "/")

      console.log(op)
      
      
    });*/

  }
}


let mem

function memoria(){

  mem = document.getElementById("resultado");

}

function restaurarMemoria(){

  if(mem !== 0){
    resultado  = document.getElementById("resultado");
    resultado.innerHTML += mem
  }

}

