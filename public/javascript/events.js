let eventId = null;
var userLog = false;
const locallUser = sessionStorage.getItem("userName");

$("#searchCategory").on("change", function () {
  searchCategory = $("#searchCategory").val().trim();
  let searchArray = [];
  if (searchCategory === "Location") {
    searchArray = locationSearch();
    createSearch(searchCategory, searchArray)
  } else if (searchCategory === "Category") {
    searchArray = categorySearch();
    createSearch(searchCategory, searchArray);
  } else {
    nameSearch();
  }
});

// create div to add new search form bassed of of the type and array passed in
function createSearch(searchType, searchArray) {
  const formDiv = $(`<div>`);
  const form = $(`<select class='custom-select' id='${searchType}'>`);
  const label = $(`<label for="${searchType}">${searchType}:</label>`);
  const slected = $(`<option selected>${searchType}</option>`);

  form.append(slected);
  for (let i = 0; i < searchArray.length; i++) {
    var option = `<option value="${searchArray[i]}">${searchArray[i]}</option>`;
    form.append(option);
  }
  formDiv.append(label);
  formDiv.append(form);
  $("#searchParam").html(formDiv);
}
// returns an array of locations
function locationSearch() {
  const locationArray = ["NJ", "NY", "PA"];
  return locationArray;
}
// returns an array of catgeories
function categorySearch() {
  const categoryArray = ["Fighting Games", "Smash"];
  return categoryArray;
}

// creates a field to search by name
function nameSearch() {
  const formDiv = $(`<div>`);
  const label = $(`<label for="eventName">Event Name:</label>`);
  const input = $(`<input type="text" class="form-control" id="eventName" placeholder="Event Name">`);

  formDiv.append(label);
  formDiv.append(input);

  $("#searchParam").html(formDiv);
}

$("#search").on("click", function (event) {
  event.preventDefault();
  let queryType;
  let queryParam;
  if ($("#searchCategory").val().trim() === "Location") {
    queryType = "eventLocation";
    queryParam = $("#Location").val().trim();
  } else if ($("#searchCategory").val().trim() === "Category") {
    queryType = "category";
    queryParam = $("#Category").val().trim();
  } else {
    queryType = "eventName";
    queryParam = $("#eventName").val().trim();
  }

  $.ajax({
    url: `/api/event/getEvent/${queryType}/${queryParam}`,
    method: "GET",
  }).then(function (data) {
    generateEvents(data);
  });
})


function generateEvents(dbData) {
  const allEvents = $("<div>");
  dbData.forEach(function (event) {
    const eventDiv = $(`<div class="p-3 border border-dark event bg-light" id="${event.id}">`);

    const nameDiv = $(`<div class = 'm-3 row'>`);
    nameDiv.append(`<h3>${event.eventName}: ${event.eventTime}</h3>`);

    const categoryDiv = $(`<div class = 'm-3 row'>`);
    categoryDiv.append(`<h5>Category: ${event.category}</h5>`);


    eventDiv.append(nameDiv);
    eventDiv.append(categoryDiv);
    allEvents.append(eventDiv);
  });

  $("#eventList").html(allEvents);
}

$("#eventList").on("click", ".event", function () {
  const id = $(this).attr('id');
  //console.log("Const id: " + id);
  $.ajax({
    url: `/api/event/goEvent/${id}`,
    method: "GET",
  }).then(function (data) {
    getEventPage(data);
  });
});

function getEventPage(event) {
 // console.log(event);
  const eventDiv = $(`<div class="p-3 border border-dark event bg-light" id="${event.id}">`);
  eventDiv
    .append(`<h1>${event.eventName}</h1>`)
    .append(`<h3>Venue: ${event.eventVenue}, ${event.eventLocation}</h3>`)
    .append(`<h4>${event.eventTime}`)
    .append(`<h4>Participants: ${event.currentParticipants}/${event.maxLimit}</h4>`)
    .append(`<p>Organizer: ${event.User.username}</p>`)
    .append(`<p>${event.eventDescription}</p>`);

  //console.log("Event Id: " + event.id);

  eventDiv.append(`<button type="button" class="btn btn-danger join" >join</button>`); // WORK ON HAVING IT ADD USERS IT THE PARTICIPANTS TABLE

  $("#eventList").html(eventDiv);
}

//this function is called when the user clicks to add an event.  It calls information from the database on the event
$("#eventList").on("click", ".join", function (event) {
  event.preventDefault();
  if (locallUser === "null" || locallUser === null || locallUser === undefined) {
    alert("You must log in befor signing up for an event!")
    window.location.replace("/login")
  }
  else{
  //console.log("click");
  eventId = $(this).parent('.event').attr('id');
  // console.log("Join id: " + eventId);
  $.ajax({
    url: `/api/event/goEvent/${eventId}`,
    method: "GET",
  }).then(function (data) {
    //const eventId = `${eventId}`;
    check(data);
  });
}
});

function check(event) {
  var max = event.maxLimit;
  var curr = event.currentParticipants;
  ifIn(event, function (ifInn) {
    if (max <= curr) {
      alert("This event is already full");
    } else if (ifInn) {
      alert("You already joined this event")
    }
    
    else {

      addParticipant(event);

    }
  });

}; //check

function addParticipant(event) {
  // console.log("post");
  const z = {
    eventKey: event.id
  };
  $.ajax({
    url: "/api/part",
    method: "POST",
    data: z
  }).then(function () {
    updateEvents();
  })
}; // add participant

function updateEvents() {
  $.ajax({
    url: `/api/event/goEvent/${eventId}`,
    method: "PUT"
  }).then(function (dbData) {
     console.log(dbData);
    //getEventPage(dbData);
    //location.reload();
    $.ajax({
      url: `/api/event/goEvent/${eventId}`,
      method: "GET",
    }).then(function (data) {
      getEventPage(data);
    });
  });
}; //update events


function ifIn(event, cb) {
  $.ajax({
    url: "/api/userInfo/userPage",
    method: "GET",
  }).then(function (data) {
    userObject = {
      id: data.id,
      username: data.username,
      email: data.email
    }

    console.log("userObject " + userObject);

    $.ajax({
      url: `/api/part/getParticipant/${userObject.id}`,
      method: "GET",
    }).then(function (data) {
      console.log("get paricipants");

      var cbBool = false;

      for (i=0; i<data.length; i++) {
        console.log(data[i].eventKey);
        if (data[i].eventKey === event.id) {
          cbBool = true;
        }
      }
      cb(cbBool);
    });
  });
}; // ifIn
