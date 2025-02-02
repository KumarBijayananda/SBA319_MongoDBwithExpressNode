const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: {
        type: Number,
        required: true,
      },
    name: {
      type: String,
      required: true,
      message: "Name is required, cannot be empty.",
    },
    password: {
      type: String,
      required: true,
      message: "Password is required, cannot be empty.",
    },
    email: String,
    favBooks: Array,
  },
  { versionKey: false }
);

userSchema.index({ user_id: 1 });

const User = mongoose.model("User", userSchema);

module.exports = User;
