const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookList = new Schema({
  bookname: String,
  bookstatus: String,
  startdate: String,
  enddate: String,
  bookimageurl: String,
  borrowedBy: String,
});

const SignUpSchema = new Schema({
  username: String,
  regno: String,
  gmail: String,
  password: String,
});

const UserSchema = new Schema({
  userLoggedIn: Boolean,
  username: String,
  userregno: String,
});

module.exports = BookList;
module.exports.SignUpSchema = SignUpSchema;
module.exports.UserSchema = UserSchema;
