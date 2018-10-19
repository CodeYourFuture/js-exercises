let students= 15
let mentors= 8
let sum=students+mentors
function percentage(count,sum){
       return Math.round(count/sum*100)
    }
    
}
function message(text){
   var text='percenteage student'+ percentage(students,sum)+'%'
  return message;
}
// console.log(message(percentage(students,sum)))