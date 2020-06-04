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

  for (var i = 0; i < arrayOfPeople.length; i++) {
    let nameElement = document.createElement("h1");
    let jobElement = document.createElement("h2");
    nameElement.textContent = arrayOfPeople[i].name;
    jobElement.textContent = arrayOfPeople[i].job;
    content.appendChild(nameElement);
    content.appendChild(jobElement);
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content"); //select div
  let ulList = document.createElement("ul"); //create ul element
  content.appendChild(ulList); // insert ul inside div
  for (var i = 0; i < shopping.length; i++) {
    let liItems = document.createElement("li"); //create li element
    liItems.textContent = shopping[i]; //grab array items
    ulList.appendChild(liItems); //insert li items to ul
  }
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
  let content = document.querySelector("#content"); //select div
  let ulList = document.createElement("ul"); //create ul element
  content.appendChild(ulList); // insert ul inside div
  ulList.style.listStyle = "none"; //lu position - flex - wrap
  ulList.style.display = "flex";
  ulList.style.flexWrap = "wrap";
  ulList.style.padding = "20px";
  ulList.style.width = "calc (100% - 40px)";

  for (var i = 0; i < books.length; i++) {
    let liItems = document.createElement("li"); //create li element
    ulList.appendChild(liItems); //insert li items to ul
    let bookTitleAndAuthor = document.createElement("p"); //create a p element
    bookTitleAndAuthor.textContent = `${books[i].title} - ${books[i].author}`; //grab array items
    liItems.appendChild(bookTitleAndAuthor); //insert p into li
    let bookImage = document.createElement("img"); //create img element
    liItems.appendChild(bookImage); // insert img inside li

    liItems.style.padding = "10px";
    liItems.style.margin = "20px";
    liItems.style.width = "350px";

    if (books[i].alreadyRead) {
      liItems.style.backgroundColor = "green";
    } else {
      liItems.style.backgroundColor = "red";
    }
  }

  let img1 = document.querySelector("#content > ul > li:nth-child(1) > img");
  let img2 = document.querySelector("#content > ul > li:nth-child(2) > img");
  let img3 = document.querySelector("#content > ul > li:nth-child(3) > img");
  img1.src = "images/The Design of Everyday Things.jpg";
  img2.src = "images/The Most Human Human.jpg";
  img3.src = "images/The Pragmatic Programmer.jpeg";
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
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

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

exerciseThree(books);