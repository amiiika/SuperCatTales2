//fadeout intro
const fadeOutIntro = () => {
  const playBtn = document.querySelector(".playBtn");
  const startScreen = document.querySelector(".startScreen");
  const selectScreen = document.querySelector(".selectScreen");
  const navbar = document.querySelector(".navbar");

  //start button clicked
  playBtn.addEventListener("click", () => {
    startScreen.classList.add("fadeOut");
    selectScreen.classList.add("fadeIn");
    navbar.classList.add("fadeIn");
  });
};

fadeOutIntro();


