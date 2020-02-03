var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  articles: {
    type: Schema.Types.ObjectId,
    ref: ""
  }
});
var Home = mongoose.model("Home", ArticleSchema);

module.exports = Home;
