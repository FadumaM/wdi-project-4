var express  = require('express');
var router   = express.Router();


//********* Controller *************//

var usersController             = require("../controllers/usersController");
var authenticationsController   = require("../controllers/authenticationsController");
var categoryController   = require("../controllers/categoryController");
var hobbysController   = require("../controllers/hobbysController");


//******* Routes ***********//

router.route('/login').post(authenticationsController.login);
router.route('/register').post(authenticationsController.register);
router.route('/auth/facebook').post(authenticationsController.facebook);

router.route('/users')
  .get(usersController.index);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update);

router.route('/users/:userId/hobbies/:id/save')
  .get(usersController.hobbySave);


router.route('/hobby')
  .get(hobbysController.index);

router.route('/hobby/:id')
  .get(hobbysController.show);


router.route('/category')
    .get(categoryController.index);

router.route('/category/:id')
    .get(categoryController.show);


module.exports = router;
