const mongoose=require("mongoose")

const postSchema = new mongoose.Schema({
    post_id:Number,
    user_id:Number,
    title:String,
    Review:String,
    stars:Number,
},
{ versionKey: false }
)

const User = mongoose.model("Post", userSchema)

module.exports=Post;