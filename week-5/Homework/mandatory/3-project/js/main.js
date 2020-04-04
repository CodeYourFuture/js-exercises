/* 
Part 1
*/

// here we defined an array of aobjecs for the selectors of the buttons and colors as similar changes is happening during each event
let configs = [
  {id: '#blueBtn', colors: ['#588fbd', '#ffa500', 'black', 'white']},
  {id: '#orangeBtn', colors: ['#f0ad4e', '#5751fd', '#31b0d5', 'white']},
  {id: '#greenBtn', colors: ['#87ca8a', 'black', '#8c9c08', 'white']},
];
configs.forEach(config =>
  registerButtonToChangeTheme(config.id, config.colors)
);
// this function does select the selector of the button and asks another function to apply the change of style
function registerButtonToChangeTheme(buttonId, arrayOfColors) {
  document
    .querySelector(buttonId)
    .addEventListener('click', () => changeTheme(...arrayOfColors));
}
// this function apply the style or theme of colors when an even of click takes place
function changeTheme(color1, color2, color3, color4) {
  document.querySelector('.Jumbotron').style.backgroundColor = color1;
  document.querySelector(
    '.buttons .btn-primary'
  ).style.backgroundColor = color2;
  let volunteerButton = document.querySelector('.btn-secondary');
  volunteerButton.style.backgroundColor = color3;
  volunteerButton.style.color = color4;
}
/* 
Part 2
*/
var nameField = document.querySelector('#example-text-input');
var emailField = document.querySelector('#exampleInputEmail1');
var describeYourselfField = document.querySelector('#exampleTextarea');
var submitButton = document.querySelector("button[type='submit']");
var allFields = [nameField, emailField, describeYourselfField];
// this function validates whether the fiels are empty or not and changes the style depending on the validation
function validOrInvalidFields(element) {
  if (element.value.length > 0) {
    element.style.background = 'green';
  } else {
    element.style.background = 'red';
  }
}

submitButton.addEventListener('click', function() {
  event.preventDefault();

  allFields.forEach(validOrInvalidFields);
  // here the if validates if the email contains "@" symbol
  if (!emailField.value.includes('@')) {
    emailField.style.background = 'red';
  }
  // the rest of this code checks if all inputs are valid then reset the fields and alert a message.
  if (allFields.every(element => element.style.background.includes('green'))) {
    allFields.forEach(element => {
      element.style.background = 'inherit';
      element.value = '';
    });
    alert('Thank You for filling out the form');
  }
});
