$(document).ready(function () {
  $.ajax({
    url: "/api/event/mainRecent/",
    method: "GET",
  }).then(function(data){
    createEvents(data);
  });
});

function createEvents(events){
  events.forEach(event => {
    const cardDiv = $(`<div class="card">`);
    const cardBody = $(`<div class="card-body">`);

    cardBody
      .append(`<h4 class="card-title">${event.eventName}</h4>`)
      .append(`<h6 class="card-subtitle mb-2 text-muted">Location: ${event.eventLocation}</h6>`)
      .append(`<h6 class="card-subtitle mb-2 text-muted">Venue: ${event.eventVenue}</h6>`)
      .append(`<p class="card-text">Date: ${event.eventTime}</p>`)
      .append(`<p class="card-text">Organizer: ${event.User.username}</p>`);

    cardDiv.append(cardBody);
    $("#recent").append(cardDiv);
  });
}
