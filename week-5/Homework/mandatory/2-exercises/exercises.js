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
  let names = arrayOfPeople.map(p => p.name);
  let jobs = arrayOfPeople.map(p => p.job);
    
  for( let i =0; i < arrayOfPeople.length; i++){
    arrayOfPeople[i] = document.createElement("h1");
   let txt =  content.appendChild(arrayOfPeople[i]);
   txt.innerText = names[i]; 

  }
      for( let j =0; j < arrayOfPeople.length; j++){
        arrayOfPeople[j] = document.createElement("h2");
        let jtxt =  content.appendChild(arrayOfPeople[j]);
        
        jtxt.innerText = jobs[j];
       
    }

    let parent = document.getElementById("content")
    let h1El = document.getElementsByTagName("h1")
    let h2El = document.getElementsByTagName("h2")
   // parent.insertBefore(h1El, h2El);
   h1El[0].insertAdjacentElement('afterend', h2El[1]);
   h1El[1].insertAdjacentElement('afterend', h2El[1]);

  
  

  return names && jobs;
 
 

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
  let Lists = shopping.map(p => p);
  let ulEl = document.createElement("ul");
  content.appendChild(ulEl);
  for(let i=0; i<shopping.length; i++){
  shopping[i] = document.createElement("li");
  let singlelist = ulEl.appendChild(shopping[i]);
  singlelist.innerText = Lists[i];
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
  //Write your code in here
  let page = document.getElementById("content");
  let bookTitle = books.map(book => `${book.title}: ${book.author}`);
  let bookAuthor = books.map(book => book.author);
  let RorNot = books.map(read => read.alreadyRead === true ? `green` : `red`);
  console.log(RorNot);
  let ulEl = document.createElement("ul");
  for(let i = 0; i < books.length; i++){
    books[i] = document.createElement("p");
    let pEl = document.body.appendChild(books[i]);
    pEl.innerText = bookTitle[i];
    books[i] = document.createElement("li");
     
    let singlebook = document.body.appendChild(ulEl.appendChild(books[i]));
   
    books[i] = document.createElement("img");
    
    books[0].src = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
    books[1].src= "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
    books[2].src = "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"; 
    
    let singleBookLink = singlebook.appendChild(books[i]);
    let paints = document.getElementsByTagName("img")
    for(let m = 0; m< paints.length; m++){
      //var img = paints[m];
      paints.item(0).setAttribute("style", "border: 5px solid dodgerblue")
      //paints.item(1).setAttribute("style", "border: 5px solid dodgerblue")
      
    }
    console.log(paints.item(0), paints.item(1), paints.item(2))
    console.log(paints);
    // books[0].style.border = "10px dashed red";
    // books[1].style.border = "10px dashed green";
    
    
  }
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
