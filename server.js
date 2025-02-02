//DEPENDENCIES
const express = require("express");
const app = express();
const PORT = 3000;

const db = require("./db/conn.js");
require("dotenv").config();

//Import the models for different data types
// const User = require("./models/users.js");

//Import the routes for different endponts
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")



//MIDDLEWARES
app.use(express.json());

app.use((req, res, next) => {
    const time = new Date();
    console.log(
      `----${time.toLocaleTimeString()}: Received a ${req.method} request to ${
        req.url
      }.`
    );
    next();
  });

app.use("/users", users);
app.use("/posts", posts);

app.get("/", (req, res) => {
  res.send("Welcome to the Book Club");
});


//Error handling middleware---------------
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });
  
  //If no endpoints are found use this to let the user know
  app.use((req, res) => {
    res.status(404).json({
      error: "Endpoint not found",
      path: req.originalUrl,
      method: req.method,
    });
  });

//SERVER port----------------------
app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});


