const express = require("express");
const router = express.Router();
require("dotenv").config();

const mongoose = require("mongoose");
const Books = require("./Models");
const nodemailer = require("nodemailer");

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

router.get("/data", (req, res) => {
  //I am allowing client or front-end app to access this route
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  Books.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/data", (req, res) => {
  const { bookname, bookimageurl } = req.query;

  const book = new Books({
    bookname: bookname,
    bookstatus: "Available",
    startdate: null,
    enddate: null,
    bookimageurl: bookimageurl,
    borrowedBy: null,
  });
  book.save();
  res.send("Data Inserted Successfully");
});

router.delete("/data", (req, res) => {
  Books.findOne({ bookname: req.query.bookname }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data === null) {
        res.send("Enter a valid Book name");
      } else {
        Books.deleteOne({ bookname: req.query.bookname }, (error) => {
          if (error) {
            res.send(error);
          } else {
            res.send("Data Deleted Successfully");
          }
        });
      }
    }
  });
});

router.put("/data", (req, res) => {
  Books.findOne({ bookname: req.query.bookname }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data === null) {
        res.send("Enter a valid Book name");
      } else {
        Books.updateMany(
          { bookname: req.query.bookname },
          { borrowedBy: req.query.borrowedBy, bookstatus: "Not Available" },
          (error) => {
            if (error) {
              console.log(error);
            } else {
              res.send("Data Updated Successfully");
            }
          }
        );
      }
    }
  });
});

router.post("/data/mail", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_GMAIL,
      pass: process.env.MY_GMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.MY_GMAIL,
    to: req.query.gmail,
    subject: "Purchasing Book",
    text: req.query.message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Email Sent Successfully");
});

module.exports = router;
