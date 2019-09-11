// script

const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');

buildGrid();
document.getElementById("horizontal").addEventListener("input", buildGrid);
document.getElementById("vertical").addEventListener("input", buildGrid);
resetButton.addEventListener("click", buildGrid);
// functions 

function buildGrid(){
	var grid = [0,0]
	grid[0] = document.forms['gridSize']['horizontal'].value;
	grid[1] = document.forms['gridSize']['vertical'].value;
	while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
	}
	for (i= 1; i <= grid[0]*grid[1]; i++) {
		const box = document.createElement('div');
		box.className = "box" 
		box.classList.add(i.toString());
		container.appendChild(box)
		var numWidth = 100/grid[0];
		var numHeight = 100/grid[1];
		var width = numWidth.toString() + "%";
		var height = numHeight.toString() + "%";
		box.style.width = width;
		box.style.height = height;
	}
	
	var boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => box.addEventListener("mouseover", color));
}

function color(e){
	e.path[0].style.backgroundColor = 'black'
}
