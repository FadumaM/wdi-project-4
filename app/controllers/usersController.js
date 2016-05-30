var User  = require("../models/user");

function usersIndex(req, res) {
  User.find(function(err, users){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(users);
  });
}

function usersShow(req, res) {
  User.findById(req.params.id).populate("hobbies").exec(function(err, user){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(user);
  });
}

function usersUpdate(req, res){
  User.findByIdAndUpdate({ _id: req.params.id }, req.body.user, { new: true }, function(err, user){
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json(err);
    res.status(200).json( user );
  });
}

function usersHobbiesSave(req, res) {
  var userId = req.params.userId;
  var hobbiesId = req.params.id;
  User.findByIdAndUpdate({ _id: userId }, {
    $addToSet: { hobbies: hobbiesId }
  },
  {
    new: true
  }).populate("hobbies").exec(function(err, trainer){
    if (err) return res.status(500).json(err);
    res.status(201).json( user );
  });
}

module.exports = {
  index       : usersIndex,
  show        : usersShow,
  update      : usersUpdate,
  hobbySave   : usersHobbiesSave
};
