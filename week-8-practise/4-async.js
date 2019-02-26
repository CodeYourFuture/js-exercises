/* EXERCISE 4 - Async
 * Before beginning this exercise, please run `npm install node-fetch` in any directory in your folder.
 * This ensures that the node-fetch package is installed and allows you to use `fetch` with Node JS.
 *
 * Below is an implementation of 3 functions - getPosts(), printBody(..) and toString(..)
 *
 * 4.a
 * getPosts() is a partially implemented async function. To see the format of the fetch response, go to the request URL.
 *
 * Refactor this function so that
 *  - The function is asynchronous
 *  - It resolves the output of the fetch request to https://jsonplaceholder.typicode.com/posts
 *  - It returns a JSON object of the response
 *
 * Hint: there is one extra `await` and `async` keyword missing
 *
 * 4.b
 * Call the functions so that the order of operations are as follows:
 *  - First call the getPosts() function
 *  - Then run printBody(..) on the output of getPosts()
 *  - Then run toString(..) on the output of printBody(..)
 *
 *  Bonus points for using arrow functionsn correctly in the .then(..) method
 *
 * 4.c
 * Can you explain what the line `return (await response.json()).slice(0,3)` in the getPosts() function does?
 * Please write this as a comment above the line.
 *
 * Hint: you are encouraged to use Google or have a discussion on Slack
 *
 * 4.d
 * Can you reformat toString(..) to be an arrow function?
 *
 * 4.c
 * Can you appropriately comment each function to explain what each does?
 */

const fetch = require("node-fetch");

//getPosts function use fetch to get the data from the server and return promise that has a resolved value of the first three user objects as an array
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //This slice method here slice the first three objects in the  response.json() and return them as an array for the resolved promise that is retured by getPost function
  return (await response.json()).slice(0, 3);
}

//printBody function receive and array of objects each object  that has a userId, id, title and body, using the map it returns and new array of the body of the three object
function printBody(posts) {
  return posts.map(x => x.body);
}

//The toString method join the array returned from printBody and make double new line between the joined array elements
var toString = posts => posts.join("\n\n");

getPosts()
  .then(printBody)
  .then(toString)
  .then(posts => {
    console.log(posts);
  });
