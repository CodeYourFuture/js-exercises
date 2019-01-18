/*
In this exercise, Mr Very Important Boss Man has a very important job for you!

- First, he wants you to remove any candidates from his
list of email addresses and names that include the word 'spam'. Use the .filter() function!

- Then he wants you to sort the candidates so that candidate1 is first, candidate 2 is second and so on.
Use the .sort() function!

- Finally, Mr VIBM wants you to use the forEach function to console log the sorted arrays with formatting 
like this:

'Email address: candidate1@jobmail.com Dear Gaius your interview is at this time: 10:00'

Remember: the .forEach() method tracks the index of every array item in the second parameter by
default! 

*/
var emails = [
  "candidate2@jobmail.com",
  "candidate3@jobmail.com",
  "candidate1@jobmail.com",
  "candidate4@jobmail.com",
  "candidate5@jobmail.com",
  "spam@spam.com"
];
var times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15"];
var names = ["Gaius", "Adama", "Starbuck", "Boomer", "Gaeta", "spam"];
function filteremail(item) {
  return item.sort((a, b) => a.slice(9, 10) - b.slice(9, 10)).filter(x => !x.includes('spam'));
}
var sortedArray = filteremail(emails);
var sortedName = filteremail(names);
sortedArray.forEach(function (item, index) {
  console.log(`Email address: ${item} Dear ${sortedName[index]} your interview is at this time: ${times[index]}`);
});
/*
EXPECTED OUTPUT

Email address: candidate1@jobmail.com Dear Gaius your interview is at this time: 10:00
Email address: candidate2@jobmail.com Dear Adama your interview is at this time: 10:15
Email address: candidate3@jobmail.com Dear Starbuck your interview is at this time: 10:30
Email address: candidate4@jobmail.com Dear Boomer your interview is at this time: 10:45
Email address: candidate5@jobmail.com Dear Gaeta your interview is at this time: 11:00

*/