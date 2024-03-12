const express = require("express");
const user = require("./src/api/user");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", user.router);
// app.get('/', function(req, res) {
//     res.send("Hello World")
// }
// )

app.listen(3000, (errors) => {
  if (errors) console.error("not working");
  else console.log("Listening on Port 3000");
});
