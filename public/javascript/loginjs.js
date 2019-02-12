$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
  $('.login').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});

$(document).ready(function() {
  //Getting a reference to the input field where user adds a new todo
  var $newItemInput = $("input.new-item");
  //Our new login wil

})