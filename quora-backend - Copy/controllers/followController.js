const Follow = require("../models/Follow");

exports.followUser = async (req, res) => {
  const existing = await Follow.findOne({ follower: req.user, following: req.params.uid });
  if (existing) return res.status(400).json({ message: "Already following" });

  const follow = await Follow.create({ follower: req.user, following: req.params.uid });
  res.status(201).json(follow);
};

exports.unfollowUser = async (req, res) => {
  await Follow.findOneAndDelete({ follower: req.user, following: req.params.uid });
  res.json({ message: "Unfollowed" });
};

exports.getFollowers = async (req, res) => {
  const followers = await Follow.find({ following: req.params.uid }).populate("follower", "name");
  res.json(followers.map(f => f.follower));
};

exports.getFollowing = async (req, res) => {
  const following = await Follow.find({ follower: req.params.uid }).populate("following", "name");
  res.json(following.map(f => f.following));
};
