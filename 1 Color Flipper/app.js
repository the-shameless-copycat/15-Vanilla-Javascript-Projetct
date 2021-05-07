const colors = [ "AliceBlue","Bisque","BlueViolet","Coral",
"Crimson","Cyan","DimGray","ForestGreen", "SpringGreen",
"SteelBlue","SandyBrown"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
	
	const randomNumber = Math.floor(Math.random()*colors.length);
	document.body.style.background= colors[randomNumber];
	// color.textContent = colors[randomNumber]; tambien funciona
	color.innerHTML = colors[randomNumber];
});