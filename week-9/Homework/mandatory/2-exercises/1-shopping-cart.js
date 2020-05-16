/*

Complete the rest of this code to create an online shopping cart.
The output of running your code should be:
    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingList{
  constructor(){
    this.shoppingProduct = []
  }
  addItem(item){

    this.shoppingProduct.push(Object.values(item))

  }
}
let myCart = new ShoppingList
myCart.addItem({item: "Toilet Roll", item2:"Pasta", item3:"Eggs", price: "£12.58"});
console.log(myCart)







 //                a little practice here      //
// class ShoppingCart  {
//   constructor(item1,item2, item3){

//     this.item1 = item1;
//     this.item2 = item2;
//     this.item3 = item3;

//   } 
 
// };
// let myCart = new ShoppingCart(); // empty cart
// let myCart0 = new ShoppingCart("Toilet Roll", "Pasta", "Eggs");
// let myCart1 = new ShoppingCart("ton of Pasta", "onion", "coffee", "ggg");
// let myCart2 = new ShoppingCart("water", "salmon sandwitch");

//     console.log(myCart);
//     console.log(myCart0);
//     console.log(myCart1);
//     console.log(myCart2);
//     let vals = Object.values(ShoppingCart)
//     console.log(vals)
  

       // Add your code here
      // cartContains(item, item1, item2) {
          // Use console.log() to output everything contained in your cart
        //};

  //Creates an empty shopping cart

// myCart.addItem("Toilet Roll");
// myCart.addItem("Pasta");
// myCart.addItem("Eggs");
// myCart.listItems();
// myCart.cartContains();