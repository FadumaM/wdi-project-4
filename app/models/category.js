var mongoose = require('mongoose');

var categorySchema  = new mongoose.Schema ({
   name : {type: String},
   categoryAnswer: {type: categoryAnswerSchema}
});


module.exports = mongoose.model("Category", categorySchema);
