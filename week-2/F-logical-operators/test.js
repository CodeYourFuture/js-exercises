const assert = require('assert')

function Check (username, usertype){

    if(usertype === "admin" || usertype === "manager"){
        return "Username valid";
    } else if (username[0] === username[0].toUpperCase() && username.length >= 5 && username.length <= 10)
    {
        return "Username valid";        
    } else  {
        return "Username invalid";        
     
    }

}




assert(Check("Al23", "managr")==="Username valid");
assert(Check("Alexey23", "managr")==="Username valid");
assert(Check("alexel23", "managr")==="Username invalid");

