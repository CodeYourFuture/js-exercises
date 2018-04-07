var mentorAge =25;
function isOver20 (age){ 
    return age>20   
}


function printNameIfMentor (name,isMentor){
    if (isMentor){
        console.log (name);
    }

}
if (isOver20 (mentorAge)){ 
    printNameIfMentor ( "daniel",true)
}
