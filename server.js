//DEPENDENCIES
const express = require("express");
const app = express();
const PORT = 3000;

// const mongoose = require("mongoose");
const db = require("./db/conn.js");
require("dotenv").config();

//Import the User model
const User = require("./models/users.js");

const user = require("./routes/users.js")

//MIDDLEWARES
// mongoose.connect(process.env.MONGODB_URI);
// mongoose.connection.on("connected", () => {
//   console.log(`Connected to MongoDB`);
// });

app.use(express.json());

app.use("/users", user)

app.get("/", (req, res) => {
  res.send("Welcome to the Book Club");
});


app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});


