var CategoryAnswer = require("../../models/categoryAnswer");
var mongoose = require("mongoose");
var config = require("../../config/config");

mongoose.connect(config.database);
