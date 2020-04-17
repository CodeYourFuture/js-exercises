let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval;
// here it calls a fumction to move to the nextslide
function nextSlide() {
  goToSlide(currentSlide + 1);
}
// here it calls a function to move to the previous slide
function previousSlide() {
  goToSlide(currentSlide - 1);
}
// this function moves to slide number "n"
function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide active';
}
// this variable used to check if the slides are playing or not
let playing = false;

let userWaitTime = document.querySelector('input[type=number]');
// defaul value of delaytime in setInterval if the user has not enetered
let userDelayTime = 1000;
let pauseButton = document.getElementById('pause');
let forwardButton = document.getElementById('next');
let backButton = document.getElementById('previous');
let autoForwardButton = document.getElementById('auto-forward');
let autoBackButton = document.getElementById('auto-backward');
//this function does stops the slideshow
function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}
//this function does splays the slideshow
function playSlideshow() {
  pauseButton.innerHTML = 'Stop';
  playing = true;
  slideInterval = setInterval(nextSlide, userDelayTime);
}

forwardButton.addEventListener('click', () => {
  pauseSlideshow();
  nextSlide();
});

backButton.addEventListener('click', () => {
  pauseSlideshow();
  previousSlide();
});

pauseButton.addEventListener('click', () => {
  //here we checking if the slideshow is playin or not
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
});
autoForwardButton.addEventListener('click', () => {
  //this will be executed when autoForward button is clicked
  pauseButton.innerHTML = 'Stop';
  playing = true;
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, userDelayTime);
});
autoBackButton.addEventListener('click', () => {
  //this will be executed when autoBackward button is clicked
  pauseButton.innerHTML = 'Stop';
  playing = true;
  clearInterval(slideInterval);
  slideInterval = setInterval(previousSlide, userDelayTime);
});

//here when the user enters the delay time , then userDelayTime is et to it
userWaitTime.addEventListener('change', () => {
  userDelayTime = userWaitTime.value * 1000;
});
