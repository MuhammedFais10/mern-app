const add = require("../controller/nameController");

const express = require("express");
const router = express.Router();

router.post("/add", add);

module.exports = router;
