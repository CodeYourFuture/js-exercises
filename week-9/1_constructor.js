//Constructor : IT IS BASICALLY JUS A FUNCTION
//ES5
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

const book1 = new Book("mahmut", "the Fire", 2012);

const book2 = new Book("mahmut", "the Ice", 2016);

console.log(book2);
