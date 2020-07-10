/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  // Add your code here
  constructor(){

    this.myCart = [] }
   addItem(item){
     return this.myCart.push(item);
   }
  cartContains() {
    // Use console.log() to output everything contained in your cart
    console.log(this.myCart)
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
