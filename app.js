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

      let operadores = ["*", "/", "-", "+"]; 
      let operador = null; 
      let res; 
      
      operadores.forEach(op => 
        { if (resultado.innerHTML.includes(op) && (op !== "*" || op !== "/")) { operador = op; } });
        
        if (!operador) {
        resultado.innerHTML += simbolo;
        return;
      }
        
      let partes = resultado.innerHTML.split(operador); 
      let a = parseFloat(partes[0]); 
      let b = parseFloat(partes[1]); 
      
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
      
      if(resultado.innerHTML.indexOf("*") !== -1){
        operador = "*"
      } else if(resultado.innerHTML.indexOf("/") !== -1){
        operador = "/"
      } else if(resultado.innerHTML.indexOf("*") !== -1){
        operador = "*"
      } else if(resultado.innerHTML.indexOf("*") !== -1){
        operador = "*"
      }
        
      let partes = resultado.innerHTML.split(operador); 
      let a = parseFloat(partes[0]); 
      let b = parseFloat(partes[1]); 
      
      if (operador === "+") res = a + b 
      if (operador === "-") res = a - b 
      if (operador === "*") res = a * b 
      if (operador === "/" && b !== 0) res = a / b 
      if (b === 0) res = 0 

      resultado.innerHTML = res 
      memoria()
      
    }

  let mem

  function memoria(){

    let resultado = (document.getElementById("resultado"));

    mem = resultado.innerHTML
  }

  function restaurarMemoria(){

    if(mem !== 0){
      resultado  = document.getElementById("resultado");
      resultado.innerHTML += mem
    }

  }

