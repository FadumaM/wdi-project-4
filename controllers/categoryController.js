var Category   = require("../models/category");

function CategoryIndex(req, res) {
  Category.find(function(err, category){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(category);
  });
}

module.exports = {

  index : CategoryIndex
};
