/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let set = ["hearts", "diamonds", "spades", "clubs"];
  let card = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function shuffle(item) {
    return item[Math.floor(Math.random() * item.length)];
  }
  let newSet = shuffle(set);
  let newCard = shuffle(card);

  console.log(newSet);
  console.log(newCard);

  function createCard() {
    let element = document.querySelectorAll("#top, #bottom");

    element.forEach(elem => elem.classList.add(`${newSet}`));
    let element2 = document.querySelector("#number");
    element2.innerHTML = `${newCard}`;
  }

  createCard();

  // document.querySelector("#btn");

  setTimeout(function() {
    window.location.reload(1);
  }, 10000);
};
