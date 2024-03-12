//Handle requests for subscription
const express = require("express");
const routerSubscription = express.Router();

// API endpoint to handle POST requests with email payload
routerSubscription.post("/", (req, res) => {

  // if (!email) {
  //   return res.status(400).json({ error: "Email is required" });
  // }

  // dummy user
//   const user = {
//     id: 1,
//     name: "Jane Doe",
//     email: "jane@example.com",
//     planType: "Premium",
//   };

//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   // Return dummy user details
//   return res.json(User added);
// });

return res.json({ Success: "POSTresponse" })
  
module.exports = { routerSubscription };
