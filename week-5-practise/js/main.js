//get elements
const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");
const btns = {
  blue: {
    ele: blueBtn,
    jumbotron: "#588fbd",
    donateBike: "#ffa500",
    volunteer:{
        bg: 'black',
        col: 'white'
    }
  },
  orange: {
    ele: orangeBtn,
    jumbotron: "#f0ad4e",
    donateBike: "#5751fd",
    volunteer:{
        bg: '#31b0d5',
        col: 'white'
    }
  },
  green: {
    ele: greenBtn,
    jumbotron: "#87ca8a",
    donateBike: {
        bg: 'black',
    },
    volunteer:{
        bg: '#8c9c08'
    }
  }

};
const jumbotron = document.querySelector(".jumbotron");
const donateBike = document.querySelector("#donateBike");
const volunteer = document.querySelector("#volunteer");
btns.blue.ele.addEventListener('click', () => {
    /*
    When clicking blue it should change: - Jumbotron background color to
     #588fbd - 
     Donate a bike button background color to #ffa500 - 
     Volunteer button background color to black and text color to white
    */  
    jumbotron.style.backgroundColor = btns.blue.jumbotron;
    donateBike.style.backgroundColor = btns.blue.donateBike;
    volunteer.style.backgroundColor = btns.blue.volunteer.bg;
    volunteer.style.color = btns.blue.volunteer.col;

});

btns.orange.ele.addEventListener('click', () => {
    /*
   When clicking orange it should change: 
   - Jumbotron background color to #f0ad4e 
   - Donate a bike button background color to #5751fd 
   - Volunteer button background color to #31b0d5 and text color to white
   */
    jumbotron.style.backgroundColor = btns.orange.jumbotron;
    donateBike.style.backgroundColor = btns.orange.donateBike;
    volunteer.style.backgroundColor = btns.orange.volunteer.bg;
    volunteer.style.color = btns.orange.volunteer.col;

});

btns.green.ele.addEventListener('click', () => {
    console.log(btns.green.donateBike);
    /*
    When clicking green it should change: 
    - Jumbotron background color to #87ca8a 
    - Donate a bike button background color to black 
    - Volunteer button background color to #8c9c08
     */
    jumbotron.style.backgroundColor = btns.green.jumbotron;
    donateBike.style.backgroundColor = btns.green.donateBike.bg;
    volunteer.style.backgroundColor = btns.green.volunteer.bg;

});