$(document).ready(function () {   
   $.ajax({
      url: "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=65eddf7bd02743019b3e480bbe667a94",
      method: "GET"
   }).then(function (newsResponse) {
      for (let i = 0; i < 8; i++) {
         var newsBlock = $("<div id='news-block'>");
         $("#news").append(newsBlock);

         var newsTitle = $("<h4 class='news-title'>").text(newsResponse.articles[i].title);
         var newsSource = $("<p class='news-source'>").text("source: " + newsResponse.articles[i].source.name);
         var newsImage = $("<img class='news-pic' src='" + newsResponse.articles[i].urlToImage + "'>");
         // var articleContent = newsResponse.articles[i].content.replace(/\[.*?\]/g, "")
         // var newsContent = $("<p class='news-content'>").text(articleContent);
         var newsUrl = $("<a class='news-url' href=" + newsResponse.articles[i].url + " target='_blank'>").text("read more here");
         
         newsBlock.append(newsTitle, newsSource, newsImage, newsUrl);
         console.log(newsResponse);
      }
   });
});