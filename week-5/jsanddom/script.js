// Exercise 1: Traversing the DOM

var x = document.getElementById("title").firstChild;
console.log(x); // logs "Page title"
var y = document.getElementById("page").lastChild;
console.log(y); // logs <div id = "content">..</div>
var g = document.getElementById("header").nextSibling;
console.log(g); // logs div#content
var l = document.getElementById("content").previousSibling;
console.log(l); // logs div#header
var r = document.getElementById("page").parentNode;
console.log(r); // logs <body></body>
var o = document.getElementById("page").childNodes.length;
console.log(o); // logs 4

// Exercise 2: Targeting nodes
var nodVal = document.getElementById("title").firstChild.nodeValue;
console.log(nodVal); // logs Page title
var changedNodVal = (document.getElementById(
  "content"
).childNodes[0].nodeValue = "change it");
console.log(changedNodVal); // logs change it
var k = document.getElementById("title").innerHTML;
console.log(k); // logs Page title
var k = (document.getElementById("header").firstChild.id = "new-title-id");
console.log(k); // logs new-title-id

var newPar = document.createElement("p");
newPar.innerHTML = "New paragraph element";
document.getElementById("content").appendChild(newPar);

var pBefore = document.createElement("p");
pBefore.innerHTML = "New paragraph try it";
var content = document.getElementById("content");
content.insertBefore(pBefore, content.firstChild);

pToRemove = document
  .getElementById("header")
  .removeChild(document.getElementById("title"));

var pReplace = document.createElement("p");
pReplace.innerHTML = "New paragraph element 2";
document
  .getElementById("header")
  .replaceChild(pReplace, document.getElementById("title"));
