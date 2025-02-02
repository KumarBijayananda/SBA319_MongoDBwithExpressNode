const express = require("express")
const router = express.Router();

const db = require("../db/conn.js");

const User = require("../models/users.js");

router.get("/", async (req, res) => {
    let result = await User.find().limit(10);
    res.status(200).send(result);
  }).post("/", async (req, res) => {
    let result = await User.findOne().sort({ _id: -1 });

    if (result.user_id) req.body.user_id = result.user_id + 1;
    else req.body.user_id = 1;

    await User.create(req.body);
    res.send(req.body);
  });

router.patch("/:id", async (req, res) => {
  const query = await User.findOne({ user_id: req.params.id });
  if (query) {
    await User.findOneAndUpdate({ user_id: req.params.id }, req.body);
    res.send(req.body);
  } else {
    res.send("No user found with that Id!!");
  }
});

module.exports = router;