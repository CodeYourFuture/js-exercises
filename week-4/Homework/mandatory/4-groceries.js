// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "",
  item2: "",
  item3: ""
};

groceryList.item1 = "Potatoes";
groceryList.item2 = "Orange Juice";
groceryList.item3 = "Rice";
console.log(groceryList);
for(let property in groceryList){

   groceriesToBuy = Object.values(groceryList);
}
console.log(groceriesToBuy);