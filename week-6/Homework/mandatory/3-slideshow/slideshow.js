// Write your code here
let images = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg"];
let interval;
let speed = 1000;

let imgEl = document.querySelector("#img");
let currentImgIndex = Math.floor(Math.random()* 9);

let currentImgNum = document.querySelector("#currentImgNum");
let forwardBtn = document.querySelector("#forwardBtn")
let backBtn = document.querySelector("#backBtn");
let autoForward = document.querySelector("#autoForwardBtn");
let autoBack = document.querySelector("#autoBackBtn");
let stop = document.querySelector("#stopBtn");

currentImgNum.innerHTML= currentImgIndex + 1;
imgEl.src = images[currentImgIndex];

forwardBtn.addEventListener("click", forward);//click on forward button will call the forward function
backBtn.addEventListener("click", back);//click on back button will call the back function

autoForward.addEventListener("click",()=>{//click on auto forward button will call the forward function  in every second by setInterval.
    let speedValue = document.querySelector("#select-speed").value;
    speedValue ? speed = speedValue* 1000 : {};
    clearInterval(interval);
    interval = setInterval(forward, (speed));
})

autoBack.addEventListener("click",()=>{//click on auto back button will call the back function  in every second by setInterval.
    let speedValue = document.querySelector("#select-speed").value;
    speedValue ? speed = speedValue* 1000 : {};
    clearInterval(interval);
    interval = setInterval(back, speed);
})

stop.addEventListener("click",()=>{//click on stop button will stop calling the function by clearInterval.
    clearInterval(interval);
})

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

