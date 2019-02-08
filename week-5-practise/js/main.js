document.querySelector("#blueBtn").addEventListener("click", function () {

    document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
    document.querySelector(".btn-lrg").style.backgroundColor = "#ffa500";
    document.querySelector(".btn-secondary").style.backgroundColor = "black";



});

document.querySelector("#orangeBtn").addEventListener("click", function () {

    document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
    document.querySelector(".btn-lrg").style.backgroundColor = "#5751fd";
    document.querySelector(".btn-secondary").style.backgroundColor = "#31b0d5";



});

document.querySelector("#greenBtn").addEventListener("click", function () {

    document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
    document.querySelector(".btn-lrg").style.backgroundColor = "#black";
    document.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08";


});

var email = document.querySelector("#exampleInputEmail1");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail, Ermiyas!"),
            document.querySelector("#exampleInputEmail1").style.backgroundColor = "red";
    } else {
        email.setCustomValidity("");
    }
});