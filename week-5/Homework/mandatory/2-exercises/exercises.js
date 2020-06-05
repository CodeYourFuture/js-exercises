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
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let title = document.createElement("h1");
    title.textContent = arrayOfPeople[i].name;
    content.appendChild(title);
    let secondTitle = document.createElement("h2");
    secondTitle.textContent = arrayOfPeople[i].job;
    content.appendChild(secondTitle);
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
  orderedList = document.createElement("ul");
  for (let i = 0; i < shopping.length; i++) {
    let list = document.createElement("li");
    list.textContent = shopping[i];
    orderedList.appendChild(list);
  }
  content.appendChild(orderedList);
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
  books[0].imageUrl =
    "/Users/Hafsa/Desktop/CYF/JavaScript/JSI/js-exercises/week-5/Homework/mandatory/2-exercises/download.jpeg";
  books[1].imageUrl =
    "/Users/Hafsa/Desktop/CYF/JavaScript/JSI/js-exercises/week-5/Homework/mandatory/2-exercises/image2.jpeg";
  books[2].imageUrl =
    "/Users/Hafsa/Desktop/CYF/JavaScript/JSI/js-exercises/week-5/Homework/mandatory/2-exercises/image3.jpeg";
  let orderedList = document.createElement("ul");

  for (let i = 0; i < books.length; i++) {
    let list = document.createElement("li");
    let text = document.createElement("p");
    let image = document.createElement("img");
    image.src = books[i].imageUrl;
    text.textContent = `${books[i].title} - ${books[i].author}`;
    list.appendChild(text);
    list.style.listStyle = "none";
    list.style.maxWidth = "500px";
    if (books[i].alreadyRead === false) {
      list.style.backgroundColor = "red";
    } else {
      list.style.backgroundColor = "green";
    }
    orderedList.appendChild(list);
    list.appendChild(image);
  }

  let div = document.getElementById("content");
  div.appendChild(orderedList);
  console.log(div);
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
