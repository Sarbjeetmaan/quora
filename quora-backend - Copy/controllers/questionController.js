const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
  const question = await Question.create({ ...req.body, author: req.user });
  res.status(201).json(question);
};

exports.getQuestions = async (req, res) => {
  const questions = await Question.find().populate("author", "name");
  res.json(questions);
};

exports.getQuestionById = async (req, res) => {
  const question = await Question.findById(req.params.id).populate("author", "name");
  res.json(question);
};

exports.updateQuestion = async (req, res) => {
  const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteQuestion = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
