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

  arrayOfPeople.forEach((x) => {
    let createH1 = document.createElement("h1");
    let createH2 = document.createElement("h2");
    content.appendChild(createH1);
    content.appendChild(createH2);

    createH1.textContent = x.name;
    createH2.textContent = x.job;
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
  let content = document.querySelector("#content");
  let createUl = document.createElement("ul");
  content.appendChild(createUl);
  shopping.forEach((x) => {
    let defineList = document.createElement("li");
    createUl.appendChild(defineList);
    defineList.textContent = x;
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
  //Write your code in here
  let content = document.querySelector("#content");
  let createUl = document.createElement("ul");
  content.appendChild(createUl);

  createUl.style.display = "flex";
  createUl.style.justifyContent = "space-around";
  createUl.style.listStyleType = "none";

  books.forEach((x) => {
    let createLi = document.createElement("li");
    createUl.appendChild(createLi);
    let createP = document.createElement("p");
    createLi.appendChild(createP);
    createP.textContent = `${x.title} - ${x.author} `;

    let createImage = document.createElement("img");
    createLi.appendChild(createImage);
    let createSrc = document.createAttribute("src");
    createImage.setAttributeNode(createSrc);
    let createHeight = document.createAttribute("height");
    createImage.setAttributeNode(createHeight);
    createHeight.value = "300px";

    if (x.title.includes("Design")) {
      createSrc.value =
        "https://image.ebooks.com/previews/095/095767/095767915/095767915-hq-168-80.jpg";
    } else if (x.title.includes("Human")) {
      createSrc.value =
        "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
    } else {
      createSrc.value = "https://blackwells.co.uk/jacket/l/9780201616224.jpg";
    }

    x.alreadyRead
      ? (createLi.style.backgroundColor = "green")
      : (createLi.style.backgroundColor = "red");
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
