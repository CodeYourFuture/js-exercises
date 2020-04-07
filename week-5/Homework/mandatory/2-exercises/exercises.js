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
  const content = document.getElementById("content");
  const h1 = document.createElement("h1"); 
  const h2 = document.createElement("h2");
  h1.textContent = arrayOfPeople[2].name;
  h2.textContent = arrayOfPeople[2].job;
  console.log(h1);
  console.log(h2);
  content.appendChild(h1);
  content.appendChild(h2);   
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  const conT = document.getElementById("content");
  const List = document.createElement("ul");
  conT.append(List);
  for (var i = 0; i < shopping.length; i++) {
    var item = document.createElement('li');
    console.log(shopping[i]);
    item.textContent= shopping[i];
    List.appendChild(item);
  };
}
  //Write your code in here

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
function exerciseThree(books , i) {
  const ListBook = document.getElementById("content");
  books.forEach(element => {
    let PEl = document.createElement("p");
    console.log(element.alreadyRead);
    const List = document.createElement("ul");
    const text = "Titel :" + element.title;
    const imGe = document.createElement("img");
    imGe.src = "https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png";
    imGe.style.textAlign = "center";
    List.textContent= text + imGe;
    ListBook.appendChild(List);
    for (let i = 0 ; i < 2 ; i ++){
      var item = document.createElement('li');
      if (i === 0){
       item.textContent= "Author: "+ element.author; 
      } if (i === 1) {
        item.textContent= element.alreadyRead;
      }
    List.appendChild(item);
    List.appendChild(item);
    };
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
