var Category = require("../../models/category");
var mongoose = require("mongoose");
var config = require("../../config/config");

var seedHobbies = require("hobby");

mongoose.connect(config.database);




module.exports = seedCategories;
