const express = require("express");
const user = require("./src/api/user");
const subscription = require("./src/api/subscription");
const app = express();

app.use(express.json())
app.use("/user", user.router)

app.get('/', function(req, res) {
    res.send(console.log("hello"))
}
)

// app.listen(3000, (errors) => {
//     if (errors)
//         console.error("not working")
//     else
//     console.log("Listening on Port 3000")
// })
