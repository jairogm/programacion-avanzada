function sumar(){
  let numeroUno = 10;
  let numeroDos = 10;
  let suma = (numeroUno +  numeroDos)
  console.log(suma)
}

const restar = () => {
  let numeroUno = 10;
  let numeroDos = 10;
  let suma = (numeroUno -  numeroDos)
  console.log(suma)
}

function multiplicar(numeroUno, numeroDos){
  return numeroUno + numeroDos
}

const dividir = (numeroUno, numeroDos) => {
  return numeroUno / numeroDos
}


// let numeroUno = Number(prompt("Ingrese un numero:"))
// let numeroDos = Number(prompt("Ingrese un numero:"))

restar();
sumar();
console.log(multiplicar(10, 2))
console.log(dividir(numeroUno, numeroDos))