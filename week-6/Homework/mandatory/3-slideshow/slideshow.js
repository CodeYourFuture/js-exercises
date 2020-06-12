// Write your code here
const slideShow = [{
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        src: "https://images.unsplash.com/photo-1591269749143-07777e26591c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60",
    },
    {
        src: "https://images.unsplash.com/photo-1591226283095-fa202759606a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60",
    },
    {
        src: "https://images.unsplash.com/photo-1591031358100-1a4ccf5d238c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
    {
        src: "https://images.unsplash.com/photo-1590982878505-3a4eae5183fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
    {
        src: "https://images.unsplash.com/photo-1590965918603-0dce981d13b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
    {
        src: "https://images.unsplash.com/photo-1590944667245-8ad4c2abf8ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    },
];

var myInterval;

var getTheTime = document.getElementById("pauseTime");
var theImage = document.getElementById("image");
var numOfPhoto = document.getElementById("numOfPhoto");
//Forward button
var newQuot = document.getElementById("Forward");
newQuot.addEventListener("click", function() {
    if (myInterval !== undefined) clearInterval(myInterval);
    numOfPhotoNum = Number(numOfPhoto.innerText);
    if (numOfPhotoNum < slideShow.length - 1) numOfPhotoNum = numOfPhotoNum + 1;
    else numOfPhotoNum = 0;
    theImage.src = slideShow[numOfPhotoNum].src;

    numOfPhoto.innerText = numOfPhotoNum;
});

// back Button
var newQuot = document.getElementById("back");
newQuot.addEventListener("click", function() {
    if (myInterval !== undefined) clearInterval(myInterval);
    numOfPhotoNum = Number(numOfPhoto.innerText);
    if (numOfPhotoNum > 0) numOfPhotoNum = numOfPhotoNum - 1;
    else numOfPhotoNum = slideShow.length - 1;
    theImage.src = slideShow[numOfPhotoNum].src;

    numOfPhoto.innerText = numOfPhotoNum;
});

//Auto Back
var newQuot = document.getElementById("autoBack");

newQuot.addEventListener("click", function() {
    if (myInterval !== undefined) clearInterval(myInterval);
    myInterval = setInterval(function() {
        numOfPhotoNum = Number(numOfPhoto.innerText);
        if (numOfPhotoNum > 0) numOfPhotoNum = numOfPhotoNum - 1;
        else numOfPhotoNum = slideShow.length - 1;
        theImage.src = slideShow[numOfPhotoNum].src;

        numOfPhoto.innerText = numOfPhotoNum;
    }, getTheTime.value * 1000);
});

//Auto Forward
var newQuot = document.getElementById("autoForward");

newQuot.addEventListener("click", function() {
    if (myInterval !== undefined) clearInterval(myInterval);
    myInterval = setInterval(function() {
        numOfPhotoNum = Number(numOfPhoto.innerText);
        if (numOfPhotoNum < slideShow.length - 1) numOfPhotoNum = numOfPhotoNum + 1;
        else numOfPhotoNum = 0;
        theImage.src = slideShow[numOfPhotoNum].src;

        numOfPhoto.innerText = numOfPhotoNum;
    }, getTheTime.value * 1000);
});

//Stop

var newQuot = document.getElementById("stop");
newQuot.addEventListener("click", function() {
    clearInterval(myInterval);
    getTheTime.value = "1";
});