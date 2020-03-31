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
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + "beef"; //mealSearchValue;

    $.ajax({
      url: mealURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var foodArrayLength = response.meals.length;
      var mathRandomNumber = Math.floor(Math.random() * (foodArrayLength + 1));

      var foodID = response.meals[mathRandomNumber].idMeal;
      console.log(foodID);

      var buildMeal =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + foodID;

      $.ajax({
        url: buildMeal,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var mealName = response.meals[0].strMeal;
        var region = response.meals[0].strArea;
        var ingredients = [
          response.meals[0].strIngredient1,
          response.meals[0].strIngredient2,
          response.meals[0].strIngredient3,
          response.meals[0].strIngredient4,
          response.meals[0].strIngredient5,
          response.meals[0].strIngredient6,
          response.meals[0].strIngredient7,
          response.meals[0].strIngredient8,
          response.meals[0].strIngredient9,
          response.meals[0].strIngredient11,
          response.meals[0].strIngredient12,
          response.meals[0].strIngredient13,
          response.meals[0].strIngredient14,
          response.meals[0].strIngredient15,
          response.meals[0].strIngredient16,
          response.meals[0].strIngredient17,
          response.meals[0].strIngredient18,
          response.meals[0].strIngredient19,
          response.meals[0].strIngredient20,
        ];
        console.log("buildMealURL -> ingredients", ingredients)
      
        var measurments = [
          response.meals[0].strMeasure1,
          response.meals[0].strMeasure2,
          response.meals[0].strMeasure3,
          response.meals[0].strMeasure4,
          response.meals[0].strMeasure5,
          response.meals[0].strMeasure6,
          response.meals[0].strMeasure7,
          response.meals[0].strMeasure8,
          response.meals[0].strMeasure9,
          response.meals[0].strMeasure11,
          response.meals[0].strMeasure12,
          response.meals[0].strMeasure13,
          response.meals[0].strMeasure14,
          response.meals[0].strMeasure15,
          response.meals[0].strMeasure16,
          response.meals[0].strMeasure17,
          response.meals[0].strMeasure18,
          response.meals[0].strMeasure19,
          response.meals[0].strMeasure20,
        ];
        console.log("buildMealURL -> measurments", measurments)
        // append material here
      });
    });
  }
  buildMealURL();

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
});
