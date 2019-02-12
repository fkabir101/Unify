$("#search").on("change",function(){
  searchCategory = $("#search").val().trim();
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
  console.log(searchType);
  console.log(searchArray);
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
