const express = require("express")
const router = express.Router();

const db = require("../db/conn.js");

const Post = require("../models/posts.js");
const Comment = require("../models/comments.js");

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
    res.status(201).send(req.body);
    } catch (err) {
        if (err.name === 'ValidationError') return res.status(400).send(err.message);
      }
  });

router.get("/:id", async (req, res) => {
      const query = await Post.findOne({ post_id: req.params.id });
      if (query) {
        res.status(200).send(query);
      } else {
        res.send(`No user found with  id ${req.params.id}!!`);
      }
  })
  .patch("/:id", async (req, res) => {
    try {
      const query = await Post.findOne({ post_id: req.params.id });
      if (query) {
        await Post.findOneAndUpdate({ post_id: req.params.id }, req.body);
        res.status(201).send(req.body);
      } else {
        res.send(`No user found with  id ${req.params.id}!!`);
      }
    } catch (err) {
      if (err.name === "ValidationError")
        return res.status(400).send(err.message);
    }
  })
  .delete("/:id", async (req, res) => {
    const postToDel = await Post.findOne({ post_id: req.params.id });
    //check if the post exists
    if (postToDel) {
      await Post.deleteOne({ post_id: req.params.id });     //delete post with the specified id
      await Comment.deleteMany({post_id:req.params.id});  //also delete all the comments made on the post
      res.send(postToDel);
    } else {
      res.send(`No comment found with id${req.params.id}!!`);
    }
  });


  module.exports = router;