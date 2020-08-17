$(document).ready(function() {
$("#formArray").submit(function(event) {
  event.preventDefault();


  let food = $("input#one").val();
  let pet = $("input#two").val();
  let drink = $("input#three").val();
  let music = $("input#four").val();
  let car = $("input#five").val();

  let favorites =[food, pet, drink, music, car];
  alert(favorites[2]);

  event.preventDefault();
  });
});