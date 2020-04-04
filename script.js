$(document).ready(function () {
  // on click function for selection of meal type, which then calls function to generate meal
  $(".meal-selection").click(function () {
    if ($("#meal-searched").val() === "Random") {
      let mealID = Math.floor(Math.random() * 24);
      console.log(mealID);
      let mealSearchValue = $("#" + mealID).val();

      buildMealURL(mealSearchValue);
    } else {
      let mealSearchValue = $("#meal-searched").val();
      $("#meal-searched").val("");

      buildMealURL(mealSearchValue);
    }
  });

  // on click function for selection of drink, which then calls function to generate drink.
  $(".drink-selection").click(function () {
    if ($("#drink-selected").val() === "Random") {
      let drinkID = Math.floor(Math.random() * 8) + 24;
      console.log(drinkID);

      let drinkSearchValue = $("#" + drinkID).val();

      buildDrinkURL(drinkSearchValue);
    } else {
      let drinkSearchValue = $("#drink-selected").val();
      $("#drink-selected").val("");

      buildDrinkURL(drinkSearchValue);
    }
  });

  //function builds drink by using the selected alcohol
  function buildDrinkURL(drinkSearchValue) {
    //plugs in selected alcohol to API search URL
    let drinkURL =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      drinkSearchValue;
    console.log(drinkURL);

    //calls API
    $.ajax({
      url: drinkURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      //Empties out current recipie if one already exits
      $("#drink-recipie").empty();

      //api returns an array of drinks based on selected alcohol, this parses out that length.
      let drinkLenght = response.drinks.length;
      //assigns a random number from 1-length of the returned array.
      let randomNumber = Math.floor(Math.random() * (drinkLenght + 1));

      //This returns the ID of a drink based on the position of the array it is in.
      let drinkID = response.drinks[randomNumber].idDrink;
      console.log(drinkID);

      //looks up the drink and returns ingredients, instructions, measurments via the id searched.
      var buildDrinkIdURL =
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;

      $.ajax({
        url: buildDrinkIdURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        //Pulls Name
        let drinkName = response.drinks[0].strDrink;
        console.log(drinkName);
        // let drinkIng = response.drinks[0]
        //Pulls Ingredients
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
          response.drinks[0].strIngredient20,
        ];
        console.log(ingredients);
        //Filters out any empty returned responses
        let ingResult = ingredients.filter((ingredient) => ingredient);
        console.log(ingResult);
        //Pulls Measurments of ingredients
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
          response.drinks[0].strMeasure20,
        ];
        //Filters out any empty returned responses
        let measureResult = measurements.filter((measurement) => measurement);
        //Pulls instructions
        let stringDrinkIns = response.drinks[0].strInstructions;
        //Makes the Instructions spaced out by instruction step, instead of a block of text
        let splitDrinkStr = stringDrinkIns.split(". ").join("\n");
        console.log(splitDrinkStr);
        //Sets variables to be equal to written HTML
        let drinkImg = "<img src=" + response.drinks[0].strDrinkThumb + ">";
        let card = $("<div>").addClass("card drinkCard");
        let cardImg = $("<div>").addClass("card-image").append(drinkImg);
        let cardBody = $("<div>").addClass("card-content drink-instructions");
        let drinkNameEl = $("<h1>").addClass("card-title").text(drinkName);
        let drinkInstructions = $("<p>").addClass("card-content");
        let drinkList = $("<p>")
          .addClass("drinkList")
          .text(splitDrinkStr)
          .append(drinkInstructions);
        let row = $("<div>").addClass("row");
        let columnOne = $("<div>").addClass("col s6");
        let columnTwo = $("<div>").addClass("col s6");
        let drinkIngredirents = $("<tr>")
          .addClass("card-content strong")
          .text("Ingredients:");
        let drinkMeasurement = $("<tr>")
          .addClass("card-content strong")
          .text("Mearurements:");
        //Create a List of measurements based on the returned Measurment array.
        measureResult = jQuery.map(measureResult, function (measurement) {
          return $("<tr>").addClass("card-content").text(measurement);
        });
        //Create a list of ingredients based on the returned ingredient array.
        ingResult = jQuery.map(ingResult, function (ingredient) {
          return $("<tr>").addClass("card-content").text(ingredient);
        });

        let drinkGlass = $("<p>")
          .addClass("card-content")
          .text("Suggested Glass: " + response.drinks[0].strGlass);

        // append all lets to the page
        row.append(columnOne, columnTwo);
        columnOne.append(drinkMeasurement, measureResult);
        columnTwo.append(drinkIngredirents, ingResult);
        cardBody.append(drinkNameEl, drinkList, row, drinkGlass);
        card.append(cardImg, cardBody);
        $("#drink-recipie").append(card);
      });
    });
  }

  //function builds mneal by using the selected cuisine region
  function buildMealURL(mealSearchValue) {
    //plugs in selected cuisine region to API search URL
    let mealURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + mealSearchValue;

    $.ajax({
      url: mealURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      //Empties out current recipie if one already exits
      $("#meal-recipie").empty();
      //api returns an array of meals based on selected cusinie region, this parses out that length.
      var foodArrayLength = response.meals.length;
      //assigns a random number from 1-length of the returned array.
      var mathRandomNumber = Math.floor(Math.random() * (foodArrayLength + 1));
      //This returns the ID of a drink based on the position of the array it is in.
      var foodID = response.meals[mathRandomNumber].idMeal;
      console.log(foodID);
      //looks up the meal and returns ingredients, instructions, measurments via the id searched.
      var buildMeal =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + foodID;

      $.ajax({
        url: buildMeal,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        //Pulls Name
        var mealName = response.meals[0].strMeal;
        //Pulls Ingredients
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
        //Filters out any empty returned responses
        let ingResult = ingredients.filter((ingredient) => ingredient);
        //Pulls Measurments of ingredients
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
          response.meals[0].strMeasure20,
        ];
        //Filters out any empty returned responses
        var measureResultMeal = measurements.filter(function (entry) {
          return entry.trim() != "";
        });
        //Pulls instructions
        let stringIns = response.meals[0].strInstructions;
        //Makes the Instructions spaced out by instruction step, instead of a block of text
        let splitStr = stringIns.split(". ").join("\n");
        console.log(splitStr);
        //Sets variables to be equal to written HTML
        let mealImg = "<img src=" + response.meals[0].strMealThumb + ">";
        let card = $("<div>").addClass("card mealCard");
        let cardImg = $("<div>").addClass("card-image").append(mealImg);
        let cardBody = $("<div>").addClass("card-content meal-instructions");
        let mealNameEl = $("<h1>").addClass("card-title").text(mealName);
        let mealInstructions = $("<div>").addClass("card-content");
        let mealList = $("<p>")
          .addClass("mealList")
          .text(splitStr)
          .append(mealInstructions);

        let mealLinkHeader = $("<p>")
          .addClass("meal-link")
          .text("Recipie Link: ");
        let mealLink = $("<a>")
          .attr("href", response.meals[0].strSource)
          .attr("target", "_blank")
          .text(response.meals[0].strSource);

        let row = $("<div>").addClass("row");
        let columnOne = $("<div>").addClass("col s6");
        let columnTwo = $("<div>").addClass("col s6");

        let mealIngredirents = $("<th>")
          .addClass("card-content")
          .text("Ingredients:");
        let mealMeasurement = $("<th>")
          .addClass("card-content")
          .text("Mearurements:");
        //Create a List of measurements based on the returned Measurment array.
        measureResult = jQuery.map(measureResultMeal, function (
          measureResultMeal
        ) {
          return $("<tr>").addClass("card-content").text(measureResultMeal);
        });
        //Create a list of ingredients based on the returned ingredient array.
        ingResult = jQuery.map(ingResult, function (ingredient) {
          return $("<tr>").addClass("card-content").text(ingredient);
        });
        // append all lets to the page
        mealLinkHeader.append(mealLink);
        row.append(columnOne, columnTwo);
        columnOne.append(mealMeasurement, measureResult);
        columnTwo.append(mealIngredirents, ingResult);

        cardBody.append(mealNameEl, mealList, row, mealLinkHeader);

        card.append(cardImg, cardBody);
        $("#meal-recipie").append(card);
      });
    });
  }
});
