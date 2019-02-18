const localUser = sessionStorage.getItem("userName");

$(document).ready(function() {
console.log("login ready");
//console.log(sessionStorage.getItem("userName"));
console.log("Local User: " + localUser);

if (localUser === "null" || localUser === null || localUser === undefined) {
  $(".logout").hide();
}
else{
  $(".login").hide();
}





  //this function takes the username and password and stores them in an object
  $("#submit").on("click", function(e) {
    e.preventDefault();
    //console.log("click");

    const userInfo = {
      username: $("#username-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    //console.log(userInfo);
    if (!userInfo.username || !userInfo.password) {
      return false;
    }
    else {
    //storing username
    sessionStorage.setItem("userName", userInfo.username);
    //const userName = sessionStorage.getItem("userName");
    //console.log("username: " + userName);
    

    //run the function and clear the form
    loginUser (userInfo.username, userInfo.password);
    $("#username-input").val('');
    $("#password-input").val('');
    }


  });// #submit on click


  $(".logout").on("click", function(a) {
    a.preventDefault();
    //console.log("logout");
      $.get("api/users/logout")
     sessionStorage.setItem("userName", null);
      window.location.replace("/login");
    });//logout on click

  $("#signup").on("click", function(b) {
    b.preventDefault();
    window.location.replace("/signup");
  })

  $(".user").on("click", function(c) {
    c.preventDefault();
   // console.log("yo")
    if (localUser === "null" || localUser === null || localUser === undefined) {
      window.location.replace("/login")
    }
    else {
      window.location.replace("/user")
    }
  });

  $(".create").on("click", function(d) {
    d.preventDefault();
    console.log("yo")
    if (localUser === "null" || localUser === null || localUser === undefined) {
      window.location.replace("/login")
    }
    else {
      window.location.replace("/create")
    }
  });
 

  $("#submit-button").on("click", function (e) {
    e.preventDefault();

    //console.log("click");

    const userInfo = {
      email: $("#email-input").val().trim(),
      username: $("#username-input").val().trim(),
      password: $("#password-input").val().trim()
    };
    if (userInfo.username === "null" || userInfo.username === null) {
      alert("Pick a Different Username!");
      return false;
    }
    else {
    //console.log (userInfo);
    sessionStorage.setItem("userName", userInfo.username);
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: userInfo
    })
      .then((Data) => {
        //console.log(Data);
        loginUser (userInfo.username, userInfo.password);
        console.log("hey")
        location.replace(Data)
      })
      .catch(err => console.log(err));
    }
  });// submit button

});// document.ready function

function loginUser (username, password) {
  $.post("/api/users/login", {
    username: username,
    password: password
  }).then(function (data) {
    window.location.replace(data);
  }).catch(function (err) {
    console.log(err)
  });
};
