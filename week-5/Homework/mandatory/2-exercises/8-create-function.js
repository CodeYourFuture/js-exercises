/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>Chris</h1> 
 *      <h2>Teacher</h2>
 *      <h1>Joanna</h1> 
 *      <h2>Student</h2>
 *      <h1>Boris</h1> 
 *      <h2>Prime Minister</h2>
 * </div>
 * 
 * let people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  }  //object array
];

exerciseOne(people);
 */

let people = [{
        name: "Chris",
        job: "Teacher"
    },
    {
        name: "Joanna",
        job: "Student"
    },
    {
        name: "Boris",
        job: "Prime Minister"
    }
];
//https://codepen.io/sonjide/pen/abOMVxo - expected results
//problem decomposition - 
//step1 create a h1 
//step2 create two h1 siblings
//step3 create a h1 and h2
//step4 create a h1 with Chris inside
//step5 create a h1 with Chris inside and add an empty h2
//step6 as step5 but populate the h2 with the textNode "teacher"
//step7 create a h1 and h2 for Joanna and Boris
//step8 create a function that takes 3 parameters (h1,h2, 2 textNodes (job and name))

//let content = document.querySelector("#content"); //first 1 matching the object in this case
//creating h1 a new tagElements in the webpage
// let name1 = document.createElement("h1"); //make name clear for you in 1 weeks time
// let job1 = document.createElement("h2");
// content.appendChild(name1);
// content.appendChild(job1);
// let textNodeName1 = document.createTextNode("Chris");
// name1.appendChild(textNodeName1);
// let textNodeJob1 = document.createTextNode("Teacher");
// job1.appendChild(textNodeJob1);

// let name2 = document.createElement("h1");
// let job2 = document.createElement("h2");
// content.appendChild(name2);
// content.appendChild(job2);
// let textNodeName2 = document.createTextNode("Joanna");
// name2.appendChild(textNodeName2);
// let textNodeJob2 = document.createTextNode("Student");
// job2.appendChild(textNodeJob2);

//creating function with three arguments 
//we want to see the name and job of three people on the webpage 
//something that passes and outputs a name 

//whats the point of parameters - allows passing different values
//how can we tell when we should write a function -
//we also use callback functions map, how are those similar and those different?

let nameJob = [{
        name: "Chris",
        job: "Teacher"
    },
    {
        name: "Boris",
        job: "Prime Minister"
    }
];

//what am i passing into the function and what value arguments are? 
//function defined what it will do and it will only do anything when it's called
function addPersonWebpage(name, job) {
    let content = document.querySelector("#content");
    let name3 = document.createElement("h1");
    let job3 = document.createElement("h2");
    content.appendChild(name3);
    content.appendChild(job3);
    let textNodeName3 = document.createTextNode(name);
    name3.appendChild(textNodeName3);
    let textNodeJob3 = document.createTextNode(job);
    job3.appendChild(textNodeJob3);
}
//make a new variable which is an array
//inside that element it has 2 objects 
//use map callback function
//output name and job to the page x 2

//abc //length of the array is 3
//012
//nameJob.map(addPersonWebpage);
for (let i = 0; i < nameJob.length; i++) {
    let newObject = nameJob[i];
    addPersonWebpage(Object.keys(newObject);
    };

    //read what the code is doing and do not imagine what it's doing

    //object  it has properties  key and value  -- object.key /  nameJob.name or job
    //object object.value = boris or chris === nameJob.job


    // add person on webpage - call it with string "chris" and "teacher"
    // call it again with new name - 'joanna' and 'student' 
    // call a third time with 'boris' and 'pm'
    // addPersonWebpage("Boris", "Prime Minister");
    // addPersonWebpage("Chris", "Teacher");