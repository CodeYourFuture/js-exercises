function websiteThemes(){
    blueButtonClicked();
    orangeButtonClicked();
    greenButtonClicked();
    validateForm();
}


function blueButtonClicked(){
    let getBlueButton = document.getElementById('blueBtn');
    getBlueButton.addEventListener('click',()=>{
    let getJomboContainer = document.querySelector('.jumbotron');
    getJomboContainer.style.backgroundColor = '#588fbd';  
    let getHeadingClass = document.querySelector('.display-3');
    getHeadingClass.style.color= 'white';
    let getSubHeadingClass = document.querySelector('.lead');
    getSubHeadingClass.style.color ='white';
    let getDonateBikeButton = document.querySelector('.btn-lrg');
    getDonateBikeButton.style.backgroundColor = '#ffa500';
    let getVolunterButton = document.querySelector('.btn-secondary');
    getVolunterButton.style.color = 'white';
    getVolunterButton.style.backgroundColor ='black';
    let getHorizentalLine = document.querySelector('.my-4');
    getHorizentalLine.style.backgroundColor ='white';
      });
     }

function orangeButtonClicked(){
    let getOrangeButton = document.getElementById('orangeBtn');
    getOrangeButton.addEventListener('click', () => {
    let getJomboContainer = document.querySelector('.jumbotron');
    getJomboContainer.style.backgroundColor = '#f0ad4e';
    let getHeadingClass = document.querySelector('.display-3');
    getHeadingClass.style.color = 'black';
    let getSubHeadingClass = document.querySelector('.lead');
    getSubHeadingClass.style.color = 'black';
    let getDonateBikeButton = document.querySelector('.btn-lrg');
    getDonateBikeButton.style.backgroundColor ='#5751fd';
    let getVolunterButton = document.querySelector('.btn-secondary');
    getVolunterButton.style.color ='white'
    getVolunterButton.style.backgroundColor = '#31b0d5';
    let getHorizentalLine = document.querySelector('.my-4');
    getHorizentalLine.style.backgroundColor = 'black';
    });
}

function greenButtonClicked() {
    let getGreenButton = document.getElementById('greenBtn');
    getGreenButton.addEventListener('click', () => {
    let getJomboContainer = document.querySelector('.jumbotron');
    getJomboContainer.style.backgroundColor = '#87ca8a';
    let getHeadingClass = document.querySelector('.display-3');
    getHeadingClass.style.color = 'yellow';
    let getSubHeadingClass = document.querySelector('.lead');
    getSubHeadingClass.style.color = 'yellow';
    let getDonateBikeButton = document.querySelector('.btn-lrg');
    getDonateBikeButton.style.backgroundColor = 'black';
    let getVolunterButton = document.querySelector('.btn-secondary');
    getVolunterButton.style.color = 'green';
    getVolunterButton.style.backgroundColor = '#8c9c08';
    let getHorizentalLine = document.querySelector('.my-4');
    getHorizentalLine.style.backgroundColor = 'yellow';
    });
}

function validateForm(){
    email = document.getElementById('#exampleInputEmail1');
    name = document.getElementById('#example-text-input');
    descSelf = document.getElementById('#exampleTextarea');
    let isValid = false;
    if(email.value.length>0 && email.value.includes('@') && name.value.length>0 && descSelf.value.length>0){
        isValid == true;
        let submit = document.getElementsByClassName('btn-primary');
        submit.addEventListener('click',()=>{
           if(isValid === true){
               alert('thank you for filling out the form');
                form.reset();
           }
        })
    }else{
      email.style.backgroundColor = 'red';   
      name.style.backgroundColor ='red';
      descSelf.style.backgroundColor ='red';
       isValid == false;
    }
     
   
}


websiteThemes();