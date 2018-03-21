# AJAX

## Client/Server architecture

A **server** is device or program that provides functionality to other programs or devices. There are database servers, mail servers, game servers, etc. The vast majority of these servers are accessed over the internet.

The server communicates with **clients**. Clients can be a web browser, a Slack app, your phone, etc.

Client–server systems use the **request–response** model: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.

![](client-server.png)

## HTTP Requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

For the client and the server to communicate they need an established language (a protocol). Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: **GET** and **POST**.

| Request type  | Description   |
| ------------- |:-------------:|
| GET          | Ask for a specified resource (e.g. show me that photo) |
| POST          | Send content to the server (e.g. post a photo) |


## What is AJAX?

AJAX is a technique for implementing client-server communication in the browser. The word is a bit of a misnomer as generally we don't use XML any more, but it's still commonly used to describe this technique.

Typically, the server holds the data, and only sends it to the client (web page) when there's a request. Ajax requests are sent after the page has loaded, usually in response to an action by the user. For example when the user clicks a button, some JavaScript will trigger an Ajax request to fetch data.

## Introduction to Fetch

**fetch** is a way of creating HTTP requests in JavaScript. It uses the Promise API.

```js
fetch('http://www.mocky.io/v2/5a22e20a2f0000c00d5ec665')
    .then(function(response) {
        return response.json(); // or response.text()
    })
    .then(function(json) {
        console.log(json.data); // Output: 'Hello world!'
    });
```
