//Handle requests for user information
const express = require("express");
const database = require("../../database/mock_data");

const router = express.Router();

router.post("/profile", (req, res) => {
  // const users = database.get_all_users()
  res.send("View user profile");
});

router.post("/create", (req, res) => {
  res.send("Create profile");
});

// API endpoint to handle POST requests with email payload
router.post("/details", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  console.log(email);

  // dummy user
  const user = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    planType: "premium",
  };

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Return dummy user details
  return res.json(user);
});

module.exports = { router };
