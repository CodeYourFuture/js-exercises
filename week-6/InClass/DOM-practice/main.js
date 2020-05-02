console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sections = document.querySelectorAll("section");

sections.forEach((sect) => {
  sect.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let allImgs = document.querySelectorAll("img");

allImgs.forEach( (imgs) => {
  imgs.classList.add("content-title");
});
// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let birthDate = ["9 December 1906", "26 August 1918", " 10 December 1815"];

sections.forEach( (section, i) => {
  let p = document.createElement("p");
  section.appendChild(p);
  p.innerHTML = birthDate[i];
});
