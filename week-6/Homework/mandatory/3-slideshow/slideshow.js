let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide active';
}
let playing = false;

let userWaitTime = document.querySelector('input[type=text]');
let userDelayTime;
let pauseButton = document.getElementById('pause');
let forwardButton = document.getElementById('next');
let backButton = document.getElementById('previous');
let autoForwardButton = document.getElementById('auto-forward');
let autoBackButton = document.getElementById('auto-backward');
function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}
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
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
});
autoForwardButton.addEventListener('click', () => {
  pauseButton.innerHTML = 'Stop';
  playing = true;
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, userDelayTime);
});
autoBackButton.addEventListener('click', () => {
  pauseButton.innerHTML = 'Stop';
  playing = true;
  clearInterval(slideInterval);
  slideInterval = setInterval(previousSlide, userDelayTime);
});
userWaitTime.addEventListener('change', () => {
  userDelayTime = userWaitTime.value * 1000;

  console.log(userDelayTime);
});
