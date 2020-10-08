const DOMquestion = document.querySelectorAll('#question');
let DOMqArr = Array.from(DOMquestion);
const input = document.querySelectorAll('input');
const options = document.querySelectorAll('.option-container');


let score = 0;

options.forEach(function (cur) {
    cur.addEventListener('click', inputCheck);
});



// options.addEventListener('click', inputCheck);

function inputCheck(e) {
    e.preventDefault();

    input.checked = true;
    console.log(input);
}


let questions = [
    {
        question: 'Vilken veckodag',
        answers: {
            0: 'Falukorv',
            1: 'gladpack',
            2: 'motorolja',
            3: 'helium'
        },
        correctAns: 'alt3'
    },
    {
        question: 'Vilken juice',
        answers: {
            0: 'Falukorv',
            1: 'gladpack',
            2: 'motorolja',
            3: 'helium'
        },
        correctAns: 'alt3'
    },
    {
        question: 'Vilken dagbok',
        answers: {
            0: 'Falukorv',
            1: 'gladpack',
            2: 'motorolja',
            3: 'helium'
        },
        correctAns: 'alt3'
    },
    {
        question: 'Vilken fot',
        answers: {
            0: 'Falukorv',
            1: 'gladpack',
            2: 'motorolja',
            3: 'helium'
        },
        correctAns: 'alt3'
    },
    {
        question: 'Vilken veckodag',
        answers: {
            0: 'Falukorv',
            1: 'gladpack',
            2: 'motorolja',
            3: 'helium'
        },
        correctAns: 'alt3'
    }
];

// for (answers in questions) {
//     console.log(`${answers} EMELLAN ${question[answers]}`);
// }



for (var i = 0; i < 5; i++) {
    DOMqArr[i].textContent = questions[i].question;
    const options = [];
    options.push(DOMqArr[i].querySelectorAll('.option'));
    console.log(options);

    options[i].forEach(cur => cur.textContent = questions[i].answers[i]);


}


/* function createQuestion() {

    let section = document.createElement('section');

    section.innerHTML =
        `<section id="question1">
        <div class="question-card">
            <h3 id="question" class="question">Vad är en veckodag?</h3>
            <h4 class="question-number">Fråga 1</h4>
            <div class="option-container">
                <input type="radio" name="opt1" id="opt1">
                <label for="opt1" class="option">${questions.answers[0]}</label>
            </div>
            <div class="option-container">
                <input type="radio" name="opt1" id="opt2">
                <label for="opt2" class="option">${questions.answers[1]}</label>
            </div>
            <div class="option-container">
                <input type="radio" name="opt1" id="opt3">
                <label for="opt3" class="option">${questions.answers[2]}</label>
            </div>
            <div class="option-container">
                <input type="radio" name="opt1" id="opt4">
                <label for="opt4" class="option">${questions.answers[3]}</label>
            </div>
            <button class="btn" onclick="window.location.href='#question2'">Nästa fråga</button>
        </div>
    </section>`
    return section;
}

createQuestion(); */