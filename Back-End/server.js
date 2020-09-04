const express = require("express");
const app = express();
const router = require("./routers");
require("dotenv").config();
// var cors = require("cors");
const cors = require("cors");

app.use(router);
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen("4000", () => {
  console.log("Back-End Running at port 4000");
});

//my mongodb atlas link : https://cloud.mongodb.com/v2/5f4fdfa116fc651a9ef4f9ed#metrics/replicaSet/5f4fe4a27d79fa324d83b7cd/explorer/booksdb
