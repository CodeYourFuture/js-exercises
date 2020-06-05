
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
const email = document.querySelectorAll('.form-control')[0]
const name = document.querySelectorAll('.form-control')[1]
const description = document.querySelectorAll('.form-control')[2]

function submitForm(e) {
    e.preventDefault()

    if (email.value.length > 0 && email.value.includes('@')) {
        if (name.value.length > 0) {
            if (description.value.length > 0) {
                alert('thank you for filling out the form')
            } else {
                description.style.backgroundColor = 'red'
                return
            }
        } else {
            name.style.backgroundColor = 'red'
            return
        }
    } else {
        email.style.backgroundColor = 'red'
        return
    }
    formControl.forEach(p => p.value = '')
}


submitBtn.addEventListener('click', submitForm)


