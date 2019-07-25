/* Exercise 1: Traversing the DOM
Knowing how to traverse the DOM using JavaScript provides a foundation to altering an HTML
page in real time. Using the HTML markup in Listing 1, perform these tasks:
1. Use the firstChild property to access an element.
2. Use the lastChild property to access an element.
3. Use the nextSibling property to access an element.
4. Use the previousSibling property to access an element.
5. Use the parentNode property to access an element.
6. Use the childNodes property to access a group of child elements.


    Listing 1. HTML markup for the traversing the DOM exercise
        < html >
        <head>
            <title>JavaScript and the Document Object Model</title>
        </head>
        <body>
            <div id="page">
                <div id="header"><h1 id="title">Page title</h1></div>
                <div id="content">
                    <h2>Content title</h2>
                    <p>Some copy goes here</p>
                    <p>More copy goes here</p>
                </div>
            </div>
        </body>
</html >
*/
// I am gonna write the expected outcome in the comments, excluding spaces.
var x = document.getElementById("content").firstChild; //  "<h2>Content title</h2>"
var y = document.getElementById("content").lastChild; //  "<p>Some copy goes here</p>"
var z = document.getElementById("content").nextSibling; //  "<h2>Content title</h2>"
var a = document.getElementById("content").previousSibling; //  <div id='header'><h1 id='title'>Page title</h1></div>"
var b = document.getElementById("content").parentNode; // all the content inside <div id="page">
var c = document.getElementById("content").childNodes; //h2, p, p
/*
Exercise 2: Targeting nodes
In exercise 1, you learned how to target nodes in several ways.Continuing to use the markup in
    Listing 1, perform the following tasks:
1. Retrieve the value of a node using nodeValue.
2. Change the value of a node using nodeValue.
3. Retrieve the value of a node attribute.
4. Change the value of a node attribute.
*/
var node = document.getElementById("content").firstChild;
node.nodeValue = "My title";

var node1 = (document
  .getElementById("content")
  .getAttributeNode("category").nodeValue = "main");
/*
Exercise 3: Manipulating the DOM
Now that you know how to traverse the DOM and alter node values, the next logical step is to learn
how to add, remove, and replace nodes.Perform the following tasks:
1. Use the appendChild method to add a node.
2. Use the insertBefore method to add a node.
3. Use the removeChild method to remove a node.
4. Use the replaceChild method to replace a node.
*/
var node2 = document.createElement("p");
var textnode2 = document.createTextNode("Add some text here");
node2.appendChild(textnode2);
document.getElementById("content").appendChild(node2);
