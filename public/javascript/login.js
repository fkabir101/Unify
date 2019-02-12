$(document).ready(function() {
console.log("ready");
  //this function takes the username and password and stores them in an object
  $("#submit").on("click", function(e) {
    e.preventDefault();
    console.log("click");

    const userInfo = {
      username: $("#username-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    //console.log(userInfo);

    //storing username
    sessionStorage.setItem("userName", userInfo.username);
    const userName = sessionStorage.getItem("userName");
    console.log("username: " + userName);


    $.ajax({
      url: '/api/users/login',
      method: 'POST',
      data: userInfo
    })
    .then((userInfo) => {
      location.replace(userInfo)
    })
    .catch(err => console.log(err));

  });

});