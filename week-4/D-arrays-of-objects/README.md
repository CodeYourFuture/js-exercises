### Goals

- This is where the most complex exercises will go
- A good time to do exercises involving arrays of objects. I.e. combining what we learned in the previous week + this one

Stuff like this:

```js
var kitten1 = {
    name: 'Fluffy',
    weeksOld: 2
};
var kitten2 = {
    name: 'Megatron',
    weeksOld: 1
};
var kitten3 = {
    name: 'Billy',
    weeksOld: 5
};

var kittens = [kitten1, kitten2, kitten3];

var youngKittens = kittens.filter(isYoung);

function isYoung(kitten) {
    return kitten.weeksOld <= 1.5;
}
```