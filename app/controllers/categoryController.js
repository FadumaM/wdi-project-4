var Category   = require("../model/hobby");

function CategoryIndex(req, res) {
  Hobby.find(function(err, users){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(users);
  });
}


function CategoryShow(req, res) {
  Hobby.findbyId(req.params.id).exec(function(err, users){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(users);
  });
}


module.export = {
  index : Categoryindex,
  show  : Categoryindex
};
