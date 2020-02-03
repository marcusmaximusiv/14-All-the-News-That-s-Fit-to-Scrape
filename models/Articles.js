var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: String,

  body: String
});

var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;
