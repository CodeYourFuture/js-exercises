function loginUser(name, password, callback) {
    let test = function () {

        const loggedInUser = [{ userName: name }, { userPass: password }] ;

        console.log("The user is now logged in", loggedInUser);

         //callback(loggedInUser);
    };

    setTimeout(test, 2000)

  };

  function getUserPosts(name) {

    let testFunc = function() {
        // some fetching of posts action that takes time...
        const listOfPosts = ["post1", "post2"];
        // user's posts ready!
        console.log("Here is their list of posts", listOfPosts);
      };

    setTimeout(testFunc, 2000);
  }
  // get user's posts once the user is logged in
  loginUser("Antigoni", "123", getUserPosts);