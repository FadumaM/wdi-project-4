var mongoose    =   require("mongoose");

var hobbySchema  = new mongoose.Schema ({
  name           : {type : String, required: true},
  description    : {type : String, required: true},
  category       : {type : mongoose.Schema.ObjectId, ref: 'Category', required: true},
});

module.exports = mongoose.model("Hobby", hobbySchema);
