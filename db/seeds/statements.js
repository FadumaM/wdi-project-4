var mongoose       = require("mongoose");
var config         = require("../../config/config");

// Models
var Category       = require("../../models/category");
var Hobby          = require("../../models/hobby");
var Statement      = require("../../models/statement");

// Data
var statementData  = require("../data/statements.json");

// Connect to database
mongoose.connect(config.database, function(){
  console.log("Connected to database");
});

// Drop collections
Statement.collection.drop();

Object.keys(statementData).forEach(function(statementCategory){
  Category
  .findOne({ name: statementCategory })
  .then(function(category){
    var statements = [];
    statementData[statementCategory].forEach(function(statement){
      var newStatement = new Statement({
        text: statement.text,
        category: category._id
      });
      statements.push(newStatement);



      if (!statement.text) {
        newStatement
        .save(function(err) {
          if (err) console.log(err);
        })
        .then(function(savedStatement){
          console.log("[STATEMENT] " + savedStatement.text + " was created");
        })
        .catch(function(err) {
          console.log("Statement save error:", err);
        });
      } else {
        statement.hobbies.forEach(function(statementHobby) {
          Hobby
          .findOne({ name: statementHobby})
          .then(function(hobby) {
            if (newStatement.hobbies) {
              newStatement.hobbies.push(hobby._id);
            } else {
              newStatement.hobbies = [hobby._id];
            }
            newStatement
            .save()
            .then(function(savedStatement){
              console.log("[STATEMENT] " + savedStatement.text + " was created");
            })
            .catch(function(err) {
              console.log("Statement save error:", err);
            });
          });
        });
      }
    });
  })
  .catch(function(err){
    console.log("Category find (statement) error:" + err);
  });
});
