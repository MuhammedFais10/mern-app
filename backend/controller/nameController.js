const Name = require("../model/name");

const addname = (req, res) => {
  const newName = new Name({
    name: req.body.name,
  });
  newName.save().then((result) => {
    res.json(result);
  });
};

module.exports = addname;
