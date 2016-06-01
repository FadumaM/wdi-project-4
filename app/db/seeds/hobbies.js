var mongoose       = require("mongoose");
var config         = require("../../config/config");

// Models
var Category       = require("../../models/category");
var Hobby          = require("../../models/hobby");

// Data
var hobbyData      = require("../data/hobbies.json");

// Connect to database
mongoose.connect(config.database, function(){
  console.log("Connected to database");
});

// Drop collections
Hobby.collection.drop();

Object.keys(hobbyData).forEach(function(hobbyCategory){
  Category
  .findOne({ name: hobbyCategory })
  .then(function(category){
    hobbyData[hobbyCategory].forEach(function(hobby){
      var newHobby = new Hobby(hobby);
      newHobby.category = category._id;
      newHobby
      .save()
      .then(function(savedHobby){
        console.log("[HOBBY] " + savedHobby.name + " was created");
      })
      .catch(function(err) {
        console.log("Hobby save error:", err);
      });
    });
  })
  .catch(function(err){
    console.log("Category find (hobby) error:" + err);
  });
});
