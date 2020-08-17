$(document).ready(function() {
$("#formArray").submit(function(event) {
  event.preventDefault();


  let iceCream1 = $("input#one").val();
  let iceCream2 = $("input#two").val();
  let iceCream3 = $("input#three").val();


  const favorites =[iceCream1, iceCream2, iceCream3];
  favorites.forEach(function(flavor) {
    $("#my-favorites").append(flavor + " is one of my favorite ice cream flavors! ");
    });
  });
});