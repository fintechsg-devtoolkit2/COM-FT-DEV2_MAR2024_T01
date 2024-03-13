//Handle requests for user information
const express = require("express");
const db = require("../../database/database");

const router = express.Router();

// API endpoint to handle POST requests with email payload
router.post("/details", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // // dummy user
  // const user = {
  //   id: 1,
  //   name: "Jane Doe",
  //   email: "jane@example.com",
  //   planType: "Premium",
  // };
  db.con.query(`SELECT * FROM b23_team1 WHERE email='${email}';`, function(err, user) {
    if (err) throw err;
    console.log(user) 
  })
  
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Return dummy user details
  return res.json(user);
});

module.exports = { router };
