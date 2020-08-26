$(document).ready(function () {
   // $.ajax({
   //    url:
   //       'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=91a787b9383845c79e517669067d1cf2',
   //    method: 'GET',
   // })

   var settings = {
      async: true,
      crossDomain: true,
      url:
         'https://bing-news-search1.p.rapidapi.com/news?count=8&cc=en-US&safeSearch=Off&category=health&textFormat=Raw',
      method: 'GET',
      headers: {
         'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
         'x-rapidapi-key': '40798131a9msh092e6c0963686ecp178e17jsnd28b7e4c704d',
         'x-bingapis-sdk': 'true',
      },
   };

   $.ajax(settings).done(function (newsResponse) {
      for (let i = 0; i < 8; i++) {
         var newsBlock = $("<div id='news-block'>");
         $('#news').append(newsBlock);

         var newsTitle = $("<h4 class='news-title'>").text(
            newsResponse.value[i].name
         );
         var newsSource = $("<p class='news-source'>").text(
            'source: ' + newsResponse.value[i].provider[0].name
         );
         var newsImage = $(
            "<img class='news-pic' src='" +
               newsResponse.value[i].image.thumbnail.contentUrl +
               "'>"
         );
         var newsUrl = $(
            "<a class='news-url' href=" +
               newsResponse.value[i].url +
               " target='_blank'>"
         ).text('read more here');
         // var articleContent = newsResponse.articles[i].content.replace(/\[.*?\]/g, "")
         // var newsContent = $("<p class='news-content'>").text(articleContent);

         newsBlock.append(newsTitle, newsSource, newsImage, newsUrl);
         console.log(newsResponse);
      }
   });
});
