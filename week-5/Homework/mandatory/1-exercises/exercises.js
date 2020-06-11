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
  arrayOfPeople.forEach((element) => {
    hOnes = document.createElement("h1");
    hOnes.innerHTML = element.name;
    hTwoes = document.createElement("h2");
    hTwoes.innerHTML = element.job;
    let myDiv = document.querySelector("#content");
    myDiv.appendChild(hOnes);
    myDiv.appendChild(hTwoes);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shoppingItems) {
  //Write your code in here
  ulEl = document.createElement("ul");
  ulEl.className = "ulstyle";
  let content = document.querySelector("#content");
  content.appendChild(ulEl);
  shoppingItems.forEach((element) => {
    let liEl = document.createElement("li");
    liEl.innerHTML = element;
    ulEl.appendChild(liEl);
  });
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
function exerciseThree(books) {
  //Write your code in here

  let hOne = document.createElement("h1");
  hOne.textContent = "Book list";
  document.body.appendChild(hOne);
  ulEl = document.createElement("ul");
  ulEl.className = "unList";
  document.body.appendChild(ulEl);

  ulEl.style.listStyle = "none";
  ulEl.style.display = "flex";
  ulEl.style.flexWrap = "nowrap";
  ulEl.style.padding = "20px";
  ulEl.style.width = "calc(100%-41px)";

  books.forEach((element) => {
    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);

    liEl.style.width = "calc(25% - 51px)";
    liEl.style.margin = "15px";
    liEl.style.padding = "10px";
    liEl.style.minWidth = "350px";

    if (element.alreadyRead) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }

    let paragraph = document.createElement("p");
    paragraph.textContent = element.title + " - " + element.author;
    liEl.appendChild(paragraph);
    let imgEl = document.createElement("img");
    imgEl.src = element.coverImageUrl;
    liEl.appendChild(imgEl);
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
