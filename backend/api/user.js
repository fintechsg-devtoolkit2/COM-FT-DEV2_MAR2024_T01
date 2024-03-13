//Handle requests for user information
const express = require("express");
const connection = require("../database");

const router = express.Router();

router.post("/details", (req, res) => {
  console.log("endpoint details called");
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

    // check if user is empty or not found
    if (!user || user.length === 0)
      return res.status(404).json({ error: "User not found" });

    const planType = user[0].plan_type;
    const extractedPlanType =
      planType === 3 ? "Enterprise" : planType === 2 ? "Premium" : "Basic";

    const extractedUser = {
      ...user[0], // assuming you only want to return the first user
      plan_type: extractedPlanType,
    };

    console.log(extractedUser);

    res.json(extractedUser);
  });
});

module.exports = { router };
