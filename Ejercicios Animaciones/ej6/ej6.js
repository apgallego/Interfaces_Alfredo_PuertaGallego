var processBar;
var process;
var processTxt;
var comenzar;
var select;
var seguimiento;
var preProcess;
var fillProcessBar;

function iniciar(){
    processBar = document.getElementById('process-bar');
        processBar.style.border = '1px solid black';
        processBar.style.width = '400px';
        processBar.style.height = '20px';
    process = document.getElementById('process');
        process.style.height = '20px';
        process.style.width = '0px';
        process.style.backgroundColor = 'lime';
        process.style.transition = 'width 2s, background-color 3s';
    processTxt = document.getElementById('process-txt');
    comenzar = document.getElementById('comenzar');
    select = document.getElementById('select');
    seguimiento = document.getElementById('seguimiento');

    comenzar.addEventListener('click', () => {
        seguimiento.innerHTML = 'Cargando';
        preProcess = setTimeout(animation, 2000);
    });
}

function error(err){
    console.log(err);
    process.style.backgroundColor = 'red';
    process.style.width = '50%';
    process.style.textAlign = 'center';
    seguimiento.innerHTML = err.message;
    console.log('ta mal');
}

function animation(){
    console.log('paso por animation');
    if(select.selectedIndex == "0"){
        console.log('hacemos el fetch -- 1');
        fetch('https://reqres.in/api/users')
        .then(() => {
            process.style.width = '100%';
            setTimeout(() => seguimiento.innerHTML = 'El archivo cargó correctamente', 2000)})
        .catch((err) => {
            error(err);
        });
    } else if(select.selectedIndex.value == "1"){
        let fetch1 = fetch('https://reqres.in/api/users');
        let fetch2 = fetch('https://reqres.in/api/login');
        Promise.all([fetch1, fetch2])
        .then(() => {
            // console.log(fetch1 + '\n' + fetch2);
            process.style.width = '100%';
            setTimeout(() => seguimiento.innerHTML = 'El archivo cargó correctamente', 2000)})
        .catch((err) => {
            error(err);
        });
    } else {
        let fetch1 = fetch('https://reqres.in/api/users');
        let fetch2 = fetch('https://reqres.in/api/login');
        Promise.race([fetch1, fetch2])
        .then(() => {
            // console.log(fetch1 + '\n' + fetch2);
            process.style.width = '100%';
            setTimeout(() => seguimiento.innerHTML = 'El archivo cargó correctamente', 2000)
            throw new TypeError
        })
        .catch(err => {
            error(err);
        });
    }
}

window.onload = iniciar;
// document.addEventListener("DOMConentLoaded", iniciar);