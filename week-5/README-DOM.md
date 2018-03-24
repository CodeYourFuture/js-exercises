![](https://img.shields.io/badge/status-draft-darkred.svg)
# JavaScript Core 4
** What we will learn today?**
- JS in the Browser
- DOM
- AJAX
---

## JS in the Browser

Up until now we've been using `console.log` to see the results of our code running, because it allows us to focus on writing code and seeing the results instantly. But JavaScript was not meant to be run in `console.log`: it was meant to make web pages pages dynamic.

Lots of websites are powered by JavaScript today, and some (like Facebook) cannot function at all without it: it's become that important to the look and feel of the website.

## The DOM

Your webpages are made up of a bunch of HTML elements, nested within each other (parents and children). But JavaScript doesn't know about any of that.

Thankfully, in JavaScript we have access to this "DOM" object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.

Here are two examples, HTML and then JavaScript, of how the DOM might look like:

```html
<html>
    <body>
        <h1> Welcome! </h1>
        <p> Hello world! </p>
    </body>
</html>
```

``js
var document = {
    body: {
        h1: "Welcome",
        p: "Hello world!"
    }
};
```

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

``js
    document.querySelector('#mainHeader');
    document.querySelectorAll('p');
```
Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements (it returns an array).

Once you retrieve an element using `.querySelector`, you can attach an **event** to it. An event is any action that can be performed on that element. For now, we will just use the **click** event:

``js
    var myButton = document.querySelector('#myButton');
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
    }
```

You will notice in the example example that we passed a second argument to `addEventListener`. That second argument is the **function** that we want to invoke when that event has happened.

> **Exercise**:
> - Fork the repo [here](https://github.com/CodeYourFuture/dom-ajax) and clone it locally.
> - Open `index.html` in your browser.
> - In `./js/main.js` write code so that when a user presses the **Donate a bike today** button, an **alert** pops up, thanking them for their donation.

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

``js
    var myElement = document.querySelector('#myElement');
    myElement.style.backgroundColor = 'red';
```

> **Exercise**:
> Change your code, so that instead of **alerting** something when you press the button, it changes the background color of the Jumbotron to `red`.

Using the `document`, you can also create new elements. These elements will not appear until you append them as a child of another element though:

``js
    var paragraph = document.createElement('p'); // here we're just creating it, element is not visible yet
    myElement.appendChild(paragraph); // now the element is added to our view, but it's empty
```

`document.createElement` accepts as an input any element type. So for example `document.createElement('article')` will create a new article element.

You can then change the text displayed inside elements using the `innerText` property:

``js
    paragraph.innerText = "How are you?"; // now we can see the text displaying on the screen
```
> **Exercise**:
> When **Add to learn more** button is clicked it should:
> - create a new paragraph element
> - set its inner text property to some message you want
> - add the paragraph to the `#mainArticles` element just below **Learn more**

We've been using `document.querySelector` to retrieve a single element.
To retrieve an array of multiple elements (that match a specific class name for example, or a specific tag) we use `document.querySelectorAll`.

``js
    //change the background of all the paragraph items on our page
    var paragraphs = document.querySelectorAll('p');
    for(var i=0; i<paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "blue";
    }
```

We've learned that `style` and `innerText` are properties of DOM elements. Image tags can also have `width` and `height`.

> **Exercise**:
> Every time the **All images** button is clicked it should reduce and width and height of all images on the webpage by `10`.

While it's really easy to change styles directly on elements using the `style` property, it is not usually a good idea to mix JavaScript and CSS (see separation of concerns in the first lesson). To solve this, we can use the `className` property to set the class for an element instead of changing its styles directly:

``js
//before: <div id="myContainer"></div>
var container = document.querySelector('#myContainer');
container.className = "largeBlock";
//after: <div id="myContainer" class="largeBlock"></div>
```

> **Exercise**:
> Remember the button that changes the color of the jumbotron to `red`? Go back and try to do that without modifying the styles. You can use the `.red` class.

> **Advanced Exercise**:
> - When you type something into the box below the **Jumbotron** and click the **Add** button it should add a new **Article** below **Learn More** with what you typed as the inner text. It should then clear the input.
> - Make sure you create a proper **article** that looks like the others above it (it should be an article element, that contains a paragraph element, that contains your text, it should also have the class **article**).

## AJAX

### What's a server?

A device or program that **provides functionality to other programs or devices**. There are database servers, mail servers, game servers, etc.

They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files.

The server communicates with **clients**. Clients can be a web browser, a Slack app, your phone, etc.

Client–server systems use the **request–response model**: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.


>An example: We can use the Slack app (the client) to put our messages or pictures on Slack. The content is stored on the Slack servers and other clients can then also access the pictures.


### HTTP requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language (a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: GET and POST.

>With a **GET request** you can ask for specified resource (e.g. show me that Slack photo).

>With a **POST request** you can send content to the server to be appended to the web resource (e.g. post a photo on Slack).

HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other laguages as well.

### AJAX (= Asynchronous JavaScript And XML)

AJAX is a set of useful methods for implementing client-server communication.

![AJAX Diagram](https://www.w3schools.com/xml/ajax.gif "AJAX Diagram")


AJAX just uses a combination of:

> - A browser built-in XMLHttpRequest object (to request data from a web server)
> - JavaScript and HTML DOM (to display or use the data)


**Ajax works behind the scenes, helping the webpage communicate with the server (with GET and POST requests).**

>client ----------GET request----------> server returns data to client

>client ----------POST request (with content)--------->server updates data with content

The server holds the data, but it only sends it to the webpage when there's a request. The request can be sent after the page has loaded, for example when a user clicks a button.

### Why Ajax?

There are other ways you can write HTTP requests, such as using Web sockets. What's great about AJAX is that it makes it look like magic! The server and the client communicate effortlessly:

>Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background


### AJAX Example

The instant update: we can write code that makes the web page instantly update its contents (without reloading the page).

Let's try sending some data from Rares’ phone to the server and see whether it will update the webpage.

> [http://zero-point.github.io/](http://zero-point.github.io/)


### Let's Code!

How does the code work? Let's break it down into parts and see what each does.


#### POST Code

 ``js
  var request = new XMLHttpRequest(); 		//creating a request object

  request.onreadystatechange = function() {
    if(request.readyState === 4) {  // check if a response was sent back
      if(request.status === 200) { 	// check if request was successful
        textBox.innerHTML = request.responseText;
      } else {
        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf";	                                        //server location
  var params = "Here is some content"; 		// content we want to send
  request.open("POST", url, true);			// adding them to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(params); 							// sending the request
```


#### GET Code

 ``js
  var request = new XMLHttpRequest(); 	    //creating a request object

  request.onreadystatechange = function() {
    if(request.readyState === 4) {  // check if a response was sent back
      if(request.status === 200) { 	// check if request was successful
        textBox.innerHTML = request.responseText;
      } else {
        textBox.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=cyf";	                                    //server location
  request.open("GET", url);					// adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(); 								// sending the request
 ```



### AJAX Exercise

Everyone should organise in pairs, one person writing code to **send data (POST)** and one to **receive it (GET)**. Once you’ve finished your code, combine it and put it into a html page. Now, try sending each other messages this way.

Don’t forget to use a **unique id** at the end of the url (not 'cyf') and let your partner know what it is!



# Resources
- DOM Examples and explanation on MDN - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
- AJAX - https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

# Homework
- Continue working on [the repository](https://github.com/CodeYourFuture/dom-ajax) you forked in this lesson
    - Open up **readme.md** and follow the instructions in there.
    - Submit Pull Request after completing each part.
- Follow Intro to AJAX course by udacity - https://classroom.udacity.com/courses/ud110 (register and signin if you need to)
    - Follow the Requests and API lesson
- Fork [this repo](https://github.com/CodeYourFuture/WebDeveloperTest) and follow the instructions
    - This is a project with several deadlines, make sure you understand the requirements very well and start as soon as possible. Also communicate regularly using both **email** and Slack.