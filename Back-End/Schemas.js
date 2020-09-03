const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookList = new Schema({
  bookname: String,
  bookstatus: String,
  startdate: String,
  enddate: String,
  bookimageurl: String,
});

module.exports = BookList;
