const express = require("express");
const app = express();
const router = require("./routers");
require("dotenv").config();

app.use(router);

app.listen("4000", () => {
  console.log("Back-End Running at port 4000");
});

//mongodb+srv://Rafi_Islam:<password>@cluster0.ejbh7.mongodb.net/<dbname>?retryWrites=true&w=majority
