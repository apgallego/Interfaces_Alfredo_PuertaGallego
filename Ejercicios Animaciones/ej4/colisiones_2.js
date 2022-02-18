document.addEventListener('DOMContentLoaded', () => {	
	var block = document.querySelector('.block');
	var input = document.getElementById('mov');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var top = document.getElementById('top');
    var bottom = document.getElementById('bottom');
	var square = document.querySelector('.cuadrado');
	const secs = 1000;

	    function moveBlock(coord, direction){
		var start = null;
		var desp = parseInt(input.value) * direction;
		var offset = parseInt(getComputedStyle(block).getPropertyValue(coord)); //?
		function step(timestamp) {
			if (!start) start = timestamp;
			var progress = timestamp - start;
			
			block.style.setProperty(coord, ((desp * progress) / secs) + offset + 'px');
			
			if (progress < secs) {
				requestAnimationFrame(step);
			} else {
				block.style.setProperty(coord, (desp + offset) + 'px');		
			}	
		}
		
		requestAnimationFrame(step);
	}
	right.addEventListener('click', () => moveBlock('left', 1));
	left.addEventListener('click', () => moveBlock('left', -1));
	top.addEventListener('click', () => moveBlock('top', -1));
	bottom.addEventListener('click', () => moveBlock('top', 1));
	
	function checkPosition(){		
		var infoBlock = block.getBoundingClientRect();
		var infoSquare = square.getBoundingClientRect();
		
		if ((infoBlock.left >= infoSquare.left) && (infoBlock.top >= infoSquare.top) && 
			(infoBlock.right <= infoSquare.right) && (infoBlock.bottom <= infoSquare.bottom)){
			document.getElementById('texto').style.display = 'none';
			block.style.backgroundColor = 'red';
		} else {
			document.getElementById('texto').style.display = 'inline';
			block.style.backgroundColor = 'greenyellow';
		}
	};

	document.getElementById('container').addEventListener('dragover', (ev) => ev.preventDefault());
	
	block.addEventListener('dragstart', (ev) => {
		var coords = ev.target.getBoundingClientRect();
		ev.dataTransfer.setData('text', (parseInt(coords.left - ev.clientX) + ',' + parseInt(coords.top - ev.clientY)));		
	});

	container.addEventListener('drop', (ev) => { 
		var offset = ev.dataTransfer.getData('text').split(',');
		console.log(offset);
		block.style.left = (ev.clientX + parseInt(offset[0])) + 'px';
		block.style.top = (ev.clientY + parseInt(offset[1])) + 'px'
		checkPosition();
	}); 
});