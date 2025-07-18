const Answer = require("../models/Answer");

exports.postAnswer = async (req, res) => {
  const answer = await Answer.create({
    question: req.params.qid,
    author: req.user,
    content: req.body.content,
  });
  res.status(201).json(answer);
};

exports.getAnswers = async (req, res) => {
  const answers = await Answer.find({ question: req.params.qid }).populate("author", "name");
  res.json(answers);
};

exports.updateAnswer = async (req, res) => {
  const updated = await Answer.findByIdAndUpdate(req.params.aid, req.body, { new: true });
  res.json(updated);
};

exports.deleteAnswer = async (req, res) => {
  await Answer.findByIdAndDelete(req.params.aid);
  res.json({ message: "Deleted" });
};
