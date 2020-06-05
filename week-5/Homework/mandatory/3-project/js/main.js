//add event listener to blue button

let blueBtn = document.getElementById('blueBtn');
//console.log(blueEl);

let jumboEl = document.querySelector('.jumbotron');
//console.log(jumboEl);

let donateBtn = document.getElementById('donateBtn');

let volunteerBtn = document.getElementById('volunteerBtn');



function onClickBlueBtn(){
    jumboEl.style.backgroundColor = '#588fbd';
    donateBtn.style.backgroundColor = '#ffa500';
    volunteerBtn.style.backgroundColor = '#000000';
    volunteerBtn.style.color = '#ffffff'
}

blueBtn.addEventListener('click', onClickBlueBtn);

//add event listener to orange button 
let orangeBtn = document.getElementById('orangeBtn');

function onClickOrangeBtn(){
    jumboEl.style.backgroundColor = '#f0ad4e';
    donateBtn.style.backgroundColor = '#5751fd';
    volunteerBtn.style.backgroundColor = '#31b0d5';
    volunteerBtn.style.color = '#ffffff'



}

orangeBtn.addEventListener('click', onClickOrangeBtn);


//add event listener to green button
let greenBtn = document.getElementById('greenBtn');

function onClickGreenBtn(){
    jumboEl.style.backgroundColor = '#87ca8a';
    donateBtn.style.backgroundColor = '#000000';
    volunteerBtn.style.backgroundColor = '#8c9c08';
    
}

greenBtn.addEventListener('click', onClickGreenBtn);

//adding functionality to forms
let submitBtn = document.getElementById('submitBtn');


//add event listener to submit button 
function onClickSubmitButton(e){
    e.preventDefault();
    let email = document.getElementById('exampleInputEmail1').value;
    let name = document.getElementById('example-text-input').value;
    let description = document.getElementById('exampleTextarea').value;
    let formEls = document.querySelectorAll('.form-group');
    let regFrm = document.getElementById('registerForm');

    if(email.length === 0){
        formEls[0].style.backgroundColor = 'red';
        if(name.length === 0){
            formEls[1].style.backgroundColor = 'red';
        }else{
            formEls[2].style.backgroundColor = 'red';
        }
    }else if(name.legth === 0){
        formEls[1].style.backgroundColor = 'red';
        if(email.length === 0){
            formEls[0].style.backgroundColor = 'red';
        }else{
            formEls[2].style.backgroundColor = 'red';
        }       
    }else if(description.length === 0){
        formEls[2].style.backgroundColor = 'red';
        if(email.length === 0){
            formEls[0].style.backgroundColor = 'red';
        }else{
            formEls[1].style.backgroundColor = 'red';
        }

    }else{
        regFrm.reset();
        alert('Thank you for filling out the form!');

    }
}

submitBtn.addEventListener('click', onClickSubmitButton);



