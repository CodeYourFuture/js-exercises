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
  let content = document.querySelector("#content");//defined a variable and asigned element with Id 'content' to it.
  arrayOfPeople.forEach(person => {//loop through arrayOfPeople
    let names = document.createElement("h1");//made a h1 and asigned it to a variable
    let jobs = document.createElement("h2");//made a h2 and asigned it to a variable
    names.innerHTML = person.name;//asigned people name to h1 tag 
    jobs.innerHTML = person.job;//asigned people job to h2 tag
    content.appendChild(names);// 
    content.appendChild(jobs);
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
  let unorderedList = document.createElement("ul");
  let content = document.querySelector("#content");
  content.appendChild(unorderedList);
  shopping.forEach(item => {
    let items = document.createElement("li");
    items.innerHTML = item;
    unorderedList.appendChild(items);
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
function exerciseThree(books) {
  //Write your code in here
  
  let unord = document.createElement("ul");
  document.body.appendChild(unord);
  books.forEach(book => {
    let pEls = document.createElement("p");
    pEls.innerHTML = `${book.title}, ${book.author}`;
    console.log(pEls);
    let listEls = document.createElement("li");
    let imgEls = document.createElement("img");
    unord.appendChild(listEls);
    listEls.appendChild(pEls);
    listEls.appendChild(imgEls);
    (book.alreadyRead)? listEls.style.backgroundColor = "green" : listEls.style.backgroundColor = "red"; 
  })
  
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
