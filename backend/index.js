const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/router");

app.use(cors());
app.use(express.json());
app.use("/new", router);

app.listen(3000, () => {
  console.log("server connect");
});
