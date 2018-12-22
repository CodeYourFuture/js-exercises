function createPercentage(value, totalNum = 23) {
	var generatePercentage = (value / totalNum) * 100
	return generatePercentage.toFixed(0) + '%'
}


function displayPercentage(firstPercentage, secondPercentage){
	console.log('Percentage Students: ' + createPercentage(firstPercentage))
	console.log('Percentage Mentors: ' + createPercentage(secondPercentage, 23))

}

displayPercentage(15,8)

/* While total number is set to a default value (23) this can be overwritten by adding a second parameter to
the function call within the console logs. This is shown in the Percentage Mentors console log
for demonstration purposes.

I have found this exercise rather challenging and I'm not sure if this is anywhere near the 'correct' solution.

This revision has been based on what I have gained from mentors comments on solutions of this exercise
on mine, and others, PRs. These comments have been very helpful.

I have tried as far as possible to keep the DRY principle in mind when
producing this code (apart from in this comment, clearly).

Feedback is greatly appreciated! :) */