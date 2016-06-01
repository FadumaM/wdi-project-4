var CategoryAnswer = require("../models/categoryAnswer");
var Category = require("../models/category");
var Hobby = require("../models/hobby");
var HobbyAnswer = require("../models/hobbyAnswer");
var mongoose = require("mongoose");
var config = require("../config/config");

var Promise = require("bluebird");

CategoryAnswer.remove();
HobbyAnswer.remove();
Category.remove();
Hobby.remove();

mongoose.connect(config.database);

Promise.try(seedAnswers).then(function(answers) {
  console.log("seeding categories");
  var categories = seedCategories(answers);
  return;
}).then(function() {
  console.log("seeding hobbies");
  hobbies = seedHobbies(categories);
  return;
}).then(function() {
  return process.exit();
}).catch(function(e) {
  throw e;
});

function seedAnswers() {
  var answers = {};
  artisticAnswer = new  CategoryAnswer ({
    round1 : "First round artistic categories",
    round2 : "Second round artistic categories"
  });

  artisticAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  sportsAnswer = new  CategoryAnswer ({
    round1 : "First round sports categories",
    round2 : "Second round sports categories"
  });

  sportsAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });


  martialArtsAnswer = new  CategoryAnswer ({
    round1 : "First round martialArts categories",
    round2 : "Second round martialArts categories"
  });

  martialArtsAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  geekAnswer = new  CategoryAnswer ({
    round1 : "First round geek categories",
    round2 : "Second round geek categories"
  });

  geekAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  foodAndDrinkAnswer = new  CategoryAnswer ({
    round1 : "First round foodAndDrink categories",
    round2 : "Second round foodAndDrink categories"
  });

  foodAndDrinkAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  languagesAnswer = new  CategoryAnswer ({
    round1 : "First round languages categories",
    round2 : "Second round languages categories"
  });

  languagesAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  performanceAnswer = new  CategoryAnswer ({
    round1 : "First round performance categories",
    round2 : "Second round performance categories"
  });

  performanceAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  dancingAnswer = new  CategoryAnswer ({
    round1 : "First round performance categories",
    round2 : "Second round performance categories"
  });

  dancingAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  exerciseAnswer = new  CategoryAnswer ({
    round1 : "First round exercise categories",
    round2 : "Second round exercise categories"
  });

  exerciseAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  musicAnswer = new  CategoryAnswer ({
    round1 : "First round music categories",
    round2 : "Second round music categories"
  });

  musicAnswer.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Category was saved!", answer);
  });

  ceramics_Pottery = new  HobbyAnswer ({
    round1 : "First round ceramics_Pottery Hobby",
    round2 : "Second round ceramics_Pottery Hobby"
  });

  ceramics_Pottery.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  graffiti = new  HobbyAnswer ({
    round1 : "First round graffiti Hobby",
    round2 : "Second round graffiti Hobby"
  });

  graffiti.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  knitting = new  HobbyAnswer ({
    round1 : "First round  Knitting Hobby",
    round2 : "Second round  Knitting Hobby"
  });

  knitting.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  paintingAndDrawing = new  HobbyAnswer ({
    round1 : "First round  Painting_and_Drawing Hobby",
    round2 : "Second round  Painting_and_Drawing Hobby"
  });

  paintingAndDrawing.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  sewing = new  HobbyAnswer ({
    round1 : "First round  Sewing Hobby",
    round2 : "Second round  Sewing Hobby"
  });

  sewing.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  kiteFlyingMaking = new  HobbyAnswer ({
    round1 : "First round  Kite_Flying_/_Making Hobby",
    round2 : "Second round  Kite_Flying_/_Making Hobby"
  });

  kiteFlyingMaking.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  cycling = new  HobbyAnswer ({
    round1 : "First round  Cycling Hobby",
    round2 : "Second round  Cycling Hobby"
  });

  cycling.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  cycling = new  HobbyAnswer ({
    round1 : "First round  Cycling Hobby",
    round2 : "Second round  Cycling Hobby"
  });

  cycling.save(function(err, answer) {
    answers[answer] = answer;
    if (err) return console.log(err);
    console.log("Hobby answer was saved!", answer);
  });

  sailing = new  HobbyAnswer ({
      round1 : "First round  Sailing Hobby",
      round2 : "Second round  Sailing Hobby"
    });

    sailing.save(function(err, answer) {
      answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Running
  running = new  HobbyAnswer ({
      round1 : "First round  Running Hobby",
      round2 : "Second round  Running Hobby"
    });

    running.save(function(err, answer) {
      answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Swimming
  swimming = new  HobbyAnswer ({
      round1 : "First round  Swimming Hobby",
      round2 : "Second round  Swimming Hobby"
    });

  swimming.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Fishing
  fishing = new  HobbyAnswer ({
      round1 : "First round  Fishing Hobby",
      round2 : "Second round  Fishing Hobby"
    });

  fishing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Rock_Climbing
  rockClimbing = new  HobbyAnswer ({
      round1 : "First round  Rock_Climbing Hobby",
      round2 : "Second round  Rock_Climbing Hobby"
    });

  rockClimbing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Skydiving
  skyDiving = new  HobbyAnswer ({
      round1 : "First round  Skydiving Hobby",
      round2 : "Second round  Skydiving Hobby"
    });

  skyDiving.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Skateboarding
  skateboarding = new  HobbyAnswer ({
      round1 : "First round  Skateboarding Hobby",
      round2 : "Second round  Skateboarding Hobby"
    });

  skateboarding.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Surfing
  surfing = new  HobbyAnswer ({
      round1 : "First round  Surfing Hobby",
      round2 : "Second round  Surfing Hobby"
    });

  surfing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  //Yoga
  yoga = new  HobbyAnswer ({
      round1 : "First round  Yoga Hobby",
      round2 : "Second round  Yoga Hobby"
    });

  yoga.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Hiking
  hiking = new  HobbyAnswer ({
      round1 : "First round  Hiking Hobby",
      round2 : "Second round  Hiking Hobby"
    });

  hiking.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Kayak_and_Canoe
  kayakAndCanoe = new  HobbyAnswer ({
      round1 : "First round  Kayak_and_Canoe Hobby",
      round2 : "Second round Kayak_and_Canoe Hobby"
    });

  kayakAndCanoe.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Tai_Chi
  taiChi = new  HobbyAnswer ({
      round1 : "First round  Tai_Chi Hobby",
      round2 : "Second round  Tai_Chi Hobby"
    });

  taiChi.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Capoeira
  capoeira = new  HobbyAnswer ({
      round1 : "First round  Capoeira Hobby",
      round2 : "Second round  Capoeira Hobby"
    });

  capoeira.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Judo
  judo = new  HobbyAnswer ({
      round1 : "First round  Judo Hobby",
      round2 : "Second round  Judo Hobby"
    });

  judo.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Kung_Fu
  kungFu = new  HobbyAnswer ({
      round1 : "First round  Kung_Fu Hobby",
      round2 : "Second round  Kung_Fu Hobby"
    });

  kungFu.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Taekwondo
  taekwondo = new  HobbyAnswer ({
      round1 : "First round  Taekwondo Hobby",
      round2 : "Second round  Taekwondo Hobby"
    });

  taekwondo.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Boxing
  boxing = new  HobbyAnswer ({
      round1 : "First round  Boxing Hobby",
      round2 : "Second round  Boxing Hobby"
    });

  boxing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Comic_Books
  comicBooks = new  HobbyAnswer ({
      round1 : "First round  Comic_Books Hobby",
      round2 : "Second round  Comic_BooksHobby"
    });

  comicBooks.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Chess
  chess = new  HobbyAnswer ({
      round1 : "First round  chess Hobby",
      round2 : "Second round  chessHobby"
    });

  chess.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Dominoes
  dominoes = new  HobbyAnswer ({
      round1 : "First round  dominoes Hobby",
      round2 : "Second round  dominoes Hobby"
    });

  dominoes.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Poker
  poker = new  HobbyAnswer ({
      round1 : "First round  poker Hobby",
      round2 : "Second round  poker Hobby"
    });

  poker.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });

  // Video_Games
  videoGames = new  HobbyAnswer ({
      round1 : "First round  videoGames Hobby",
      round2 : "Second round  videoGames Hobby"
    });
  videoGames.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Birdwatching
  birdwatching = new  HobbyAnswer ({
      round1 : "First round  Birdwatching Hobby",
      round2 : "Second round  Birdwatching Hobby"
    });
  birdwatching.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Beer_Brewing
  beerBrewing = new  HobbyAnswer ({
      round1 : "First round  Beer_Brewing Hobby",
      round2 : "Second round  Beer_Brewing Hobby"
    });
  beerBrewing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Cheese_Tasting
  cheeseTasting = new  HobbyAnswer ({
      round1 : "First round  cheeseTasting Hobby",
      round2 : "Second round  cheeseTasting Hobby"
    });
  cheeseTasting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Cooking
  cooking = new  HobbyAnswer ({
      round1 : "First round  cooking Hobby",
      round2 : "Second round  cooking Hobby"
    });
  cooking.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Spirits_/_Liquor_Tasting
  spiritsLiquorTasting = new  HobbyAnswer ({
      round1 : "First round  spiritsLiquorTasting Hobby",
      round2 : "Second round  spiritsLiquorTasting Hobby"
    });
  spiritsLiquorTasting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Tea_Drinking
  teaDrinking = new  HobbyAnswer ({
      round1 : "First round  teaDrinking Hobby",
      round2 : "Second round  teaDrinking Hobby"
    });
  teaDrinking.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Wine_Tasting
  wineTasting = new  HobbyAnswer ({
      round1 : "First round  wineTasting Hobby",
      round2 : "Second round  wineTasting Hobby"
    });
  wineTasting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Sign_Language
  signLanguage = new  HobbyAnswer ({
      round1 : "First round  signLanguage Hobby",
      round2 : "Second round  signLanguage Hobby"
    });
  signLanguage.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Creative_Writing
  creativeWriting = new  HobbyAnswer ({
      round1 : "First round  creativeWriting Hobby",
      round2 : "Second round  creativeWriting Hobby"
    });
  creativeWriting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Poetry
  poetry = new  HobbyAnswer ({
      round1 : "First round  poetry Hobby",
      round2 : "Second round  poetry Hobby"
    });
  poetry.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Screenwriting
  screenWriting = new  HobbyAnswer ({
      round1 : "First round  screenWriting Hobby",
      round2 : "Second round  screenWriting Hobby"
    });
  screenWriting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Songwriting
  songWriting = new  HobbyAnswer ({
      round1 : "First round  songWriting Hobby",
      round2 : "Second round  songWritingHobby"
    });
  songWriting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // languages
  newLanguages = new  HobbyAnswer ({
      round1 : "First round  languages Hobby",
      round2 : "Second round  languages Hobby"
    });
  newLanguages.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Acting
  acting = new  HobbyAnswer ({
      round1 : "First round  acting Hobby",
      round2 : "Second round  acting Hobby"
    });
  acting.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Stand_Up_Comedy
  standUpComedy = new  HobbyAnswer ({
      round1 : "First round  standUpComedy Hobby",
      round2 : "Second round  standUpComedy Hobby"
    });
  standUpComedy.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Rapping
  rapping = new  HobbyAnswer ({
      round1 : "First round  rapping Hobby",
      round2 : "Second round  rapping Hobby"
    });
  rapping.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Start_A_Band
  startABand = new  HobbyAnswer ({
      round1 : "First round  startABand Hobby",
      round2 : "Second round  startABand Hobby"
    });
  startABand.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Improv_Comedy
  improvComedy = new  HobbyAnswer ({
      round1 : "First round  improvComedy Hobby",
      round2 : "Second round  improvComedy Hobby"
    });
  improvComedy.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Become_A_Clown
  becomeAClown = new  HobbyAnswer ({
      round1 : "First round  becomeAClown Hobby",
      round2 : "Second round  becomeAClown Hobby"
    });
  becomeAClown.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Break_Dancing_
  breakDancing = new  HobbyAnswer ({
      round1 : "First round  breakDancing Hobby",
      round2 : "Second round  breakDancing Hobby"
    });
  breakDancing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Line_Dancing
  lineDancing = new  HobbyAnswer ({
      round1 : "First round lineDancing Hobby",
      round2 : "Second round  lineDancing Hobby"
    });
  lineDancing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Pole_Dancing
  poleDancing = new  HobbyAnswer ({
      round1 : "First round poleDancing Hobby",
      round2 : "Second round  poleDancing Hobby"
    });
  poleDancing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Salsa
  salsa = new  HobbyAnswer ({
      round1 : "First round salsa Hobby",
      round2 : "Second round  salsa Hobby"
    });
  salsa.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Swing
  swing = new  HobbyAnswer ({
      round1 : "First round swing Hobby",
      round2 : "Second round  swing Hobby"
    });
  swing.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Tango
  tango = new  HobbyAnswer ({
      round1 : "First round Tango Hobby",
      round2 : "Second round  TangoHobby"
    });
  tango.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Blues
  blues = new  HobbyAnswer ({
      round1 : "First round blues Hobby",
      round2 : "Second round  blues Hobby"
    });
  blues.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Jazz
  jazz = new  HobbyAnswer ({
      round1 : "First round Jazz Hobby",
      round2 : "Second round  Jazz Hobby"
    });
  jazz.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Drumming
  drumming = new  HobbyAnswer ({
      round1 : "First round Drumming Hobby",
      round2 : "Second round  Drumming Hobby"
    });
  drumming.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Guitar
  guitar = new  HobbyAnswer ({
      round1 : "First round Guitar Hobby",
      round2 : "Second round  Guitar Hobby"
    });
  guitar.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Harmonica
  harmonica = new  HobbyAnswer ({
      round1 : "First round Harmonica Hobby",
      round2 : "Second round  Harmonica Hobby"
    });
  harmonica.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });
  // Piano_/_Keyboard
  piano = new  HobbyAnswer ({
      round1 : "First round Piano Hobby",
      round2 : "Second round  Piano Hobby"
    });
  piano.save(function(err, answer) {
    answers[answer] = answer;
      if (err) return console.log(err);
      console.log("Hobby answer was saved!", answer);
    });

  return answers;
}

// function seedCategories(answers) {
//   var categories = {};
//
//   var artistic = new Category ({
//     name : "artistic",
//     categoryAnswer: answers.artisticAnswer
//   });
//
//   artistic.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var sports = new Category ({
//     name : "sports",
//     categoryAnswer: answers.sportsAnswer
//   });
//
//   sports.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var exercise = new Category ({
//     name : "exercise",
//     categoryAnswer: answers.exerciseAnswer
//   });
//
//   exercise.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var martialArts = new Category ({
//     name : "martialArts",
//     categoryAnswer: answers.martialArtsAnswer
//   });
//
//   martialArts.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var geek = new Category ({
//     name : "geek",
//     categoryAnswer: answers.geekAnswer
//   });
//
//   geek.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var foodAndDrink = new Category ({
//     name : "foodAndDrink",
//     categoryAnswer: answers.foodAndDrinkAnswer
//   });
//
//   foodAndDrink.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var languages = new Category ({
//     name : "languages",
//     categoryAnswer: answers.languagesAnswer
//   });
//
//   languages.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var performance = new Category ({
//     name : "performance",
//     categoryAnswer: answers.performanceAnswer
//   });
//
//   performance.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var dancing = new Category ({
//     name : "dancing",
//     categoryAnswer: answers.dancingAnswer
//   });
//   dancing.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   var music = new Category ({
//     name : "music",
//     categoryAnswer: answers.musicAnswer
//   });
//
//   music.save(function(err, category) {
//     categories[category] = category;
//     if (err) return console.log(err);
//     console.log("Category was saved!", category);
//   });
//
//   return categories;
// }


















































function seedHobbies(categories) {

  // var ceramics_PotteryHobby = new Hobby ({
  //   name           : "Ceramic & Pottery",
  //   description    : "Ceramics & Pottery can be one of the most creative and fun arts. Although it may seem more intimidating to get into, once you learn the basics and get some materials it is very easy to continue and learn. Practically anything can be made in ceramics, from sculptures of people and animals, to objects such as model houses, cars, furniture. The trick to have fun while you make it and not be afraid to make mistakes and try new objects.",
  //   category       : categories.artistic._id,
  //   hobbiesAnswer  : ceramics_Pottery
  // });
  //
  // ceramics_PotteryHobby.save(function(err, hobby) {
  //   if (err) return console.log(err);
  //   console.log("Hobby was saved!", hobby);
  // });

  // var graffitiHobby = new Hobby ({
  //   name           : "Graffiti",
  //   description    : "Although Street Art and Graffiti in particular has a very bad reputation for being illegal and dirty, both of these have slowly been transformed into a respectable and highly praised art form. The graffiti style is now a very popular graphic style. Many of the underground artists that stand up and communicate their opinions through these art forms have become famous for their cutting edge views and techniques. A perfect example is my favorite, the UK stencil graffiti artist Banksy.",
  //   category       : categories.artistic._id,
  //   hobbiesAnswer  :graffiti
  // });
  //
  // graffitiHobby.save(function(err, hobby) {
  //   if (err) return console.log(err);
  //   console.log("Hobby was saved!", hobby);
  // });

  // var knittingHobby = new Hobby ({
  //   name           : "Knitting",
  //   description    : "Although Street Art and Graffiti in particular has a very bad reputation for being illegal and dirty, both of these have slowly been transformed into a respectable and highly praised art form. The graffiti style is now a very popular graphic style. Many of the underground artists that stand up and communicate their opinions through these art forms have become famous for their cutting edge views and techniques. A perfect example is my favorite, the UK stencil graffiti artist Banksy.",
  //   category       : categories.artistic._id,
  //   hobbiesAnswer  :knitting
  // });

  knittingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var paintingAndDrawingHobby = new Hobby ({
    name           : "Painting & Drawing",
    description    : "Painting and Drawing is a great hobby to start because it is fast and easy. All       you need to buy is a canvas, some basic paint colors, and some paintbrushes and you can start in your own home.",
    category       : categories.artistic._id,
    hobbiesAnswer  : paintingAndDrawing
  });

  paintingAndDrawingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var sewingHobby = new Hobby ({
    name           : "Sewing",
    description    : "Sewing is a terrific hobby to start out with no matter if you are young or old. ",
    category       : categories.artistic._id,
    hobbiesAnswer  : sewing
  });

  sewingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var kiteFlyingMakingHobby = new Hobby ({
    name           : "Kite Flying & Making",
    description    : "Kite flying is still one of my favorite hobbies that I continue from my childhood. Depending on my mood I will break out my multi string dynamite kite or just let fly my huge one string whale and see how high I can get it. Making kites is much easier than people think and can be a truly enjoyable experience. ",
    category       : categories.artistic._id,
    hobbiesAnswer  :kiteFlyingMaking
  });

  kiteFlyingMakingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var cyclingHobby = new Hobby ({
    name           : "Cycling",
    description    : "For people who have always enjoyed bike riding, taking the sport up a level by using road cycles and doing longer rides can be a terrific hobby. Whether you are racing in competitions or just riding around with friends, this can be an extremely fulfilling hobby which is easy to get started in. ",
    category       : categories.sports._id,
    hobbiesAnswer  :cycling
  });

  cyclingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var sailingHobby = new Hobby ({
    name           : "Sailing",
    description    : "For people who have always enjoyed bike riding, taking the sport up a level by using road cycles and doing longer rides can be a terrific hobby. Whether you are racing in competitions or just riding around with friends, this can be an extremely fulfilling hobby which is easy to get started in. ",
    category       : categories.sports._id,
    hobbiesAnswer  : sailing
  });

  sailingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var runningHobby = new Hobby ({
    name           : "Running",
    description    : "Let me say a quick something about marathons, it is not easy BUT it is much easier than you probably think. Most people assume that you have to be superman, young and very fit but let me tell you that with proper training ANYBODY can run a marathon. Running casually or in a Marathon is not only a great exercise to become fit, but an incredible way to take your mind off work or school. Many people who enjoy running casually many times start participating in Marathons which are extremely rewarding ",
    category       : categories.sports._id,
    hobbiesAnswer  : running
  });

  runningHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var swimmingHobby = new Hobby ({
    name           : "Swimming",
    description    : "Swimming is a terrific sport and a great way to get fit. It is a sport which builds strength as well as cardio fitness. There are many different styles and techniques in swimming, each with its own benefits. ",
    category       : categories.sports._id,
    hobbiesAnswer  : swimming
  });

  swimmingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var fishingHobby = new Hobby ({
    name           : "Fishing",
    description    : "Fishing is a great way to relax and get away on weekends. It is very popular in ability to be a exciting and challenging sport or a calming hobby. Starting out is very easy to do and depends largely on where you live and what is available in your area. ",
    category       : categories.sports._id,
    hobbiesAnswer  : fishing
  });

  fishingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var rockClimbingHobby = new Hobby ({
    name           : "Rock Claimbing",
    description    : "Rock Climbing (or Mountain Climbing as it is also called) is composed of two main styles, indoor gym climbing which has grown in popularity thanks to ease and safety, and outdoor mountain climbing which is self descriptive and simply amazing. Both are highly recommended and a challenging and fulfilling experience. I recommend you first try going to one of the many great indoor climbing gyms across the London and world to see if you like the sport. They are very safe and easy to start in. Afterwards if you enjoy it and would like to try outdoor climbing there are many great guided tours available ",
    category       : categories.sports._id,
    hobbiesAnswer  : rockClimbing
  });

  rockClimbingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var skyDivingHobby = new Hobby ({
    name           : "Skydiving ",
    description    : "Skydiving is one of the most exhilarating and heart pounding experiences you will ever attempt. Free falling at high speeds is sure to excite most anybody. Due to the falling cost and rising safety standards, it has become very accessible and has grown in popularity in the last few years. Contrary to popular belief skydiving has become fairly safe and mishaps are few and far between. Normally first jumps are done in tandem (with a licensed professional firmly strapped to your back.) No experience or training is necessary. ",
    category       : categories.exercise._id,
    hobbiesAnswer  : skyDiving
  });

  skyDivingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var surfingHobby = new Hobby ({
    name           : "Surfing ",
    description    : "There is not much to say about surfing except you have to try it to understand why it is so great. Spending sunny days at the beach, the thrill of catching a wave, hanging out with friends. These are all reasons why surfing has become so popular over the past 50 year and will only get more popular.It is an easy sport to start out in and contrary to popular belief is not very difficult. Nowadays there are great beginner surfboards that are more stable and easy to use than was previously available. ",
    category       : categories.exercise._id,
    hobbiesAnswer  :surfings
  });

  surfingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var skateboardingHobby = new Hobby ({
    name           : "Skateboarding ",
    description    : "Skateboarding is simply an awesome sport. Whether you want to use it as transportation or just having fun, learning to ride can be very fun. It is very easy to start and learn as all you need is your board. After learning the basics there are a lot of different things you can go into, from jumping without ramps to doing different tricks and even riding on half pipes and obstacle courses. Starting out is as easy as buying a board and riding around. The first thing you need is a starter board and you can get started immediately. Most boards come complete, but if you want you can put custom wheels and other accessories. There are two different types of skateboards you can buy, there are regular board for riding around and performing tricks or a longer board for cruising around longer distances or at higher speeds.",
    category       : categories.exercise._id,
    hobbiesAnswer  : skateboarding
  });

  skateboardingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var yogaHobby  = new Hobby ({
    name           : "Yoga ",
    description    : "Yoga is a great for mental and spiritual relaxation as well as promoting fitness and health. There are two paths you can choose to start; finding a teacher in your area to take lessons or like most people starting yoga in the privacy of your own home.",
    category       : categories.exercise._id,
    hobbiesAnswer  : yoga
  });

  yogaHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });


  var hikingHobby  = new Hobby ({
    name           : "Hiking ",
    description    : "Hiking in the great outdoors is a truly exhilarating experience. Hiking takes you to the most beautiful places in nature and gives you a great workout at the same time. There are overnight hiking trips as well as one day excursions. ",
    category       : categories.exercise._id,
    hobbiesAnswer  : hiking
  });

  hikingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });
  // Kayak_and_Canoe

  var kayakAndCanoeHobby  = new Hobby ({
    name           : "Kayak and Canoe ",
    description    : "The sport of kayaking and canoeing is a terrific way to get outdoor, see some beautiful sites, and also increase your upper body strength and overall cardio health. There are many types of kayaking, from intense to very tranquil. ",
    category       : categories.exercise._id,
    hobbiesAnswer  :kayakAndCanoe
  });

  kayakAndCanoeHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var taiChiHobby  = new Hobby ({
    name           : "Tai Chi",
    description    : "Tai Chi is a incredible hobby to learn in that it is very relaxing and will keep you very fit at the same time. ",
    category       : categories.martialArts._id,
    hobbiesAnswer  :taiChi
  });

  taiChiHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var judoHobby  = new Hobby ({
    name           : "Judo",
    description    : "Judo, which means 'gentle way' is a modern Japanese martial art and combat sport. It is comprised of throwing your opponent to the ground and subduing him. It is a very fun hobby to learn and is high recommended.",
    category       : categories.martialArts._id,
    hobbiesAnswer  :judo
  });

  judoHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var capoeiraHobby  = new Hobby ({
    name           : "Capoeria",
    description    : "Capoeira : This Afro-Brazilian art form mixes dance, music, and martial arts to create an amazing experience. It has grown in popularity immensely the past few years and looks like it will continue to grow. This sport is a terrific hobby to learn as it is very fun and can be practiced in your own home.",
    category       : categories.martialArts._id,
    hobbiesAnswer  :capoeira
  });

  capoeiraHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var kungFuHobby  = new Hobby ({
    name           : "Kung Fu",
    description    : "Kung Fu: This Chinese Martial art also known as Wushu is an amazing hobby to start, as it is great for self defense, can strengthen your body, and can be learned in most cities",
    category       : categories.martialArts._id,
    hobbiesAnswer  :kungFu
  });

  kungFuHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var taekwondoHobby  = new Hobby ({
    name           : "Taekwondo",
    description    : "Taekwondo: This Korean martial art which translates into 'to strike or break with foot and fist', is a very fun and fulfilling hobby to learn. It will put you in terrific physical shape and can be easily be learned with hard work and dedication.",
    category       : categories.martialArts._id,
    hobbiesAnswer  :taekwondo
  });

  taekwondoHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var boxingHobby  = new Hobby ({
    name           : "Boxing",
    description    : "Boxing for competition, for fitness, or self defense are all great reasons to start out.",
    category       : categories.martialArts._id,
    hobbiesAnswer  :boxing
  });

  boxingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var comicBooksHobby  = new Hobby ({
    name           : "Comic Books",
    description    : "Collecting comics has been a national favorite since Superman appeared in the 1930`s. From there the comic book industry has advanced a great deal to the point where today there are tens of thousands of new comics every year and collector editions can fetch high prices. Reading and collecting comics can be very fun as they now have complex storylines, terrific comic book art, intense dialogues, and incredible graphics. ",
    category       : categories.geek._id,
    hobbiesAnswer  :comicBooks
  });

  comicBooksHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var chessHobby  = new Hobby ({
    name           : "Chess",
    description    : "Chess is one of the most mind bending and intellectually stimulating games available. It has been proven to develop you analytical skills and help to clarify your thinking. Although it is very complex game to play well, it is very easy to begin. Once you learn the basic moves each piece can do and a few other rules you can begin to play. Practicing is where you really learn to become a better player. You can never be to young to learn and many people keep learning past their old age. ",
    category       : categories.geek._id,
    hobbiesAnswer  :chess
  });

  chessHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var dominoesHobby  = new Hobby ({
    name           : "Dominoes",
    description    : "Playing Dominoes is a classic and always addictive game. It is great for inviting friends and family over and having a domino night.",
    category       : categories.geek._id,
    hobbiesAnswer  :dominoes
  });

  dominoesHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var pokerHobby  = new Hobby ({
    name           : "Poker",
    description    : "Poker is not only a challenging game but very entertaining. One of the most popular card games around, poker makes for a great way to spend a relaxing night with your friends or family. There is a lot of skill and mental agility necessary to be successful and that makes the game all the more fun once you`re familiar with the texas holdem rules for home games and casino play.",
    category       : categories.geek._id,
    hobbiesAnswer  :poker
  });

  pokerHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var videoGamesHobby  = new Hobby ({
    name           : "Video Games",
    description    : "I have always been a video game fanatic, ever since I got hooked on the first Mario Brothers on the first Nintendo. Although the technologies have changed, playing video games is as fun as ever and will always continue to be a terrific hobby and way to spend your time. ",
    category       : categories.geek._id,
    hobbiesAnswer  :video
  });

  videoGamesHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var birdWatchingHobby  = new Hobby ({
    name           : "Video Games",
    description    : "I have always been a video game fanatic, ever since I got hooked on the first Mario Brothers on the first Nintendo. Although the technologies have changed, playing video games is as fun as ever and will always continue to be a terrific hobby and way to spend your time. ",
    category       : categories.geek._id,
    hobbiesAnswer  :birdWatching
  });

  birdWatchingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var beerBrewingHobby  = new Hobby ({
    name           : "Beer Brewing",
    description    : "Many people love to drink and appreciate beer and as a result learning to beer brew is a perfect hobby to learn. While most people think that beer brewing is difficult and complex, the truth is that learning to brew beer is much easier thank you think. Learning to brew beer allows you to experiment and customize a flavor that is to your liking. ",
    category       : categories.foodAndDrink._id,
    hobbiesAnswer  :beerBrewing
  });

  beerBrewingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var cheeseTastingHobby  = new Hobby ({
    name           : "Cheese Tasting",
    description    : "If you enjoy the many different types of cheese available and learning about these different types, then this hobby is terrific for you. Getting started can be as easy as buying a couple cheeses and hosting a small cheese tasting at your house. ",
    category       : categories.foodAndDrink._id,
    hobbiesAnswer  :cheeseTasting
  });

  cheeseTastingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var cookingHobby  = new Hobby ({
    name           : "Cooking",
    description    : "Learning to cook is one of the most enjoyable and easy to get into hobbies. A perfect cooking hobbyist is anybody who enjoys eating and likes to experiment with new and creative flavors. Getting started can be very fast and simple, and improving your cooking skills is a terrific investment of your time.",
    category       : categories.foodAndDrink._id,
    hobbiesAnswer  :cooking
  });

  cookingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var spiritsLiquorTastingHobby  = new Hobby ({
    name           : "Spirits & Liquor Tasting",
    description    : "Learning to appreciate and property distinguish different spirits is a very fulfilling hobby that will take you many years to master. There is much to learn from different blends, to distillation methods, even the different glasses that must be used in each scenario. Whether you prefer scotch, tequila, vodka or any other liquor, there are many great brands and bottlers out there.",
    category       : categories.foodAndDrink._id,
    hobbiesAnswer  :spiritsLiquorTasting
  });

  spiritsLiquorTastingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var teaDrinkingHobby  = new Hobby ({
    name           : "Tea Drinking",
    description    : "People enjoy drinking tea for its relaxing effect and its positive impact on health. There are many different types of tea leaves that you can learn about and enjoy. ",
    category       : categories.foodAndDrink._id,
    hobbiesAnswer  :teaDrinking
  });

  teaDrinkingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var wineTastingHobby  = new Hobby ({
    name           : "Wine Tasting",
    description    : "There is a lot to learn about drinking and enjoying wine. There are dozens of different grapes and grape combinations as well as regions which drastically affect the taste of your wine. ",
    category       : categories.foodAndDrink._id,
    hobbiesAnswer  :wineTasting
  });

  wineTastingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var signLanguageHobby  = new Hobby ({
    name           : "Sign Language",
    description    : "As a hobby, learning sign language has a lot of benefits. Apart from making you more sensitive to communication, you can talk to people with special needs. You can also communicate with babies long before they are able to actually speak, speeding up their progress. A major advantage of learning sign language is helping pre-verbal children to communicate their needs. ",
    category       : categories.languages._id,
    hobbiesAnswer  :signLanguage
  });

  signLanguageHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var creativeWritingHobby  = new Hobby ({
    name           : "Creative Writing",
    description    : "Many people enjoy writing in their free time and with practice they become very skilled at crafting great content with words. If you enjoy writing, then creative writing may be a perfect hobby for you. ",
    category       : categories.languages._id,
    hobbiesAnswer  :creativeWriting
  });

  creativeWritingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var poetryHobby  = new Hobby ({
    name           : "Poetry",
    description    : "Writing poetry can be a very fulfilling and beautiful hobby. Although getting started is extremely easy and can be done instantly, becoming a master of your words and becoming a great poet takes time and practice. ",
    category       : categories.languages._id,
    hobbiesAnswer  :poetry
  });

  poetryHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var screenWritingHobby  = new Hobby ({
    name           : "Screen Writing",
    description    : "To be a successful Screenwriter, you must first learn the basic rules and tips of screenwriting. With this base and a little creativity, anyone can write a great screenplay. ",
    category       : categories.languages._id,
    hobbiesAnswer  :screenWriting
  });

  screenWritingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var songwritingHobby  = new Hobby ({
    name           : "Song Writing",
    description    : "So you want to become the next Bob Dylan? Becoming a lyricist - songwriter begins with a love of music and the power or lyrics. Many songwriters channel their emotions into songs and end up creating lyrical masterpieces. To get started you don`t need anything more than a simple desire to write songs.",
    category       : categories.languages._id,
    hobbiesAnswer  : songwriting
  });

  songwritingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var newLanguagesHobby  = new Hobby ({
    name           : "New languages",
    description    : "Learning a new language is something very easy to start but is a worthy challenge to master. In the multicultural world we live in today it is often very helpful to learn other languages such as Spanish, French, Italian, Mandarin, Japanese, German, Russian, Dutch, or Portuguese.Whether it is for expanding job horizons or just preparing a trip, the results can be very rewarding. ",
    category       : categories.languages._id,
    hobbiesAnswer  :newLanguages
  });

  newLanguagesHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var actingHobby  = new Hobby ({
    name           : "Acting",
    description    : "Acting is a passion for many people as it is very entertaining and can help you alter your emotions and personality for brief time periods. Whether you are movie acting, theater acting, or improve acting with friends, learning to act can be a valuable and fulfilling hobby. ",
    category       : categories.performance._id,
    hobbiesAnswer  : acting
  });

  actingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var standUpComedyHobby  = new Hobby ({
    name           : "Stand Up Comedy",
    description    : "Stand up comedy is a natural fit for people who are funny and are used to attracting attention and making people laugh. Thankfully it is perhaps the easiest field of entertainment for new talent to enter, thanks to the availability of many smaller venues that hold 'open mic' events where anyone who dares to can have a shot at performing comedy before a live audience. ",
    category       : categories.performance._id,
    hobbiesAnswer  : standUpComedyHobby
  });

  standUpComedyHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var rappingHobby  = new Hobby ({
    name           : "Rapping",
    description    : "Rapping has emerged as one of the most popular forms of music / singing in the last 20 years. It is a terrific hobby to start as all you need to get started is a passion for the music and something to say. Many of todays most popular rappers started by sitting down in their homes and writing basic raps that then evolved into great lyrics. To learn to rap you will need to write lyrics and practice your delivery. ",
    category       : categories.performance._id,
    hobbiesAnswer  : rapping
  });

  rappingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var startABandHobby  = new Hobby ({
    name           : "Start A Band",
    description    : "Learning to play an instrument can be an incredible experience and hobby. Once you start to master the basics you can continue to the next step which is actually jamming with some friends and playing live. The raw emotion and excitement of starting a band with your buddies is easily one of the best experiences you can have. ",
    category       : categories.performance._id,
    hobbiesAnswer  :startABand
  });

  startABandHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var improvComedyHobby  = new Hobby ({
    name           : "Improv Comedy",
    description    : "Improvisation, or improv, is a form of live theatre in which the plot, characters and dialogue of a game, scene or story are made up in the moment. Often improvisers will take a suggestion from the audience, or draw on some other source of inspiration to get started. ",
    category       : categories.performance._id,
    hobbiesAnswer  :improvComedy
  });

  improvComedyHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var becomeAClownHobby  = new Hobby ({
    name           : "Become A Clown",
    description    : "A clown is a public entertainer who dresses in outlandish attire and attempts to please audiences with comical and chaotic behaviour. Clowns are typically hired to entertain children at events such as birthday parties and public gatherings.Clowns have been a popular form of entertainer since before the time of Ancient Greece, and in the UK, their popularity exploded with the introduction of Philip Astley’s universal show in the late 18th Century. They typically wear exaggerated clothing in the “grotesque” classical style: large shoes, red noses, large wigs, colourful clothing and wild accessories. The clown is a public entertainer, commissioned for gatherings or personal appearances for the amusement of the hirer. Even today, hundreds of years later, the market for clowning in the UK is alive and well. ",
    category       : categories.performance._id,
    hobbiesAnswer  :becomeAClown
  });

  becomeAClownHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var breakDancingHobby  = new Hobby ({
    name           : "Break Dancing",
    description    : "Break Dancing or b-boying as is it known is very fun once you get the hang of it and pretty easy to start. All you need is some time and you are ready to go. There are many different moves you can learn and start trying in your own home. They say break dancing is all about practicing so get started! ",
    category       : categories.dancing._id,
    hobbiesAnswer  : breakDancing
  });

  breakDancingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var lineDancingHobby  = new Hobby ({
    name           : "Line Dancing",
    description    : "Learning to line dance properly can be one of the most rewarding and fun hobbies. It does not matter if you like country music or just dancing, this hobby is a ton of fun.",
    category       : categories.dancing._id,
    hobbiesAnswer  : lineDancing
  });

  lineDancingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var poleDancingHobby  = new Hobby ({
    name           : "Pole Dancing",
    description    : "Pole Dancing is a great way to stay fit and feel good about yourself. It has gained popularity and is no longer only practiced in nightclubs.",
    category       : categories.dancing._id,
    hobbiesAnswer  :poleDancing
  });

  poleDancingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var salsaHobby  = new Hobby ({
    name           : "Salsa",
    description    : "Salsa Dancing is by far the most popular Latin dance. Its hot and sexy style, fast and loud music, make for a great evening dancing out. ",
    category       : categories.dancing._id,
    hobbiesAnswer  :salsa
  });

  salsaHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var swingHobby  = new Hobby ({
    name           : "Swing",
    description    : "Dancing Swing is very exciting and fun due to its rapid pace, loud music, and great atmosphere. It is really easy to start out in because it is more informal than other ballroom techniques and more spontaneous. ",
    category       : categories.dancing._id,
    hobbiesAnswer  : swing
  });

  swingHobby.save(function(err, hobby) {
    if (err) return console.log(err);
    console.log("Hobby was saved!", hobby);
  });

  var tangoHobby  = new Hobby ({
      name           : "Tango",
      description    : "The only thing better than watching somebody dance Tango is actually dancing it. Its quick movements and dramatic style make it very popular and make a great impression. Although most people believe it is very difficult to learn and master, the basics can be learned easily with some basic effort. ",
      category       : categories.dancing._id,
      hobbiesAnswer  :tango
  });

  tangoHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });

  var bluesHobby  = new Hobby ({
      name           : "Blues",
      description    : "The only thing better than watching somebody dance Tango is actually dancing it. Its quick movements and dramatic style make it very popular and make a great impression. Although most people believe it is very difficult to learn and master, the basics can be learned easily with some basic effort. ",
      category       : categories.music._id,
      hobbiesAnswer  : blues
  });

  bluesHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });

  var jazzHobby  = new Hobby ({
      name           : "Jazz",
      description    : "I am a huge fan of listening to Jazz Music. There is nothing quite like sitting down and listening to Miles Davis or Johnny Coltrane. You can find dozens of great jazz artists from every decade and for every sub genre. I also heavily recommend you visiting a jazz bar to see live performances. ",
      category       : categories.music._id,
      hobbiesAnswer  : jazz
  });

  jazzHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });

  var drummingHobby  = new Hobby ({
      name           : "Drumming",
      description    : "Learning to drum began back when you started tapping on a book or anything you can find. If you like your rhythm or want to improve it playing the drum is great.  ",
      category       : categories.music._id,
      hobbiesAnswer  : drumming
  });

  drummingHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });

  var guitarHobby  = new Hobby ({
      name           : "Guiter",
      description    : "Learning to play the guitar is fast, easy, cheap, and really fun. At the minimum all you need is a starter acoustic guitar and some time to learn to read tabs and learn songs. Tabs or tablature are the musical sheets which tell you exactly where to put your finger and therefore what notes to play. Learning to read tabs may seem complicated but is actually pretty easy.  ",
      category       : categories.music._id,
      hobbiesAnswer  :guiter
  });

  guitarHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });

  var harmonicaHobby  = new Hobby ({
      name           : "Harmonica",
      description    : "Playing a harmonica can be a great way to learn to make melodies and play songs you enjoy. It is really easy to learn with the below articles and tutorials. The only way to learn is by doing so grab your harmonica or buy a model from the products subtab. One of Led Zeppelins best songs 'When the Levee Breaks' has a Harmonica and sounds amazing, you should definately listen to it. Jimmy Page`s guitar backward echo technique, where he would put the echo ahead of the sound, was used on the harmonica for this song.",
      category       : categories.music._id,
      hobbiesAnswer  : harmonica
  });

  harmonicaHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });

  var pianoHobby  = new Hobby ({
      name           : "Piano",
      description    : "Learning to play the piano is one of the bases for mastering most musical instruments. The piano is a very good primer on identifying, understanding, and playing different notes.",
      category       : categories.music._id,
      hobbiesAnswer  : paino
  });

  pianoHobby.save(function(err, hobby) {
      if (err) return console.log(err);
      console.log("Hobby was saved!", hobby);
  });
}
