//Handle requests for user information
const express = require("express")
const database = require("../../database/mock_data")

const router = express.Router()


router.get("/get-all", (req, res) => {
  const users = database.get_all_users()

  res.send(users)

})



module.exports = { router }