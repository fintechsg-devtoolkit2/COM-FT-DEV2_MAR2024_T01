//Handle requests for subscription
const express = require("express");
const routerSubscription = express.Router();
const db = require("../database/database");

// API endpoint to handle POST request with name, email, savingsOption
routerSubscription.post("/", (req, res) => {
  return res.json({ Status: "Success!" });
});

module.exports = { routerSubscription };
