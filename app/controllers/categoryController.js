var Category   = require("../models/category");

function CategoryIndex(req, res) {
  Hobby.find(function(err, category){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(category);
  });
}


function CategoryShow(req, res) {
  Hobby.findbyId(req.params.id).exec(function(err, category){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(category);
  });
}


module.exports = {
  index : CategoryIndex,
  show  : CategoryShow
};
