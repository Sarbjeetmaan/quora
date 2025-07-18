const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion
} = require("../controllers/questionController");

router.post("/", protect, createQuestion);
router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.put("/:id", protect, updateQuestion);
router.delete("/:id", protect, deleteQuestion);

module.exports = router;
