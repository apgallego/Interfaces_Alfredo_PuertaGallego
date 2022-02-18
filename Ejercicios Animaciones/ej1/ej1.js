var show;
var contador = 0;
var items = document.getElementsByClassName('container');

function showItems(){
    items[contador].style.display = 'flex';
    items[contador].addEventListener('click', clickItem);
    items[contador].addEventListener('mouseover', function(event){event.target.style.cursor = 'pointer'});
    if(contador < items.length - 1){
        contador++;
    } else {
        contador = 0;
        clearTimeout(show);
    }
    show = setTimeout(showItems, 1000);
}

function clickItem(){
    clearTimeout(show);
    contador = 0;
    for(let i = 1; i < items.length; i++){
        items[i].style.display = 'none';
    }
    showItems();
    // console.log('clear');
}

// window.onload = showItems;
document.addEventListener("DOMContentLoaded", showItems);