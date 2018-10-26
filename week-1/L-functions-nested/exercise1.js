let students= 15
let mentors= 8
let sum=students+mentors
function percentage(count,sum){
    if (count===students){
       return Math.round((students/sum)*100)
    }
    
else if (count===mentors){
    return Math.round((mentors/sum)*100)
}
}
console.log('percentages student:'+percentage(students,sum)+'%')
console.log('percentages mentor:'+percentage(mentors,sum)+'%')
// if  (percentage(students,sum)){
// console.log('percentages student:'(percentage(students,sum))+'%')
// }
// else if (percentage(mentors,sum)) {
 
// console.log("percentages mentors:"(percentage(mentors,sum))+'%')
// }
