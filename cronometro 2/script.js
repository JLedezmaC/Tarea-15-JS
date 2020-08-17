let time;
let cont = 0;
let hh = 0;
let mm = 0;
let ss = 0;

function iniciar(){
    time = window.setInterval(cronometro,1);
}

function cronometro(){
    const cronometro = document.getElementById('cronometro');
    
    ss++;

    let h = '';
    let m = '';
    let s = '';
    
    if(ss > 59 ){
        mm++;
        ss = 0;
    }

    if(mm > 59){
        hh++;
        mm = 0;
    }

    if(hh > 24){
        hh++;
        hh = 1;
    }

    if(ss < 10){
        s = '0' + `${ss}`;
    }else{
        s = `${ss}`;
    }

    if(mm < 10){
        m = '0' + `${mm}`;
    }else{
        m = `${mm}`;
    }

    if(hh < 10){
        h = '0' + `${hh}`;
    }else{
        h = `${hh}`;
    }

    cronometro.innerHTML = h+ ':' +m+ ':' +s; // va a incrementando de uno en uno
}

function detener(){
    window.clearInterval(time);
}

function limpiar(){
    const limpia = document.getElementById('cronometro');
    cont = '00:00:00';
    hh=0;mm=0;ss=0;
    limpia.innerHTML = cont; 
}

const botonIniciar = document.getElementById('iniciar');
botonIniciar.addEventListener('click', iniciar);

const botonDetener = document.getElementById('detener');
botonDetener.addEventListener('click', detener);

const botonLimpiar = document.getElementById('limpiar');
botonLimpiar.addEventListener('click', limpiar);
