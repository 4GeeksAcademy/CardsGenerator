/* eslint-disable */
import "./style.css";

let iconsArray = ["fa-clover", "fa-spa", "fa-heart", "fa-diamond"];
let numbersAndLetter = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min) + min);

const showGeneratedCard = () => {
  const iconsHTML = document.getElementsByTagName("i");

  // GET ICON AND COLOR
  let color = "";
  const getIcon = iconsArray[getRandomNumber(0, iconsArray.length)];

  // CHANGE CARD COLOR

  for (let i = 0; i < iconsHTML.length; i++) {
    getIcon === "fa-clover" || getIcon === "fa-spa"
      ? (color = "black")
      : (color = "red");
    iconsHTML[i].classList.add(getIcon); // ASSING ICON
    iconsHTML[i].style.color = color; // ASSING COLOR
  }

  // CHANGE NUMBER OR LETTER

  const face = document.getElementById("face");
  face.innerText =
    numbersAndLetter[getRandomNumber(0, numbersAndLetter.length)];
};

showGeneratedCard();
