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
  slideInterval = setInterval(nextSlide, 2000);
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
  slideInterval = setInterval(nextSlide, 2000);
});
backButton.addEventListener('click', () => {
  slideInterval = setInterval(previousSlide, 2000);
});
