const suma = document.querySelector('#suma');
const resultado = document.querySelector('#resultado');


suma.addEventListener('click', ()=>{
  const numeroUno = document.querySelector('#numeroUno').value
  const numeroDos = document.querySelector('#numeroDos').value
  resultado.textContent = parseInt(numeroUno) + parseInt(numeroDos)
});

function resta() {
  const numeroUno = document.querySelector('#numeroUno').value
  const numeroDos = document.querySelector('#numeroDos').value
  resultado.textContent = parseInt(numeroUno) - parseInt(numeroDos)
}