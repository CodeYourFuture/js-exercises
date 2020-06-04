//#Part 1
let blueButton = document.getElementById('blueBtn')
let orangeButton = document.getElementById('orangeBtn')
let greenButton = document.getElementById('greenBtn')
//---------------------------------------------------------//
let jumbotron = document.querySelector('.jumbotron')
let donateBtn = document.getElementsByClassName('btn btn-primary btn-lrg')[0];
let volunteerBtn = document.getElementsByClassName('btn btn-secondary btn-lrg')[0];

blueButton.addEventListener('click',function(){
    jumbotron.style.backgroundColor = '#588fbd'
    donateBtn.style.backgroundColor = '#ffa500'
    volunteerBtn.style.backgroundColor = 'black'
    volunteerBtn.style.color = 'white'
})
orangeButton.addEventListener('click',function(){
    jumbotron.style.backgroundColor = '#f0ad4e'
    donateBtn.style.backgroundColor = '#5751fd'
    volunteerBtn.style.backgroundColor = '#31b0d5'
    volunteerBtn.style.color = 'white'
});
greenButton.addEventListener('click',function(){
    jumbotron.style.backgroundColor = '#87ca8a'
    donateBtn.style.backgroundColor = 'black'
    volunteerBtn.style.backgroundColor = '#8c9c08'
    volunteerBtn.style.color = 'white'
});


//#Part 2

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
