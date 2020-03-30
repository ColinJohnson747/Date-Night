//API keys
console.log("this is linked to html")

$(document).ready(function() {
    console.log("ready!");
    function buildMealURL() {
      var mealSelection = "beef";
      let mealURL =
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mealSelection;
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
        });
      });
    }
    buildMealURL();
  });


  $(document).ready(function () {
  
    function buildMealURL(mealSearchValue) {
        let mealURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + mealSearchValue
        $.ajax({
            url: mealURL,
            method: 'GET'
           })
           .then(function(response){
            console.log(response);
            var foodID = response.meals[0].idMeal;
            console.log(foodID);
        })
    }
    function buildDrinkURL() {
        let drinkSearchValue = 'vodka'
        let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkSearchValue
        $.ajax({
                url: drinkURL,
                method: 'GET'
            })
            .then(function (response) {
                console.log(response)
            })
            let drinkID = response.drinks[0].idDrink;
            console.log(drinkID);
                var builDrink = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkID;
                $.ajax({
                        url: buildDrink,
                        method: "GET"
                    })
                    .then(function (response) {
                        console.log(response);
                    });
    }
});