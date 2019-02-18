$(document).ready(function () {
  $.ajax({
    url: "/api/event/mainRecent",
    method: "GET",
  }).then(function(data){
    console.log()
  });
});