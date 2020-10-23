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
        question: 'Vilken veckodag är det idag?',
        answers: {
            a: 'Måndag',
            b: 'Tisdag',
            c: 'Onsdag',
            d: 'Lördag'
    },
        correctAns: '1'
    },
    {
        question: 'Vilken juice är godast?',
        answers: {
            a: 'Apelsin',
            b: 'Äpple',
            c: 'Ananas',
            d: 'Gurka'
    },
        correctAns: 'c'
    },
    {
        question: 'Vilken dagbok tillhör Bert?',
        answers: {
            a: 'Berts',
            b: 'Åkes',
            c: 'Lill-Eriks',
            d: 'Maggans'
    },
        correctAns: 'a'
    },
    {
        question: 'Vilken fot sitter till höger?',
        answers: {
            a: 'Höger foten',
            b: 'Vänster foten',
            c: 'Båda',
            d: 'Ingen'
    },
        correctAns: 'd'
    },
    {
        question: 'Vilken båt är längst?',
        answers: {
            a: 'Yatchen',
            b: 'Ekan',
            c: 'Färjan',
            d: 'Jollen'
    },
        correctAns: 'b'
    }
];


function createQuestionsHTML() {
    let sections = [];

    for (let i = 0; i < questions.length; i++) {

        let section = document.createElement('section');

        let HTML =
            `<section id="question${i+1}">
            <div class="question-card">
                <h3 id="question" class="question">${questions[i].question}</h3>
                <h4 class="question-number">Fråga ${i+1}</h4>
                <div class="option-container">
                    <input type="radio" name="opt1" id="opt1">
                    <label for="opt1" class="option">${questions[i].answers.a}</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt1" id="opt2">
                    <label for="opt2" class="option">${questions[i].answers.b}</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt1" id="opt3">
                    <label for="opt3" class="option">${questions[i].answers.c}</label>
                </div>
                <div class="option-container">
                    <input type="radio" name="opt1" id="opt4">
                    <label for="opt4" class="option">${questions[i].answers.d}</label>
                </div>`;

                let HTMLend = `<button class="btn" onclick="window.location.href='#question${i+2}'">Nästa fråga</button></div></div></section>`;

        if(i === 0) {
            section.innerHTML = HTML +  HTMLend;
        } else {
            section.innerHTML = HTML + `<button class="btn" onclick="window.location.href='#question${i}'">
            Tillbaka</button>` + HTMLend;
        }

        sections.push(section);

    }
    
    return sections;
}

function displayQuestion() {

    let sections = createQuestionsHTML();
    
    sections.forEach(cur => document.querySelector('.questions').insertAdjacentHTML('beforeend', cur.innerHTML));

}

displayQuestion();
