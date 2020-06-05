let myFavFood = {
  name: "falafel wrap",
  isVeggie: true,
  caloriesPerPortion: 550,
  ingredients: ["chickpeas", "cumin", "oil", "sesame seeds", "tahini sauce"],
  takeAway: {
    name: "falafel to go",
    address: "Hope St. Glasgow",
  },
};

// 1. console.log() the name of myFavFood

console.log("Favorite food is " + myFavFood.name);

// 2. Declare a function "getTakeAwayAddress" that accepts "food" as a parameter
// and returns the address of where to buy it

function getTakeAwayAddress(food) {
  return food.takeAway.address;
}

console.log("I can buy my favorite food from " + getTakeAwayAddress(myFavFood));

// 3. Declare a function "isVeggie" that accepts "food" as a parameter
// and returns true if it's vegetarian, or false if not

function isVeggie(food) {
  if (food.isVeggie === true) {
    return true;
  }
  // write code here
}

console.log("Is my favorite vegetarian? " + isVeggie(myFavFood));

// 3. Declare a function "isLowCalorie" that accepts "food" as a parameter
// and returns true if it has less than 600 calories, or false otherwise
// write your own console.log() that calls the function to test it, as in the examples above!
// no example code is provided here!

//---------------------------------------
function isLowCalorie(food) {
  if (food.caloriesPerPortion < 600) {
    return true;
  } else {
    return false;
  }
}
let checkingCalorie = isLowCalorie(myFavFood);
console.log(
  "Is my favourite food has less than 600 calories? " + checkingCalorie
);
// 3. Declare a function "isSafeForNutAllergies" that accepts "food" as a parameter
// and returns false if it found the word "sesame" in the ingredients, or true otherwise

function isSafeForNutAllergies(food) {
  if (!food.ingredients.includes("sesame seeds")) {
    return true;
  } else {
    return false;
  }
}

console.log(
  "Is my favorite food nut allergy safe? ",
  isSafeForNutAllergies(myFavFood)
);
