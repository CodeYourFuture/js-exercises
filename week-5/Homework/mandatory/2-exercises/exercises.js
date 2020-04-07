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
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    let myH1 = document.createElement("h1");
    let myH2 = document.createElement("h2");

    myH1.textContent = person.name;
    myH2.textContent = person.job;
    content.appendChild(myH1);
    content.appendChild(myH2);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let myUl = document.createElement("ul");

  shopping.forEach((item) => {
    let myLi = document.createElement("li");
    myLi.textContent = item;
    myUl.appendChild(myLi);
  });

  let content = document.querySelector("#content");
  content.appendChild(myUl);
}

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
function exerciseThree(books) {
  //Write your code in here
  let mycontent = document.querySelector("#content");
  let myUl = document.createElement("ul");

  books.forEach((book) => {
    let myP = document.createElement("p");
    let myLi = document.createElement("li");
    let myImage = document.createElement("img");
    //let myAnchor = document.createElement("a");

    myP.textContent = `Title : ${book.title} - Author : ${book.author}`;

    if (book.alreadyRead == true) {
      myP.style.color = "red";
    } else {
      myP.style.color = "green";
    }

    myImage.src = "";

    myLi.appendChild(myP);
    myLi.appendChild(myImage);
    myUl.appendChild(myLi);
  });

  mycontent.appendChild(myUl);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
