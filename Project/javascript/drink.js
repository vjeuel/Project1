// Test
// $(document).ready(function () {
//     alert("123")
// });



function buildQueryURL() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka";
    queryParams = $("#search-term")
        .val()
        .trim();

}

$("#run-search").on("click", function (event) {

    event.preventDefault();

    var queryURL = buildQueryURL();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});






