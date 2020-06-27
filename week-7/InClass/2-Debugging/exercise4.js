/* 
We were expecting the messyNames array to contain only Strings, 
but it doesn't!

First, can you understand why we get an error? What kind of error is it?

Second - we asked the Business Analyst, and she told us if an element
is not a String, we should return the String "NO VALUE" - please
modify the code to do this
*/

function capitalise(customer){
    return customer.toUpperCase();
}

const messyNames = ["Sundar", "reshma", true, "Maria", "Shantanu", 5 ];

const customers = messyNames.map(capitalise);

console.log(customers);