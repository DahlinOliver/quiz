/* const input = document.querySelectorAll("input"); */

const submitBtn = document.querySelector(".submit-btn");

let score = [];

// Array with questions and answers
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

// Dynamically generate HTML
function createQuestionsHTML() {
  let sections = [];

  for (let i = 0; i < questions.length; i++) {
    let section = document.createElement("section");
    section.id = `question${i + 1}`;

    let HTML = `<div class="question-card">
                <h3 id="question" class="question">${questions[i].question}</h3>
                <h4 class="question-number">Fråga ${i + 1}</h4>
                <div class="option-container">
                    
                    <label for="a${i}" class="option"><input type="radio" name="opt${i + 1}" id="a${i}">${questions[i].answers.a
      }</label>
                </div>
                <div class="option-container">
                    
                    <label for="b${i}" class="option"> <input type="radio" name="opt${i + 1}" id="b${i}">${questions[i].answers.b
      }</label>
                </div>
                <div class="option-container">
                    
                    <label for="c${i}" class="option"><input type="radio" name="opt${i + 1}" id="c${i}">${questions[i].answers.c
      }</label>
                </div>
                <div class="option-container">
                    
                    <label for="d${i}" class="option"><input type="radio" name="opt${i + 1}" id="d${i}">${questions[i].answers.d
      }</label>
                </div>`;

    let HTMLNext = `<button class="btn" onclick="window.location.href='#question${i + 2
      }'">Nästa fråga</button>`;

    let HTMLPrev = `<button class="btn" onclick="window.location.href='#question${i}'">
        Tillbaka</button>`;

    let HTMLsubmit = `<button class="btn submit-btn" onclick="window.location.href='#summary'">Rätta</button>`;

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

// display all questions
displayQuestion();

// randomly sets background color for each section
function setBg() {
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;

  return `#${randomColor}`;
}

// set background for sections
setBg();

const lastQuestion = document.getElementById(`question${questions.length}`);

lastQuestion.addEventListener("click", (e) => {
  const { target } = e;

  // remove all events but submit event
  if (!target.classList.contains("submit-btn")) {
    return;
  }

  // run correct answer function when submitted
  correct();
});

function correct() {
  let corrAns = questions.map((el) => el.correctAns);

  // grab questions from DOM
  const quest = document.querySelector(".questions");

  // checked values nodelist turned into array
  const checked = Array.from(
    quest.querySelectorAll("input[type=radio]:checked")
  );

  let userAns = checked.map(e => e.id.substr(0, 1));

  // loop through questions and add points for correct answer
  for (let i = 0; i < questions.length; i++) {

    // add 1 for correct answer
    if (corrAns[i] === userAns[i]) {
      score.push(1);
    } else {
      score.push(0);
    }
  }

  // reduce method to add corr answer points
  const reducer = (acc, cur) => acc + cur;
  const total = score.reduce(reducer);


  displayResult(total);
}

function displayResult(total) {
  const section = document.createElement('section');
  section.id = 'summary';

  section.innerHTML = `<div class="summary-container">
  <h2>Ditt quizresultat är här!</h2>
  <p>Du fick <span class="corr-answer">${total}</span> rätt av ${questions.length} möjliga!</p>
  </div>`;

  document.querySelector(".questions").appendChild(section);
}


// @TODO: make entire DIV clickable instead of only label
// @TODO: allow answers to only be submitted once


/* // Button DIV click checkbox
options.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'DIV') {
    input.checked = true;
  }
});

console.log(evt.target.tagName); */
const options = document.querySelectorAll(".option-container");

options.forEach(cur => cur.addEventListener('click', evt => {

  const radio = evt.target.querySelector('input');
  radio.checked = true;

}));