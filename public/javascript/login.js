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

    //storing username
    sessionStorage.setItem("userName", userInfo.username);
    const userName = sessionStorage.getItem("userName");
    //console.log("username: " + userName);


    $.ajax({
      url: '/api/users/login',
      method: 'POST',
      data: userInfo
    })
    .then((userInfo) => {
      location.replace(userInfo)
    })
    .catch(err => console.log(err));

  });// #submit on click

  //from John's code
  //Getting a reference to the input field where user adds a new todo
  //var $newItemInput = $("input.new-item");
  //Our new login wil

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