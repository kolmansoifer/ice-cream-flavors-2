$(document).ready(function() {
$("#formArray").submit(function(event) {
  event.preventDefault();


  let iceCream1 = $("input#one").val();
  let iceCream2 = $("input#two").val();
  let iceCream3 = $("input#three").val();


  let myFavoriteFlavors = "I love ";
  const favorites =[iceCream1, iceCream2, iceCream3];
  let newFavorites = [];
  for (let i = 0; i < favorites.length; i += 1) {
    newFavorites.push (myFavoriteFlavors + favorites[i] + " !");
  }
  console.log(newFavorites);

  });
});