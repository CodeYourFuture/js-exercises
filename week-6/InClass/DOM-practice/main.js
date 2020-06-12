console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let getSection = document.getElementsByTagName("section");
Array.from(getSection).forEach((element) => {
  element.style.backgroundColor = "white";
});

// Task 2

// Without changing an of the HTML or CSS, update the images on the page so that they are all centered.
let images = document.getElementsByTagName("img");
Array.from(images).forEach((image) => {
  image.style.display = "block";
  image.style.margin = "auto";
  image.style.border = "green solid ";
  image.style.borderRadius = "5px";
});

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

function addPara1(peopleAge1) {
  let getSection2 = document.getElementsByTagName("section")[0];
  peopleAge1.forEach((element) => {
    let para = document.createElement("p");
    para.textContent = `${element.Born} - ${element.Died}`;
    getSection2.appendChild(para);
  });
}
// Array.from(getSection2);
let birthAndDeath1 = [
  {
    Born: "9 December 1906",
    Died: "1 January 1992",
  },
];
addPara1(birthAndDeath1);

//second person
function addPara2(peopleAge2) {
  let getSection2 = document.getElementsByTagName("section")[1];
  peopleAge2.forEach((element) => {
    let para = document.createElement("p");
    para.textContent = `${element.Born} - ${element.Died}`;
    getSection2.appendChild(para);
    console.log(para);
  });
}
let birthAndDeath2 = [
  {
    Born: "26 August 1918",
    Died: "24 February 2020",
  },
];
addPara2(birthAndDeath2);

function addPara3(peopleAge3) {
  let getSection2 = document.getElementsByTagName("section")[2];
  peopleAge3.forEach((element) => {
    let para = document.createElement("p");
    para.textContent = `${element.Born} - ${element.Died}`;
    getSection2.appendChild(para);
    console.log(para);
  });
}
let birthAndDeath3 = [
  {
    Born: " 10 December 1815",
    Died: "27 November 1852",
  },
];

addPara3(birthAndDeath3);
