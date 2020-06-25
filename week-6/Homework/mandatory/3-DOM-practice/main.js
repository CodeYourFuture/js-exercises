console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

document
  .querySelectorAll("section")
  .forEach((element) => (element.style.backgroundColor = "white"));

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
document
  .querySelectorAll("img")
  .forEach((element) => (element.className = "content-title"));
// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let index = 0;
let years = [
  "December 9, 1906 — January 1, 1992",
  "August 26, 1918 — February 24, 2020",
  "December 10, 1815 — November 27, 1852",
];
document.querySelectorAll("section").forEach((element) => {
  let paragraph = document.createElement("p");
  paragraph.textContent = years[index];
  element.append(paragraph);
  index++;
});
