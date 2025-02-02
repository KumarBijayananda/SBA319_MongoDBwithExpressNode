const express = require("express")
const router = express.Router();

const db = require("../db/conn.js");

const Comment = require("../models/comments.js");


//routes to handle /comments endpoints with get and post method
router.get("/", async (req, res) => {
    let result = await Comment.find().limit(10);
    res.status(200).send(result);
  })
  .post("/", async (req, res) => {
    try {
        let result = await Comment.findOne().sort({ _id: -1 });

        if (result.comment_id) req.body.comment_id = result.comment_id + 1;
        else result.comment_id = 1;
    
        await Comment.create(req.body);
        res.send(req.body);
    } catch (err) {
        if (err.name === 'ValidationError') return res.status(400).send(err.message);
      }
  });

//routes to handle /comments/:id endpoints with get and delete method
  router.get("/:id", async (req, res) => {
      const query = await Comment.findOne({ comment_id: req.params.id });
      if (query) {
        res.status(201).send(query);
      } else {
        res.send(`No user found with  id ${req.params.id}!!`);
      }
  })
.delete("/:id", async (req, res) => {
    const commentToDel = await Comment.findOne({ comment_id: req.params.id });
    if (commentToDel) {
      await Comment.deleteOne({ comment_id: req.params.id });
      res.send(commentToDel);
    } else {
      res.send(`No comment found with id ${req.params.id}!!`);
    }
  });


  module.exports = router;