$(document).ready(function () {
   $(".dropdown-trigger").dropdown();
   $(".sidenav").sidenav();
        
   chooseRecipe("pizza");

   function chooseRecipe(recipe) {
      
      $("#user-food").empty();
      $("#input-food").val("");
      
      $.ajax({
         url: "https://api.spoonacular.com/recipes/search?query=" + recipe + "&number=8&apiKey=e899cd57c3b04896adcb0dfa4fbcfd9d",
         method: "GET"
      }).then(function (recipeResponse) {
         for (let i = 0; i < 7; i++) {
            var recipeBlock = $("<div id='recipe-block'>")
            $("#user-food").append(recipeBlock);
            
            var recipeName = $("<h4 class='recipe-name'>").text(recipeResponse.results[i].title);
            var recipePic = $("<img class='recipe-pic' src='https://spoonacular.com/recipeImages/" + recipeResponse.results[i].id + "-556x370.jpg'>");
            var recipeDuration = $("<p class='recipe-paragraph'>").text("Ready in: " + recipeResponse.results[i].readyInMinutes +" min");
            var recipeServings = $("<p class='recipe-paragraph'>").text("Servings: " + recipeResponse.results[i].servings);
            var recipeUrl = $("<a class='recipe-link' href=" + recipeResponse.results[i].sourceUrl + " target='_blank'>").text("click here for the recipe");

            recipeBlock.append(recipeName, recipePic, recipeDuration, recipeServings, recipeUrl);
         }
      });
   };
   $("#search-food").on("submit", function (event) {
      var recipe = $("#input-food").val();
      event.preventDefault()
      chooseRecipe(recipe);
   });

});
