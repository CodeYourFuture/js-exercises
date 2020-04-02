/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>Chris</h1> 
 *      <h2>Teacher</h2>
 *      <h1>Joanna</h1> 
 *      <h2>Student</h2>
 *      <h1>Boris</h1> 
 *      <h2>Prime Minister</h2>
 * </div>
 * 
 * let people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  }  //object array
];

exerciseOne(people);
 */

let people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  }
];
//https://codepen.io/sonjide/pen/abOMVxo - expected results
//problem decomposition - 
//step1 create a h1 
//step2 create two h1 siblings
//step3 create a h1 and h2
//step4 create a h1 with Chris inside
//step5 create a h1 with Chris inside and add an empty h2
//step6 as step5 but populate the h2 with the textNode "teacher"
//step7 create a h1 and h2 for Joanna and Boris

//create a new variable name assign = select the div id "content"
let content = document.querySelector("#content"); //first 1 matching the object in this case
//creating h1 a new tagElements in the webpage
let name1 = document.createElement("h1"); //make name clear for you in 1 weeks time
let name2 = document.createElement("h1");
let name3 = document.createElement("h1");

//creating h1 a new tagElements in the webpage
let job1 = document.createElement("h2");
let job2 = document.createElement("h2");
let job3 = document.createElement("h2");

//any HTML element can only have one Parent 
content.appendChild(name1); //it attaches(establishes) the parent element to child 
content.appendChild(name2);
content.appendChild(name3);

//any HTML element can only have one Parent 
content.appendChild(job1); //it attaches(establishes) the parent element to child 
content.appendChild(job2);
content.appendChild(job3);

//add textNode inside a h1 with datatype "string" and appendChild to parent 
let textNodeName1 = document.createTextNode("Chris");
name1.appendChild(textNodeName1);
let textNodeName2 = document.createTextNode("Joanna");
name2.appendChild(textNodeName2);
let textNodeName3 = document.createTextNode("Boris");
name3.appendChild(textNodeName3);

//add textNode inside a h2 with datatype "string" and appendChild to parent 
let textNodeJob1 = document.createTextNode("Teacher");
job1.appendChild(textNodeJob1);
let textNodeJob2 = document.createTextNode("Student");
job2.appendChild(textNodeJob2);
let textNodeJob3 = document.createTextNode("Prime Minister");
job3.appendChild(textNodeJob3);

/*
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
// function exerciseTwo(shopping) {
//   //Write your code in here
// }

/**
  I'd like to display my three favorite books inside a nice webpage!

  const books = [
      {
          title: "The Design of Everyday Things",
          author: "Don Norman",
          alreadyRead: false
      },
      {
          title: "The Most Human Human",
          author: "Brian Christian",
          alreadyRead: true
      },
      {
          title: "The Pragmatic Programmer",
          author: "Andrew Hunt",
          alreadyRead: true
      }
  ];

  Iterate through the array of books.
  - For each book, create a <p> element with the book title and author and append it to the page.
  - Use a <ul> and <li> to display the books.
  - Add an <img> to each book that links to a URL of the book cover.
  - Change the style of the book depending on whether you have read it (green) or not (red).

  The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
// function exerciseThree(books) {
//   //Write your code in here
// }

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//
// exercise1 
// let people = [{
//     name: "Chris",
//     job: "Teacher"
//   },
//   {
//     name: "Joanna",
//     job: "Student"
//   },
//   {
//     name: "Boris",
//     job: "Prime Minister"
//   }
// ];

// exerciseOne(people);

//exercise2
//let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

//exerciseTwo(shopping);

//exercise3
// const books = [{
//     title: "The Design of Everyday Things",
//     author: "Don Norman",
//     alreadyRead: false
//   },
//   {
//     title: "The Most Human Human",
//     author: "Brian Christian",
//     alreadyRead: true
//   },
//   {
//     title: "The Pragmatic Programmer",
//     author: "Andrew Hunt",
//     alreadyRead: true
//   }
// ];

// exerciseThree(books);