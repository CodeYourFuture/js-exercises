let content = document.querySelector("body > div.content > div.slideshow");

let arrayOfImages = [
  "https://www.floraqueen.com/blog/wp-content/uploads/2020/02/shutterstock_1009843408.jpg",
  "https://media.istockphoto.com/photos/aerial-view-of-london-with-shard-and-river-thames-picture-id657283816?k=6&m=657283816&s=612x612&w=0&h=hGEmPLn5dFtfZIkH0A03ySj7qeLVMydLCsmLrBygcrQ=",
  "https://media.istockphoto.com/photos/aerial-view-of-woman-on-paddleboard-picture-id544966382?k=6&m=544966382&s=612x612&w=0&h=QxJKIhEzFMdnkr0nad5mamvK5Sg8ihpraiym_bdqzMk=",
  "https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1591749161298-e4af15ec787d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1591460318747-b1c00fd3a8ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
];
var img = 0;
arrayOfImages.forEach(function (image) {
  // for each link l in ArrayOfImages
  var img = document.createElement("img"); // create an img element
  img.src = image; // set its src to the link
  img.setAttribute("height", "300px");
  img.style.padding = "50px 10px 20px 30px";
  content.appendChild(img); // append it to the body
});
var slides = document.querySelectorAll("img");


document.getElementById("next").addEventListener("click", () => {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (img === slides.length - 1) {
    img = 1;
  }

  img++;
  slides[img - 1].style.display = "block";
});

document.getElementById("back").addEventListener("click", () => {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (img < 1) {
    img = slides.length;
  }

  img--;
  slides[img + 1].style.display = "block";
});


function showSlidesAuto() {
  var i;
  var slides = document.querySelectorAll("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  img++;
  if (img > slides.length) {img = 1}
  slides[img-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.getElementById("auto").addEventListener("click", () => {
  showSlidesAuto()

})
