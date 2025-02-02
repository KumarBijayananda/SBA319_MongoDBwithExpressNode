const express = require("express")
const router = express.Router();

const db = require("../db/conn.js");

const Post = require("../models/posts.js");

router.get("/", async (req, res) => {
    let result = await Post.find().limit(10);
    res.status(200).send(result);
  })
  .post("/", async (req, res) => {
    try {
        let result = await Post.findOne().sort({ _id: -1 });

    if (result.post_id) req.body.post_id = result.post_id + 1;
    else result.post_id = 1;

    await Post.create(req.body);
    res.send(req.body);
    } catch (err) {
        if (err.name === 'ValidationError') return res.status(400).send(err.message);
      }
  })
  .delete("/:id", async (req, res) => {
    try {
        const postToDel = await Post.findOne({ post_id: req.params.id });
    if (postToDel) {
      await Post.deleteOne({ post_id: req.params.id });
      res.send(postToDel);
    } else {
      res.send(`No comment found with id${req.params.id}!!`);
    }
    } catch (err) {
        if (err.name === 'ValidationError') return res.status(400).send(err.message);
      }
  });


  module.exports = router;