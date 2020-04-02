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
// let content = document.createElement("div");
//     content.id = "content";
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.map(function(man){
    var h1 = document.createElement("h1");
    let name  = content.appendChild(h1);
    name.innerHTML = (man.name);
    var h2 = document.createElement("h2");
    let job  = content.appendChild(h2);
    job.innerHTML = (man.job);
  })
};
   
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  var ul = document.createElement("ul");
  content.appendChild(ul);
  shopping.map(function(item){
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = item;
  })

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
    let urlS =["https://lh3.googleusercontent.com/_QRovMnva2jNHn0nryD_MSMAim3SfSeOvVdbUBTUQnn3HS7Wp7jdlFGA37m3j5rY01T3KQZqGCGIIw=s200-rw","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg", "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg"];
    let p = document.createElement("p");
    content.appendChild(p);
    let ul2 = document.createElement("ul");
    p.appendChild(ul2);
    books.map(function(book,index){
      let li = document.createElement("li");
      ul2.appendChild(li);
      id = book.name
      li.id =`${book.title}`;
      li.innerHTML = (book.title +"  "+"♫"+"  "+ book.author)

      let img = document.createElement("img");
      li.appendChild(img);
      img.style.height = "200px";
      img.src = urlS[index];
      ul2.style.display = "inline-flex";
      ul2.style.flexWrap="wrap";
  
      li.style.display = "listItem";
      li.style.padding = "10px";
      img.style.padding = "20px";
      
      li.style.width = "350px";
      li.style.margin = "20px";
      li.style.width = "350px";
      ul2.style.listStyle = "none";
      ul2.style.width = "100%";

      if(book.alreadyRead){
        li.style.backgroundColor = "green";
        }
        else{
          li.style.backgroundColor = "red";

        }
        
    })
  
    

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
