let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 3000;	// Time Between Switch

images[0] = "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg";
images[1] = "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg";
images[2] = "https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195__340.jpg";
images[3] = "https://cdn.pixabay.com/photo/2013/07/30/12/25/marriage-168831__340.jpg";

let goButton = document.querySelector("#forward");
goButton.addEventListener("click",changeImg);
let backButton = document.querySelector("#backward");
backButton.addEventListener("click",changeImg1)
let autoForward = document.querySelector("#autoforward");
autoForward.addEventListener("click",forwardAutoPlay);
let autobackward = document.querySelector("#autobackward");
autobackward.addEventListener("click", backwardAutoPlay);
let stopButton = document.querySelector("#stop");

stopButton.addEventListener.addEventListener("click",()=>{
    clearInterval(clear);
  }) 

function changeImg(){
	document.querySelector(".slides").src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}


function changeImg1(){
	document.querySelector(".slides").src = images[i];

	if(i < images.length - 1){
	  i--; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg1()", time);
}



  function forwardAutoPlay() {
    window.onload=changeImg; 
  }

  function backwardAutoPlay() {
    window.onload=changeImg1; 
      
  }