		const hamburger = document.querySelector(".buttonNav");
	  	const navLinks = document.querySelector(".main-nav");
	  	const links = navLinks.querySelectorAll('.main-nav a');
	  	
	function showNav() {
	
		if(document.querySelector('.main-nav').style.visibility === "hidden"){
		document.querySelector('.main-nav').style.visibility='visible';
	}
	else{
		document.querySelector('.main-nav').style.visibility='hidden';
	}
}
function hideNav() {
	let element = document.querySelectorAll('.main-nav ul li');
  element.classList.toggle("show");
}
hamburger.addEventListener("click",showNav);
//<button class = "buttonNav" onclick = "document.querySelector('.main-nav a').style.display='block'" >=</button>