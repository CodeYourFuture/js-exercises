// Write your code here
// Global Variables, will be used inside the functions
let imagesArr = ["https://images.unsplash.com/photo-1452860606245-08befc0ff44b",
    "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9",
    "https://images.unsplash.com/photo-1514809817624-57353a9a1afa",
    "https://images.unsplash.com/photo-1541944743827-e04aa6427c33",
    "https://images.unsplash.com/photo-1485546784815-e380f3297414",
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    "https://images.unsplash.com/photo-1527402858-36f052d83df4",
    "https://images.unsplash.com/photo-1578730170902-45e5e21ffd82",
    "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0",
    "https://images.unsplash.com/photo-1509023916490-b91305c54674",
    "https://images.unsplash.com/photo-1542044801-30d3e45ae49a",
    "https://images.unsplash.com/photo-1513785077084-84adb77e90ab",
    "https://images.unsplash.com/photo-1576003606644-bf100418e4f1",
    "https://images.unsplash.com/photo-1560464024-54e00d373791",
    "https://images.unsplash.com/photo-1591622778887-83445831b63d",
    "https://images.unsplash.com/photo-1590853566724-83bc9da30d15"
], 
    fwdBtn = document.getElementById("forward"), 
    bckBtn = document.getElementById("backward"),
    imageDis = document.getElementById("display"),
    autoFwd = document.getElementById("autoForward"),
    autoBck = document.getElementById("autoBackward"),
    stop = document.getElementById("stop"), 
    timer,
    userPref = document.getElementById("setInterval");
    
// Manual forward event handler
fwdBtn.addEventListener("click", () => {
forward();
});
// Manual backward event handler
bckBtn.addEventListener("click", () => {
backward();
});
// Automatic forward event handler
autoFwd.addEventListener("click", ()=>{
    clearInterval(timer);
    if (userPref.value > 0) {
        timer = setInterval(forward,userPref.value*1000);
    } else {
        timer = setInterval(forward,3000);
    }
    } 
);
// Automatic backward event handler
autoBck.addEventListener("click", () => {
    clearInterval(timer);
    if (userPref.value > 0 ) {
        timer = setInterval(backward,userPref.value*1000);
    } else {
        timer = setInterval(backward,3000);
    }
});
// Stop automation handler
stop.addEventListener("click",() => {
    clearInterval(timer);
});

// added clear interval at the end of the cycle for both functions to make life easier I guess
// forward function
function backward() {
    let current = imagesArr.indexOf(imageDis.src);
    if (current-1 >= 0){
        imageDis.src = imagesArr[current-1];
    } else {
        clearInterval(timer);
    }
};
 // backward function 
function forward () {
    let current = imagesArr.indexOf(imageDis.src);
        if (current+1 < imagesArr.length){
        imageDis.src = imagesArr[current+1];
    } else {
        clearInterval(timer);
    }
};