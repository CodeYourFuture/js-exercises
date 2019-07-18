// Exercise 3: Manipulating the DOM
//
//
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
//
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.

// appendChild
var paragrafo = document.createElement("p");
var paraText = document.createTextNode("This is new !!!!");
paragrafo.appendChild(paraText);
document.getElementById("content").appendChild(paragrafo);

// insertBefore
var paragrafo1 = document.createElement("p");
var paraText1 = document.createTextNode("This is insert before  !!!!");
paragrafo1.appendChild(paraText1);
var insert = document.getElementById("content").childNodes[7];
document.getElementById("content").insertBefore(paragrafo1, insert);

// replace <p>Some copy goes here</p>
var paragrafo2 = document.createElement("p");
var paraText2 = document.createTextNode("replaced!!!");
paragrafo2.appendChild(paraText2);
document.getElementById("content").replaceChild(paragrafo2, childNodes[3]);

// remove <p>More copy goes here</p>
var div = document.getElementById("content");
elemToRemove = div.childNodes[5];
div.removeChild(elemToRemove);
