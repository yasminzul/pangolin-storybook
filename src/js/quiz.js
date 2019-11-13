import _ from 'lodash';
import css from '../css/quiz.css';
var $ = require("jquery");

document.addEventListener("DOMContentLoaded", function(event) {
  const question = document.getElementById("question");
  const answers = document.getElementById("answers");
  const options = document.getElementsByClassName("answer");
  const nextQuestion = document.getElementById("next");
  const scoreDisplay = document.querySelector(".results-score");
  let score = document.getElementById("score");
  let timerDisplay = document.getElementById("time");
  let matches = [];
  let choices = [];
  let answer, currentTimer, playing, points, timer, total;
  let closeButton = document.getElementById("close-popup");
  let popup = document.getElementById("popup");

  function openPopup() {
    popup.style.opacity = "1";
    overlay.style.opacity = "1";
    popup.style.display = "block";
    overlay.style.display = "block";
    closeButton.addEventListener("click", start);
  }

  function closePopup() {
    popup.style.opacity = "0";
    overlay.style.opacity = "0";
    popup.style.display = "none";
    overlay.style.display = "none";
  }

  fetch(
    "https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/characters.json"
  )
    // fetch('js/characters.json')
    .then(resp => resp.json())
    .then(data => {
      let gotData = data;
      for (let i = 0; i < gotData.length; i++) {
        if (gotData[i].TvSeries.length === 0) {
          // Removes 1936 Characters who are not in the TV show.
          continue;
        } else if (gotData[i].Aliases.length === 0) {
          // Removes a further 89 Characters who don't have an alias.
          continue;
        } else if (gotData[i].Name == "") {
          // Removes "The Waif" who doesn't have a "real" name in this fantasy world
          continue;
        } else {
          // Create a new character object
          let character = {};
          character.name = gotData[i].Name;
          character.alias = [];
          // Check the alias in the data set
          for (let j = 0; j < gotData[i].Aliases.length; j++) {
            // Split the alias up into its own array
            let check = gotData[i].Aliases[j].split(" ");
            // For each part of the name to remove clues to the answers
            for (let k = 0; k < check.length; k++) {
              if (gotData[i].Name.includes(check[k])) {
                // Skip this Alias if any part matches the character name
                break;
                // If all parts of the name have been checked and the loop hasn't exited then we have a match for a game question.
              } else if (k == check.length - 1) {
                // console.log('Name: ' + gotData[i].Name + '. AKA: ' + gotData[i].Aliases[j]);
                character.alias.push(gotData[i].Aliases[j]);
                // console.log("Match!");
              }
            }
          }
          if (character.alias.length > 0) {
            matches.push(character);
          }
        }
      }
      total = matches.length - 1;
      // console.log(matches);
      // Added a Codepen thumbnail influencer to make the preview more interesting (See: https://codepen.io/demaine/pen/xNvOzq)
      if (!location.pathname.match(/fullcpgrid/i)) {
        openPopup();
      } else {
        start();
      }
    });
  // At this point all the potential questions have been found.
  // console.log(matches);

  function start() {
    points = 0;
    score.innerHTML = points;
    currentTimer = 60;
    playing = true;
    getNewQuestion();
    timerDisplay.innerHTML = currentTimer;
    closePopup();
    timer = setInterval(function() {
      updateTimer();
    }, 1000);
  }

  function updateTimer() {
    currentTimer--;
    timerDisplay.innerHTML = currentTimer;
    if (currentTimer === 0) {
      playing = false;
      endGame();
    }
  }

  function endGame() {
    clearInterval(timer);
    endRound();
    scoreDisplay.innerHTML = points;
    popup = document.getElementById("results");
    closeButton = document.getElementById("close-results");
    openPopup();
  }

  function getNewQuestion() {
    nextQuestion.style.opacity = 0;
    // Create a new array using the total of characters
    const randomOrder = [...Array(total).keys()].map(num => num + 1);
    randomOrder.sort(() => Math.random() - 0.5);
    choices = randomOrder.slice(0, 4);
    answer = choices[Math.floor(Math.random() * choices.length)];
    let alternatives = matches[answer].alias.length;
    question.innerHTML =
      "Who is " +
      matches[answer].alias[Math.floor(Math.random() * alternatives)] +
      "?";
    for (let i = 0; i < choices.length; i++) {
      options[i].innerHTML = matches[choices[i]].name;
    }
  }

  function checkAnswer(choice, id) {
    if (choice == matches[answer].name) {
      points += 10;
      options[id].classList.add("correct");
      answers.classList.add("disabled");
    } else {
      points -= 10;
      options[id].classList.add("wrong");
    }
    score.innerHTML = points;
    nextQuestion.style.opacity = 1;
  }

  function endRound() {
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("correct");
      options[i].classList.remove("wrong");
    }
    if (playing) {
      getNewQuestion();
    }
    answers.classList.remove("disabled");
  }

  answers.addEventListener("click", event => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    let chosen = event.target.innerHTML;
    let id = event.target.id.slice(-1);
    checkAnswer(chosen, id);
  });

  closeButton.addEventListener("click", start);
  nextQuestion.addEventListener("click", endRound);
});
