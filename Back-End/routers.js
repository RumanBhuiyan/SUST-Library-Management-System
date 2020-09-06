const express = require("express");
const router = express.Router();
require("dotenv").config();

const mongoose = require("mongoose");
const Books = require("./Models");
const nodemailer = require("nodemailer");

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const admin = mongoose.model("admins", adminSchema);

const webinfoSchema = new mongoose.Schema({
  adminLoggedIn: Boolean,
});
const webinfos = mongoose.model("webinfos", webinfoSchema);

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
  Books.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/data", (req, res) => {
  const { bookname, bookimageurl } = req.body;

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
  Books.findOne({ bookname: req.body.bookname }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data === null) {
        res.send("Enter a valid Book name");
      } else {
        Books.deleteOne({ bookname: req.body.bookname }, (error) => {
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
  Books.findOne({ bookname: req.body.bookname }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data === null) {
        res.send("Enter a valid Book name");
      } else {
        Books.updateMany(
          { bookname: req.body.bookname },
          { borrowedBy: req.body.borrowedBy, bookstatus: "Not Available" },
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
    to: req.body.gmail,
    subject: "Purchasing Book",
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Email Sent Successfully");

  //Gmail.com doesn't allow to send message like this for several
  //vulnerabilities thats why to use this service you need to enable
  // less secure gmail service of your gmail account from here
  //https://myaccount.google.com/lesssecureapps?pli=1
  // You can disable it anytime also
});

router.put("/data/updatebook", (req, res) => {
  Books.findOne({ bookname: req.body.bookname }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data === null) {
        res.send("Enter a valid Book name");
      } else {
        Books.updateMany(
          { bookname: req.body.bookname },
          {
            borrowedBy: req.body.borrowedBy,
            startdate: req.body.startdate,
            enddate: req.body.enddate,
            bookstatus: "Not Available",
          },
          (error) => {
            if (error) {
              console.log(error);
            } else {
              res.send("Book Borrowed Successfully");
            }
          }
        );
      }
    }
  });
});

router.post("/admin/login", (req, response) => {
  admin
    .find({ username: req.body.username })
    .then((res) => {
      if (res.length <= 0) {
        response.send(false);
      } else {
        if (res[0].password === req.body.password) {
          response.send(true);
        } else {
          response.send(false);
        }
      }
    })
    .catch((err) => console.log(err));
});

router.get("/webinfo", (req, res) => {
  webinfos
    .find({})
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => console.log(err));
});

router.post("/webinfo", (req, res) => {
  webinfos.updateOne(
    { _id: "5f547102e22ad95d5a397f37" },
    { adminLoggedIn: req.body.adminLoggedIn },
    (data, error) => {
      if (error) {
        console.log(error);
      } else {
        webinfos
          .find({})
          .then((data) => res.send(data))
          .catch((error) => console.log(error));
      }
    }
  );
});

module.exports = router;
