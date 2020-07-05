		const hamburger = document.querySelector(".buttonNav");
		const hamburger2 = document.querySelector(".aboutNav");
	  	const navLinks = document.querySelector(".main-nav");
	  	const links = navLinks.querySelectorAll('.main-nav a');
	  	const contentSalt = document.querySelector(".display1");
	  	
	function showNav() {
	
		if(document.querySelector('.main-nav').style.display === "none"){
		document.querySelector('.main-nav').style.display='inherit';
	}
	else{
		document.querySelector('.main-nav').style.display='none';
	}
}

function showContent() {
	
		if(document.querySelector('.exampleImages').style.display === "none"){
		document.querySelector('.exampleImages').style.display='block';
	}
	else{
		document.querySelector('.exampleImages').style.display='none';
	}
}

function hideNav() {
	let element = document.querySelectorAll('.main-nav ul li');
  element.classList.toggle("show");
}
function swipe() {
   var largeImage = document.getElementById('largeImage');
   var url=largeImage.getAttribute('src');
   window.open(url,'Image','width=800,height=800,resizable=1');
}
function swipe2() {
   var largeImage = document.getElementById('largeImage2');
   var url=largeImage2.getAttribute('src');
   window.open(url,'Image','width=800,height=800,resizable=1');
}
function swipe3() {
   var largeImage = document.getElementById('largeImage3');
   var url=largeImage3.getAttribute('src');
   window.open(url,'Image','width=800,height=800,resizable=1');
}

contentSalt.addEventListener("click",showContent);
hamburger.addEventListener("click",showNav);
//<button class = "buttonNav" onclick = "document.querySelector('.main-nav a').style.display='block'" >=</button>