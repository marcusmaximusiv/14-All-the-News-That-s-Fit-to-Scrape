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

$("#fetch_articles").on("click", function () {
    app.get("/", function (req, res) {

        axios.get("https://www.nytimes.com").then(function (response) {
            var $ = cheerio.load(response.data);
            console.log(response.data);
        });
        console.log(res);
    });
    app.get("*", function (req, res) {
        res.redirect('./public/index.html');
    });
});

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});