const Upvote = require("../models/Upvote");

exports.upvoteQuestion = async (req, res) => {
  const exists = await Upvote.findOne({ user: req.user, question: req.params.qid });
  if (exists) return res.status(400).json({ message: "Already upvoted" });

  const upvote = await Upvote.create({ user: req.user, question: req.params.qid });
  res.status(201).json(upvote);
};

exports.upvoteAnswer = async (req, res) => {
  const exists = await Upvote.findOne({ user: req.user, answer: req.params.aid });
  if (exists) return res.status(400).json({ message: "Already upvoted" });

  const upvote = await Upvote.create({ user: req.user, answer: req.params.aid });
  res.status(201).json(upvote);
};

exports.removeUpvote = async (req, res) => {
  const { type, id } = req.params;
  let filter = { user: req.user };

  if (type === "question") filter.question = id;
  else if (type === "answer") filter.answer = id;
  else return res.status(400).json({ message: "Invalid type" });

  await Upvote.findOneAndDelete(filter);
  res.json({ message: "Upvote removed" });
};
