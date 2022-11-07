// declarations

const container = document.querySelector('.container');
const emptyButton = document.querySelector('.empty');
const colorButton = document.querySelector('.color');
const blackButton = document.querySelector('.black');
const horizontal = document.querySelector('#horizontal');
const vertical = document.querySelector('#vertical');

var colorSwitch = false;

// script

buildGrid();

blackButton.addEventListener('click', function(){
	colorSwitch = false;
});

colorButton.addEventListener('click', function(){
	colorSwitch = true;
});

horizontal.addEventListener("input", buildGrid);
vertical.addEventListener("input", buildGrid);
emptyButton.addEventListener("click", buildGrid);

// functions 

function buildGrid(){
	var horizontal = document.querySelector('#horizontal').value;
	var vertical = document.querySelector('#vertical').value;
	while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
	};
	for (i= 1; i <= horizontal*vertical; i++) {
		const box = document.createElement('div');
		box.className = "box" ;
		container.appendChild(box);
		var numWidth = 100/horizontal;
		var numHeight = 100/vertical;
		var width = numWidth.toString() + "%";
		var height = numHeight.toString() + "%";
		box.style.width = width;
		box.style.height = height;
	};

	var boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => box.addEventListener("mouseover", fill));
};

function fill(e){

	if(colorSwitch === false) {
		this.style.backgroundColor = 'black';
	} else {
		this.style.backgroundColor = getRandomRGB();
	}
};

function getRandomRGB(){
	var r = Math.floor(Math.random()*256);          // Random between 0-255
	var g = Math.floor(Math.random()*256);          // Random between 0-255
	var b = Math.floor(Math.random()*256);          // Random between 0-255
	return randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string
};
