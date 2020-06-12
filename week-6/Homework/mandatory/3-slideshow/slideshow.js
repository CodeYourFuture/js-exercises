// Write your code here
let divEl = document.getElementById('container')
let divImg = document.createElement('div')
let imgEl = document.createElement('img')
let index = document.createElement('div')
divImg.appendChild(imgEl)
let forwardButton = document.createElement('button')
let backwardButton = document.createElement('button')
let autoforwardButton = document.createElement('button')
let autoBackwardButton = document.createElement('button')
let stopButton = document.createElement('button')
forwardButton.innerText = 'Forward'
backwardButton.innerText = 'Backward'
autoforwardButton.innerText = 'Auto Forward'
autoBackwardButton.innerText = 'Auto backward'
stopButton.innerText = 'Stop Auto'
divEl.appendChild(divImg)
divEl.appendChild(index)
divEl.appendChild(backwardButton)
divEl.appendChild(autoBackwardButton)
divEl.appendChild(stopButton)
divEl.appendChild(autoforwardButton)
divEl.appendChild(forwardButton)
let images = [
'https://images.unsplash.com/photo-1591723027220-66847f768065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1591688535194-59a1301d3b94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1591727105417-a0a1055f48c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=584&q=80',
'https://images.unsplash.com/photo-1591633073593-5bb8dba0127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
'https://images.unsplash.com/photo-1591530600915-de85211eab6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1591511462077-9e5a9088e1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
];
window.onload =  forward
forwardButton.addEventListener('click', forward)
backwardButton.addEventListener('click', backward)
////////////////////////////////////////////////////
imageIndex = 0
let timer;
function forward(){
    imageIndex = (imageIndex + 1)%images.length;
    imgEl.src = images[imageIndex]
    if (imageIndex > images.length) {imageIndex = 0}
    index.innerText = imageIndex
};
function backward(){
    imageIndex = (imageIndex - 1)%images.length;
    imgEl.src = images[imageIndex]
    if (imageIndex < 1) {imageIndex = images.length}
    index.innerText = imageIndex
    };

    function autoForward(){
      clearInterval(timer);
      timer =  setInterval(forward ,1000)
    };
    function autoBackward(){
      clearInterval(timer);
     timer =  setInterval(backward ,1000)
    };
    function stop(){
        clearInterval(timer);
    };
autoforwardButton.addEventListener('click', autoForward);
autoBackwardButton.addEventListener('click', autoBackward);
stopButton.addEventListener('click', stop);
