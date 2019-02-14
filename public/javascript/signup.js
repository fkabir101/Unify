$(document).ready(function () {

  $("#submit-button").on("click", function (e) {
    e.preventDefault();

    //console.log("click");

    const userInfo = {
      email: $("#email-input").val().trim(),
      username: $("#username-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    //console.log (userInfo);

    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: userInfo
    })
      .then((userInfo) => {
        //console.log(userInfo);
        location.replace(userInfo)
        loginUser (userInfo.username, userInfo.password);
      })
      .catch(err => console.log(err));
  });

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
};