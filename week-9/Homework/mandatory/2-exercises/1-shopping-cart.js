/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingCart {
  constructor(){
    this.items={};
  }
  addItem(item){
    this.items[item]=item;
  }
listItems(){
  for(let key in this.items){
    console.log(this.items[key]);
  }
  
}
  cartContains() {
    console.log("Your shopping cart has 3 items: ");
    for(let key in this.items){
      console.log(this.items[key]);
    }
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();
