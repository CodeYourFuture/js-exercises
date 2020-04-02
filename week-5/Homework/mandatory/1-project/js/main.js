
    //When clicking **blue** it should change:

let blueButton = document.getElementById("blueBtn");
    blueButton.addEventListener("click", changeStyle);

    let jumbo = document.querySelector(".jumbotron");
    let donateBtn = document.querySelector(" .btn-primary");
    let volunteerBtn = document.querySelector (".btn-secondary");

    function changeStyle (){

        jumbo.style.backgroundColor = "#588fbd";
        donateBtn.style.backgroundColor = "#ffa500"; //error
        volunteerBtn.style.backgroundColor = "black";
        volunteerBtn.style.color = "white";
    }

    //When clicking **orange** it should change:
    let orangeButton = document.getElementById("orangeBtn");
    orangeButton.addEventListener("click", orangeStyle);

    function orangeStyle (){

        jumbo.style.backgroundColor = "#f0ad4e";
        donateBtn.style.backgroundColor = "#5751fd"; //error
        volunteerBtn.style.backgroundColor = "31b0d5";
        volunteerBtn.style.color = "white";
    }

    // When clicking **green** it should change:
    let greenButton = document.getElementById("greenBtn");
    greenButton.addEventListener("click", greenStyle);

    function greenStyle (){

        jumbo.style.backgroundColor = "#87ca8a";
        donateBtn.style.backgroundColor = "#black"; //error
        volunteerBtn.style.backgroundColor = "8c9c08";
    }

