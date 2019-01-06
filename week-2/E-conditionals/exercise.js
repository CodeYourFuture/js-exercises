/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/


var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

var rolePlay = (role, name, role1, name1) => {
  if(role == "student") 
    return "Hi, My name is " + name;
    else if (role1 == "student")
    return "Hi, My name is " + name1;
  else
    return "Erorr";
  
};
console.log(rolePlay(role, name, role2, name2));

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
