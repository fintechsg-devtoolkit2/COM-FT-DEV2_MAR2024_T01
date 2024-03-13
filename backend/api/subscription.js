//Handle requests for subscription
const express = require("express");
const routerSubscription = express.Router();
const db = require("../database");

// API endpoint to handle POST request with name, email, plan_type
routerSubscription.post("/", (req, res) => {
  const { name, email, plan_type } = req.body;

  if (!name || !email || !plan_type) {
    return res
      .status(400)
      .json({ error: "Name, email, and plan_type are required fields" });
  }

  // Check if the user with the provided email already exists
  const checkUserQuery = `SELECT * FROM users WHERE email='${email}' LIMIT 1`;

  connection.query(checkUserQuery, (error, existingUser) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (existingUser.length > 0) {
      // If user exists, update the existing user
      const updateUserQuery = `UPDATE users SET name='${name}', plan_type='${plan_type}' WHERE email='${email}'`;

      connection.query(updateUserQuery, (updateError) => {
        if (updateError) {
          console.error(updateError);
          return res.status(500).json({ error: "Failed to update user" });
        }

        res.json({ message: "User updated successfully" });
      });
    } else {
      // If user doesn't exist, insert a new user
      const insertUserQuery = `INSERT INTO users (name, email, plan_type) VALUES ('${name}', '${email}', '${plan_type}')`;

      connection.query(insertUserQuery, (insertError) => {
        if (insertError) {
          console.error(insertError);
          return res.status(500).json({ error: "Failed to insert new user" });
        }

        res.json({ Status: "Success!" });
      });
    }
  });
});

module.exports = { routerSubscription };
