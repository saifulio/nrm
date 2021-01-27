const express = require("express");
const app = express();
const cors = require("cors");
const connectdb = require("./dbinit");
const User = require("./models").User;

connectdb();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const user = await User.findByPk(1);
    const response = { message: `This response came from the node.js app. User ${user.username} is on the database.` };
    res.send(response);
  } catch (error) {
    res.status(422).send(error);
  }
});
app.listen(5000, () => console.log("The node.js app is listening on port 5000."));

