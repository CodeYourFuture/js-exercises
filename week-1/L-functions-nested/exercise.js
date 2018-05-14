//function to calculate percentages
function calPercentages(numOfStudents, numOfMentors){
    const total = numOfStudents + numOfMentors;
    let stdentsPercentage = Math.round(numOfStudents / total * 100);
    let mentorsPercentage = Math.round(numOfMentors / total * 100); 
    let calculatedPercentages = { stdentsPercentage, mentorsPercentage}; 
    displayPercentages(calculatedPercentages);
}
//function to print message
function displayPercentages(calculatedPercentages){
  console.log("\n**************Percentages***************************");
  console.log(
    "Percentage students:",
    calculatedPercentages.stdentsPercentage + "%"
  );
  console.log(
    "Percentage mentors:",
    calculatedPercentages.mentorsPercentage + "%"
  );
}
//
calPercentages(15, 8)