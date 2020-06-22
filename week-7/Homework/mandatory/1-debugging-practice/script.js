
let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});
//rajouter 2 nouveau livres quand la page load
function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function

function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    author.value == null ||
    author.value == ""||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();  
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1); //create new row
    let cell1 = row.insertCell(0); //create 1 cell
    let cell2 = row.insertCell(1); //create 2nd cell
    let cell3 = row.insertCell(2); //create 3rd cell
    let cell4 = row.insertCell(3);//create 4th cell
    let cell5 = row.insertCell(4); //create 5th cell 
    cell1.innerHTML = myLibrary[i].title;  //text cell = nom du livre
    cell2.innerHTML = myLibrary[i].author; // nom de l'autheur
    cell3.innerHTML = myLibrary[i].pages; //nombre de page

    //add and wait for action for read/unread button
    
    let changeBut = document.createElement("button");  //creer Read or not bouton
    changeBut.id = i;   // rajouter bouton id 
    changeBut.className = "btn btn-success";  //rajouter style class au bouton
    cell4.appendChild(changeBut);    //rajouter bouton a cellule 4
    let readStatus = "";
    if (myLibrary[i].check == false) {
      readStatus = "No";  //inverse?  
    } else {
      readStatus = "Yes";
    }
    changeBut.innerHTML = readStatus;
    

    //function changes button yes in no and no into yes
    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;    
      render();
    }); 

    //add delete button to every row and render again
    
    let delBut = document.createElement("button");
    delBut.id = i + 5;
    cell5.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
