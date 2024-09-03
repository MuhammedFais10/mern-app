const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/router");

app.use(cors());
app.use(express.json());
app.post("/new", router);

app.listen(7777, () => {
  console.log("server connect");
});
