const express = require("express");
//This is a node module used to handel file paths.
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./Members");
const app = express();
//Initialize middleware
//app.use(logger);
//This gets all "members"
app.get("/api/members", (req, res) => res.json(members));
//Get single member
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
});
// Set static folder
app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//   //The "res" response will be sent to the browser
//   //   res.send("<h1>Hello World!!</h1>");
// });
//This is used to look for another PORT just in case PORT 5000 in not available.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
