/*
Create a bottle object and give it the ability to be filled, 
drank from and a function that checks whether it is empty.
To measure this your bottle will need a volume along with fill, drink and empty keys.
We have made a start on this for you here:  
*/

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

/*
--TIP--

Remember that for changing properties on the current object inside one of its
methods you can refer to it by its variable name: `bottle`.

Once you have completed your object run the following and see if your answer 
matches up :)
*/

bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();
if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}
console.log("Above volume should be: 70");