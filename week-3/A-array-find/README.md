Imagine you have an array of names:

```js
var names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
```

How would you find the first name that's longer than 6 characters?

You can write a predicate function that checks if a string is longer than 6 characters:

```js
function isLongName(name) {
  return name.length > 6;
}
```

To find the first item that satisfies the predicate you would have to go through each array item, and pass it into `isLongName`. Once it returns true, we can stop going through the array and grab the item that passed the predicate's test. Sounds complicated! Thankfully there is an array method that does just this!

## `.find()`

_Searches through the array and returns the value of the first item that satisfies a predicate function._

```js
var longName = names.find(isLongName);

console.log(longName); // logs Mozafar
```
//////////////////////////////////////////////////////>>>>>>>>>>>>>>>>>>/////////
<!DOCTYPE html>
<html>
  <head>
    <title>FADOL HOLIDAYS AGANCY</title>
    <link rel="stylesheet" href="css/mystyles.css">
  </head>

    <body>

    <h1>Fadol Safari holidays Agancy</h1>

    <img src="khartoum.jpg" alt="HTML5 Icon" width="430" height="250">
    <img src="welcome-to-sudan.jpg" alt="HTML5 Icon" style="width:430px;height:250px;">
    <img src="sudan history.jpg" alt="HTML5 Icon" style="width:430px;height:250px;">


    <nav>
      <ul>
        <li><a href="About Us.html">About Us</a></li>
        <li><a href="Services.html">Services</a></li>
        <li><a href=" ?Packages.html"> ?Packages</a></li>
        <li><a href=" ?Sudan gallery.html"> ?Sudan gallery</a></li>
        <li><a href="contact.html">Contact</a></li>

      </ul>
    </nav>


    <img src="IMG_1454.JPG" alt="HTML5 Icon" style="width:150px;height:150px;">
    <img src="kidepo-Klipspringer.jpg" alt="HTML5 Icon" style="width:150px;height:150px;">
    <img src="untitled-20-1024x768.jpg" alt="HTML5 Icon" style="width:150px;height:150px;">
    <img src="800px-Port_Sudan.jpg" alt="HTML5 Icon" style="width:160px;height:150px;">
    <img src="250px-Khartoum.jpg" alt="HTML5 Icon" style="width:160px;height:150px;">
    <img src="sudanese child.jpg" alt="HTML5 Icon" style="width:160px;height:150px;">
    <img src="Sudan night.jpg" alt="HTML5 Icon" style="width:160px;height:150px;">
    <img src="5107943603_90d9d914f0_b.jpg" alt="HTML5 Icon" style="width:160px;height:150px;">



    <section>
        <h1>Sudan</h1>
        <p class="lovely"><span class="bigintro">I am the third largest country in Africa and sixteenth largest in the world, bordering Egypt, Eritrea, Central African Republic, Chad, Ethiopia, Libya, and South Sudan. Getting a visa for Sudan is an expensive hit-and-miss affair, but if you do manage to get in, and you stick to the safe areas, you will probably have a memorable experience. The Sudanese people are very hospitable, and you can visit some awesome tourist attractions without even seeing another tourist.
        </p>
        <h4>c</h4>

        <p> For more information contact as!.</p>
        <p> Email: abdalmonamfadol@gmail.com</p>
        <p>Tel: 09227296689</p>

      </section>

      <footer>
        <p>This is the footer and is &copy; of Fadol Agancy 2018 </p>
      </footer>

      </body>
    </html>