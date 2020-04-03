let configs=[
    {id:'#blueBtn',colors:['#588fbd','#ffa500','black','white']},
    {id:'#orangeBtn',colors:['#f0ad4e','#5751fd','#31b0d5','white']},
    {id:'#greenBtn',colors:['#87ca8a','black','#8c9c08','white']}
  ];
  configs.forEach(({id,colors}) => registerButtonToChangeTheme(id,colors));
  
  function registerButtonToChangeTheme(buttonId,arrayOfColors) {
   document.querySelector(buttonId).addEventListener("click",() => changeTheme(...arrayOfColors));
  }
  
  function changeTheme(color1,color2,color3,color4) {
    document.querySelector('.Jumbotron').style.backgroundColor = color1;
    document.querySelector('.buttons .btn-primary').style.backgroundColor = color2;
    let volunteerButton = document.querySelector('.btn-secondary');
    volunteerButton.style.backgroundColor = color3;
    volunteerButton.style.color = color4;
  }
/* Part 2
*/
var nameField = document.querySelector ('#example-text-input');
var emailField = document.querySelector ('#exampleInputEmail1');
var describeYourselfField = document.querySelector ('#exampleTextarea');
var submitButton = document.querySelector ("button[type='submit']");
var allFields = [nameField, emailField, describeYourselfField];

function validOrInvalidFields (element) {
  if (element.value.length > 0) {
    element.style.background = 'green';
  } else {
    element.style.background = 'red';
  }
}

submitButton.addEventListener ('click', function () {
  event.preventDefault ();

  allFields.forEach (validOrInvalidFields);
  if (!emailField.value.includes ('@')) {
    emailField.style.background = 'red';
  }

  if (
    allFields.every (element => element.style.background.includes ('green'))
  ) {
    allFields.forEach (element => {
      element.style.background = 'inherit';
      element.value = '';
    });
    alert ('Thank You for filling out the form');
  }
});

// let configs=[
//   {id:'#blueBtn',colors:['#588fbd','#ffa500','black','white']},
//   {id:'#orangeBtn',colors:['#f0ad4e','#5751fd','#31b0d5','white']},
//   {id:'#greenBtn',colors:['#87ca8a','black','#8c9c08','white']}
// ];
// configs.forEach(({id,colors}) => registerButtonToChangeTheme(id,colors));

// function registerButtonToChangeTheme(buttonId,arrayOfColors) {
//  document.querySelector(buttonId).addEventListener("click",() => changeTheme(...arrayOfColors));
// }

// function changeTheme(color1,color2,color3,color4) {
//   document.querySelector('.Jumbotron').style.backgroundColor = color1;
//   document.querySelector('.buttons .btn-primary').style.backgroundColor = color2;
//   let volunteerButton = document.querySelector('.btn-secondary');
//   volunteerButton.style.backgroundColor = color3;
//   volunteerButton.style.color = color4;
// }