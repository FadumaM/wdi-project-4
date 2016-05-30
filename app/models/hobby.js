var mongoose    =   require("mongoose");

var hobbySchema  = new mongoose.Schema ({
  name           : {type : String},
  description    : {type : String},
  category       : {type : mongoose.Schema.ObjectId, ref: 'Category'},
  hobbiesAnswer  : {type : hobbiesAnswerSchema }
});


module.exports = mongoose.model("Hobby", hobbySchema);
