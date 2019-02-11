$("#submit").on("click", function(event){
  event.preventDefault();
  const name = $('#eventName').val().trim();
  const location = $('#category').val().trim();
  console.log("Hi");
  console.log(name);
  console.log(location);
});