var express  = require('express');
var router   = express.Router();


//********* Controller *************//

var usersController             = require("../controllers/usersController");
var authenticationsController   = require("../controllers/authenticationsController");


//******* Routes ***********//

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

router.route('/users')
  .get(usersController.index);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update);

router.route('/users/:userId/hobbies/:id/save')
  .get(usersController.hobbySave);

module.exports = router;
