var btnBlue = document.querySelector('#blueBtn');
var btnOrange = document.querySelector('#orangeBtn');
var btnGreen = document.querySelector('#greenBtn');

var buttonJum = document.querySelector('.jumbotron');
var buttonDonate = document.querySelector('.btn-primary');
var buttonVolunteer = document.querySelector('btn-secondary');

btnBlue.addEventListener('click', () =>  {
    buttonJum.style.backgroundColor = '#588fdb';
    buttonDonate.style.backgroundColor = '#ffa500';
    buttonVolunteer.style.backgroundColor = 'black';
    buttonVolunteer.style.backgroundColor = 'white';

});

btnOrange.addEventListener('click', () => {
    buttonJum.style.backgroundColor = '#f0ad4e';
    buttonDonate.style.backgroundColor = '#5751fd';
    buttonVolunteer.style.backgroundColor = '#31b0d5';
    buttonVolunteer.style.backgroundColor = 'white';

});

btnGreen.addEventListener('click', () => {
    buttonJum.style.backgroundColor = '#87ca8a';
    buttonDonate.style.backgroundColor = 'black';
    buttonVolunteer.style.backgroundColor = '#8c9c08';
});



