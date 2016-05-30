var mongoose = require("mongoose");


var categoryAnswerSchema = new mongoose.Schema ({
  round1 : {type : String},
  round2 : {type : String}
});


module.exports = mongoose.model("CategoryAnswer", categoryAnswerSchema);
