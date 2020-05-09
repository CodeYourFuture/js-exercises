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
//loop over the array of people
//for each of these people is to create a h1 with name of person
//add h2 for job of person after looping through
function exerciseOne(arrayOfPeople) {
  //creating a variable called content this stores the element of id content
 let content = document.getElementById("content");
 //parameter of function called arrayOfPeople
 arrayOfPeople.forEach(
   person => {

   let nameOfPerson = document.createElement("h1");
   let jobOfPerson = document.createElement("h2");
   nameOfPerson.textContent = person.name;
   jobOfPerson.textContent = person.job;
   content.appendChild(nameOfPerson);
   content.appendChild(jobOfPerson);

    }
 );

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let contentOne = document.getElementById("content");
  let Createcontent = document.createElement("ul");
  contentOne.appendChild(Createcontent);
  for(let i = 0; i<shopping.length; i++)
  {
      let shoppingItems = document.createElement("li");
      shoppingItems.innerHTML = shopping[i];
      Createcontent.appendChild(shoppingItems);
  
  } 
    
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
  var bookList = document.createElement('ul');
  for (var i = 0; i < books.length; i++) {
    var bookItem = document.createElement('li');
    var bookImg = document.createElement('img');
    bookImg.src = books[i].img;
    bookItem.appendChild(bookImg);
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookItem.appendChild(bookDescription);
    if (books[i].alreadyRead) {
      bookItem.style.color = 'grey';
    }
    bookList.appendChild(bookItem);
  }
  document.body.appendChild(bookList);

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
