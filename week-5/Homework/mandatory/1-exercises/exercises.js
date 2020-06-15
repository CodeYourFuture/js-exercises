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
let content = document.querySelector("#content");

function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach((person) => {
    let h1 = document.createElement("h1");
    h1.innerText = person.name;
    content.appendChild(h1);
    let h2 = document.createElement("h2");
    h2.innerText = person.job;
    content.appendChild(h2);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
let ul = document.createElement("ul");
content.appendChild(ul);

function exerciseTwo(shoppingItems) {
  shoppingItems.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false,
            coverImageUrl: "assets/design_of_things.jpeg"
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true,
            coverImageUrl: "assets/most_human_human.jpeg"
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true,
            coverImageUrl: "assets/pragmatic_programmer.jpeg"
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/


let ul2 = document.createElement("ul"); //creates dots - how to delete them? div?
ul2.style.display = "flex";
ul2.style.justifyContent = "space-between"; 
content.appendChild(ul2);

function exerciseThree(books) {
  books.forEach((book) => {
    let li = document.createElement("li");
    ul2.appendChild(li);
    let p = document.createElement("p")
    p.innerText = `${book.title} - ${book.author}`;
    li.appendChild(p);
    let img = document.createElement("img");
    img.src = book.coverImageUrl;
    li.appendChild(img);
    if (book.alreadyRead === true) {
      return li.style.backgroundColor = "green";
    } else {
      return li.style.backgroundColor = "red";
    }
  });
  //Write your code in here
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
    coverImageUrl: "assets/design_of_things.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverImageUrl: "assets/most_human_human.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverImageUrl: "assets/pragmatic_programmer.jpeg",
  },
];

exerciseThree(books);
