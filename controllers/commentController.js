const Comment = require("../models/Comment");

exports.commentOnQuestion = async (req, res) => {
  const comment = await Comment.create({
    content: req.body.content,
    question: req.params.qid,
    author: req.user,
  });
  res.status(201).json(comment);
};

exports.commentOnAnswer = async (req, res) => {
  const comment = await Comment.create({
    content: req.body.content,
    answer: req.params.aid,
    author: req.user,
  });
  res.status(201).json(comment);
};

exports.getComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id).populate("author", "name");
  res.json(comment);
};
