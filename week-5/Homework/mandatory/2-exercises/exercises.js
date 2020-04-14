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
  for (let i = 0; i < people.length; i++) {
    let contentH1 = document.createElement(`h1`);
    contentH1.innerHTML = `${people[i].name}`;
    let contentH2 = document.createElement(`h2`);
    contentH2.innerHTML = `${people[i].job}`;
    content.appendChild(contentH1);
    content.appendChild(contentH2);
  }
}
//change
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.getElementById(`content`);
  let ul = document.createElement(`ul`);
  content.appendChild(ul);
  shopping.forEach((element) => {
    let li = document.createElement(`li`);
    li.innerHTML = element;
    ul.appendChild(li);
  });
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
  let content = document.getElementById(`content`);
  let ul = document.createElement("ul");
  content.appendChild(ul);
  books.forEach((element) => {
    let li = document.createElement(`li`);
    ul.appendChild(li);
    let pEl = document.createElement(`p`);
    li.appendChild(pEl);
    pEl.innerHTML = `${element.title} of ${element.author}`;

    let picture = document.createElement(`img`);
    if (books.title === "The Design of Everyday Things") {
      picture.setAttribute(
        "src",
        " https://lh3.googleusercontent.com/_QRovMnva2jNHn0nryD_MSMAim3SfSeOvVdbUBTUQnn3HS7Wp7jdlFGA37m3j5rY01T3KQZqGCGIIw=s400-rw"
      );
    } else if (books.title === "The Most Human Human") {
      picture.setAttribute(
        "src",
        "https://i.ebayimg.com/00/s/NDAwWDI2MQ==/z/eisAAOSw~y9ZCvP1/$_35.JPG?set_id=89040003C1"
      );
    } else {
      picture.setAttribute(
        "src",
        "https://i.ebayimg.com/images/g/AugAAOSwsZlefx7b/s-l640.jpg"
      );
    }
    li.appendChild(picture);
    if (element.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
  });
  console.log(ul);
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
