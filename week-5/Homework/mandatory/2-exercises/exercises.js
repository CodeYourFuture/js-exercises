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
let content = document.querySelector('#content');
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(person => {
    let h1Element = document.createElement('h1');
    let h2Element = document.createElement('h2');
    content.appendChild(h1Element);
    content.appendChild(h2Element);
    h1Element.innerHTML = person.name;
    h2Element.innerHTML = person.job;
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
  let unorderedListElement = document.createElement('ul');
  shopping.forEach(shoppingItem => {
    //create new li element
    let newNumberListItem = document.createElement('li');

    //create new text node
    let numberListValue = document.createTextNode(shoppingItem);

    //add text node to li element
    newNumberListItem.appendChild(numberListValue);

    //add new list element built in previous steps to unordered list
    //called numberList
    unorderedListElement.appendChild(newNumberListItem);
    content.appendChild(unorderedListElement);
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
  let booksList = document.createElement('ul');
  books.forEach(book => {
    let pElement = document.createElement('p');
    pElement.innerHTML = book.title + ' - ' + book.author;
    document.body.appendChild(pElement);
    let bookItem = document.createElement('li');
    let bookImg = document.createElement('img');
    bookImg.src = book.url;
    bookItem.appendChild(bookImg);
    pElement.appendChild(bookItem);
    if (book.alreadyRead) {
      bookItem.style.color = 'green';
      pElement.style.color = 'green';

    } else {
      bookItem.style.color = 'red';
    }
    booksList.appendChild(bookItem);
  });
  document.body.appendChild(booksList);
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
  {name: 'Chris', job: 'Teacher'},
  {name: 'Joanna', job: 'Student'},
  {name: 'Boris', job: 'Prime Minister'},
];

exerciseOne(people);

let shopping = ['Milk', 'Break', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea'];

exerciseTwo(shopping);

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    url: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
  },
];

exerciseThree(books);
