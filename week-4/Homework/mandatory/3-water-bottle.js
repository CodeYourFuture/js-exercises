/*
Create an object that acts a water bottle.

It will need a volume property to store how full or empty the bottle is. 
Volume will be 100 when bottle is full and 0 when empty. 

Give your water bottle methods for 
  - filling it up
  - pouring 10 unit of water into it
    Note: You cannot over exceed the bottle capacity.
  - drinking 10 unit from it
    Note: You cannot drink more than its actual content.
  - and telling if the bottle is full
  - and telling if the bottle is empty

We made a start on this for you here by giving the sceleton of our object.
You have to implement the missing features according to the specification.
*/

// Here is your starting point:
let bottle = {
  volume: 0,
  fillUp: function () {
    return (this.volume = 100);
    // calling this function should pour your bottle full (volume = 100);
  },
  pour: function () {
    if (this.volume <= 90) return (this.volume += 10);
    // calling this function should increase your bottle volume by 10 unit;
  },
  drink: function () {
    if (this.volume >= 10) return (this.volume -= 10);
    else return (this.volume = 0);
    // calling this function should decrease your bottle volume by 10 unit;
  },
  isFull: function () {
    return this.volume == 100;
    // this function should return true if your bottle is empty;
  },
  isEmpty: function () {
    return this.volume === 0;
    // this function should return true if your bottle is full;
  },
};

/*
TIP:
  Remember that for changing properties on the current object inside one of its
  methods you can refer to it by its variable name: `bottle` or using the keywords `this`.
*/

/*
Extra question:
  What do you think why it is preferred using `this` inside object over its variable name in our case `bottle`?

  Leave your answer below:
*/

// HERE COMES YOUR ANSWER
// No need to type the name of object all the time
/*
Once you have completed your object run the following 
and see if your answer matches the expected result at the bottom :)
*/

// ONYL READ AND DO NOT MODIFY BELOW

// ACTIONS
bottle.fillUp();

// CHECKS
if (bottle.isFull()) console.log(`That's correct! Bottle is full.`);
else console.warn(`Not quite right! Bottle should be full but it is not.`);

if (!bottle.isEmpty()) console.log(`That's correct! Bottle isn't empty.`);
else
  console.warn(
    `Not quite right! Bottle should not be empty but it is already.`
  );

// ACTIONS
bottle.pour();

// CHECKS
if (bottle.volume === 100)
  console.log(
    `That's correct. Bottle is already full water volume cannot go beyond.`
  );
else
  console.warn(
    `Whoops!!! Looks like you've changed your bottle to a bigger one, it went beyond its maximum capacity up to ${bottle.volume} unit.`
  );

if (bottle.isFull()) console.log(`That's correct! Bottle is still full.`);
else console.warn(`Not quite right! Bottle should be still full but is not.`);

// ACTIONS
bottle.drink();
bottle.drink();
bottle.drink();

// CHECKS
if (bottle.volume === 70)
  console.log(`That's correct! Water volume is ${bottle.volume}.`);
else
  console.warn(
    `Not quite right! Water volume should be 70 unit instead of ${bottle.volume}.`
  );

// ACTIONS
bottle.drink();
bottle.drink();
bottle.drink();

// CHECKS
if (!bottle.isFull()) console.log(`That's correct! Bottle isn't full.`);
else console.warn(`Not quite right! Bottle should not be full but it is.`);

if (!bottle.isEmpty()) console.log(`That's correct! Bottle isn't empty yet.`);
else
  console.warn(
    `Not quite right! Bottle should not be still empty but it is already.`
  );

// ACTIONS
bottle.drink();
bottle.drink();
bottle.drink();
bottle.drink();

// CHECKS
if (bottle.isEmpty()) console.log(`That's correct! Bottle is finally emptied.`);
else
  console.warn(
    `Not quite right. Bottle should be already empty but it is not.`
  );

if (bottle.volume === 0)
  console.log(`That's correct! Empty bottle volume is repesented as zero.`);
else
  console.warn(
    `Not quite right. Volume should be zero instead of ${bottle.volume}.`
  );

// ACTIONS
bottle.drink();

// CHECKS
if (bottle.volume === 0)
  console.log(`That's correct! Water volume cannot go below zero.`);
else
  console.warn(
    `Whoops!!! Looks like your water volume went negative. Your water volume is ${bottle.volume} unit.`
  );

if (bottle.isEmpty()) console.log(`That's correct! Bottle is still empty.`);
else console.warn(`Not quite right. Bottle should be empty but it is not.`);

// ACTIONS
bottle.pour();

// CHECKS
if (bottle.volume === 10)
  console.log(`That's correct! Water volume is ${bottle.volume}.`);
else
  console.warn(
    `Not quite right! Water volume should be 10 unit instead of ${bottle.volume}.`
  );

if (!bottle.isFull()) console.log(`That's correct! Bottle isn't yet full.`);
else console.warn(`Not quite right! Bottle should not be full but it is.`);

if (!bottle.isEmpty())
  console.log(`That's correct! Bottle isn't empty anymore.`);
else
  console.warn(
    `Not quite right! Bottle should not be empty again but it is still.`
  );

// ACTIONS
bottle.drink();

// CHECKS
if (bottle.isEmpty())
  console.log(`That's correct! Bottle is emptied once more.`);
else
  console.warn(`Not quite right. Bottle should be empty again but it is not.`);
