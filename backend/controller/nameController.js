const Name = require("../model/name");

const addname = (req, res) => {
  const newName = new Name({
    name: req.body.name,
  });
  newName
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("Error inserting data:", error);
      res.status(500).send(error);
    });
};

module.exports = addname;
