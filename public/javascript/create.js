$("#submit").on("click", function(event){
  event.preventDefault();

  const newEvent ={
    eventName : $('#eventName').val().trim(),
    eventLocation : $('#location').val().trim(),
    eventVenue : $('#eventVenue').val().trim(),
    eventDescription : $('#description').val().trim(),
    eventTime : $('#date').val().trim(),
    maxLimit : $('#limit').val().trim(),
    category : $('#category').val().trim(),
    currentParticipants : 0
  }

  $.ajax({
    url: "/api/create",
    method: "POST",
    data: newEvent
  }).then(function(data){
    if(data.success){
      window.location.replace("/");
    }
  })
});

$(document).ready(function() {
  console.log(sessionStorage.getItem("userName"));
});

$(document).ready(function() {
  console.log('ready');
  
  $("#logout").on("click", function(a) {
  a.preventDefault()
  console.log("logout");
    $.get("api/users/logout")
    window.location.replace("/login");
  });//logout on click
  
  });//document.ready function