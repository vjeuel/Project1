$(document).ready(function () {
   
   function chooseDrink() {
      var drink = $("#input-drink").val();

      $("#user-drink").empty();
      $("#input-drink").val("");
      
      $.ajax({
         url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink,
         method: "GET"
      }).then(function (drinksResponse) {
         
         for (let i = 0; i < 5; i++) {
            var drinkBlock = $("<div id='drink-block'>")
            $("#user-drink").append(drinkBlock);



            var ingredArr = [drinksResponse.drinks[i].strIngredient1, drinksResponse.drinks[i].strIngredient2,
                           drinksResponse.drinks[i].strIngredient3, drinksResponse.drinks[i].strIngredient4,
                           drinksResponse.drinks[i].strIngredient5, drinksResponse.drinks[i].strIngredient6,
                           drinksResponse.drinks[i].strIngredient7, drinksResponse.drinks[i].strIngredient8,
                           drinksResponse.drinks[i].strIngredient9, drinksResponse.drinks[i].strIngredient10,
                           drinksResponse.drinks[i].strIngredient11, drinksResponse.drinks[i].strIngredient12,
                           drinksResponse.drinks[i].strIngredient13, drinksResponse.drinks[i].strIngredient4,
               drinksResponse.drinks[i].strIngredient15].filter(function(badIngred) {
                  
                  return badIngred !== null;
               });
            
            var measurArr = [drinksResponse.drinks[i].strMeasure1, drinksResponse.drinks[i].strMeasure2,
                           drinksResponse.drinks[i].strMeasure3, drinksResponse.drinks[i].strMeasure4,
                           drinksResponse.drinks[i].strMeasure5, drinksResponse.drinks[i].strMeasure6,
                           drinksResponse.drinks[i].strMeasure7, drinksResponse.drinks[i].strMeasure8,
                           drinksResponse.drinks[i].strMeasure9, drinksResponse.drinks[i].strMeasure10,
                           drinksResponse.drinks[i].strMeasure11, drinksResponse.drinks[i].strMeasure12,
                           drinksResponse.drinks[i].strMeasure13, drinksResponse.drinks[i].strMeasure4,
                           drinksResponse.drinks[i].strMeasure15].filter(function (badMeasur) {
                  return badMeasur !== null;
            });
                     
            
            var ingredArrLoop = "";
            for (let i = 0; i < ingredArr.length; i++) {
               ingredArrLoop += "<p>ingredArr[i]" + ": " + "measurArr[i]</p>";
               
            }
            
         

            var drinkName = $("<h3 class='drink-name'>").text(drinksResponse.drinks[i].strDrink);
            var drinkPic = $("<img class='drink-pic'>").attr("src", drinksResponse.drinks[i].strDrinkThumb);
            var drinkIngred = $("<p class='drink-ingred'>").text("Ingredients: " + " " + ingredArrLoop);
            var drinkInstr = $("<p class='drink-instr'>").text(drinksResponse.drinks[i].strInstructions);
            
            drinkBlock.append(drinkName, drinkPic, drinkIngred, drinkInstr);
            console.log(drinksResponse);
         };
         
      });
   };
   
   
 // Search button click
   $("#search-drink").on("submit", function (event) {
      event.preventDefault()
      // var buttonClick = this.id;
      // var textAreaValue = $(this).siblings('#search-drink').val();
      // localStorage.setItem(buttonClick, textAreaValue);
   
      console.log("test");
      chooseDrink();
   });


   // function buildQueryURL() {
   //    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka";
   //    queryParams = $("#search-term")
   //       .val()
   //       .trim();

   // }

   // $("#run-search").on("click", function (event) {

   //    event.preventDefault();

   //    var queryURL = buildQueryURL();

   //    $.ajax({
   //       url: queryURL,
   //       method: "GET"
   //    }).then(updatePage);
   // });
// >>>>>>> master






// <<<<<<< HEAD
});

// =======
// >>>>>>> master
