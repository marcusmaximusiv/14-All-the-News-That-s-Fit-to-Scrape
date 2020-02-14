var axios = ("axios");
var cheerio = ("cheerio");

$("#fetch_articles").addClass("btn btn-outline-danger");

$("#fetch_articles").on("click", function () {
  $("#prompt").empty();
  $("#prompt").addClass("alert alert-success");
  $("#prompt").append("<div>" + "<strong>" +
    "Success!" + "</strong> " + "" + "You pulled new articles!"
    + "</div >");
});
