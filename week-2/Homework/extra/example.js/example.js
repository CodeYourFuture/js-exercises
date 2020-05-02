function getLengthString (str){
  return str.length
} 
let arr= ["hello", "a", "abc", "dog","looooooooongness"]
 let output = arr.map(getLengthString);
 console.log(output);