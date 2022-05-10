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
  res.render("index");
});

//fadeout intro
const fadeOutIntro = () => {
  const playBtn = document.querySelector(".playBtn");
  const startScreen = document.querySelector(".startScreen");
  const selectScreen = document.querySelector(".selectScreen");

  //start button clicked
  playBtn.addEventListener("click", () => {
    startScreen.classList.add("fadeOut");
    selectScreen.classList.add("fadeIn");
  });
};

fadeOutIntro();

//localhost and other host codes if needed
app.listen(process.env.PORT || 4000, function () {
  console.log("The server has started :P");
});
