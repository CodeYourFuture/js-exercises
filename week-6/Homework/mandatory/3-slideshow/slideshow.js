// Write your code here
let images = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg"];
let imgEl = document.querySelector("#img");
let currentImgIndex = Math.floor(Math.random()* 9);
imgEl.src = images[currentImgIndex];
let currentImgNum = document.querySelector("#currentImgNum");
currentImgNum.innerHTML= currentImgIndex + 1;
let forwardBtn = document.querySelector("#forwardBtn")
forwardBtn.addEventListener("click", forward);//click on forward button will call the forward function
let backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", back);//click on back button will call the back function
function forward(){//This function will show the next image
    currentImgIndex >= images.length - 1 ? currentImgIndex = -1 : {};
    currentImgIndex ++;
    imgEl.src = images[currentImgIndex];
    currentImgNum.innerHTML = currentImgIndex + 1;
}
function back(){//This function will show the previous image
    currentImgIndex <= 0? currentImgIndex = images.length :{};
    currentImgIndex --;
    imgEl.src = images[currentImgIndex];
    currentImgNum.innerHTML = currentImgIndex +1;
}
let interval;
let autoForward = document.querySelector("#autoForwardBtn");
autoForward.addEventListener("click",()=>{//click on auto forward button will call the forward function  in every second by setInterval.
    clearInterval(interval);
    interval = setInterval(forward, 1000);
})
let autoBack = document.querySelector("#autoBackBtn");
autoBack.addEventListener("click",()=>{//click on auto back button will call the back function  in every second by setInterval.
    clearInterval(interval);
    interval = setInterval(back, 1000);
})
let stop = document.querySelector("#stopBtn");
stop.addEventListener("click",()=>{//click on stop button will stop calling the function by clearInterval.
    clearInterval(interval);
})