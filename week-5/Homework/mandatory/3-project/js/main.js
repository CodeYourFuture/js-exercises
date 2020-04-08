// All button 
let clickerButtonB = document.getElementById("blueBtn");
const clickerButtonO = document.getElementById("orangeBtn");
const clickerButtonG = document.getElementById("greenBtn");
let divForm = document.querySelector('.jumbotron');
let bakeB = document.querySelector('.buttons .btn-primary');
let valeB = document.querySelector('.buttons .btn-secondary');

// for Blue button
var clickerButton = function() {
     document.body.style.backgroundColor ='#588fbd';
     divForm.style.backgroundColor = '#588fbd';

     bakeB.style.backgroundColor = '#ffa500';
     valeB.style.backgroundColor = 'black';
     valeB.style.color = 'white';
};
clickerButtonB.addEventListener('click', clickerButton);

// for Orang button
clickerButtonO.addEventListener('click', function(){
    document.body.style.backgroundColor =`#f0ad4e`;
    divForm.style.backgroundColor = `#f0ad4e`;

    bakeB.style.backgroundColor = `#5751fd`;
    valeB.style.backgroundColor = `#31b0d5`;
    valeB.style.color = `white`;
});

//for green button 
clickerButtonG.addEventListener(`click`, function(){
    document.body.style.backgroundColor =`#87ca8a`;
    divForm.style.backgroundColor =`#87ca8a`;

    bakeB.style.backgroundColor = `black`;
    valeB.style.backgroundColor =`#8c9c08`;
    valeB.style.color = `white`;
});

// part 2:

const SubButton = document.querySelector('.form-group .btn-primary');
SubButton.addEventListener('click', function(){
    const Dive = document.getElementById('content');
    const Email = document.getElementById('exampleInputEmail1').value;
    const Name = document.getElementById('example-text-input').value;
    const Describe = document.getElementById('exampleTextarea').value;

    if (Email.length === 0 || Email.value === '@'){
        Email.style.backgroundColor = 'red';
    }if ( Name.length === 0 ){
        name.style.backgroundColor = 'red';
    }if(Describe.length === 0 ){
        Describe.style.backgroundColor = 'red';
    }else {
        Dive.innerHTML = 'thank you for filling out the form';
        Email.innerHTML = " ";
        Name.value = 0;
        Describe.value = 0;
    };
});