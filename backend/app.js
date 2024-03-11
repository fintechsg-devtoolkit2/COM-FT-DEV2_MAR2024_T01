const express = require("express");
const user = require("./src/api/user")
const app = express()

app.use(express.json())
app.use("/user/profile", user.router1)
app.use("/user/create". user.router2)
// app.get('/', function(req, res) {
//     res.send("Hello World")
// }
// )

app.listen(3000, (errors) => {
    if (errors)
        console.error("not working")
    else
    console.log("Listening on Port 3000")

})