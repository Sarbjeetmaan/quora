const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
}, { timestamps: true });

module.exports = mongoose.model("Answer", answerSchema);
