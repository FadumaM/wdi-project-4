var mongoose       = require("mongoose");
var config         = require("../config/config");

// Models
var Category       = require("../models/category");
var Hobby          = require("../models/hobby");
var Statement      = require("../models/statement");

// Data
var categoryData   = require("./data/categories.json");
var hobbyData      = require("./data/hobbies.json");
var statementData  = require("./data/statements.json");

// Connect to database
mongoose.connect(config.database, function(){
  console.log("Connected to database");
});

// Drop collections
// Hobby.collection.drop();
// Category.collection.drop();
// Statement.collection.drop();

var categoryOps = [];
var hobbyOps    = [];

categoryData.forEach(function(category) {
  categoryOps.push(saveCategoryAsync(category));
});

Object.keys(hobbyData).forEach(function(hobbyCategory){
  hobbyOps.push(saveHobbyAsync(hobbyCategory));
});

Promise
.all(categoryOps)
.then(function(result) {
  // console.log(result);
  console.log("Categories saved");
  Promise.all(hobbyOps)
  .then(function(result) {
    // console.log(result);
    console.log("Hobbies saved");
  });
});

function saveCategoryAsync(category) {
  return new Promise(function(resolve, reject) {
    Category
    .create(category, function(err, category){
      if (err) return reject(err);
      console.log("[CATEGORY] " + category.name + " was created");
      return resolve(category);
    });
  });
}

function saveHobbyAsync(hobby){
  return new Promise(function(resolve, reject) {
    Category
    .findOne({ name: hobbyCategory }, function(err, category){
      // hobbyData[hobbyCategory].forEach(function(hobby){
      //   var newHobby = new Hobby(hobby);
      //   newHobby.category = category._id;
      //   newHobby
      //   .save(function(err, savedHobby){
          if (err) return reject(err);
          console.log("[HOBBY] " + hobbyCategory + " found");
          // console.log("[HOBBY] " + savedHobby.name + " was created");
          return resolve(category);
        // });
      // });
    });
  });
}

// categoryData.forEach(function(category){
//   Category
//   .create(category)
//   .then(function(category){
//     console.log("[CATEGORY] " + category.name + " was created");
//   })
//   .catch(function(err){
//     console.log("Category create error:", err);
//   });
// });
//
// Object.keys(hobbyData).forEach(function(hobbyCategory){
//   Category
//   .findOne({ name: hobbyCategory })
//   .then(function(category){
//     hobbyData[hobbyCategory].forEach(function(hobby){
//       var newHobby = new Hobby(hobby);
//       newHobby.category = category._id;
//       newHobby
//       .save()
//       .then(function(savedHobby){
//         console.log("[HOBBY] " + savedHobby.name + " was created");
//       })
//       .catch(function(err) {
//         console.log("Hobby save error:", err);
//       });
//     });
//   })
//   .catch(function(err){
//     console.log("Category find (hobby) error:" + err);
//   });
// });
//
// Object.keys(statementData).forEach(function(statementCategory){
//   Category
//   .findOne({ name: statementCategory })
//   .then(function(category){
//     statementData[statementCategory].forEach(function(statement){
//       var newStatement = new Statement({
//         text: statement.text,
//         category: category._id
//       });
//       if (!statement.hobby) {
//         newStatement
//         .save()
//         .then(function(savedStatement){
//           console.log("[STATEMENT] " + savedStatement.text + " was created");
//         })
//         .catch(function(err) {
//           console.log("Statement save error:", err);
//         });
//       } else {
//         Hobby
//         .findOne({name: statement.hobby})
//         .then(function(hobby){
//           newStatement.hobby = hobby._id;
//           newStatement
//           .save()
//           .then(function(savedStatement){
//             console.log("[STATEMENT] " + savedStatement.text + " was created");
//           })
//           .catch(function(err) {
//             console.log("Statement save error:", err);
//           });
//         });
//       }
//     });
//   })
//   .catch(function(err){
//     console.log("Category find (statement) error:" + err);
//   });
// });
