$(document).ready(function() {
  console.log("ready!");

  //let mealSearchValue = ;

  //let drinkSearchValue = ;

  // on click function for selection of meal type
  $(".meal-selection").click(function() {
    console.log("Clicked!");
    let mealSearchValue = $("#meal-searched").val();
    $("#meal-searched").val("");

    buildMealURL(mealSearchValue);
  });

  // on click function for selection of drink
  $(".drink-selection").click(function() {
    console.log("Clicked!");
    let drinkSearchValue = $("#drink-selected").val();
    console.log("drinkSearchValue", drinkSearchValue);
    $("#drink-selected").val("");

    buildDrinkURL(drinkSearchValue);
  });

  function buildDrinkURL(drinkSearchValue) {
    let drinkURL =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      drinkSearchValue;
    console.log(drinkURL);

    $.ajax({
      url: drinkURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#drink-recipie").empty();
      let drinkLenght = response.drinks.length;
      let randomNumber = Math.floor(Math.random() * (drinkLenght + 1));

      let drinkID = response.drinks[randomNumber].idDrink;
      console.log(drinkID);

      var buildDrinkIdURL =
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;

      $.ajax({
        url: buildDrinkIdURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        let drinkName = response.drinks[0].strDrink;
        console.log(drinkName);
        // let drinkIng = response.drinks[0]
        let ingredients = [
          response.drinks[0].strIngredient1,
          response.drinks[0].strIngredient2,
          response.drinks[0].strIngredient3,
          response.drinks[0].strIngredient4,
          response.drinks[0].strIngredient5,
          response.drinks[0].strIngredient6,
          response.drinks[0].strIngredient7,
          response.drinks[0].strIngredient8,
          response.drinks[0].strIngredient9,
          response.drinks[0].strIngredient11,
          response.drinks[0].strIngredient12,
          response.drinks[0].strIngredient13,
          response.drinks[0].strIngredient14,
          response.drinks[0].strIngredient15,
          response.drinks[0].strIngredient16,
          response.drinks[0].strIngredient17,
          response.drinks[0].strIngredient18,
          response.drinks[0].strIngredient19,
          response.drinks[0].strIngredient20
        ];

        let ingResult = ingredients.filter(ingredient => ingredient);
        console.log(ingResult);

        let measurements = [
          response.drinks[0].strMeasure1,
          response.drinks[0].strMeasure2,
          response.drinks[0].strMeasure3,
          response.drinks[0].strMeasure4,
          response.drinks[0].strMeasure5,
          response.drinks[0].strMeasure6,
          response.drinks[0].strMeasure7,
          response.drinks[0].strMeasure8,
          response.drinks[0].strMeasure9,
          response.drinks[0].strMeasure11,
          response.drinks[0].strMeasure12,
          response.drinks[0].strMeasure13,
          response.drinks[0].strMeasure14,
          response.drinks[0].strMeasure15,
          response.drinks[0].strMeasure16,
          response.drinks[0].strMeasure17,
          response.drinks[0].strMeasure18,
          response.drinks[0].strMeasure19,
          response.drinks[0].strMeasure20
        ];

        let measureResult = measurements.filter(measurement => measurement);
        
        console.log(measureResult);
        // console.log("buildDrinkURL -> measurments", measurments);

        let drinkImg = "<img src=" + response.drinks[0].strDrinkThumb + ">";

        let card = $("<div>").addClass("card drinkCard");
        let cardImg = $("<div>")
          .addClass("card-image")
          .append(drinkImg);
        console.log(drinkImg);
        let cardBody = $("<div>").addClass("card-content drink-instructions");

        let drinkNameEl = $("<h1>").addClass("card-title").text(drinkName);
        let drinkInstructions = $("<p>").addClass("card-content").text(response.drinks[0].strInstructions);
        // let drinkIngredirents = $("<h4>").addClass("card-content").text("Ingredients :");
        let drinkIngredirents = $("<ul>").addClass("card-content").text("Ingredients :");

        // need to figure out how to assign each ingredient to a li
        let drinkIngredirentList = $("<li>").addClass("card-content").each(function (index) {
          $(this).text(ingResult[index.length]);
        });
        let drinkMeasurement = $("<ul>").addClass("card-content").text("Mearurements: ");
        let drinkMeasurementList = $("<li>").addClass("card-content").text(measureResult);
        let drinkGlass = $("<p>").addClass("card-content").text("Suggested Glass: " + response.drinks[0].strGlass);


        // append material here
        cardBody.append(
          drinkNameEl,
          drinkInstructions,
          drinkIngredirents,
          drinkIngredirentList,
          drinkMeasurement,
          drinkMeasurementList,
          drinkGlass
        );
        card.append(cardImg, cardBody);
        $("#drink-recipie").append(card);
      });
    });
  }

  //Build meal
  function buildMealURL(mealSearchValue) {
    let mealURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + mealSearchValue; //mealSearchValue;

    $.ajax({
      url: mealURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#meal-recipie").empty();
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
          response.meals[0].strIngredient20
        ];
        let ingResult = ingredients.filter(ingredient => ingredient);

        var measurements = [
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
          response.meals[0].strMeasure20
        ];        
         

        var measureResultMeal = measurements.filter(function(entry) { return entry.trim() != ''; })
        console.log("buildMealURL -> measureResultMeal", measureResultMeal)
        
        

        let mealImg = "<img src=" + response.meals[0].strMealThumb + ">";
        let card = $("<div>").addClass("card mealCard");
        let cardImg = $("<div>")
          .addClass("card-image")
          .append(mealImg);
        let cardBody = $("<div>").addClass("card-content meal-instructions");
        let mealNameEl = $("<h1>")
          .addClass("card-title")
          .text(mealName);
        let mealInstructions = $("<p>")
          .addClass("card-content")
          .text(response.meals[0].strInstructions);
        let mealIngredirents = $("<h4>")
          .addClass("card-content")
          .text("Ingredients :");
        let mealIngredirentList = $("<ul>")
          .addClass("card-content")
          .text(ingResult);
        let mealMeasurement = $("<h4>")
          .addClass("card-content")
          .text("Measurements: ");
        let mealMeasurementList = $("<ul>")
          .addClass("card-content")
          .text(measureResultMeal);

        cardBody.append(
          mealNameEl,
          mealInstructions,
          mealIngredirents,
          mealIngredirentList,
          mealMeasurement,
          mealMeasurementList
        );
        // append material here
        card.append(cardImg, cardBody);
        $("#meal-recipie").append(card);
      });
    });
  }
});
