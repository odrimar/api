window.addEventListener('online',actualizar);
//console.log(navigator.onLine);
window.addEventListener('offline',actualizar);

function actualizar(){
    if(navigator.onLine == true){
        console.log('tienes conexion')
    }else{
        console.log('no tienes conexion')
    }
}