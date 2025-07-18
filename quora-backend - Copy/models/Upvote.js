const mongoose = require("mongoose");

const upvoteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", default: null },
  answer: { type: mongoose.Schema.Types.ObjectId, ref: "Answer", default: null },
}, { timestamps: true });

module.exports = mongoose.model("Upvote", upvoteSchema);
