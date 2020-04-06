// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
// Task 1

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let img = document.querySelectorAll("img");
img.forEach((img) => img.classList.add("content-title"));

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 2

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let allSection = document.querySelectorAll("section");

allSection.forEach((sec) => (sec.style.backgroundColor = "white"));

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let dob = ["10/20/30", "12/12/12", "20/20/20"];
allSection.forEach((section, i) => {
  let p = document.createElement("p");
  section.appendChild(p);
  p.innerHTML = dob[i];
});
