var Hobby   = require("../models/hobby");


  function HobbyIndex(req, res) {
    Hobby.find().populate(categories).exec(function(err, users){
      if (err) return res.status(404).json({ message: 'Something went wrong.' });
      res.status(200).json(users);
    });
  }


  function HobbyShow(req, res) {
    Hobby.findOne(req.params.id).exec(function(err, users){
      if (err) return res.status(404).json({ message: 'Something went wrong.' });
      res.status(200).json(users);
    });
  }

  module.exports = {
    index : HobbyIndex,
    show  : HobbyShow
  };
