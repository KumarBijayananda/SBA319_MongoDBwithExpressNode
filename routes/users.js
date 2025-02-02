const express = require("express");
const router = express.Router();

const db = require("../db/conn.js");

const User = require("../models/users.js");

//routes to handle /users endpoints with get and post method
router
  .get("/", async (req, res) => {
    let result = await User.find().limit(10);
    res.status(200).send(result);
  })
  .post("/", async (req, res) => {
    try {
      let result = await User.findOne().sort({ _id: -1 });

      if (result.user_id) req.body.user_id = result.user_id + 1;
      else req.body.user_id = 1;

      await User.create(req.body);
      res.status(201).send(req.body);
    } catch (err) {
      if (err.name === "ValidationError")
        return res.status(400).send(err.message);
    }
  });


//routes to handle /users/:id endpoints with patch method
router.get("/:id", async (req, res) => {
    const query = await User.findOne({ user_id: req.params.id });
    if (query) {
      res.status(200).send(query);
    } else {
      res.send(`No user found with  id ${req.params.id}!!`);
    }
})
.patch("/:id", async (req, res) => {
  try {
    const query = await User.findOne({ user_id: req.params.id });
    if (query) {
      await User.findOneAndUpdate({ user_id: req.params.id }, req.body);
      res.status(201).send(req.body);
    } else {
      res.send(`No user found with id ${req.params.id}!!`);
    }
  } catch (err) {
    if (err.name === "ValidationError")
      return res.status(400).send(err.message);
  }
});

module.exports = router;
