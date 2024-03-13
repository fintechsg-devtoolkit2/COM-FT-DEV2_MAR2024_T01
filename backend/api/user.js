//Handle requests for user information
const express = require("express");
const connection = require("../database");

const router = express.Router();

router.post("/details", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const queryString = `SELECT * FROM users WHERE email='${email}' LIMIT 1`;

  connection.query(queryString, function (err, user) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!user || user.length === 0) {
      // check if user is empty or not found
      return res.status(404).json({ error: "User not found" });
    }

    console.log(user);
    res.json(user[0]); // assuming you only want to return the first user
  });
});

module.exports = { router };
