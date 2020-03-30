$(document).ready(function() {
  console.log("ready!");

  //  on click function for selection of meal type
  $("#meal-selection").click(function() {
    console.log("Clicked!");
    let mealSearchValue = $("#meal-searched").val();
    $("#meal-searched").val("");

    buildMealURL(mealSearchValue);
  });

  //  on click function for selection of drink
  $("#drink-selection").click(function() {
    console.log("Clicked!");
    let drinkSearchValue = $("#drink-searched").val();
    $("#drink-searched").val("");

    buildMealURL(drinkSearchValue);
  });

  function buildMealURL(mealSearchValue) {
    let mealURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + mealSearchValue;

    $.ajax({
      url: mealURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var foodID = response.meals[0].idMeal;
      console.log(foodID);

      var buildMeal =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + foodID;

      $.ajax({
        url: buildMeal,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        // append material here
      });
    });
  }

  function buildDrinkURL(drinkSearchValue) {
    let drinkURL =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + "vodka"; //drinkSearchValue

    $.ajax({
      url: drinkURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      let drinkID = response.drinks[0].idDrink;
      console.log(drinkID);

      var buildDrink =
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;

      $.ajax({
        url: buildDrink,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        // append material here
      });
    });
  }
  buildDrinkURL();
});
