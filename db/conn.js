const mongoose = require("mongoose");
require("dotenv").config();

//connection
const db=mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB`);
});

module.exports = db;