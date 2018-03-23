/*
Let's build a webchat to communicate with each others!

The requirements of a basic webchat are:
- The user can write a message in the input and send it after clicking on submit button.
- After clicking on the submit button, the input should empty.
- The user can read the existing message in the message list.
- The message list is refreshed every x seconds so the user can keep reading the incoming messages without refreshing the page.
*/


/*
======
Task 1
======
After writing a message in the input and clicking on the submit button,
send the message to store it on the remote server. After clicking on the submit button,
the input should be empty again.

You can use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }
*/

// Write your code for task 1 here


/*
======
Tast 2
======
When reloading the page, the existing messages should be displayed in the HTML element
with the id "message-list". To get the existing messages, use the following API:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages
*/

// Write your code for task 2 here


/*
======
Task 3
======
Reload the messages every 2 seconds, so you can see new incoming new messages without 
having to reload the page. Hint: use the javascript function setInterval() to execute some 
code every x seconds.
*/

// Write your code for task 3 here



