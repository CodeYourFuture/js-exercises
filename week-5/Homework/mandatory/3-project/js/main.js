// Part 1
let jumptron  = document.querySelector(".jumbotron");
let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let dntBtn = document.getElementsByClassName("btn-lrg")[0];
let vlnBtn = document.getElementsByClassName("btn-lrg")[1];


blueBtn.addEventListener("click", function () {
    jumptron.style.backgroundColor = "#588fbd";
    dntBtn.style.backgroundColor = "#ffa500";
    vlnBtn.style.backgroundColor = "black";
    vlnBtn.style.color = "white";
})

orangeBtn.addEventListener("click", function () {
    jumptron.style.backgroundColor = "#f0ad4e";
    dntBtn.style.backgroundColor = "#5751fd";
    vlnBtn.style.backgroundColor = "#31b0d5";
    vlnBtn.style.color = "white";
})

greenBtn.addEventListener("click", function () {
    jumptron.style.backgroundColor = "#87ca8a";
    dntBtn.style.backgroundColor = "black";
    vlnBtn.style.backgroundColor = "#8c9c08";
})
                 //part 2

let submitBtn = document.getElementsByClassName('btn btn-primary')[5];
let emailBtn = document.getElementById('exampleInputEmail1');
let nameBtn = document.getElementById('example-text-input');
let describtionBtn = document.getElementById('exampleTextarea');

submitBtn.addEventListener('click', function(event){
          event.preventDefault();
if (emailBtn.value.length <= 0 || !emailBtn.value.includes("@")){
        emailBtn.style.backgroundColor = 'red'
    } else { 
        emailBtn.style.backgroundColor = 'white'
    } 
      
if (nameBtn.value.length <= 0){
    nameBtn.style.backgroundColor = 'red'
    } else{ 
          nameBtn.style.backgroundColor = 'white'
    }  
if (describtionBtn.value.length <= 0){
    describtionBtn.style.backgroundColor = 'red'
    } else {
        describtionBtn.style.backgroundColor = 'white'
    }
if(emailBtn.value.length > 0 &&  emailBtn.value.includes("@") &&
    nameBtn.value.length > 0 && describtionBtn.value.length > 0  ){
        alert("Thanks for filling out the form!")
        emailBtn.value = ''
        nameBtn.value = ''
        describtionBtn.value = ''
    }

});