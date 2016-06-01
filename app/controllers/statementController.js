var Statement   = require("../models/statement");


function statementsIndex(req, res) {
  Statement.find().populate('category').exec(function(err, statement){
    if (err) return res.status(404).json({ message: 'Something went wrong.' });
    res.status(200).json(statement);
  });
}

module.exports = {
  index : statementsIndex,
};
