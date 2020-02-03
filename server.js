var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
var MONGODB_URI = process.env.MONGO_ORANGE_URI || "mongodb://localhost/mongoHeadlines";
var PORT = 3000;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", function (req, res) {

    axios.get("https://www.nytimes.com").then(function (response) {

        var $ = cheerio.load(response.data);
        console.log(response.data);
        $("article h2").each(function (i, element) {

            var result = {};
            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");


            db.Article.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
        });
        res.send("Scrape Complete");
    });
});
app.get("*", function (req, res) {
    res.redirect('/');
});

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});