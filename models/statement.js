var mongoose    =   require("mongoose");

var statementSchema  = new mongoose.Schema ({
  text           : {type : String, required: true},
  category       : {type : mongoose.Schema.ObjectId, ref: 'Category', required: true},
  hobbies        : [{type : mongoose.Schema.ObjectId, ref: 'Hobby' }],
});

module.exports = mongoose.model("Statement", statementSchema);
