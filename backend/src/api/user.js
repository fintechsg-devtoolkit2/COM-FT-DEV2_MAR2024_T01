//Handle requests for user information
const express = require("express")
const database = require("../../database/mock_data")

const router = express.Router()

router1.post("/user/profile", (req, res) => {
  // const users = database.get_all_users()
  res.send("View user profile")
})

router2.post("/user/create", (req, res) => {
  res.send("Create profile")
})

module.exports = { router1, router2 }