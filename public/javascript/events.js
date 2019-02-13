$("#searchCategory").on("change",function(){
  searchCategory = $("#searchCategory").val().trim();
  let searchArray = [];
  if(searchCategory === "Location"){
    searchArray = locationSearch();
    createSearch(searchCategory, searchArray)
  }
  else if(searchCategory === "Category"){
    searchArray = categorySearch();
    createSearch(searchCategory, searchArray);
  }
  else{
    nameSearch();
  }
});

// create div to add new search form bassed of of the type and array passed in
function createSearch(searchType, searchArray){
  const formDiv = $(`<div>`);
  const form = $(`<select class='custom-select' id='${searchType}'>`);
  const label =$(`<label for="${searchType}">${searchType}:</label>`);
  const slected = $(`<option selected>${searchType}</option>`);
  
  form.append(slected);
  for(let i=0; i<searchArray.length;i++){
    var option = `<option value="${searchArray[i]}">${searchArray[i]}</option>`;
    form.append(option);
  }
  formDiv.append(label);
  formDiv.append(form);
  $("#searchParam").html(formDiv);
}
// returns an array of locations
function locationSearch(){
  const locationArray = ["NJ", "NY", "PA"];
  return locationArray;
}
// returns an array of catgeories
function categorySearch(){
  const categoryArray = ["Fighting Games", "Smash"];
  return categoryArray;
}

// creates a field to search by name
function nameSearch(){
  const formDiv = $(`<div>`);
  const label = $(`<label for="eventName">Event Name:</label>`);
  const input = $(`<input type="text" class="form-control" id="eventName" placeholder="Event Name">`);

  formDiv.append(label);
  formDiv.append(input);

  $("#searchParam").html(formDiv);
}

$("#search").on("click", function(event){
  event.preventDefault();
  let queryType;
  let queryParam;
  if($("#searchCategory").val().trim() === "Location"){
    queryType = "eventLocation";
    queryParam = $("#Location").val().trim();
  }
  else if($("#searchCategory").val().trim() === "Category"){
    queryType = "category";
    queryParam = $("#Category").val().trim();
  }
  else{
    queryType = "eventName";
    queryParam = $("#eventName").val().trim();
  }

  $.ajax({
    url: `/api/event/getEvent/${queryType}/${queryParam}`,
    method: "GET",
  }).then(function(data){
    generateEvents(data);
  });
})


function generateEvents(dbData){
  console.log(dbData);
  const allEvents = $("<div>");
  dbData.forEach(function(event){
    const eventDiv = $(`<div class="p-3 border border-dark">`);

    const nameDiv = $(`<div class = 'm-3 row'>`);
    nameDiv.append(`<h3>${event.eventName}: ${event.eventTime}</h3>`);

    const categoryDiv = $(`<div class = 'm-3 row'>`);
    categoryDiv.append(`<h5>Category: ${event.category}</h5>`);

    const descriptionDiv = $(`<div class = 'm-3 row'>`);
    descriptionDiv.append(`<p>${event.eventDescription}</p>`);

    eventDiv.append(nameDiv);
    eventDiv.append(categoryDiv);
    eventDiv.append(descriptionDiv);
    allEvents.append(eventDiv);
  });

  $("#eventList").html(allEvents);
}