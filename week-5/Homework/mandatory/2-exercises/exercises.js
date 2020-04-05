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
unction exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
 
  var h1Tag = document.createElement("h1");
  var h2tag = document.createElement("h2");
  content.appendChild(h1Tag);
  content.appendChild(h2tag);
 for(i=0; i<arrayOfPeople.length; i++){
  h1Tag.innerText(arrayOfPeople[i].name);
  h2tag.innerText(arrayOfPeople[i].job);
 };
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

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  var list = document.createElement("ul");
  content.appendChild(list);
  shopping.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
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

let url1 =
  "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
let url2 =
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
let url3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvVg-9fpJlcF2GWF2Vd5c181LSCsT9VwZkT844SmzohNLtyRGcwIKvn43eLLx4biDzCfg_YwDi&usqp=CAc";
let urls = [url1, url2, url3];

function exerciseThree(books) {
  Write your code in here
    let content = document.querySelector("#content");
    let list = document.createElement("ul");
    content.appendChild(list);
    let urls = [url1, url2, url3];
    for (i = 0; i < books.length; i++) {
      let listItem = document.createElement("li");
      listItem.style.width = "400px";
      list.appendChild(listItem);
      let parEl = document.createElement("p");
      parEl.innerHTML = `${books[i].title} - ${books[i].author}`;
      listItem.appendChild(parEl);
      let image = document.createElement("img");
      listItem.appendChild(image);
      image.src = urls[i];
      books[i].alreadyRead((listItem.style.backgroundColor = "green"))(
        (listItem.style.backgroundColor = "red")
      );
    }
}


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

Write your code in here
    let content = document.querySelector("#content");
    let list = document.createElement("ul");
    content.appendChild(list);
    let urls = [url1, url2, url3];
    for (i = 0; i < books.length; i++) {
      let listItem = document.createElement("li");
      listItem.style.width = "400px";
      list.appendChild(listItem);
      let parEl = document.createElement("p");
      parEl.innerHTML = `${books[i].title} - ${books[i].author}`;
      listItem.appendChild(parEl);
      let image = document.createElement("img");
      listItem.appendChild(image);
      image.src = urls[i];
      books[i].alreadyRead((listItem.style.backgroundColor = "green"))(
        (listItem.style.backgroundColor = "red")
      );
    }
}

