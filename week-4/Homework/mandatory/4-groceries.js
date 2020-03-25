// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];
let groceriesToBuy2 = [];

let groceryList = {
  item1: "Potatoes",
  item2: "Orange Juice",
  item3: "Rice"
};

for (let value of Object.values(groceryList)) {
  groceriesToBuy.push(value);
}

for (value in groceryList) {
  groceriesToBuy2.push(groceryList[value]);
}
console.log(groceriesToBuy);
console.log(groceriesToBuy2);
