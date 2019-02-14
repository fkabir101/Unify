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
        console.log(userInfo);
        location.replace(userInfo)
      })
      .catch(err => console.log(err));
  });

});