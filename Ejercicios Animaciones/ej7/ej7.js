var items;
var timeout;

function main(){
    items = document.getElementsByClassName('container');
    showAll();
    for(let i = 0; i < items.length; i++){
            items[i].addEventListener('click', () => {
            clearTimeout(timeout);
            reset();
        });
        items[i].addEventListener('mouseover', function(ev){ev.target.style.cursor = 'pointer'});
    }

    function showItem(item){
        return new Promise((resolve, reject) => {
            timeout = setTimeout( () => {
                item.style.display = 'flex';
                resolve(timeout);
            }, 1000);
        });
    }
    
    async function showAll(){
        for(let i = 0; i < items.length; i++) timeout = await showItem(items[i]);
        timeout = setTimeout(reset, 1000);
    }
    
    function reset(){
        console.log('a');
        for(let i = 0; i < items.length; i++) items[i].style.display = 'none';
        showAll();
    }
}

document.addEventListener('DOMContentLoaded', main);