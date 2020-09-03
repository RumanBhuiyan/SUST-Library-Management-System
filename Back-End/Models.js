const mongoose = require("mongoose");
const Schema = require("./Schemas");
const myBooks = require("./InitialData");

const Books = mongoose.model("books", Schema);

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
