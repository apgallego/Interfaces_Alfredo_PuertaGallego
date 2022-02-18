var items;

function main(){
    items = document.getElementsByClassName('container');
    showAll();
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', function(){
            clearTimeout(timeout);
            reset();
        });
        items[i].addEventListener('mouseover', function(ev){ev.target.style.cursor = 'pointer'});
    }

    function showItem(item){
        return new Promise((resolve, reject) => {
            timeout = setTimeout( () => {
                item.style.display = 'flex';
                // console.log('a');
                resolve(timeout);
            }, 1000);
        });
    }
    
    //no funciona
    function showAll(){
        for(let i = 0; i < items.length; i++){
            timeout = showItem(items[i]);
        }

        timeout.then( () => {
            timeout = setTimeout(reset, 1000);
        }
    ).catch();
    }

    function reset(){
        for(let i = 0; i < items.length; i++) items[i].style.display = 'none';
        showAll();
    }
}


document.addEventListener("DOMContentLoaded", main);