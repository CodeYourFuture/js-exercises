/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {
    {
      let tidyString = strArr.map(item => item .splice());
      console.log(tidyUpString);

    }

tidyUpString(" Taslima","Khadija bunny  " ,"Aysha bunny ");

function validate(num) {
  if(typeof isNaN(num) && num%2==0 && num<=100)
  {
    return true;

  }
  else{
    return false;
  }
}
// console.log(validate(5));
// console.log(validate(100));
// console.log(validate(780));

// /*Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index
// */
function remove(arr, index) {
arr.splice(index,1);
return arr;
}
// console.log(remove([1,2,3,4,5,6],1));
// console.log(remove([10,20,30,40,50],3));
// console.log(remove(['taslima','khadijah','aysha','lockdown','bored'],3));

// /*
// Write a function that:
// - takes an array of numbers as input
// - returns an array of strings formatted as percentages (e.g. 10 => "10%")
// - the numbers must be rounded to 2 decimal places
// - numbers greater 100 must be replaced with 100
// */
function formatPercentage(arr) {
 
  const converted = arr.map (item => Math.round(item).toString() + '%');
  return converted; 
  }
   
  console.log(formatPercentage([200.308,30.9999,190.8777,80,39]));

