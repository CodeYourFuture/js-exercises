////////Part 1
/*
Clicking on the buttons should change the "theme" of the website:
- When clicking **blue** it should change:
  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
- When clicking **orange** it should change:
  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
*/

let JumbotronEl = document.querySelector(".jumbotron");//asigned div.jumbotron to variable JumbotronEl.
let donateBykBtn = document.querySelectorAll(".btn-lrg")[0];//asigned the first link with class btn-lrg to variable donateBykBtn.
let volunteerColor = document.querySelectorAll(".btn-lrg")[1];//asigned the second link with class btn-lrg to variable volunteerColor.

document.getElementById("blueBtn").addEventListener("click", function(){// function click the blueBtn
    JumbotronEl.style.backgroundColor = "#588fbd";
    donateBykBtn.style.backgroundColor = "#ffa500";
    volunteerColor.style.backgroundColor = "#000000";
    volunteerColor.style.color = "#ffffff"
});
document.getElementById("orangeBtn").addEventListener("click", function(){// function click the orangeBtn
    JumbotronEl.style.backgroundColor = "#f0ad4e";
    donateBykBtn.style.backgroundColor = "#5751fd";
    volunteerColor.style.backgroundColor = "#31b0d5";
    volunteerColor.style.color = "#ffffff"
});
document.getElementById("greenBtn").addEventListener("click", function(){// function click the greenBtn
    JumbotronEl.style.backgroundColor = "#87ca8a";
    donateBykBtn.style.backgroundColor = "#000000";
    volunteerColor.style.backgroundColor = "#8c9c08";
});



////////PART 2


/*
Just below the buttons, there's a form called **Register with us**.
Continue working in `./js/main.js` to add the following functionality:
When the submit button is pressed, it should check that all the form fields are valid:
- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character
For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:
- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields
**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/

let allValid = 0;//used this variable to check all inputs valid.
let submit = document.querySelector("#submitBtn");
let formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{// main function click the submit.
  let emlVal = document.querySelector("#exampleInputEmail1").value;//asigned the value of email input to emlVal.

  function ValidateEmail(inputText){//function to check the email format.
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    (inputText.match(mailformat)) ? allValid++ : document.querySelector("#exampleInputEmail1").style.backgroundColor = "red";
  }

  ValidateEmail(emlVal)//call the function validate email.
  let nameVal = document.querySelector("#example-text-input").value;//asigned the value of name input to nameVal.
  (nameVal.length > 0) ? allValid++ : document.querySelector("#example-text-input").style.backgroundColor = "red";
  let describeVal = document.querySelector("#exampleTextarea").value;
  (describeVal.length > 0) ? allValid++ : document.querySelector("#exampleTextarea").style.backgroundColor = "red";
  (allValid === 3) ? alert("thank you for filling out the form") && event.preventDefault() : event.preventDefault();//condition to check all inputs are valid.
});

/*
*/

