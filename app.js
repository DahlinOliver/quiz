const input = document.querySelectorAll("input");
const options = document.querySelectorAll(".option-container");
const submitBtn = document.querySelector(".submit-btn");

let score = [];

/* options.forEach(function (cur) {
    cur.addEventListener('click', inputCheck);
});
 */

// options.addEventListener('click', inputCheck);

/* function inputCheck(e) {
    e.preventDefault();

    input.checked = true;
    console.log(input);
} */

let questions = [
  {
    question: "Vilken veckodag är det idag?",
    answers: {
      a: "Måndag",
      b: "Tisdag",
      c: "Onsdag",
      d: "Lördag",
    },
    correctAns: "a",
  },
  {
    question: "Vilken juice är godast?",
    answers: {
      a: "Apelsin",
      b: "Äpple",
      c: "Ananas",
      d: "Gurka",
    },
    correctAns: "c",
  },
  {
    question: "Vilken dagbok tillhör Bert?",
    answers: {
      a: "Berts",
      b: "Åkes",
      c: "Lill-Eriks",
      d: "Maggans",
    },
    correctAns: "a",
  },
  {
    question: "Vilken fot sitter till höger?",
    answers: {
      a: "Höger foten",
      b: "Vänster foten",
      c: "Båda",
      d: "Ingen",
    },
    correctAns: "d",
  },
  {
    question: "Vilken båt är längst?",
    answers: {
      a: "Yatchen",
      b: "Ekan",
      c: "Färjan",
      d: "Jollen",
    },
    correctAns: "b",
  },
];

function createQuestionsHTML() {
  let sections = [];

  for (let i = 0; i < questions.length; i++) {
    let section = document.createElement("section");
    section.id = `question${i + 1}`;

    let HTML = `<div class="question-card">
                <h3 id="question" class="question">${questions[i].question}</h3>
                <h4 class="question-number">Fråga ${i + 1}</h4>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="opt1">
                    <label for="opt1" class="option">${
                      questions[i].answers.a
                    }</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="opt2">
                    <label for="opt2" class="option">${
                      questions[i].answers.b
                    }</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="opt3">
                    <label for="opt3" class="option">${
                      questions[i].answers.c
                    }</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="opt4">
                    <label for="opt4" class="option">${
                      questions[i].answers.d
                    }</label>
                </div>`;

    let HTMLNext = `<button class="btn" onclick="window.location.href='#question${
      i + 2
    }'">Nästa fråga</button>`;

    let HTMLPrev = `<button class="btn" onclick="window.location.href='#question${i}'">
        Tillbaka</button>`;

    let HTMLsubmit = `<button class="btn submit-btn">Rätta</button>`;

    let HTMLendSec = `</div></div>`;

    if (i === 0) {
      section.innerHTML = HTML + HTMLNext + HTMLendSec;
    } else if (i === questions.length - 1) {
      section.innerHTML = HTML + HTMLPrev + HTMLsubmit + HTMLendSec;
    } else {
      section.innerHTML = HTML + HTMLPrev + HTMLNext + HTMLendSec;
    }

    section.style.backgroundColor = setBg();

    sections.push(section);
  }

  return sections;
}

function displayQuestion() {
  let sections = createQuestionsHTML();

  sections.forEach((section) =>
    document.querySelector(".questions").appendChild(section)
  );
}

displayQuestion();

// @Todo: Display score function

// Antal rätta svar börjar på 0
// Lägg till 20% eller 1 poäng ifall rätt svar
// Ifall fel svar, inget händer!
// Output av score function presenteras

function setBg() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;

  return `#${randomColor}`;
}

// onload?
window.addEventListener("load", setBg);

setBg();

//   submitBtn.addEventListener('click', (e) => {
//       console.log(e.target);
//   });

const lastQuestion = document.getElementById(`question${questions.length}`);

lastQuestion.addEventListener("click", (e) => {
  const { target } = e;

  // ta bort alla event förutom submit
  if (!target.classList.contains("submit-btn")) {
    return;
  }

  correct();
  // rätta svar funktion
});

function correct() {
  let corrAns = questions.map((el) => el.correctAns);
  console.log(corrAns);

  const quest = document.querySelector(".questions");

  const checked = quest.querySelectorAll("input[type=radio]:checked");

  const checkAnswers = checked.forEach((element) => {
    console.log(element);
  });

  conbsole.log(checkAnswers);

  console.log(checked);
  // nodelist med index går att jmf med svar? correct answers array
}
