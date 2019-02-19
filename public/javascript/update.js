// get event info
$("#display").on("click", ".update", function (event) {
  event.preventDefault();
  eventId = $(this).parent('.event').attr('id');
  $.ajax({
    url: `/api/event/goEvent/${eventId}`,
    method: "GET",
  }).then(function(data){
    generateUpdateForm(data);
  });
});

// send data to update database
$("#display").on("click", ".updateEvent", function (event) {
  event.preventDefault();
  eventId = $(this).parent('.eventDisplay').attr('id');
  console.log(eventId);
  const updateEvent ={
    eventName : $('#eventName').val().trim(),
    eventLocation : $('#location').val().trim(),
    eventVenue : $('#eventVenue').val().trim(),
    eventDescription : $('#description').val().trim(),
    eventTime : $('#date').val().trim(),
    category : $('#category').val().trim(),
  }
  console.log(updateEvent);
  $.ajax({
    url: `/api/event/goEvent/${eventId}`,
    method: "POST",
    data: updateEvent
  }).then(function(data){
    if(data.success){
      window.location.reload();
    }
  })
});

function generateUpdateForm(event){
  formDiv = $(`<div class = "eventDisplay" id = ${event.id}>`);
  // section to create div for name
  nameGroup = $(`<div class="form-group">`);
  nameGroup.append(`<label for="eventName">Event Name:</label>`);
  nameField = $(`<input type="text" class="form-control" id="eventName" placeholder="Event Name">`);
  nameField.val(event.eventName);
  nameGroup.append(nameField);

  //section for description div
  descriptGroup = $(`<div class="form-group">`);
  descriptGroup.append(`<label for="description">Description:</label>`);
  descriptField = $(`<textarea rows="4" cols="90" type="text" class="form-control" id="description"  placeholder="Description"></textarea>`);
  descriptField.val(event.eventDescription)
  descriptGroup.append(descriptField);

  // section for date
  dateGroup = $(`<div class="form-group">`);
  dateGroup.append(`<label for="date">Date Month/Day/Year:</label>`);
  dateField = $(`<input type="text" class="form-control" id="date" placeholder="10/20/2020">`);
  dateField.val(event.eventTime);
  dateGroup.append(dateField);

  // section for location
  locationGroup = $(`<div class="form-group">`);
  locationGroup.append(`<label for="date">Location:</label>`);
  locationField = $(`<select class="custom-select" id="location">`);
  locationField
    .append(`<option value="NJ">NJ</option>`)
    .append(`<option value="NY">NY</option>`)
    .append(`<option value="PA">PA</option>`);
  locationField.val(event.eventLocation);
  locationGroup.append(locationField);

  // section for venue
  venueGroup = $(`<div class="form-group">`);
  venueGroup.append(`<label for="eventVenue">Event Venue:</label>`);
  venueField = $(`<input type="text" class="form-control" id="eventVenue" placeholder="Event Venue">`);
  venueField.val(event.eventVenue);
  venueGroup.append(venueField);

  // section for category
  catGroup = $(`<div class="form-group">`);
  catGroup.append(`<label for="date">Category:</label>`);
  catField = $(`<select class="custom-select" id="category">`);
  catField
    .append(`<option value="Fighting Games">Fighting Games</option>`)
    .append(`<option value="Smash">Smash</option>`);
  catField.val(event.category)
  catGroup.append(catField);

  // append to page
  formDiv.append(nameGroup);
  formDiv.append(descriptGroup);
  formDiv.append(dateGroup);
  formDiv.append(locationGroup);
  formDiv.append(venueGroup);
  formDiv.append(catGroup);

  formDiv.append(`<button type="button" class="btn btn-success updateEvent" >Update</button>`)
  $("#display").html(formDiv);
}