import data from "./data.js"; //query to get the quizz from the database
let originalcolor = "linear-gradient(to right, #2257e6, #477af5)";
let questions = "";

data.forEach((element, index) => {
  let options = "";
  for (let indexO = 0; indexO < element.choices.length; indexO++) {
    options += `<option value="${element.choices[indexO]}">"${element.choices[indexO]}"</option> \n`;
  }
  questions += `<div class="card">
  <div class="card-head">
    <span class="normal">Question n°${index + 1}</span>
    <span class="question">
      ${element.title_question}
    </span>
  </div>
  <hr />
  <div class="card-body">
    <select class="select-answer" order="${index}">
      <option value="" selected disabled>
        Choose an answer
      </option>
      ${options}
    </select>
  </div>
</div>`;
});

const Qcontainer = document.querySelector(".questions");
Qcontainer.innerHTML = `${questions}\n<button class="button-answer">Soumettre</button>`;

const answers = document.querySelectorAll("div.card-body > select");
const btnSubmit = document.querySelector("button");
const main = document.querySelector(".main");

btnSubmit.addEventListener("click", (event) => {
  let allAnswered = true;
  answers.forEach((answer) => {
    answer.value == "" ? (allAnswered = false) : null;
  });
  if (allAnswered) {
    let note = 0;
    let maxNote = data.length;
    answers.forEach((answer, index) => {
      answer.value == data[index].answer ? (note += 1) : null;
    });
    (note / maxNote) * 100 < 35 ? (main.style.background = "#ff0e0e") : null;
    (note / maxNote) * 100 > 35 ? (main.style.background = "#ff7f00") : null;
    (note / maxNote) * 100 > 60 ? (main.style.background = "#4FBF26") : null;
    setTimeout(() => {
      main.style.background = originalcolor;
    }, 5000);
    window.scroll(0, 0);
  } else {
    alert("Please Answer all the questions before Submitting");
  }
});
