var mongoose    =   require("mongoose");
var hobbyAnswer = require("./hobbyAnswer");

var hobbySchema  = new mongoose.Schema ({
  name           : {type : String},
  description    : {type : String},
  category       : {type : mongoose.Schema.ObjectId, ref: 'Category'},
  hobbiesAnswer  : {type : hobbyAnswer.schema }
});


module.exports = mongoose.model("Hobby", hobbySchema);
