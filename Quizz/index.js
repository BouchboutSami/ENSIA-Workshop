import data from "./data.js";
let questions = "";
let originalcolor = "linear-gradient(to right, #2257e6, #477af5)";

data.forEach((element, i) => {
  let options = "";
  for (let index = 0; index < element.choices.length; index++) {
    options += `<option value="${element.choices[index]}">${element.choices[index]}</option>\n`;
  }
  console.log(options);
  questions += `<div class="card">
        <div class="card-head">
          <span class="normal">Question n°${element.id_question}</span>
          <span class="question"> ${element.title_question} </span>
        </div>
        <hr />
        <div class="card-body">
          <select class="select-answer" order="${i}">
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

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let allAnswered = true;
  answers.forEach((answer) => {
    answer.value == "" ? (allAnswered = false) : null;
  });
  if (allAnswered) {
    let note = 0;
    const maxnote = data.length;
    answers.forEach((answer, index) => {
      answer.value == data[index].answer ? (note += 1) : null;
    });
    (note / maxnote) * 100 < 33 ? (main.style.background = "red") : null;
    (note / maxnote) * 100 > 33 && (note / maxnote) * 100 < 66
      ? (main.style.background = "orange")
      : null;
    (note / maxnote) * 100 > 66 ? (main.style.background = "green") : null;
    window.scroll(0, 0);
    setTimeout(() => {
      main.style.background = originalcolor;
    }, 5000);
  } else {
    alert("Please answer all the questions");
  }
});
