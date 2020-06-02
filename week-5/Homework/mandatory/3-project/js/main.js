
const blueBtn = document.getElementById('blueBtn')
const orangeBtn = document.getElementById('orangeBtn')
const greenBtn = document.getElementById('greenBtn')

const jumbotron = document.querySelector('.jumbotron')
const donateBtn = document.querySelector('.buttons').children[0]
const volunteerBtn = document.querySelector('.buttons').children[1]


blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd"
    donateBtn.style.backgroundColor = "#ffa500"
    volunteerBtn.style.backgroundColor = "black"
    volunteerBtn.style.color = "white"
})

orangeBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#f0ad4e"
    donateBtn.style.backgroundColor = "#5751fd"
    volunteerBtn.style.backgroundColor = "#31b0d5"
    volunteerBtn.style.color = "white"
})

greenBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#87ca8a"
    donateBtn.style.backgroundColor = "black"
    volunteerBtn.style.backgroundColor = "#8c9c08"
})

const form = document.getElementsByTagName('form')
const formControl = document.querySelectorAll('.form-control')
const submitBtn = document.querySelector('form button')

console.log(form)

function submitForm(e) {
    e.preventDefault()
    for (let i = 0; i < formControl.length; i++) {
        if (formControl[i].value.length > 0) {
            formControl[0].value.includes('@') ? alert('thank you for filling out the form') : alert('please check your e-mail adresse')
        } else { alert('please fill required places in the form') }
    }
    formControl.forEach(p => p.value = '')
}

submitBtn.addEventListener('click', submitForm)



