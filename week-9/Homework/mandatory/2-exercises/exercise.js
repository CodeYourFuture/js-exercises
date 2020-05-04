/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: toilet roll, pasta, eggs
*/
class ShoppingCart {
  constructor() {
     this.list = [];
  }
  listItems() {
  console.log(`This is your basket : ${this.list}`);
  }
  addItem(newItem) {
    this.list.push(newItem);
    
  }
}
let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("toilet roll");
myCart.addItem("pasta");
myCart.addItem("eggs");

myCart.listItems();

