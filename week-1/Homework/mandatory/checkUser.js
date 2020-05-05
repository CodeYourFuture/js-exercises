function checkUserLogin(userName,userType){
    const lengthOfName= userName.length;
    const capitalLetter= userName.charAt(0).toUpperCase();
    //let message;
    if(userType==='admin' || userType==='manager'){    // && (lengthOfName >=5 && lengthOfName<=10) && capitalLetter){
        return "User name valid";
    } else if(lengthOfName >=5 && lengthOfName<=10 && capitalLetter){
        return "user name valid";
    }
    else{
        return "username invalid"
    }
}

//console.log(checkUserLogin("fats", "developer"));

//function checkUserLogin(userName, userType) {
    //checking the type of the user is admin or manager
   // if (userType === "admin" || userType === "manager") {
    //  return "User valid";
    //} else if (
      //check user name capital letter, charAt(0), toUpperCase().? length?
    //) {
     // return "User valid";
    //} else {
     // return "User Invalid";
    //}
  //}
  //function checkUserLogin(userName, userType) {
    //checking the type of the user is admin or manager
    //if (userType === "admin" || userType === "manager") {
      //return "User valid";
    //} else if (
      //check user name capital letter, charAt(0), toUpperCase().? length?
      //userName.charAt(0) === userName.charAt(0).toUpperCase() &&
      //userName.length >= 5 &&
      //userName.length <= 10
    //) {
      //return "User valid";
    //} else {
      //return "User Invalid";
    //}
  //}
  console.log(checkUserLogin("jack", "admin")); //UsernameValid
  console.log(checkUserLogin("James", "Developer")); //UsernameValid
  console.log(checkUserLogin("markson", "tester")); //UsernameInValid
  console.log(checkUserLogin("Halit", "manager")); //UsernameValid
  console.log(checkUserLogin("Mark", "tester")); //UsernameInValid  