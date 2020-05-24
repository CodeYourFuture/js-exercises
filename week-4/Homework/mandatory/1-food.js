//TODO think about exercises for this

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

console.log(`Favorite food ${myFavFood.name}`);

function prepareFood(food) {
  console.log(
    `I need to buy these ingredients first: ${food.ingredients.join(",")}`
  );
}

function buy(food) {
  console.log(`I am on my way to ${food.takeAway.name}`);
}

function isItVeggie(food) {
  if (food.isVeggie) {
    console.log(`${food.name} is a veggie dish`);
  } else {
    console.log(`${food.name} is NOT a veggie dish`);
  }
}
function isItGoodForDiet(food) {
  return food.calPerPortion < 600;
}
prepareFood(myFavFood);
buy(myFavFood);
isItVeggie(myFavFood);
console.log("Is my favorite food good for my diet: " + goodForDiet(myFavFood));
