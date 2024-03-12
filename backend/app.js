const express = require("express");
const user = require("./src/api/user");
const subscription = require("./src/api/subscription");
const app = express();

var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/user", user.router);
app.use("/newSubscription", subscription.routerSubscription);

app.listen(3000, (errors) => {
  if (errors) console.error("not working");
  else console.log("Listening on Port 3000");
});
