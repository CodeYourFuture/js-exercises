// changes that takes place when the blue button is clicked
let blueButton = document.querySelector ('#blueBtn');
blueButton.addEventListener ('click', blueButtonClick);
function blueButtonClick () {
  document.querySelector ('.Jumbotron').style.backgroundColor = '#588fbd';
  document.querySelector ('.btn-primary').style.backgroundColor = '#ffa500';
  let volunteerButton = document.querySelector ('.btn-secondary');
  volunteerButton.style.backgroundColor = 'black';
  volunteerButton.style.color = 'white';
}
// changes that takes place when the orange button is clicked
let orangeButton = document.querySelector ('#orangeBtn');
orangeButton.addEventListener ('click', orangeButtonClick);
function orangeButtonClick () {
  document.querySelector ('.Jumbotron').style.backgroundColor = '#f0ad4e';
  document.querySelector ('.btn-primary').style.backgroundColor = '#5751fd';
  let volunteerButton = document.querySelector ('.btn-secondary');
  volunteerButton.style.backgroundColor = '#31b0d5';
  volunteerButton.style.color = 'white';
}
// changes that takes place when the green button is clicked
let greenButton = document.querySelector ('#greenBtn');
greenButton.addEventListener ('click', greenButtonClick);
function greenButtonClick () {
  document.querySelector ('.Jumbotron').style.backgroundColor = '#87ca8a';
  document.querySelector ('.btn-primary').style.backgroundColor = 'black';
  document.querySelector ('.btn-secondary').style.backgroundColor = '#8c9c08';
}
