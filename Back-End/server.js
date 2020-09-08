const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();
const cors = require("cors");

//before using router make sure you declared bodyParser priot to that
//otherwise requested data wont come to under server req.body object
const router = require("./routers");
app.use(router);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable("etag");

app.listen("4000", () => {
  console.log("Back-End Running at port 4000");
});
