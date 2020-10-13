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



//spar ner alla DOM-ställen med #question i nodeList
const DOMquestion = document.querySelectorAll('#question');

//gör om nodeList till Array pga jag vet inte om man kan looopa över 
// nodeLists på samma sätt..
let DOMqArr = Array.from(DOMquestion);

// loopar igenom alla frågor
for (let i = 0; i < questions.length; i++) {
    //ändrar textinnehåll i varje DOM-element som är en fråga
    DOMqArr[i].textContent = questions[i].question;

    // spar ner alla .option som hör till frågan i en nodeList
    let options = DOMqArr[i].parentElement.querySelectorAll('.option');

    // gör om nodeList till Array 
    let optionsArr = Array.from(options);

    // Sparar alla svarsalternativ i en array
    let answersArr = Object.values(questions[i].answers);

    // Loop i loopen för att vara kvar på samma fråga och
    // loopa igenom frågans svarsalternativ
    for (let j = 0; j < optionsArr.length; j++) {
        // varje DOM element får nu nytt textinnehåll från
        //svarsalternativs arrayen!
        optionsArr[j].textContent = answersArr[j];
    }  
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