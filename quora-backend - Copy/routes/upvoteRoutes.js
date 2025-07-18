const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  upvoteQuestion, upvoteAnswer, removeUpvote
} = require("../controllers/upvoteController");

router.post("/question/:qid", protect, upvoteQuestion);
router.post("/answer/:aid", protect, upvoteAnswer);
router.delete("/:type/:id", protect, removeUpvote);

module.exports = router;
