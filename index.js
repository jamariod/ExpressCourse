const express = require("express");
//This is a node module used to handel file paths.
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Members");
const app = express();

//Initialize middleware
//app.use(logger);

//Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
//Used to handel form submissions
app.use(express.urlencoded({ extended: false }));

//Handlebars was only used as a reference
//Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members
  })
);
//In order to view the static page move this line ahead of the "Homepage Route"
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Members API Routes
app.use("/api/members", require("./routes/api/members"));
//This is used to look for another PORT just in case PORT 5000 in not available.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
