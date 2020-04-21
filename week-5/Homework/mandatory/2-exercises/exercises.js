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
  arrayOfPeople.forEach(function (people) {
    let h1El = document.createElement("h1");
    let h2El = document.createElement("h2");
    h1El.textContent = "Name: " + people.name;
    h2El.textContent = "Job: " + people.job;
    content.appendChild(h1El);
    content.appendChild(h2El);
  });
  content.appendChild(document.createElement("hr"));
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let ulEl = document.createElement("ul");
  content.appendChild(ulEl);
  shopping.forEach(function (items) {
    let liEl = document.createElement("li");
    liEl.textContent = items;
    ulEl.appendChild(liEl);
  });
  content.appendChild(document.createElement("hr"));
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
  // array of image URL's
  let coverUrlarray = [
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
    "https://imagery.pragprog.com/products/595/tpp20.jpg",
  ];
  // Add coverImageUrl property to main object (books)
  for(let i = 0; i< books.length; i++){
    books[i].coverImageUrl = coverUrlarray[i];
  };
  // Declare main unOrdered list and add to page 
  let ulEl = document.createElement("ul");
  content.appendChild(ulEl);
  // Create loop to reed all properties of object in array and show on page
  books.forEach(function (book) {
    // Declare li for Title with styles and if book is already read backgroound color is green if is not read background color is red and then show in main unOrdered list
    let titleLiEl = document.createElement("li");
    titleLiEl.innerHTML = "<p>" + "Title: " + book.title + "</p>";
    titleLiEl.style.width = "300px";
    titleLiEl.style.borderRadius = "5px";
    titleLiEl.style.padding = "10px";
    titleLiEl.style.margin = "10px";
    if(book.alreadyRead == true){
      titleLiEl.style.backgroundColor = "#26de81";      
    }
    else{
      titleLiEl.style.backgroundColor = "#fc5c65";      
    }    
    ulEl.appendChild(titleLiEl);
    // Create one sub unOrdered list inside Title li to show author and cover image
    let subUlEl = document.createElement("ul");
    titleLiEl.appendChild(subUlEl);
    // Create li for author
    let authorLiEl = document.createElement("li");
    authorLiEl.innerHTML = "<p>" + "Author: " + book.author + "</p>";
    // Create a lick for images
    let imgLink = document.createElement("a");
    imgLink.href = book.coverImageUrl;
    imgLink.target = "_blank";
    // Create an image element to show cover of books whit style
    let coverImg = document.createElement("img");
    coverImg.style.width = "100px";
    coverImg.style.height = "110px";    
    coverImg.style.borderRadius = "5px";
    coverImg.style.cursor = "pointer";
    coverImg.title = "show Cover Image";
    coverImg.src = book.coverImageUrl;
    // Add books cover image whit links and Author
    imgLink.appendChild(coverImg);
    subUlEl.appendChild(authorLiEl);
    subUlEl.appendChild(imgLink);
  });
  content.appendChild(document.createElement("hr"));
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
