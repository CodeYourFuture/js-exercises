// Knowing how to traverse the DOM using JavaScript provides a foundation to altering an HTML page in real time. Using the HTML markup in Listing 1, perform these tasks:
// 1. Use the firstChild property to access an element.
// 2. Use the lastChild property to access an element.
// 3. Use the nextSibling property to access an element.
// 4. Use the previousSibling property to access an element.
// 6. Use the childNodes property to access a group of child elements.

var firstChild = document.getElementById("content").firstElementChild
  .firstChild;
console.log(firstChild);

var lastChild = document.getElementById("content").lastElementChild.lastChild;
console.log(lastChild);

var nextSibling = document.getElementById("content").firstElementChild
  .nextSibling.nextSibling;
console.log(nextSibling);

var previousSibling = document.getElementById("content").lastElementChild
  .previousSibling.previousSibling;
console.log(previousSibling);

var childNodes = document.getElementById("content").childNodes;
console.log(childNodes);
