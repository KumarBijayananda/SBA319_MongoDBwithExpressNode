const mongoose=require("mongoose")

//post Schema for posts collection with data validation
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

//indexing for post_id field for posts collection
postSchema.index({ post_id: 1 });

const Post = mongoose.model("Post", postSchema)

module.exports=Post;