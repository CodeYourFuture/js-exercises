// All button 
const clickerButtonB = document.getElementById("blueBtn");
const clickerButtonO = document.getElementById("orangeBtn");
const clickerButtonG = document.getElementById("greenBtn");

// for Blue button
clickerButtonB.addEventListener('click', function(){
     const divForm = document.getElementsByClassName('jumbotron');
     const bakeB = document.getElementsByClassName('btn btn-primary btn-lrg');
     const valeB = document.getElementsByClassName('btn btn-secondary btn-lrg');

     document.body.style.backgroundColor ='#588fbd';
     divForm.style.backgroundColor = '#588fbd';

     bakeB.style.backgroundColor = '#ffa500';
     valeB.style.backgroundColor = 'black';
     valeB.style.textColor = 'white';
});

// for Orang button
clickerButtonO.addEventListener('click', function(){
    const divForm = document.getElementsByClassName('jumbotron');
    const bakeB = document.getElementsByClassName('btn btn-primary btn-lrg');
    const valeB = document.getElementsByClassName('btn btn-secondary btn-lrg');

    document.body.style.backgroundColor =`#f0ad4e`;
    divForm.style.backgroundColor = `#f0ad4e`;

    bakeB.style.backgroundColor = `#5751fd`;
    valeB.style.backgroundColor = `#31b0d5`;
    valeB.style.textColor = `white`;
});

//for green button 
clickerButtonG.addEventListener(`click`, function(){
    const divForm = document.getElementsByClassName(`jumbotron`);
    const bakeB = document.getElementsByClassName(`btn btn-primary btn-lrg`);
    const valeB = document.getElementsByClassName(`btn btn-secondary btn-lrg`);

    document.body.style.backgroundColor =`#87ca8a`;
    divForm.style.backgroundColor =`#87ca8a`;

    bakeB.style.backgroundColor = `black`;
    valeB.style.backgroundColor =`#8c9c08`;
    valeB.style.textColor = `white`;
});

// part 2:

const SubButton = document.getElementsByClassName('lib-btn btn-primary');
SubButton.addEventListener('click',function() {
    const Dive = document.getElementById('content > div.alert.alert-info > strong ');
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
        Email.value = 0;
        Name.value = 0;
        Describe.value = 0;
    }
}

);
