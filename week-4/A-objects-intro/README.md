### Objects

When you think about real world objects, they have a bunch of properties that describe how its unique. Your laptop, for example, has a brand (Lenovo/Apple etc.), a screen size (13/15 inch), RAM (8/16GB) etc.

As arrays in JavaScript are useful for describing a collection of things, objects are very useful for grouping together a bunch of characteristics to describe a specific entity.

How would we describe the above laptop as a JavaScript object?

```js
var laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true
};
```

What's happening above is that we're **declaring a variable called laptop** and assigning to it...an **object literal**! 

An object literal is composed of a set of curly bracket `{...}`, and in between a set of properties that describe that object: `brand`, `screenSize`, `isTouchScreen`.

Each one of those properties has a value: `brand` has the **string** value `Lenovo`, `screenSize` has the **number** value `13`, `isTouchScreen` has the **boolean** property `true`.

Each **property** and its **value** are separated by a colon, and each property/value pair are separated by a comma.