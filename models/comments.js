const mongoose = require("mongoose");

//comment Schema for comments collection with data validation
const commentSchema = new mongoose.Schema(
  {
    comment_id:{
        type: Number,
        required: true,
      },
    user_id: {
        type: Number,
        required: true,
      },
      post_id:{
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
        message: "Comment is required, cannot be empty.",
      },
    },
  { versionKey: false }
);

//indexing for comment_id field for comments collection
commentSchema.index({ comment_id: 1 });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
