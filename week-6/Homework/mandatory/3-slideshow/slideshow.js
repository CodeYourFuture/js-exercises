// Write your code here


const images = ['https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
]

let i = 0;
const img = document.querySelector("img")
img.src = images[i]

const back = document.getElementById("back")
const autoBack = document.getElementById("autoBack")
const forward = document.getElementById("forward")
const autoForward = document.getElementById("autoForward")
const stopBtn = document.getElementById("stop")

let backInt;
let forwardInt;

function autoBackFnc() {
    clearInterval(forwardInt)
    backInt = setInterval(() => {
        if (i > 0) {
            i--
            img.src = images[i]
        }
    }, 2000)
}

function autoForwardFnc() {
    clearInterval(backInt)
    forwardInt = setInterval(() => {
        if (i < images.length - 1) {
            i++
            img.src = images[i]
        }
    }, 2000)
}

let stopFnc = () => {
    clearInterval(forwardInt)
    clearInterval(backInt)
}

back.addEventListener("click", () => { if (i > 0) { i--, img.src = images[i] } })
forward.addEventListener("click", () => { if (i < (images.length - 1)) { i++, img.src = images[i] } })
autoForward.addEventListener("click", autoForwardFnc)
autoBack.addEventListener("click", autoBackFnc)
stopBtn.addEventListener("click", stopFnc)

