// Write your code here
const images = [{
  url:'./example-screenshots/cat1.jpg',
  num:0,
},{
  url:'./example-screenshots/cat2.jpg',
  num:1,
},{
  url:'./example-screenshots/cat3.jpg',
  num:2,
},{
  url:'./example-screenshots/cat4.jpg',
  num:3,
}];

  
let imageIndex = 0;
 let numIndex = 0;

function nextItem(){
  imageIndex++;
  imageIndex = imageIndex % images.length;
  return images[imageIndex].url;
  }

  function previousItem(){
    if (imageIndex === 0){
      imageIndex = images.length;
    }
    imageIndex--;
    return images[imageIndex].url;
  }
  function nextImageIndex(){
   numIndex++;
    numIndex = numIndex % images.length;
   return images[numIndex].num;
  }
 function previousImageIndex(){
  if (numIndex === 0) {
    numIndex = images.length;
  }
  numIndex--;
  return images[numIndex].num;
}
  
preSetValues();
function preSetValues(){
  document.getElementById('imageHolder').src = images[imageIndex].url; 
  document.getElementById('num').textContent = images[numIndex].num;
}

let forwBtn = document.getElementById('forwBtn');
     forwBtn.addEventListener('click',()=>{
     document.getElementById('imageHolder').src = nextItem();
     document.getElementById('num').textContent = nextImageIndex();
    });
    
let backwBtn = document.getElementById('backwBtn');
       backwBtn.addEventListener('click',()=>{
       document.getElementById('imageHolder').src = previousItem();
       document.getElementById('num').textContent = previousImageIndex();
   });

   let setforward;

let autoForwBtn = document.getElementById('autoForwBtn');
 autoForwBtn.addEventListener('click',()=>{
 setforward = setInterval(autoForward,5000);
})
function autoForward(){
       nextItem();
       nextImageIndex();
       preSetValues();
     }
let setBackwards;
let autoBackwBtn = document.getElementById('autoBackwBtn');
 autoBackwBtn.addEventListener('click', () => {
   setBackwards = setInterval(autoBackwards, 5000);

})
function autoBackwards() {
     previousItem();
     previousImageIndex();
     preSetValues();
}
let stopBtn = document.getElementById('stopBtn');
 stopBtn.addEventListener('click',()=>{
    setTimeout(stop,1000);
 })
 function stop(){
   clearInterval(setforward);
   clearInterval(setBackwards);
}



 