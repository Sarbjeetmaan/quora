const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  commentOnQuestion, commentOnAnswer, getComment
} = require("../controllers/commentController");

router.post("/question/:qid", protect, commentOnQuestion);
router.post("/answer/:aid", protect, commentOnAnswer);
router.get("/:id", getComment);

module.exports = router;
