

let content = document.querySelector("body > div.content")

let arrayOfImages = [
'https://www.floraqueen.com/blog/wp-content/uploads/2020/02/shutterstock_1009843408.jpg', 
'https://media.istockphoto.com/photos/aerial-view-of-london-with-shard-and-river-thames-picture-id657283816?k=6&m=657283816&s=612x612&w=0&h=hGEmPLn5dFtfZIkH0A03ySj7qeLVMydLCsmLrBygcrQ=',
'https://media.istockphoto.com/photos/aerial-view-of-woman-on-paddleboard-picture-id544966382?k=6&m=544966382&s=612x612&w=0&h=QxJKIhEzFMdnkr0nad5mamvK5Sg8ihpraiym_bdqzMk=',
'https://media.istockphoto.com/photos/closeup-of-colorful-roses-backdrop-wall-picture-id1140756861'
];


arrayOfImages.forEach(function(image) {    // for each link l in ArrayOfImages
  var img = document.createElement('img'); // create an img element

  img.src = image;                         // set its src to the link 
  img.setAttribute('height', '500px')
  img.style.padding = "50px 10px 20px 30px";
  content.appendChild(img);          // append it to the body 

});

var img = 0;
showSlides();

function showSlides() {
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



