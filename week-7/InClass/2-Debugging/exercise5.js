/* 
We want to print the ages only of people who can vote

But our code prints out all the ages!

How can we change line 20 so we only print ages of people who can vote?
*/

function canVote(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}
const ages = [17, 26, 4, 18, 7, 12, 31];

let voterAges = ages.filter(canVote);

console.log(ages);