
$(document).ready(function () {
    console.log('ready!')

    let mealSearchValue = 

    let drinkSearchValue = 

     on click function for selection of meal type
    $('#meal-selection').click(function () {
        console.log('Clicked!')
        let mealSearchValue = $('#meal-searched').val();
        $('#meal-searched').val('');

        buildMealURL(mealSearchValue)
    });

    buildDrinkURL()
     on click function for selection of drink
    $('#drink-selection').click(function () {
        console.log('Clicked!')
        let drinkSearchValue = $('#drink-searched').val();
        $('#drink-searched').val('');

        builDrink(drinkSearchValue)
    });


    

    function buildDrinkURL() {
        let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + "vodka"

        $.ajax({
                url: drinkURL,
                method: 'GET'
            })
            .then(function (response) {
                console.log(response)
                let drinkLenght = response.drinks.length;
                let randomNumber = Math.floor(Math.random() * (drinkLenght + 1)); 

                let drinkID = response.drinks[randomNumber].idDrink;
                console.log(drinkID);

                var buildDrink = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;

                $.ajax({
                        url: buildDrink,
                        method: "GET"
                    })
                    .then(function (response) {
                        console.log(response);
                        let drinkName = response.drinks[0].strDrink;
                        let ingredients =[
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
                          console.log("buildDrinkURL -> ingredients", ingredients)
        
                          let measurments = [
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
                          console.log("buildDrinkURL -> measurments", measurments)
        
                        let card = $('<div>').addClass("card-image").append(response.strDrinkThumb);
                        let cardBody = $('<div>').addClass("card-content");
                        let drinkNameEl = $('<h1>').addClass("card-title").text(response.drinks.strDrink);
                        let drinkInstructions = $('<p>').addClass("card-content").text(response.strInstructions)
                        let drinkIngredirents = $('<p>').addClass("card-content").text("Ingredients: " + response.strIngredient1);
                        let drinkMeasurement = $('<p>').addClass("card-content").text("Ingredients: " + response.strMeasure1);
                        let drinkGlass = $('<p>').addClass("card-content").text("Suggested Glass: " + response.strGlass);
                       
                        // append material here 
                        cardBody.append(drinkNameEl, drinkInstructions, drinkIngredirents, drinkMeasurement, drinkGlass );
                        $('#drink').append(card)
                    });
            })

            
    }
   



  

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
        var instructions = response.meals[0].strInstructions;
        var thumbnail = response.meals[0].strMealThumb;
        var videoLink = response.meals[0].strYoutube;
        var webLink = response.meals[0].strSource;
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
          response.meals[0].strMeasure20
        ];
        console.log("buildMealURL -> measurments", measurments);

        $("");

        // append material here
      });
    });
  }
  buildMealURL();
});

