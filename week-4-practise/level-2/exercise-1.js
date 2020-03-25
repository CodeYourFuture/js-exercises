/*
Create an object that acts like a water bottle. 
It will need a volume key to store how full or empty the bottle is. 
It will be 100 when full and 0 when empty. 
Give your water bottle methods for filling it up, 
drinking some of it, and emptying it.

We made a start on this for you here: 
*/

<<<<<<< Updated upstream:week-4-practise/level-2/exercise-1.js
=======
<<<<<<< Updated upstream:week-4/Homework/mandatory/3-water-bottle.js
=======
<<<<<<< Updated upstream:week-4-practise/level-2/exercise-1.js
>>>>>>> Stashed changes:week-4/Homework/mandatory/3-water-bottle.js
var bottle = {
	volume: 0,
	fill: function(){
	 	// calling this function should make you bottles volume = 100; 
	},
	drink: function(){
		// calling this function should decrease your bottles volume by 10;
	},
	empty: function(){
		// this function should return true if your bottles volume = 0
	}
}
<<<<<<< Updated upstream:week-4-practise/level-2/exercise-1.js
=======
=======
>>>>>>> Stashed changes:week-4-practise/level-2/exercise-1.js
let bottle = {
  volume: 0,
  fill: function() {
    // calling this function should make you bottles volume = 100;
<<<<<<< Updated upstream:week-4/Homework/mandatory/3-water-bottle.js
  },
  drink: function() {
    // calling this function should decrease your bottles volume by 10;
  },
  empty: function() {
    // this function should return true if your bottles volume = 0
  }
};
=======
    this.volume = 100;
  },
  drink: function() {
    // calling this function should decrease your bottles volume by 10;
    this.volume -= 10;
  },
  empty: function() {
    // this function should return true if your bottles volume = 0
    return this.volume === 0 ? true : 0
  }
};
>>>>>>> Stashed changes:week-4/Homework/mandatory/3-water-bottle.js
>>>>>>> Stashed changes:week-4-practise/level-2/exercise-1.js
>>>>>>> Stashed changes:week-4/Homework/mandatory/3-water-bottle.js

/*
--TIP--

Remember that for changing properties on the current object inside one of its
methods you can refer to it by its variable name: `bottle`.

Once you have completed your object run the following and see if your answer 
matches the expected result at the bottom :)
*/

bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();
if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}
console.log("Above volume should be: 70");