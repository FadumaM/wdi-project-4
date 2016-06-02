var express  = require('express');
var router   = express.Router();


//********* Controller *************//

var usersController             = require("../controllers/usersController");
var authenticationsController   = require("../controllers/authenticationsController");
var statementController         = require("../controllers/statementController");
var categoryController          = require("../controllers/categoryController");
var hobbysController            = require("../controllers/hobbysController");
var eventsController            = require("../controllers/eventsController");


//******* Routes ***********//

router.route('/login').post(authenticationsController.login);
router.route('/register').post(authenticationsController.register);
router.route('/auth/facebook').post(authenticationsController.facebook);

router.route('/users')
  .get(usersController.index);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update);

router.route('/users/hobby/save')
  .post(usersController.hobbySave);


router.route('/hobby')
  .get(hobbysController.index);

router.route('/hobby/:id')
  .get(hobbysController.show);


router.route('/statement')
    .get(statementController.index);

router.route('/category')
    .get(categoryController.index);

router.route('/events/meetup/:name')
  .post(eventsController.meetup);

// router.route('/events/eventful');


module.exports = router;
