var mongoose = require('mongoose');

var hobbyAnswerSchema = new mongoose.Schema({
  round1 : {type: String},
  round2 : {type: String}
});


module.exports = mongoose.model("HobbyAnswer",hobbyAnswerSchema );
