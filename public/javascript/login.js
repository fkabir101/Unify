$(document).ready(function() {
//console.log("ready");
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
    const userName = sessionStorage.getItem("userName");
    //console.log("username: " + userName);
    }

    //run the function and clear the form
    loginUser (userInfo.username, userInfo.password);
    $("#username-input").val('');
    $("#password-input").val('');


  });// #submit on click

 

});// document.ready function

// from John's loginjs.js
$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
  $('.login').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});

function loginUser (username, password) {
  $.post("/api/users/login", {
    username: username,
    password: password
  }).then(function (data) {
    window.location.replace(data);
  }).catch(function (err) {
    console.log(err)
  });
}