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

const fetch = require('node-fetch')
// first retrieve the `posts` from source url as `response`
// convert the `posts` to array of objects format and return first three objects of the array 
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // As `response.json()` produces a new promise, `await` keyword waits for this promise to be resolved by pausing the code. After response.json() resolved as an array of objects, the first three elements of response array, by the use of `.slice()` method, return as output of getPosts() function.
  return (await response.json()).slice(0, 3)
}

// returns the `title` and `body` properties of the `posts` array of objects 
function printBody(posts) {
  return posts.map(post =>
    post.title.toUpperCase() + '\n' + post.body)
}

// returns the array elements to a single string and insert two new line between each element 
function toString(posts) {
  return posts.join("\n\n")
}

getPosts().then(printBody).then(toString).then(result => {
  console.log(result);
})