var mongoose = require('mongoose');
var categoryAnswer = require('./categoryAnswer');

var categorySchema  = new mongoose.Schema ({
   name : {type: String},
   categoryAnswer: {type: categoryAnswer.schema }
});


module.exports = mongoose.model("Category", categorySchema);
