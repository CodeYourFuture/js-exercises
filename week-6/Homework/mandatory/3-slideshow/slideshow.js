// Write your code here
// window.onload(function(){
    window.onload = function () {
    let images  = ["ALP_8397_Edit.jpg","ALP_8401_Edit.jpg", "ALP_8426_Edit.jpg","ALP_8443_Edit.jpg"];
    let i =0;
    let  pic = document.getElementById("pic");
    
    // let forward = function(
    let forward = function(){
        if (i<images.length-1){
            i=i+1;
            pic.src = images[i];
            console.log(i);
        }

        else{
            i=0;
            pic.src = images[i];
        }
    
    }
    let back = function(){
        if (i>0){
            i=i-1;
            pic.src = images[i];
            
        }

        else{
            i=images.length-1;
            pic.src = images[i];
            console.log(i);
        }
    
    }
    let playForward = function(){
        setInterval( forward, 1000)
    }
    let playBackward = function(){
        setInterval( back, 1000)
    }
document.getElementById("next").addEventListener("click", forward);
document.getElementById("previous").addEventListener("click", back);
document.getElementById("play forward").addEventListener("click", playForward);
document.getElementById("play backward").addEventListener("click", playBackward);

 }
