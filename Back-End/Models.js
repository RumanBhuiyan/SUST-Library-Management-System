const mongoose = require("mongoose");
const Schema = require("./Schemas");
const myBooks = require("./InitialData");
const { SignUpSchema } = require("./Schemas");
const { UserSchema } = require("./Schemas");

const Books = mongoose.model("books", Schema);

const Students = mongoose.model("students", SignUpSchema);

const Users = mongoose.model("userinfos", UserSchema);

//After Running once don't run below commenting portion again & agin
//otherwise same documents willbe inserted again& again into your database
// Books.insertMany([...myBooks], (data, error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//     console.log("Data Inserted Successfully");
//   }
// });

module.exports = Books;
module.exports.Students = Students;
module.exports.Users = Users;
