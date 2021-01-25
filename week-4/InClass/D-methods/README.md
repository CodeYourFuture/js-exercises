### Object methods

Besides having specific properties, objects in the real world can also do things. For example, a computer can display something on the screen, a person can say their names etc... In Javascript, we do this using 'methods'. A method is a function attached to a particular object. You have already used some predefined methods before, for example _toUpperCase()_ on a string or _filter()_ on an array.

```js
let athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  sayHi: function () {
    return "Hi everybody!";
  },
};
```

How do we call this method?

```js
athlete.sayHi(); // returns "Hi everybody!"
```
