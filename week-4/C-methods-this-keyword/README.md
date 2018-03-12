### Goals
- make objects even more useful by introducing object methods
- introduce the `this` keyword **without going into any details about how it works** other than the fact that its a way to access the current object's properties/methods

The should be able to understand the following:

```js
var athlete = {
    name: 'Usain Bolt',
    thirstLevel: 5,
    drink: function() {
        this.thirstLevel = this.thirstLevel + 2;
    }
};

console.log(athlete.thirstLevel);
athlete.drink();
console.log(athlete.thirstLevel);
```