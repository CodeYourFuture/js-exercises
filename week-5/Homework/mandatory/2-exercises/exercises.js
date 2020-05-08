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
    arrayOfPeople.forEach((person) => {
        let name = document.createElement("h1");
        let job = document.createElement("h2");
        name.innerText = person.name;
        job.innerText = person.job;
        content.appendChild(name);
        content.appendChild(job);
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
    let content = document.querySelector("#content");
    let ul = document.createElement("ul");
    content.appendChild(ul);

    shopping.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
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
    let content = document.querySelector("#content");
    let ul = document.createElement("ul");
    ul.setAttribute("class", "books");
    content.appendChild(ul);

    books.forEach((book) => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let img = document.createElement("img");
        img.setAttribute("width", "182");
        img.setAttribute("height", "277");
        p.innerText = book.title + " " + "-" + " " + book.author;
        li.appendChild(p);
        li.appendChild(img);
        ul.appendChild(li);

        if (book.title == "The Design of Everyday Things") {
            img.src =
                "https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL._SX330_BO1,204,203,200_.jpg";
            li.style.backgroundColor = "red";
        } else if (book.title == "The Most Human Human") {
            img.src =
                "https://images-na.ssl-images-amazon.com/images/I/51aKPFuUy1L._SX324_BO1,204,203,200_.jpg";
            li.style.backgroundColor = "green";
        } else {
            img.src =
                "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg";
            li.style.backgroundColor = "green";
        }
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

const books = [{
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