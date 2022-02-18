var contador;
var cuentaAtras;
var output;

function inicio(){
    output = document.getElementById('contador');
    document.getElementById('iniciar').addEventListener('click', iniciar);
    document.getElementById('parar').addEventListener('click', parar);
}

function iniciar(){
    contador = document.getElementById('input-segundos').value;
    if(contador > 0){
        cuentaAtras = setInterval(restarSegundos, 1000);
    } else {
        output.innerHTML = 'Escribe un número mayor que 0.';
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
        iniciar();
    }
}

function parar(){
    clearInterval(cuentaAtras);
}

window.onload = inicio;