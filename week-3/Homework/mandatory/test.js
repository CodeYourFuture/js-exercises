function reverseString(str) {
  var newStr = "";
  for (let i = str.length; i >= 0; i--) {
    console.log(str[i]);
    newStr = newStr + str[i];
  }

  console.log(newStr);

  return newStr;
}

reverseString("hello");
