const mongoose=require("mongoose")

const postSchema = new mongoose.Schema({
    post_id:{
        type: Number,
        required: true,
      },
    user_id:{
        type: Number,
        required: true,
      },
    title: {
        type: String,
        required: true,
        message: "Title is required, cannot be empty.",
      },
      post: {
        type: String,
        required: true,
        message: "Title is required, cannot be empty.",
      },
    stars:Number,
},
{ versionKey: false }
)

postSchema.index({ post_id: 1 });

const Post = mongoose.model("Post", postSchema)

module.exports=Post;