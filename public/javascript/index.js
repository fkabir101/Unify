// When page loads, grab all recent events
// $.get("/api/all", function(data) {

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       var row = $("<div>");
//       row.addClass("event");

//       row.append("<p>" + data[i].author + " chirped.. </p>");
//       row.append("<p>" + data[i].eventLocation + "</p>");
//       row.append("<p>" + data[i].eventTime + "</p>");
//       row.append("<p>" + data[i].category + "</p>");
//       row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//       $("#recent-events-list").prepend(row);

//     }

//   }

// });

$(document).ready(function() {
console.log('ready');

$("#logout").on("click", function(a) {
a.preventDefault()
console.log("logout");
  $.get("api/users/logout")
});//logout on click

});//document.ready function