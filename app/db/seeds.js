var mongoose = require("mongoose");
var config   = require("../config/config");
var Hobby  = require("../models/hobby");
var HobbyAnswer  = require("../models/hobbyAnswer");
var Category  = require("../models/category");
var CategoryAnswer  = require("../models/CategoryAnswer");


mongoose.connect(config.database);


//******************************** Creating categories *****************************************//

var artistic = new Category ({
  name : "artistic",
  categoryAnswer: artisticAnswer
});

artistic.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var sports = new Category ({
  name : "sports",
  categoryAnswer: sportsAnswer
});

sports.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var exercise = new Category ({
  name : "exercise",
  categoryAnswer: exerciseAnswer
});

exercise.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var martialArts = new Category ({
  name : "martialArts",
  categoryAnswer: martialArtsAnswer
});

martialArts.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var geek = new Category ({
  name : "geek",
  categoryAnswer: geekAnswer
});

geek.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var foodAndDrink = new Category ({
  name : "foodAndDrink",
  categoryAnswer: foodAndDrinkAnswer
});

foodAndDrink.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var languages = new Category ({
  name : "languages",
  categoryAnswer: languagesAnswer
});

languages.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var performance = new Category ({
  name : "performance",
  categoryAnswer: performanceAnswer
});

performance.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var dancing = new Category ({
  name : "dancing",
  categoryAnswer: dancingAnswer
});
dancing.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var music = new Category ({
  name : "music",
  categoryAnswer: musicAnswer
});

music.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});


//**************************** CategoryAnswer ***************************************************//

var artisticAnswer = new  CategoryAnswer ({
  round1 : "First round artistic categories",
  round2 : "Second round artistic categories"
});

artisticAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var sportsAnswer = new  CategoryAnswer ({
  round1 : "First round sports categories",
  round2 : "Second round sports categories"
});

sportsAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});


var martialArtsAnswer = new  CategoryAnswer ({
  round1 : "First round martialArts categories",
  round2 : "Second round martialArts categories"
});

martialArtsAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var geekAnswer = new  CategoryAnswer ({
  round1 : "First round geek categories",
  round2 : "Second round geek categories"
});

geekAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var foodAndDrinkAnswer = new  CategoryAnswer ({
  round1 : "First round foodAndDrink categories",
  round2 : "Second round foodAndDrink categories"
});

foodAndDrinkAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var languagesAnswer = new  CategoryAnswer ({
  round1 : "First round languages categories",
  round2 : "Second round languages categories"
});

languagesAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var performanceAnswer = new  CategoryAnswer ({
  round1 : "First round performance categories",
  round2 : "Second round performance categories"
});

performanceAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var dancingAnswer = new  CategoryAnswer ({
  round1 : "First round performance categories",
  round2 : "Second round performance categories"
});

dancingAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var exerciseAnswer = new  CategoryAnswer ({
  round1 : "First round exercise categories",
  round2 : "Second round exercise categories"
});

exerciseAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

var musicAnswer = new  CategoryAnswer ({
  round1 : "First round music categories",
  round2 : "Second round music categories"
});

musicAnswer.save(function(err, cetegory) {
  if (err) return console.log(err);
  console.log("Category was saved!", category);
});

//************************************** Hobby *************************************************//

var ceramics_PotteryHobby = new Hobby ({
  name           : "Ceramic & Pottery",
  description    : "Ceramics & Pottery can be one of the most creative and fun arts. Although it may seem more intimidating to get into, once you learn the basics and get some materials it is very easy to continue and learn. Practically anything can be made in ceramics, from sculptures of people and animals, to objects such as model houses, cars, furniture. The trick to have fun while you make it and not be afraid to make mistakes and try new objects.",
  category       : artistic.id,
  hobbiesAnswer  :"",
});

ceramics_PotteryHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var graffitiHobby = new Hobby ({
  name           : "Graffiti",
  description    : "Although Street Art and Graffiti in particular has a very bad reputation for being illegal and dirty, both of these have slowly been transformed into a respectable and highly praised art form. The graffiti style is now a very popular graphic style. Many of the underground artists that stand up and communicate their opinions through these art forms have become famous for their cutting edge views and techniques. A perfect example is my favorite, the UK stencil graffiti artist Banksy.",
  category       : artistic.id,
  hobbiesAnswer  :"",
});

graffitiHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var knittingHobby = new Hobby ({
  name           : "Knitting",
  description    : "Although Street Art and Graffiti in particular has a very bad reputation for being illegal and dirty, both of these have slowly been transformed into a respectable and highly praised art form. The graffiti style is now a very popular graphic style. Many of the underground artists that stand up and communicate their opinions through these art forms have become famous for their cutting edge views and techniques. A perfect example is my favorite, the UK stencil graffiti artist Banksy.",
  category       : artistic.id,
  hobbiesAnswer  :"",
});

knittingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var paintingAndDrawingHobby = new Hobby ({
  name           : "Painting & Drawing",
  description    : "Painting and Drawing is a great hobby to start because it is fast and easy. All       you need to buy is a canvas, some basic paint colors, and some paintbrushes and you can start in your own home.",
  category       : artistic.id,
  hobbiesAnswer  :"",
});

paintingAndDrawingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var sewingHobby = new Hobby ({
  name           : "Sewing",
  description    : "Sewing is a terrific hobby to start out with no matter if you are young or old. ",
  category       : artistic.id,
  hobbiesAnswer  :"",
});

sewingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var kiteFlyingMakingHobby = new Hobby ({
  name           : "Kite Flying & Making",
  description    : "Kite flying is still one of my favorite hobbies that I continue from my childhood. Depending on my mood I will break out my multi string dynamite kite or just let fly my huge one string whale and see how high I can get it. Making kites is much easier than people think and can be a truly enjoyable experience. ",
  category       : artistic.id,
  hobbiesAnswer  :"",
});

kiteFlyingMakingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var cyclingHobby = new Hobby ({
  name           : "Cycling",
  description    : "For people who have always enjoyed bike riding, taking the sport up a level by using road cycles and doing longer rides can be a terrific hobby. Whether you are racing in competitions or just riding around with friends, this can be an extremely fulfilling hobby which is easy to get started in. ",
  category       :sports.id,
  hobbiesAnswer  :"",
});

cyclingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var sailingHobby = new Hobby ({
  name           : "Sailing",
  description    : "For people who have always enjoyed bike riding, taking the sport up a level by using road cycles and doing longer rides can be a terrific hobby. Whether you are racing in competitions or just riding around with friends, this can be an extremely fulfilling hobby which is easy to get started in. ",
  category       : sports.id,
  hobbiesAnswer  :"",
});

sailingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var runningHobby = new Hobby ({
  name           : "Running",
  description    : "Let me say a quick something about marathons, it is not easy BUT it is much easier than you probably think. Most people assume that you have to be superman, young and very fit but let me tell you that with proper training ANYBODY can run a marathon. Running casually or in a Marathon is not only a great exercise to become fit, but an incredible way to take your mind off work or school. Many people who enjoy running casually many times start participating in Marathons which are extremely rewarding ",
  category       : sports.id,
  hobbiesAnswer  :"",
});

runningHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var swimmingHobby = new Hobby ({
  name           : "Swimming",
  description    : "Swimming is a terrific sport and a great way to get fit. It is a sport which builds strength as well as cardio fitness. There are many different styles and techniques in swimming, each with its own benefits. ",
  category       : sports.id,
  hobbiesAnswer  :"",
});

swimmingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var fishingHobby = new Hobby ({
  name           : "Fishing",
  description    : "Fishing is a great way to relax and get away on weekends. It is very popular in ability to be a exciting and challenging sport or a calming hobby. Starting out is very easy to do and depends largely on where you live and what is available in your area. ",
  category       : sports.id,
  hobbiesAnswer  :"",
});

fishingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var rockClimbingHobby = new Hobby ({
  name           : "Rock Claimbing",
  description    : "Rock Climbing (or Mountain Climbing as it is also called) is composed of two main styles, indoor gym climbing which has grown in popularity thanks to ease and safety, and outdoor mountain climbing which is self descriptive and simply amazing. Both are highly recommended and a challenging and fulfilling experience. I recommend you first try going to one of the many great indoor climbing gyms across the London and world to see if you like the sport. They are very safe and easy to start in. Afterwards if you enjoy it and would like to try outdoor climbing there are many great guided tours available ",
  category       : sports.id,
  hobbiesAnswer  :"",
});

rockClimbingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var skyDivingHobby = new Hobby ({
  name           : "Skydiving ",
  description    : "Skydiving is one of the most exhilarating and heart pounding experiences you will ever attempt. Free falling at high speeds is sure to excite most anybody. Due to the falling cost and rising safety standards, it has become very accessible and has grown in popularity in the last few years. Contrary to popular belief skydiving has become fairly safe and mishaps are few and far between. Normally first jumps are done in tandem (with a licensed professional firmly strapped to your back.) No experience or training is necessary. ",
  category       : exercise.id,
  hobbiesAnswer  :"",
});

skyDivingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var surfingHobby = new Hobby ({
  name           : "Surfing ",
  description    : "There is not much to say about surfing except you have to try it to understand why it is so great. Spending sunny days at the beach, the thrill of catching a wave, hanging out with friends. These are all reasons why surfing has become so popular over the past 50 year and will only get more popular.It is an easy sport to start out in and contrary to popular belief is not very difficult. Nowadays there are great beginner surfboards that are more stable and easy to use than was previously available. ",
  category       : exercise.id,
  hobbiesAnswer  :"",
});

surfingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var skateboardingHobby = new Hobby ({
  name           : "Skateboarding ",
  description    : "Skateboarding is simply an awesome sport. Whether you want to use it as transportation or just having fun, learning to ride can be very fun. It is very easy to start and learn as all you need is your board. After learning the basics there are a lot of different things you can go into, from jumping without ramps to doing different tricks and even riding on half pipes and obstacle courses. Starting out is as easy as buying a board and riding around. The first thing you need is a starter board and you can get started immediately. Most boards come complete, but if you want you can put custom wheels and other accessories. There are two different types of skateboards you can buy, there are regular board for riding around and performing tricks or a longer board for cruising around longer distances or at higher speeds.",
  category       : exercise.id,
  hobbiesAnswer  :"",
});

skateboardingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var yogaHobby  = new Hobby ({
  name           : "Yoga ",
  description    : "Yoga is a great for mental and spiritual relaxation as well as promoting fitness and health. There are two paths you can choose to start; finding a teacher in your area to take lessons or like most people starting yoga in the privacy of your own home.",
  category       : exercise.id,
  hobbiesAnswer  :"",
});

yogaHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});


var hikingHobby  = new Hobby ({
  name           : "Hiking ",
  description    : "Hiking in the great outdoors is a truly exhilarating experience. Hiking takes you to the most beautiful places in nature and gives you a great workout at the same time. There are overnight hiking trips as well as one day excursions. ",
  category       : exercise.id,
  hobbiesAnswer  :"",
});

hikingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});
// Kayak_and_Canoe

var kayakAndCanoeHobby  = new Hobby ({
  name           : "Kayak and Canoe ",
  description    : "The sport of kayaking and canoeing is a terrific way to get outdoor, see some beautiful sites, and also increase your upper body strength and overall cardio health. There are many types of kayaking, from intense to very tranquil. ",
  category       : exercise.id,
  hobbiesAnswer  :"",
});

kayakAndCanoeHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var taiChiHobby  = new Hobby ({
  name           : "Tai Chi",
  description    : "Tai Chi is a incredible hobby to learn in that it is very relaxing and will keep you very fit at the same time. ",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

taiChiHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var judoHobby  = new Hobby ({
  name           : "Judo",
  description    : "Judo, which means 'gentle way' is a modern Japanese martial art and combat sport. It is comprised of throwing your opponent to the ground and subduing him. It is a very fun hobby to learn and is high recommended.",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

judoHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var capoeiraHobby  = new Hobby ({
  name           : "Capoeria",
  description    : "Capoeira : This Afro-Brazilian art form mixes dance, music, and martial arts to create an amazing experience. It has grown in popularity immensely the past few years and looks like it will continue to grow. This sport is a terrific hobby to learn as it is very fun and can be practiced in your own home.",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

capoeiraHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var kungFuHobby  = new Hobby ({
  name           : "Kung Fu",
  description    : "Kung Fu: This Chinese Martial art also known as Wushu is an amazing hobby to start, as it is great for self defense, can strengthen your body, and can be learned in most cities",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

kungFuHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var taekwondoHobby  = new Hobby ({
  name           : "Taekwondo",
  description    : "Taekwondo: This Korean martial art which translates into 'to strike or break with foot and fist', is a very fun and fulfilling hobby to learn. It will put you in terrific physical shape and can be easily be learned with hard work and dedication.",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

taekwondoHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

var boxingHobby  = new Hobby ({
  name           : "Boxing",
  description    : "Boxing for competition, for fitness, or self defense are all great reasons to start out.",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

boxingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});

// Comic_Books/Manga
// Chess
// Dominoes
// Poker
// Video_Games
// Birdwatching

var comicBooksHobby  = new Hobby ({
  name           : "Comic Books",
  description    : "Collecting comics has been a national favorite since Superman appeared in the 1930`s. From there the comic book industry has advanced a great deal to the point where today there are tens of thousands of new comics every year and collector editions can fetch high prices. Reading and collecting comics can be very fun as they now have complex storylines, terrific comic book art, intense dialogues, and incredible graphics. ",
  category       : martialArts.id,
  hobbiesAnswer  :"",
});

boxingHobby.save(function(err, hobby) {
  if (err) return console.log(err);
  console.log("Category was saved!", hobby);
});
