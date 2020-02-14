var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  },
  bookmarked:{
    type: Boolean, 
    default: false
  }
});

var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;
