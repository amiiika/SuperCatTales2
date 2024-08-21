//requiring modules
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
const ejs = require("ejs");

//enable the css, ejs and bodyparser
app.use(express.static("public"));
app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));

//host the views
app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/howToPlay", function (req, res) {
  res.render("howToPlay.ejs");
});

app.get("/catSelect", function (req, res) {
  res.render("catSelect.ejs");
});

app.get("/itemSelect", function (req, res) {
  res.render("itemSelect.ejs");
});

app.get("/worldSelect", function (req, res) {
  res.render("worldSelect.ejs");
});

//app listen on ports
app.listen(process.env.PORT || 3000, function () {
  console.log("the cats are running");
});
