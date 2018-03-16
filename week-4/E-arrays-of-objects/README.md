### Arrays of objects

In the past weeks, you've learned about making arrays of numbers, arrays of string etc... Guess what, you can also make arrays of objects :-)

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
```

As a result, you can also use all the functions you've been learning in the past weeks, with arrays of objects (find, some, every, filter, map, forEach...). Let's take an example. We want to filter all the kittens who are less than 3 weeks old:

```js
function isYoungerThan3Weeks(kitten) {
    return kitten.weeksOld <= 3;
}

kittens.filter(isYoungerThan3Weeks);

// returns [kitten1, kitten2];
```

What if we want to get an array of all the kitties' names?

```js
function getName(kitten) {
    return kitten.name;
}

kittens.map(getName);

// returns ["Fluffy", "Megatron", "Billy"]
```

Possibilities are endless :-)