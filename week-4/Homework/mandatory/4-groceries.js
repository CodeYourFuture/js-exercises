// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "Potatoes",
  item2: "Orange Juice",
  item3: "Rice",
  item4: "Beans",
  item5: "Cheese"
};
Object.values(groceryList).forEach(items => {
  return groceriesToBuy.push(items)
})
console.log(groceriesToBuy)

// Read: How to loop through an object
// object.keys refers to item1-5
// Object.keys(groceryList).forEach(key => {
//   return groceriesToBuy.push(groceryList[key])
// })
// console.log(groceriesToBuy)

// let myList = [groceryList.item1, groceryList.item2]
// myList = myList.map(e => {
//   return groceriesToBuy.push(myList)
// })
// console.log(groceriesToBuy)



