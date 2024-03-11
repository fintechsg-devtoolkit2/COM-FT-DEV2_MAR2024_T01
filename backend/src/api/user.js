//Handle requests for user information
const express = require("express")
const database = require("../../database/mock_data")

const router = express.Router()

router.post("/profile", (req, res) => {
  // const users = database.get_all_users()
  res.send("View user profile")
})

router.post("/create", (req, res) => {
  res.send("Create profile")
})

module.exports = { router }