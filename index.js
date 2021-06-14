"use strict";

const page = document.querySelector(".landing");
const gameWindow = document.querySelector(".game-window");
const home = document.querySelector(".container");
const footer = document.querySelector(".footer");
const btnStart = document.querySelector(".start");

const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
let i = 0;
let final = "";
var score = 0;
const names = [
  ["afcxmip", "smhbeann"],
  ["lizoldyk", "swaghajjipajjix"],
  ["makhmali", "sakecgal"],
  ["noweakfoot", "MansooriMason"],
  ["suyogyag", "rupupupu"],
  ["Umanga", "iconicinnit"],
  ["chavanprashh", "cravingcakee"],
  ["notabot103", "nabin"],
  ["utdmasxn", "fcbpuighive"],
  ["piquiruig", "clayboiprati"],
];
let j = -1;

const answers = [1, 1, 0, 0, 1, 0, 0, 1, 0, 1];
const photos = {
  afcxmip:
    "https://pbs.twimg.com/profile_images/1402523282516049924/LrKON3rc_400x400.jpg",
  smhbeann:
    "https://pbs.twimg.com/profile_images/1398155156143828993/ti2-xl6H_400x400.jpg",
  lizoldyk:
    "https://pbs.twimg.com/profile_images/1403747460711813124/GF1gpTub_400x400.jpg",
  swaghajjipajjix:
    "https://pbs.twimg.com/profile_images/1403758309253914626/A4K0YLDN_400x400.jpg",
  makhmali:
    "https://pbs.twimg.com/profile_images/1401504730086404097/2_uoySeA_400x400.jpg",
  sakecgal:
    "https://pbs.twimg.com/profile_images/1402296077261279232/_56lPQrL_400x400.jpg",
  noweakfoot:
    "https://pbs.twimg.com/profile_images/1397568046974128131/gcbVz5e8_400x400.jpg",
  MansooriMason:
    "https://pbs.twimg.com/profile_images/1343171889200390144/z7VH8l6W_400x400.jpg",
  suyogyag:
    "https://pbs.twimg.com/profile_images/1402835859913658375/2Mt1FsHO_400x400.jpg",
  rupupupu:
    "https://pbs.twimg.com/profile_images/1397824634469318657/j_yylIn4_400x400.jpg",
  fcbpuighive:
    "https://pbs.twimg.com/profile_images/1397882603437395968/_yd8eN0N_400x400.jpg",
  iconicinnit:
    "https://pbs.twimg.com/profile_images/1400929280125661186/U0IGyQpl_400x400.jpg",
  chavanprashh:
    "https://pbs.twimg.com/profile_images/1399693690088529922/LVV9Hyjb_400x400.jpg",
  cravingcakee:
    "https://pbs.twimg.com/profile_images/1402329471848312833/stb8V5KY_400x400.jpg",
  notabot103:
    "https://pbs.twimg.com/profile_images/1403369022247161861/WTVvjxZE_400x400.jpg",
  nabin:
    "https://pbs.twimg.com/profile_images/1403378286730911752/RDtOji-Z_400x400.jpg",
  piquiruig:
    "https://pbs.twimg.com/profile_images/1403248420488290309/pIMZDVrY_400x400.jpg",
  clayboiprati:
    "https://pbs.twimg.com/profile_images/1403342315759063043/166QPBOM_400x400.jpg",
  Umanga:
    "https://pbs.twimg.com/profile_images/1402542407766331392/pAUHRVir_400x400.jpg",
  utdmasxn:
    "https://pbs.twimg.com/profile_images/1399174550512824323/yA6FX8zw_400x400.jpg",
};

let questionHtml =
  '<div class="game-window"><h3 class="question">Who is the troll ?</h3><div class="options"> <div class="option-row"><img src="%LINK1%" alt="" class="option-img"><div class="option 0"><p class="letter">A : %NAME1% </p> </div> </div> <div class="option-row"> <img src="%LINK2%" alt="" class="option-img "> <div class="option 1"> <p class="letter">B : %NAME2% </p> </div> </div> </div> <div class="scorediv"> <p class="score">Score : %SCORE%</p> </div></div>';

const initiate = function () {
  home.classList.add("hidden");
  footer.classList.add("hidden");
};

const newQuestion = function (j) {
  console.log(j);
  let newQuestionHtml = questionHtml.replace("%NAME1%", names[j][0]);

  newQuestionHtml = newQuestionHtml.replace("%NAME2%", names[j][1]);

  newQuestionHtml = newQuestionHtml.replace("%LINK1%", photos[names[j][0]]);
  newQuestionHtml = newQuestionHtml.replace("%LINK2%", photos[names[j][1]]);

  newQuestionHtml = newQuestionHtml.replace("%SCORE%", score);
  console.log(newQuestionHtml);

  page.innerHTML = newQuestionHtml;
};

const lastPage = function (score) {
  const header = document.querySelector(".header");
  header.classList.add("hidden");
  if (score < 5) {
    final =
      '<div class="finalpage"><h1>You dont know trolls <br><span class="unicode no red">&#10006;</span></h1> <p class ="finalscore red"> Score : %SCORE% / 10</p></div>';
  } else if (score >= 5 && score < 7) {
    final =
      '<div class="finalpage"><h1><span class="white">Your troll knowledge is    </span><span class="red">AVERAGE</span></h1> <br><span class="unicode red">&#10006;</span> </h1> <p class ="finalscore ">Your Score : %SCORE% / 10</p></div>';
  } else if (score == 7 || score == 8) {
    final =
      '<div class="finalpage"><h1><span class="white">Your troll knowledge is    </span><span class="green">GOOD</span></h1> <br><span class="unicode green">&#10004;</span> </h1> <p class ="finalscore ">Your Score : %SCORE% / 10</p></div>';
  } else if (score == 9) {
    final =
      '<div class="finalpage"><h1><span class="white">Your troll knowledge is    </span><span class="green">ELITE</span></h1> <br><span class="unicode green">&#10004;</span> </h1> <p class ="finalscore ">Your Score : %SCORE% / 10</p></div>';
  } else if (score == 10) {
    final =
      '<div class="finalpage"><h1><span class="white">You are  </span><span class="green">VISIONARY</span></h1> <br><span class="unicode green">&#10004;</span> </h1> <p class ="finalscore ">Your Score : %SCORE% / 10</p></div>';
  }

  final = final.replace("%SCORE%", score);
  const page1 = document.querySelector(".landing");
  page1.innerHTML = final;
};

const correct = function () {
  let output =
    '<div class="correctdiv overlaydiv"><h1 class="correctpop overlaypop">CORRECT !</h1><img src="tick.png" class="anspic"></div>';
  const gameWindow = document.querySelector(".game-window");
  gameWindow.innerHTML += output;
  score++;
  if (j == 9) {
    lastPage(score);
  } else {
    setTimeout(start, 1000);
  }
};

const incorrect = function () {
  let output =
    '<div class="overlaydiv"><h1 class="overlaypop incorrectpop">INCORRECT</h1><img src="cross.png" class="anspic"></div>';
  const gameWindow = document.querySelector(".game-window");
  gameWindow.innerHTML += output;
  if (j == 9) {
    lastPage(score);
  } else {
    setTimeout(start, 1000);
  }
};
const checkAnswer = function (ans, j) {
  let correctAns = answers[j];
  console.log(ans);
  console.log(j);
  if (ans == correctAns) {
    console.log("Correct Answer");
    correct(j);
  } else {
    console.log("Incorrect answer");
    incorrect(j);
  }
};

const start = function () {
  j++;
  console.log("reset");

  initiate();

  newQuestion(j);
  const option = document.querySelectorAll(".option");
  option.forEach((e) => {
    e.addEventListener("click", function () {
      let inputAns = this.classList[1];
      checkAnswer(inputAns, j);
    });
  });
};

btnStart.addEventListener("click", function () {
  start();
});
/*
const start = function () {
  htmlStart.innerHTML =
    '<div class="game-window"> <h3 class="question">Who is the troll ?</h3> <div class="options"> <div class="option-row"> <img src="https://pbs.twimg.com/profile_images/1398155156143828993/ti2-xl6H_400x400.jpg" alt="" class="option-img"> <div class="option"> <p class="letter">A : smhbeann </p> </div> </div> <div class="option-row"> <img src="https://pbs.twimg.com/profile_images/1401504730086404097/2_uoySeA_400x400.jpg" alt="" class="option-img "> <div class="option"> <p class="letter">B : makhmali </p> </div> </div> </div> <div class="scorediv"> <p class="score">Score : 0</p> </div></div>';
  console.log("clicked");
};

btnStart.addEventListener("click", start());
const reset = function () {
  htmlStart.innerHTML =
    '<div class="container"> <div class="row"> <img src="https://pbs.twimg.com/profile_images/1398155156143828993/ti2-xl6H_400x400.jpg" alt="" class="preview-1"> <img src="https://pbs.twimg.com/profile_images/1397568046974128131/gcbVz5e8_400x400.jpg" alt="" class="preview-1"> <img src="https://pbs.twimg.com/profile_images/1401504730086404097/2_uoySeA_400x400.jpg" alt="" class="preview-1"> </div> <button class="start">Start</button> <div class="row bottom"> <img src="https://pbs.twimg.com/profile_images/1397824634469318657/j_yylIn4_400x400.jpg" alt="" class="preview-1"> <img src="https://pbs.twimg.com/profile_images/1395677924972371972/TgHsXbvv_400x400.jpg" alt="" class="preview-1"> <img src="https://pbs.twimg.com/profile_images/1402542407766331392/pAUHRVir_400x400.jpg" alt="" class="preview-1"> </div> </div> <footer> <p class="paragraph">Check your troll knowledge by answering who the troll is from two options in each question. Options are full of generational trolls from twitter.com </p> </footer>';
};

btnStart.addEventListener("click", initialize());
btnReset.addEventListener("click", reset());
*/
