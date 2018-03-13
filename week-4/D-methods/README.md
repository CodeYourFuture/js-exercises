### Goals
- make objects even more useful and more closer to "real-life" by introducing object methods
- explain how to get access to the current object reference (the `athlete` inside the the `drink` function in the example below)

The should be able to understand the following:

```js
var athlete = {
    name: 'Usain Bolt',
    thirstLevel: 5,
    drink: function() {
        athlete.thirstLevel = athlete.thirstLevel + 2;
    }
};

console.log(athlete.thirstLevel);
athlete.drink();
console.log(athlete.thirstLevel);
```