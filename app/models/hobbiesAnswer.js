var mongoose = require('mongoose');

var hobbiesAnswerSchema = new mongoose.Schema({
  round1 : {type: String},
  round2 : {type: String}
});


module.exports = mongoose.model("HobbyAnswer",hobbiesAnswerSchema );
