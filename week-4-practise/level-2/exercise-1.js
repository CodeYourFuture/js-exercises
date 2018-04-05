/*
Create an object that acts like a water bottle. 
It will need a volume key to store how full or empty the bottle is. 
It will be 100 when full and 0 when empty. 
Give your water bottle methods for filling it up, 
drinking some of it, and emptying it.

We made a start on this for you here: 
*/

var bottle = {
  volume: 0,
  fill: function(amount) {
    return amount + this.volume;
  },
  drink: function(amount) {
    this.volume - amount;
  },
  empty: function(amount) {
    return this.volume === 0;
  }
};

/*
--TIP--

Remember that for changing properties on the current object inside one of its
methods you can refer to it by its variable name: `bottle`.

Once you have completed your object run the following and see if your answer 
matches the expected result at the bottom :)
*/

bottle.fill(100);
bottle.drink(10);
bottle.drink(10);
bottle.drink(10);
if (!bottle.empty()) {
  console.log("bottles volume = " + bottle.volume);
}
console.log("Above volume should be: 70");
