/*
    Given the same "house" object again

    Write the code for the functions as per the description above them
*/

let kinningParkHouse = {
    address: "1 Kinning Park",
    price: 180000,
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
      email: "margaret@fake-emails.com"
    }
};

let parkAvenueHouse = {
    address: "50 Park Avenue",
    price: 195000,
    //nested array within the variable name object literal
    currentOwner: {
      firstName: "Marie",
      lastName: "McDonald",
      email: "marie.m@real-emails.com"
    }
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  //let fullName = house.currentOwner.firstName + ' ' + house.currentOwner.lastName; // dont need to use let 
  //fullName = house.currentOwner.firstName + ' ' + house.currentOwner.lastName; //  or new variable name
  //return house.currentOwner.firstName + ' ' + house.currentOwner.lastName;  // concatenation example returns dotnotation objectName and the key:value properties eg.nestedArray.firstName and lastName
  return `${house.currentOwner.firstName} ${house.currentOwner.lastName}` // string interpolation, the space between the stringsinterpolation seperates the dotnation properties
//console.log(fullName);
//   return fullName;
}


// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
//return `${house1.currentOwner.email}, ${house2.currentOwner.email}`;  // returned the result as a string datatype using `back-ticks` and ${interterpolation} use them when 
//   const emails = [house1.currentOwner.email, house2.currentOwner.email];
//   return emails
//return [house1.currentOwner.email, house2.currentOwner.email];  // this will return an output that is using square bracket as an array
let emailsArr = []
emailsArr.push(house1.currentOwner.email);
emailsArr.push(house2.currentOwner.email);
//return Array.isArray(emailsArr);
return emailsArr  // simplify
}
//source - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
   
  if (house1.price < house2.price) {
    return house1.address
  } else {
    return house2.address
  }
};  


/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(`Expected result: Margaret Conway. Actual result: ${getOwnerFullName(kinningParkHouse)}`);
console.log(`Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(kinningParkHouse, parkAvenueHouse)}`);
console.log(`Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(parkAvenueHouse, kinningParkHouse)}`);