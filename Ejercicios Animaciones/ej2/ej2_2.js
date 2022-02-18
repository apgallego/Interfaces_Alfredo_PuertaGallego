// versión del ejercicio 2 en la que el botón de iniciar tiene 2 funciones:
//     - inicia la cuenta atrás
//     - reiniciar la cuenta atrás desde el número en que se paró

var contador;
// var contadorBk;
var cuentaAtras;
var output;
var contadorIniciar = 0;

function inicio(){
    output = document.getElementById('contador');
    document.getElementById('iniciar').addEventListener('click', iniciar);
    document.getElementById('parar').addEventListener('click', parar);
}

function iniciar(){
    if(contadorIniciar < 1){
        contador = document.getElementById('input-segundos').value;
        // contadorBk = contador;
        if(contador > 0){
            cuentaAtras = setInterval(restarSegundos, 1000);
        } else {
            output.innerHTML = 'Escribe un número mayor que 0.';
        }
        contadorIniciar++;
    } else {
        cuentaAtras = setInterval(restarSegundos, 1000);
    }

    if(contador == 0) reset();
    
    function restarSegundos(){
        if(contador == 0){
            parar();
            output.innerHTML = contador;
            output.style.color = "red";
        } else {
            output.style.color = "black";
            output.innerHTML = contador;
            contador--;
        }
    }

    function reset(){
        clearInterval(cuentaAtras);
        contador = document.getElementById('input-segundos').value;
        contadorIniciar = 0;
        iniciar();
    }
}

function parar(){
    clearInterval(cuentaAtras);
}


window.onload = inicio;