const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      created_at: { type: Date, default: Date.now },
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
  },
  { collection: "thoughts" }
);

module.exports = mongoose.model("Thought", ThoughtSchema);
