const express = require("express");
const app = express();
const router = require("./routers");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(router);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen("4000", () => {
  console.log("Back-End Running at port 4000");
});
