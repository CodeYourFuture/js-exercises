let blueStyle = document.querySelector("#blueBtn");
blueStyle.addEventListener("click", changeStyleBlue);

function changeStyleBlue () {
    let newBackground = document.querySelector(".jumbotron");
    newBackground.style.backgroundColor = `#588fbd`;
    let newDonateBtn = document.querySelector(".buttons a.btn-primary");
    newDonateBtn.style.backgroundColor = `#ffa500`;
    let newVolBtn = document.querySelector(".buttons a.btn-secondary");
    newVolBtn.style.backgroundColor = "black";
    newVolBtn.style.color = "white";
}

let orangeStyle = document.querySelector("#orangeBtn");
orangeStyle.addEventListener("click", changeStyleOrange);

function changeStyleOrange() {
    document.querySelector(".jumbotron").style.backgroundColor = `#f0ad4e`;
    document.querySelector(".buttons a.btn-primary").style.backgroundColor = `#5751fd`;
    document.querySelector(".buttons a.btn-secondary").style.backgroundColor = `#31b0d5`;
    document.querySelector(".buttons a.btn-secondary").style.color = `white`;
}

let greenStyle = document.querySelector("#greenBtn");
greenStyle.addEventListener("click", changeStyleGreen);

function changeStyleGreen() {
    document.querySelector(".jumbotron").style.backgroundColor = `#87ca8a`;
    document.querySelector(".buttons a.btn-primary").style.backgroundColor = `black`;
    document.querySelector(".buttons a.btn-secondary").style.backgroundColor = `#8c9c08`;
}