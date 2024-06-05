const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Name");

const nameSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("names", nameSchema);
