

            // var mentor1 = "Daniel";
            // var mentor2 = "Irina";
            // var mentor3 = "Mimi";
            // var mentor4 = "Rob";
            // var mentor5 = "Yohannes";

            // function greeting() {
            // return "Hello "
            // }
            // console.log(greeting());
            // console.log(greeting()+ mentor1);
            // console.log(greeting()+ mentor2);
            // console.log(greeting()+ mentor3);
            // console.log(greeting()+ mentor4);
            // console.log(greeting()+ mentor5);




function getAgeInDays(age) {
    return age * 365;
  }
  
  function createGreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }

  console.log(createGreeting("erol",36));
  