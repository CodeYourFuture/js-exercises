let jumbotronEl = document.querySelector('.jumbotron')
let blueBtnEl = document.querySelector('#blueBtn')
let orangeBtn = document.querySelector('#orangeBtn')
let greenBtn = document.querySelector('#greenBtn')
let donateButton = document.querySelectorAll('.btn-primary')
console.log(donateButton);

let volunteerButton = document.querySelector('.btn-secondary')
let submitEl = document.querySelector('button[type="submit"]')
console.log(submitEl);

// console.log(volunteerButton);

function clickedBlue() {
    jumbotronEl.style.backgroundColor = `#588fbd`
    donateButton[1].style.backgroundColor = `#ffa500`
    volunteerButton.style.backgroundColor = `black`
    volunteerButton.style.color = `white`

}
blueBtnEl.addEventListener('click', clickedBlue)
////////////////////////////////////////////////////////////////////////////////
function clickedOrang() {
    jumbotronEl.style.backgroundColor = `#588fbd`
    donateButton[1].style.backgroundColor = `#5751fd`
    volunteerButton.style.backgroundColor = `#31b0d5`
    volunteerButton.style.color = `white`

}
orangeBtn.addEventListener('click', clickedOrang)
//////////////////////////////////////////////////////////////////////////////////
function clickedGreen() {
    jumbotronEl.style.backgroundColor = `#87ca8a`
    donateButton[1].style.backgroundColor = `black`
    volunteerButton.style.backgroundColor = `#8c9c08`
    volunteerButton.style.color = `white`
}
greenBtn.addEventListener('click', clickedGreen)
//////////////////////////////////////////////////////////////////////////////////////

let nameEl = document.querySelector('#example-text-input')
let emailEl = document.querySelector('#exampleInputEmail1')
let describeEl = document.querySelector('#exampleTextarea')
function checked(e) {
    e.preventDefault();
    if (nameEl.value.length < 0) {
        nameEl.style.backgroundColor = 'red'
    }
    if (!emailEl.value.includes('@') || emailEl.value.length < 0) {
        emailEl.style.backgroundColor = 'red'
    }
    if (describeEl.value.length < 0) {
        describeEl.style.backgroundColor = 'red'
    }
    if (nameEl.value.length > 0 && emailEl.value.includes('@') && describeEl.value.length > 0) {
        alert('thank you for filling out the for')
        nameEl.value = "";
        emailEl.value = "";
        describeEl.value = "";
    }
}
submitEl.addEventListener('click', checked)