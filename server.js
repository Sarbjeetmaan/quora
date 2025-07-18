const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());

// DB connection
require("./config/db")();

// Base route (for testing root URL)
app.get("/", (req, res) => {
  res.send("Quora Backend API is running ✅");
});

// Routes
app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/answers", require("./routes/answerRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/upvote", require("./routes/upvoteRoutes"));
app.use("/api", require("./routes/followRoutes")); // follow/unfollow

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
