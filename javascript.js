// script

const container = document.querySelector('.container');
const emptyButton = document.querySelector('.empty');
const colorButton = document.querySelector('.color');
const blackButton = document.querySelector('.black');

buildGrid();
document.querySelector("#horizontal").addEventListener("input", buildGrid);
document.querySelector("#vertical").addEventListener("input", buildGrid);

emptyButton.addEventListener("click", buildGrid);

// functions 

function buildGrid(){
	var horizontal = document.querySelector('#horizontal').value;
	vertical = document.querySelector('#vertical').value;
	while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
	};
	for (i= 1; i <= horizontal*vertical; i++) {
		const box = document.createElement('div');
		box.className = "box" ;
		box.classList.add(i.toString());
		container.appendChild(box);
		var numWidth = 100/horizontal;
		var numHeight = 100/vertical;
		var width = numWidth.toString() + "%";
		var height = numHeight.toString() + "%";
		box.style.width = width;
		box.style.height = height;
	};

	var boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => box.addEventListener("mouseover", color));
};

function color(e){
	document.addEventListener("mousedown", function(){
		trigger= true;
	});

	document.addEventListener("mouseup", function(){
		trigger = false;
	});
	
	colorButton.addEventListener("click", function(){
		colorSwitch = 1;
	});
	
	blackButton.addEventListener('click', function(){
		colorSwitch = 0;
	});
	
	if(trigger === true) {
		if(colorSwitch === 1){
			e.path[0].style.backgroundColor = getRandomRGB();
		} else{
			e.path[0].style.backgroundColor = 'black';
		};
	};
};

function getRandomRGB(){
	var r = Math.floor(Math.random()*256);          // Random between 0-255
	var g = Math.floor(Math.random()*256);          // Random between 0-255
	var b = Math.floor(Math.random()*256);          // Random between 0-255
	return randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string
};
