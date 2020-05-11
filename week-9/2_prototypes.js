//Constructor : IT IS BASICALLY JUS A FUNCTION
//ES5
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
//getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};
//Revise/ Change year

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

//Instatiate an Object

const book1 = new Book("the Fire", "Mahmut", "2012");
const book2 = new Book("the Ice", "Mahmut", "2015");

//console.log(book1)

console.log(book1.getSummary());
book2.revise("2018");
console.log(book2);