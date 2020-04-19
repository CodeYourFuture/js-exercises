// Write your code here
const slideShow = document.getElementById("slide");
const imgAll = document.querySelectorAll(".slide img");

// button 
const nextBt = document.getElementById('next');
const prevBt = document.getElementById('prev');
const stopBt = document.getElementById('stop');
const playBt = document.getElementById('play');
const forwardBt = document.getElementById('forward');
const backwardBt = document.getElementById('backward');
const playMBt = document.getElementById('play-music');
const pauseMBt = document.getElementById('pause_music');

// counter
let music = 0;
let audio = new Audio('music.mp3');
let x = 5000;
let counter = 1; 
const size = imgAll[0].clientWidth;
slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button
nextBt.addEventListener('click',()=>{
  if(counter >= imgAll.length -1 )return;
  slideShow.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
  repeat();
});

prevBt.addEventListener('click',()=>{
    if(counter <= 0)return;
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    repeat();
});

playBt.addEventListener('click',()=>{
   clearInterval(myVar);
   autoSlide(n = 0);
   
});

stopBt.addEventListener('click',()=>{
    autoSlide(n = 1);
});

forwardBt.addEventListener('click',()=>{
    clearInterval(myVar);
    if (x > 1000 ){
    autoSlide( x = x - 1000)
    }else {
    autoSlide( x = 1000);
    }
});

backwardBt.addEventListener('click',()=>{
    clearInterval(myVar);
    autoSlide( x = x + 1000);
});

playMBt.addEventListener('click',()=>{
    playMBt.style.visibility = "hidden";
    pauseMBt.style.visibility = "show";
    audio.play();
    console.log("play");
});
pauseMBt.addEventListener('click',()=>{
    pauseMBt.style.visibility="hidden";
    playMBt.style.visibility = "show";
    console.log("pause");
    audio.pause(); 
}); 

// autoplay function :
var myVar;
function autoSlide(){
    myVar = setInterval (function(){
        if (n===0){  
            console.log("start"+ counter);
            if(counter >= imgAll.length  )return;
            slideShow.style.transition = "transform 0.4s ease-in-out";
            slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
            counter ++;
            repeat();
            console.log(x);
        }else{
            clearInterval(myVar);
            console.log("stop");
        } 
    }, x);
      
}

// repeat:
function repeat(){
    slideShow.addEventListener('transitionend', () => {
        if(imgAll[counter].id === 'last-one') {
           slideShow.style.transition = "none";
           counter= imgAll.length - 2;
           slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if(imgAll[counter].id === 'first-one') {
            slideShow.style.transition = "none";
            counter= imgAll.length - counter;
            slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
}

 
