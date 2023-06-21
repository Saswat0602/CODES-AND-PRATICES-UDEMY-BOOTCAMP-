const express = require("express");
app = express();
const session = require("express-session");

const seccionsOptions = {
  secret: "this is not a good secrect",
  resave: false,
  saveUninitialized: false,
};

app.use(session(seccionsOptions));

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`you hav viewed this page  ${req.session.count}  times`);
});

app.get("/register", (req, res) => {
  const { username = "unknown" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});
app.get("/greet", (req, res) => {
  const { username } = req.session;
  res.send(`hay   welcome back ${username}`);
});

app.listen(3000, () => {
  console.log("app is listining on port 3000");
});
