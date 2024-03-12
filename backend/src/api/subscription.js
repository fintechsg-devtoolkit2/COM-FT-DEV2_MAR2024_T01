//Handle requests for subscription
const express = require("express");
const routerSubscription = express.Router();

// API endpoint to handle POST request with fullName, email, savingsOption
routerSubscription.post("/", (req, res) => {

return res.text("POSTresponse")
});
                        
module.exports = { routerSubscription };
