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
  arrayOfPeople.map( person => {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    h1.innerHTML = person.name;
    h2.innerHTML = person.job;
    content.appendChild(h1)
    content.appendChild(h2)

  })

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
  let content = document.querySelector("#content");
  shopping.forEach(item => {
    content.appendChild(document.createElement("ul")).innerHTML = item
  })
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
let books = [
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

let url1 = "https://image.ebooks.com/previews/095/095767/095767915/095767915-hq-168-80.jpg"
let url2 = "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg"
let url3 = "https://wordery.com/jackets/892d2e10/m/the-pragmatic-programmer-david-thomas-9780135957059.jpg"

function exerciseThree(books) {
  let list = document.createElement("ul");
  let content = document.getElementById("content");
  content.appendChild(list);
  books[0].url = url1;
  books[1].url = url2;
  books[2].url = url3;
  books.forEach(book => {
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    let parEl = document.createElement("p");
    listItem.appendChild(parEl);
    parEl.innerHTML = `${book.title} - ${book.author}`;
    let image = document.createElement("img");
    image.src = book.url;
    listItem.appendChild(image);
    book.alreadyRead
      ? (listItem.style.backgroundColor = "green")
      : (listItem.style.backgroundColor = "red");
  });
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

// const books = [
//   {
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

exerciseThree(books);
