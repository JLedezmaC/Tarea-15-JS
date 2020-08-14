//
// Práctica 10 - Cronómetro
//

/*Se hace un contador global y se usa en el iniciar */ 

let contador = 0;
let cronometro;

/* Puedo llamar a una funcion dentro de una funcion*/
function timer(){
    cronometro =  window.setInterval(Iniciar, 1000);
}

function Iniciar(){
    let count = document.getElementById('cronometro');
    count.innerHTML = contador++;
}

function Detener(){
    window.clearInterval(cronometro);
}

function Limpiar(){
    let crono = document.getElementById('cronometro');
    /* Se agrega otro contador en este caso el de la linea 28 que cuando se le de click el contador de la linea 
    16 va a ser cero ya que la funcion se ejecuta y el contador queda en 0 y se iguala a contador
    para que en el html quede en 0 */ 
    contador = 0 ;
    crono.innerHTML = contador ;
}

let button1 = document.getElementById('iniciar');
button1.addEventListener('click', timer);

let button2 = document.getElementById('detener');
button2.addEventListener('click', Detener);

let button3 = document.getElementById('limpiar');
button3.addEventListener('click', Limpiar);


console.log('Este es el codigo de Ignacio');
console.log('@copyright 2020');