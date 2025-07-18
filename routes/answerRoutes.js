const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  postAnswer, getAnswers, updateAnswer, deleteAnswer
} = require("../controllers/answerController");

router.post("/:qid", protect, postAnswer);
router.get("/:qid", getAnswers);
router.put("/:aid", protect, updateAnswer);
router.delete("/:aid", protect, deleteAnswer);

module.exports = router;
