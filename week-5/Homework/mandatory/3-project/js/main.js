
    //When clicking **blue** it should change:

    let blueButton = document.getElementById("blueBtn");
    blueButton.addEventListener("click", changeStyle);

    let jumbo = document.querySelector(".jumbotron");
    let donateBtn = document.querySelector(".buttons .btn-primary");
    let volunteerBtn = document.querySelector (".btn-secondary");

    function changeStyle (){

        jumbo.style.backgroundColor = "#588fbd";
        donateBtn.style.backgroundColor = "#ffa500"; 
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


    //Part 2
    let submitBtn = document.querySelector("form .btn");

    function CheckForm(e) {
        e.preventDefault()
        let email = document.querySelector("#exampleInputEmail1");
        let name = document.querySelector('#example-text-input')
        let describe = document.querySelector("#exampleTextarea");
        let form = [email,name,describe]
    
        let emailCheck = (!email.value.length > 0 || !email.value.includes("@"))
        let nameCheck = !name.value.length > 0
        let describeCheck = !describe.value.length > 0
    
        let formCheck = [emailCheck,nameCheck,describeCheck]
        for (i=0; i<formCheck.length; i++){
            if (formCheck[i]) {
            form[i].style.background = "red"
            }
        }
        if (!emailCheck && !nameCheck && !describeCheck) {
            alert('Thank you for filling out the form')
            document.querySelector('form').reset()
        }
    }
    
    submitBtn.addEventListener("click", CheckForm);