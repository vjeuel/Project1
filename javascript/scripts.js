var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "ae7ee569bbmsh5ce0bfbe9036f39p12fbd3jsn57915bf9dd79"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});