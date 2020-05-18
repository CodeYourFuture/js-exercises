/*
As you you can have an Array of Objects, you can also store Arrays in Objects.
In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access Array stored inside Object.
 - How to access to a specific property of an array and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients to your menus. It is stored in the "weeklyMealPlan" object.

Complete the exercises below.
*/

// Here is your 
let weeklyMealPlan = {
    monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
    tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
    wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
    thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
    fridray: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
    saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
    sunday: []
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weakly ingredients into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather all week item names into this array

// Solution 1
let weeklyGroceriesToBuy = [];
for (let key in weeklyMealPlan) {
    let values = weeklyMealPlan[key]
    for (let item of values) {
        weeklyGroceriesToBuy.push(item)
    }
}
console.log(weeklyGroceriesToBuy)

//Solution 2 

// let weeklyGroceriesToBuy = Array.from([].concat(...Object.values(weeklyMealPlan)))


/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather weekend item names into this array

let weekendGroceriesToBuy = []
let weekendDays = ["saturday", "sunday"]
for (let key in weeklyMealPlan) {
    if (weekendDays.includes(key)) {
        let values = weeklyMealPlan[key]
        for (let item of values) {
            weekendGroceriesToBuy.push(item)
        }
    }
}
console.log(weekendGroceriesToBuy)


/*
Exercise 2:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy per each day
    - and update the corresponding properties of numberOfItemsPerWeak object.

  Finally use console.log() to print out the Object.
*/
// Gather weekend item names into this array
let numberOfItemsPerWeak = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 0,
    fridray: 0,
    saturday: 0,
    sunday: 0
};

for (let day in weeklyMealPlan) {
    numberOfItemsPerWeak[day] = weeklyMealPlan[day].length
}
console.log(numberOfItemsPerWeak)