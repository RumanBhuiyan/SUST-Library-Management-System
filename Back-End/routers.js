const express = require("express");
const router = express.Router();
require("dotenv").config();

const mongoose = require("mongoose");
const Books = require("./Models");

router.get("/", (req, res) => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejbh7.mongodb.net/${process.env.DB_BOOKSDB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Connected with database successfully");
    })
    .catch((error) => {
      console.log(error);
    });

  res.send(`<h1>Welcome to library</h1>`);
});

module.exports = router;
