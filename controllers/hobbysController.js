var Hobby   = require("../models/hobby");


  function HobbyIndex(req, res) {
    Hobby.find(function(err, hobby){
      if (err) return res.status(404).json({ message: 'Something went wrong.' });
      res.status(200).json(hobby);
    });
  }


  function HobbyShow(req, res) {
    console.log(req.params);
    Hobby.findById(req.params.id).exec(function(err, hobby){
      if (err) return res.status(404).json({ message: 'Something went wrong.' });
      res.status(200).json(hobby);
    });
  }

  module.exports = {
    index : HobbyIndex,
    show  : HobbyShow
  };
