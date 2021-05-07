
// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);


btns.forEach(function(btn){
	btn.addEventListener("click", function(lala){
		const styles = lala.currentTarget.classList;

		if(styles.contains("decrease")){
			count--;
		}
		else if (styles.contains("reset")){
			count=0;
		}
		else{   // o seas increase
			count++;
		}


		if (count > 0) { 
			value.style.color = "green";
		}

		else if (count < 0) { 
			value.style.color = "red";
		}

		else if (count === 0) {
			value.style.color = "#222";
		}

		value.textContent = count;
	});
});