// Write your code here
const images = [{
 url:'./example-screenshots/cat1.jpg', 
},{
  url:'./example-screenshots/cat2.jpg'
},{
  url:'./example-screenshots/cat3.jpg'
  }, {
  url:'./example-screenshots/cat4.jpg'
  }];

let index = 0;

function nextItem(){
    index++;
    index = index % images.length;
     return images[index].url;
}

function previousItem(){
     if(index === 0){
         index = images.length;
     }
        index--;
      return images[index].url;
    }
    
document.getElementById('imageHolder').textContent = images[index].url; 


let forwBtn = document.getElementById('forwBtn');
   forwBtn.addEventListener('click',()=>{
     document.getElementById('imageHolder').textContent = nextItem();
   });
    
let backwBtn = document.getElementById('backwBtn');
   backwBtn.addEventListener('click',()=>{
       document.getElementById('imageHolder').textContent = previousItem();
   });