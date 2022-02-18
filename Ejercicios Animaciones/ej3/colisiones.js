document.addEventListener('DOMContentLoaded', () => {	
	var block = document.querySelector('.block');
	var input = document.getElementById('mov');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var top = document.getElementById('top');
    var bottom = document.getElementById('bottom');
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
});