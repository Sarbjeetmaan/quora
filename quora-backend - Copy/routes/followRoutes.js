const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  followUser, unfollowUser, getFollowers, getFollowing
} = require("../controllers/followController");

router.post("/follow/:uid", protect, followUser);
router.delete("/unfollow/:uid", protect, unfollowUser);
router.get("/followers/:uid", getFollowers);
router.get("/following/:uid", getFollowing);

module.exports = router;
