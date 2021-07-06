console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sections = document.querySelectorAll("section");
sections.forEach((section) => (section.style.backgroundColor = "white"));

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.


let images = document.querySelectorAll("img");
images.forEach((image) => image.classList.add("content-title"));


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
