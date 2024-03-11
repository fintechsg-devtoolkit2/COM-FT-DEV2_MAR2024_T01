//handle GET requests for plans

const express = require("express")
const database = require("../../database/subscriptonPlans")


const router = express.Router ()

router.get("/plans", (req,res) =>{
    const plans = database.get_all_plans()

    res.send(plans)
})

module.exports = { router }