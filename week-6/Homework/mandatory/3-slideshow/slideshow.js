// Write your code here
let images =["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg","images/image6.jpg","images/image7.jpg","images/image8.jpg","images/image9.jpg","images/image10.jpg","images/image11.jpg","images/image12.jpg","images/image13.jpg","images/image14.jpg"];
let image = document.querySelector("div>img");
let showpicnum = document.querySelector("#showpicnum");
let forwardButton = document.querySelector("#forward");
let autobackButton = document.querySelector("#autoback");
let autoforwardButton = document.querySelector("#autoforward");
let stopButton = document.querySelector("#stop");
let backButton = document.querySelector("#back"); 
forwardButton.addEventListener("click",goforward);
let i = 0;
let isPaused = false;
function goforward(){
    if(!isPaused){
    i = i+1;
    image.src = images[i];
    showpicnum.innerHTML = i ;
    if(i === 14){
        i = 0;
        image.src = images[i];
        showpicnum.innerHTML = 0;
    }
}   
}
backButton.addEventListener("click",goback);
function goback(){
    if(!isPaused){
    i = i - 1;
    image.src = images[i];
    showpicnum.innerHTML = i ;
    if(i === 0 || i < 0){
        i = images.length-1;
        image.src = images[i];
        showpicnum.innerHTML = i;
    }
}   
}
autoforwardButton.addEventListener("click",autoforward);
function autoforward(){
  setInterval(goforward,1000);
};
autobackButton.addEventListener("click",autoback);
function autoback(){
    setInterval(goback,1000);
}
stopButton.addEventListener("click",stop);
function stop(event){
    event.preventDefault();
    isPaused = true;
}

