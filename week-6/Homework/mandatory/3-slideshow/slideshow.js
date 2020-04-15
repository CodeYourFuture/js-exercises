// Write your code here
const slideShow = document.getElementById("slide");
const imgAll = document.querySelectorAll(".slide img");

// button 
const nextBt = document.getElementById('next');
const prevBt = document.getElementById('prev');
const stopBt = document.getElementById('stop');
const playBt = document.getElementById('play');
// counter
let counter = 1; 
const size = imgAll[0].clientWidth;
console.log(imgAll[0]);
console.log(slideShow);
console.log("next: " + nextBt);
console.log("size: " +size);
slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button
nextBt.addEventListener('click',()=>{
  if(counter >= imgAll.length -1 )return;
  slideShow.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
  console.log("count:" + counter);
});

prevBt.addEventListener('click',()=>{
    if(counter <= 0)return;
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

playBt.addEventListener('click',()=>{
    autoSlide(n = 0);
});

stopBt.addEventListener('click',()=>{
    autoSlide(n = 1);
  
});
// autoplay function :

function autoSlide(){
    var myVar = setInterval(autoSlide, 3000);
      if (n===0){  
        if(counter >= imgAll.length -1 )return;
        slideShow.style.transition = "transform 0.4s ease-in-out";
        counter++;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }else{
        clearInterval(myVar);
      } 
    }

// repeat:
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
 
