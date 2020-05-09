$(document).ready(function () {

   $.ajax({
      url: "http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=65eddf7bd02743019b3e480bbe667a94",
      method: "GET"
   }).then(function (newsResponse) {
      for (let i = 0; i < 5; i++) {

         
         var newsTitle = $("<h4 class='news-title'>").text(newsResponse.articles[i].title);
         var newsImage = $("<img class='news-pic' src='" + newsResponse.articles[i].urlToImage + "'>");
         var articleContent = newsResponse.articles[i].content.replace(/\[.*?\]/g, "")
         var newsContent = $("<p class='news-content'>").text(articleContent);
         console.log(articleContent);
         
         var newsUrl = $("<a class='news-url' href=" + newsResponse.articles[i].url + " target='_blank'>").text("read more here");

            
         $("#news-block").prepend(newsTitle, newsImage, newsContent, newsUrl);
      }
   });
});
   