//const addname = require("../controller/nameController");
const Name = require("../model/name");
const express = require("express");
const router = express.Router();

router.post("/new", (req, res) => {
  const newName = new Name({ name: req.body.name });
  newName
    .save()
    .then((name) => res.json(name))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
