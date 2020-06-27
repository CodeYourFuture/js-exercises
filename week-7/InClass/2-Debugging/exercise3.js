/* 
We want our code to show the ages which are 17 or greater

Run this code and see if there is a problem with the
output.

Why is the bug happening? How do we fix it?
*/

function canDrive(a){
    if(a <= 17){
        return true;
    }else{
        return false;
    }
}

const ages = [22, 15, 29, 31, 7, 54, 13];

const legalDrivers = ages.filter(canDrive);

console.log(legalDrivers);

// We'd better fix this bug or our company will be sending out provisional driving licences to children!