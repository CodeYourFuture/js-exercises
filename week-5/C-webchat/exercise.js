/*
Let's build a webchat!
The requirements of a basic webchat are:
- Being able to send a new message
- Being able to read existing and incoming messages

Task 1
======
After entering some message in the text input and clicking on the "Submit" button,
send the message to store it on the remote server. You can use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }

Tast 2
======
When reloading the page, the existing messages should be displayed in the HTML element
with id "message-list". To get the existing messages, use the following API:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages

Task 3
======
Reload the messages every 2 seconds, so you can see new incoming new messages without 
having to reload the page. Hint: use the javascript function setInterval() to execute some 
code every x seconds.
*/
