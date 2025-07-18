const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: String,
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  answer: { type: mongoose.Schema.Types.ObjectId, ref: "Answer" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
