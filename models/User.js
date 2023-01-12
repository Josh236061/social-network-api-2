const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
require('./Thought');
const Schema = new mongoose.Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Username is required",
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [{ type: mongoose.Types.ObjectId , ref: "Thought" }],
    friends:[{type: mongoose.Types.ObjectId , ref: "User" }],
    friendCount: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", UserSchema);
