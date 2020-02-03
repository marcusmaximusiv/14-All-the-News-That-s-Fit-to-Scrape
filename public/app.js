var axios = require("axios");
var cheerio = require("cheerio");

$.getJSON("/articles", function (data) {
  for (var i = 0; i < data.length; i++) {
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

$("#fetch_articles").addClass("btn btn-outline-danger");

$("#fetch_articles").on("click", function () {
  $("#prompt").empty();
  $("#prompt").addClass("alert alert-success");
  $("#prompt").append("<div>" + "<strong>" +
    "Success!" + "</strong> " + "" + "You pulled new articles!"
    + "</div >");

  app.get("/", function (req, res) {

    axios.get("https://www.nytimes.com").then(function (response) {
      var $ = cheerio.load(response.data);
      console.log(response.data);
    });
    console.log(res);
  });
});
