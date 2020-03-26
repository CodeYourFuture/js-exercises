/*
Create an object that acts like a water bottle. 
It will need a volume key to store how full or empty the bottle is. 
It will be 100 when full and 0 when empty. 
Give your water bottle methods for filling it up, 
drinking some of it, and emptying it.

      if (medal === "gold") {
            this.goldMedals = this.goldMedals + 1;
        } else {
            this.silverMedals = this.silverMedals + 1;
        }
    }
We made a start on this for you here: 
https://codeyourfuture.github.io/syllabus-london/js-core-2/week-1/lesson.html
for loop 
*/

let bottle = { 
  volume: 0,
  //here assign a new value to volume
  fill: function() {
    // calling this function should make you bottles volume = 100;
    this.volume = 100;
  },
  // have a drink of water and decrease by - 10
  drink: function() {
    this.volume -= 10;
  },
  // when water level hits zero return true. 
  empty: function() {
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

bottle.fill();   //sets it to 100  
bottle.drink();  // decrease 100-10 = 90
bottle.drink();  // decrease 90-10 = 80
bottle.drink();   // decrease 80-10 = 70

if (!bottle.empty()) {
  console.log(`bottles volume = ${bottle.volume}`);
// if bottle not empty console the statement below
}
console.log("Above volume should be: 70");
