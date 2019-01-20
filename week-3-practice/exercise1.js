/*Create a registeration helper for teachers to find the students that are related and there
position in the register.
Validate that the students last name is 'Johnson'.
Print the names of students that qualify.
Print the indexes of students that qualify. 
*/

var names = ["P Johnson", "A Bob", "B Johnson", "M Ruby", "K Reggie"];

function isAJohnson(name) {
    if (name.includes("Johnson")){
        console.log(name);
        var johnsonIndex = names.indexOf(name);
        console.log(johnsonIndex);
    }
return ;
};

var theJohnsons = names.forEach(isAJohnson);;







