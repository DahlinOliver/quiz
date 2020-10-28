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
                    <input type="radio" name="opt${i + 1}" id="a">
                    <label for="a" class="option">${
                      questions[i].answers.a
                    }</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="b">
                    <label for="b" class="option">${
                      questions[i].answers.b
                    }</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="c">
                    <label for="c" class="option">${
                      questions[i].answers.c
                    }</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt${i + 1}" id="d">
                    <label for="d" class="option">${
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

// randomly sets background color for each section
function setBg() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;

  return `#${randomColor}`;
}
setBg();

const lastQuestion = document.getElementById(`question${questions.length}`);

lastQuestion.addEventListener("click", (e) => {
  const { target } = e;

  // remove all events but submit event
  if (!target.classList.contains("submit-btn")) {
    return;
  }

  correct();
  // rätta svar funktion
  // output till DOM
});

function correct() {
  let corrAns = questions.map((el) => el.correctAns);

  const quest = document.querySelector(".questions");

  const checked = Array.from(
    quest.querySelectorAll("input[type=radio]:checked")
  );

  let userAns = checked.map(e => e.id);
  console.log(userAns);

  for(let i = 0; i < questions.length; i++) {
    if(corrAns[i] === userAns[i]) {
      score.push(1);
    } else {
      score.push(0);
    }
  }

  // @TODO: jämföra checked med corrAns

  // Add value for each correct answer
  // If statement in forEach loop?



  const checkAnswers = checked.forEach((element) => {
    //console.log(element);
  });

  console.log(checkAnswers);


  // nodelist med index går att jmf med svar? correct answers array
}

function displayResult() {
  const section = document.createElement('section');
  section.classList.add = 'summary';
  
  section.innerHTML = `<div class="summary-container">
  <h2>Ditt quizresultat är här!</h2>
  <p>Du fick <span class="corr-answer">2</span> rätt av 5 möjliga!</p>
  </div>`;

  
  
}

correct();
