let userObject;
$(document).ready(function () {
  $.ajax({
    url: "/api/userInfo/userPage",
    method: "GET",
  }).then(function(data){
    userObject = {
      id : data.id,
      username : data.username,
      email : data.email
    }
    getUserInfo()
  });
});

$("#userInfo").on("click", function(){
  getUserInfo();
});
$("#event").on("click", function(){
  getEvent();
});
$("#participating").on("click", function(){
  getParticipating();
});

function getUserInfo(){
  console.log(userObject);
  $("#username").html(userObject.username);
  userInfoDiv = $(`<div>`);
  userInfoDiv
    .append(`<h5>Username: ${userObject.username}</h5>`)
    .append(`<h5>Email: ${userObject.email}</h5>`)
    .append(`<button type="button" class="btn btn-danger" id="delete">Delete Account</button>`);
  $("#display").html(userInfoDiv);
}

function getEvent(){
  $.ajax({
    url: "/api/event/userEvent",
    method: "GET",
  }).then(function(dbData){
    generateEvents(dbData);
  });
}

function generateEvents(dbData){
  const allEvents = $("<div>");
  dbData.forEach(function(event){
    const eventDiv = $(`<div class="p-3 border border-dark event" id="${event.id}">`);

    const nameDiv = $(`<div class = 'm-3 row'>`);
    nameDiv.append(`<h3>${event.eventName}: ${event.eventTime}</h3>`);

    const categoryDiv = $(`<div class = 'm-3 row'>`);
    categoryDiv.append(`<h5>Category: ${event.category}</h5>`);


    eventDiv.append(nameDiv);
    eventDiv.append(categoryDiv);
    allEvents.append(eventDiv);
  });

  $("#display").html(allEvents);
}

function getParticipating(){
  $("#display").html("");
}