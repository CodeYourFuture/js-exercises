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

//problem decomposition - 
//step 1 create a h1 
//step create two h1 siblings

//create a new variable name assign = select the div id "content"
let content = document.querySelector("#content"); //first 1 matching the object in this case
//creating h1 a new tagElements in the webpage
let h1Tag = document.createElement("h1");
//create
let h1 = document.createElement("h1");
//any HTML element can only have one Parent 
content.appendChild(h1Tag);
content.appendChild(h1);

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