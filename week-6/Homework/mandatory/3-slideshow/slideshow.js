// Write your code here
const slideShow = document.querySelector('.slide');
const imgAll = document.querySelectorAll('.slide img');

// button 
const nextBt = document.getElementById('next');
const prevBt = document.getElementById('prev');

// counter
let counter = 1; 
const size = imgAll[0].clientWidth;
slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button
nextBt.addEventListener('click',()=>{
    if(counter >= imgAll.length -1 )return;
  slideShow.style.transition = "transform 0.4s ease-in-out";
  counter++;
  console.log(counter);
  slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBt.addEventListener('click',()=>{
    if(counter <= 0)return;
    slideShow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideShow.addEventListener('transitionend',() => {
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
 
