/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/
 // Creates an empty shopping cart

class ShoppingCart {
  constructor(){
    this.listOfShopping = [];
    this.shoppings = "";
  }
  addItem(item){
    this.listOfShopping.push(item)
  }
  listItems(){
    this.listOfShopping.forEach(element => this.shoppings += element + ", ")
  }
  cartContains() {
    console.log(this.shoppings);
  }
}


let myCart = new ShoppingCart();
myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();
