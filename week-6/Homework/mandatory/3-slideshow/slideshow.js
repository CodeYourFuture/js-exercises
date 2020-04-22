// An array of images address
let imgArray = [
    'images/01.jpeg',
    'images/02.jpeg',
    'images/03.jpeg',
    'images/04.png',
    'images/05.jpeg',
    'images/06.jpeg',
    'images/07.jpeg',
    'images/08.jpeg',
    'images/09.jpeg',
    'images/10.jpeg',    
]
// function with one parameter to show image in image box
function imgShow(index){
    // Access  to img element in document
    let imgEl = document.querySelector('#imgShow');
    // Evaluate an address in arrar to img src
    imgEl.src = imgArray[index];
}
// declare current index of image and two interval for forward and backward
let currentImgIndex = 0;
let forwardInterval;
let backwardInterval;
// Show default image when document load
imgShow(currentImgIndex);
// Access to all element that I need in java script buttons and img number label
let imageNumberEl = document.querySelector('#imgNumber');
let autoForwardEl = document.querySelector('#autoForward');
let forwardEl = document.querySelector('#forward');
let stopEl = document.querySelector('#stop');
let backEl = document.querySelector('#back');
let autoBackwardEl = document.querySelector('#autoBackward');
// Show first image number label 
imageNumberEl.textContent = currentImgIndex + 1;
// Auto forward button with event click
autoForwardEl.addEventListener('click',()=>{
    // Stop backward interval and start forward interval
    clearInterval(backwardInterval);    
    forwardInterval = setInterval(()=>{
        // If current image interval is less than 9 index so ++ if not go to the first image
        (currentImgIndex < 9) ? currentImgIndex++ : currentImgIndex = 0;
        // Current image index + 1 becuse indexes started from zero and I have to show from 1 to 10
        imageNumberEl.textContent = currentImgIndex + 1;
        // show image with current index
        imgShow(currentImgIndex);
        // Interval timer is 1.5 second
    },1500);
})
// Forward button with event click
forwardEl.addEventListener('click',()=>{
    // Stop backward interval and forward interval
    clearInterval(backwardInterval); 
    clearInterval(forwardInterval);
     // If current image interval is less than 9 index so ++ if not go to the first image
    (currentImgIndex < 9) ? currentImgIndex++ : currentImgIndex = 0;
    // Current image index + 1 becuse indexes started from zero and I have to show from 1 to 10
    imageNumberEl.textContent = currentImgIndex + 1;
    // show image with current index
    imgShow(currentImgIndex);    
})
// Stop button with event click
stopEl.addEventListener('click',()=>{
    // Stop backward interval and forward interval
    clearInterval(backwardInterval); 
    clearInterval(forwardInterval);     
})
// Stop button with event click
backEl.addEventListener('click',()=>{    
    // Stop backward interval and forward interval
    clearInterval(backwardInterval); 
    clearInterval(forwardInterval); 
    // If current image interval is greater than 0 index so -- if not go to the last image
    if(currentImgIndex > 0){
        currentImgIndex--
    }
    else{
        currentImgIndex = 9;
    }
    // Current image index + 1 becuse indexes started from zero and I have to show from 1 to 10
    imageNumberEl.textContent = currentImgIndex + 1;    
    // show image with current index
    imgShow(currentImgIndex);    
})
// Auto backward button with event click
autoBackwardEl.addEventListener('click',()=>{
    // Stop forward interval and start backward interval
    clearInterval(forwardInterval);    
    backwardInterval = setInterval(()=>{
        // If current image interval is greater than 0 index so -- if not go to the last image
        if(currentImgIndex > 0){
           currentImgIndex--
        }
        else{
            currentImgIndex = 9;
        }
        // Current image index + 1 becuse indexes started from zero and I have to show from 1 to 10
        imageNumberEl.textContent = currentImgIndex + 1;
        // show image with current index
        imgShow(currentImgIndex);
        // Interval timer is 1.5 second
    },1500);
})