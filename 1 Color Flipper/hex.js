const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// genera con color en hexadecimal de manera aleatoria
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor+= hex[randomNumber()];
	}

	color.textContent = hexColor;
	document.body.style.background = hexColor;
	
});


function randomNumber(){
	return Math.floor(Math.random()*hex.length);
}