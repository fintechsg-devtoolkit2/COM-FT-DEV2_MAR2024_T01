//Handle requests for subscription
const express = require("express");
const routerSubscription = express.Router();

// API endpoint to handle POST requests with email payload
routerSubscription.post("/", (req, res) => {

return res.json({ Success: "POSTresponse" })
});
                        
module.exports = { routerSubscription };
