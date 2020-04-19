/*

So far, to see the new messages in the page, you had to refresh the page in your browser.
How about we improve our program to refresh the message list automatically?

The objective is to reload the messages in the message list every 2 seconds,
so you can see new incoming messages without reloading the page. 

You will need to use the Javascript function setInterval(). 
The first parameter is a callback function, the second parameter T is a time in millisecond.
For more details, check the doc: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval


=====================
setInterval example
=====================

function callback() {
    console.log("Hello");
}

setInterval(callback, 1000); // Print "Hello" every 1 second


=========
Task 3
=========

Use the above example to get familiar with setInterval function. 
For example, print your name every 2 seconds.
*/


// Write your code here


/*
========
Task 4
========

Use the setInterval function to reload automatically the messages of your webchat every 2 seconds.
The code responsible to show the messages in the page is in exercise-1.js, so you will need to write your code there :-)
*/

