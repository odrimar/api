//crear los selectores
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

//evento
abrirBtn.addEventListener('click',pantallaCompleta);

function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarPantalla(){
    document.exitFullscreen();
}
