// Exercise 2: Targeting nodes
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1,
// perform the following tasks:
// 1. Retrieve the value of a node using nodeValue.
// 2. Change the value of a node using nodeValue.
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.
//
//---------------------------------------------------

// 1. Retrieve the value of a node using nodeValue.
var firstChild = document.getElementById("content").firstElementChild.firstChild
  .nodeValue;
console.log(firstChild);

// 2. Change the value of a node using nodeValue.
var firstChild1 = (document.getElementById(
  "content"
).firstElementChild.firstChild.nodeValue = "value changed!!");
console.log(firstChild1);

// 3. Retrieve the value of a node attribute.
var firstChild2 = document.getElementById("content").getAttribute("id");
console.log(firstChild2);

// 4. Change the value of a node attribute.
var firstChild3 = document
  .getElementById("page")
  .setAttribute("id", "newAttrib");
