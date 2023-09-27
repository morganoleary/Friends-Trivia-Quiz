// Get DOM elements
const buttons = document.getElementsByTagName('button')[0];
const homePageContent = document.getElementsByClassName('start-page')[0];
const startButton = document.getElementsByClassName('start-button')[0];
//const quizQuestions = document.getElementsByClassName('quiz-area');
//const question = document.getElementsByClassName('question-line')[0];
//const answerButton = document.getElementsByClassName('answer-buttons')[0];
const nextQuestion = document.getElementsByClassName('submit-answer')[0];
const chooseAnswer = document.getElementsByClassName('answer-option')[0];
const correctAnswer = document.getElementsByClassName('score-correct');
const incorrectAnswer = document.getElementsByClassName('score-incorrect');

let currentQuestionIndex = 0;
let score = 0;

// Wait for DOM to finish loading before beginning quiz
document.addEventListener("DOMContentLoaded", function () {

    // Add event listener to start button
    buttons.addEventListener('click', function () {
        if (this.getAttribute('data-type') === "begin-quiz") {
            startQuiz();
        } else {
            alert("Oops! Something has gone wrong!");
        }
    });
});

// Quiz questions and answers
const questions = [
    {
        question: "What is the name of Phoebe's alter-ego?",
        answers: [
            { text: 'Phoebe Neeby', correct: false },
            { text: 'Monica Bing', correct: false },
            { text: 'Regina Phalange', correct: true },
            { text: 'Elaine Benes', correct: false },
        ]
    },
    {
        question: "What is Janice most likely to say?",
        answers: [
            { text: 'Talk to the hand!', correct: false },
            { text: 'Oh... my... God!', correct: true },
            { text: 'Get me a coffee!', correct: false },
            { text: 'No way!', correct: false },
        ]
    },
    {
        question: "What is Chandler's middle name?",
        answers: [
            { text: 'Muriel', correct: true },
            { text: 'Jason', correct: false },
            { text: 'Kim', correct: false },
            { text: 'Zachary', correct: false },
        ]
    },
    {
        question: "What song is Phoebe best known for?",
        answers: [
            { text: 'Smelly Dog', correct: false },
            { text: 'Smelly Cat', correct: true },
            { text: 'Smelly Rabbit', correct: false },
            { text: 'Smelly Worm', correct: false },
        ]
    },
    {
        question: "What is the name of Joey's penguin?",
        answers: [
            { text: 'Snowflake', correct: false },
            { text: 'Waddle', correct: false },
            { text: 'Huggsy', correct: true },
            { text: 'Bobber', correct: false },
        ]
    },
    {
        question: "Rachel was popular in high school. Her prom date Chip ditched her for which girl at school?",
        answers: [
            { text: 'Sally Roberts', correct: false },
            { text: 'Valerie Thompson', correct: false },
            { text: 'Emily Foster', correct: false },
            { text: 'Amy Welsh', correct: true },
        ]
    },
    {
        question: "What pet did Ross own?",
        answers: [
            { text: 'A dog named Keith', correct: false },
            { text: 'A rabbit called Lancelot', correct: false },
            { text: 'A monkey named Marcel', correct: true },
            { text: 'A lizard named Alistair', correct: false },
        ]
    },
    {
        question: "Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?",
        answers: [
            { text: 'Italy', correct: true },
            { text: 'France', correct: false },
            { text: 'England', correct: false },
            { text: 'Greece', correct: false },
        ]
    },
    {
        question: "Who was Chandler's TV magazine always addressed to?",
        answers: [
            { text: 'Chanandler Bang', correct: false },
            { text: 'Chanandler Bong', correct: true },
            { text: 'Chanandler Bing', correct: false },
            { text: 'Chanandler Beng', correct: false },
        ]
    },
    {
        question: "What is the name of Rachel's Sphynx cat?",
        answers: [
            { text: 'Baldy', correct: false },
            { text: 'Sid', correct: false },
            { text: 'Mrs. Whiskerson', correct: true },
            { text: 'Felix', correct: false },
        ]
    }
];

// Quiz begins with click of "Begin Quiz" button
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // Label button; text will change at end of quiz
    nextQuestion.innerHTML = "Next Question";
    // Hide the start page
    startButton.style.visibility = 'hidden';
    homePageContent.style.visibility = 'hidden';
    displayQuestion();
}

function displayQuestion(questions) {
    //question.textContent = questions.question;
    let question = document.querySelector('.question-line');
    console.log(question);

    let answerButton = document.querySelectorAll('.answer-option');
    console.log(answerButton);

    /*for (let i = 0, i < questions.length, i++) {

    }

    /*answerButton.forEach(function (answers, [text]) {
        answers.textContent = question.answers[text];
    });


    /*if (currentQuestion < questions.length) {
        let currentQuestion = question[currentQuestionIndex];
        
    }

    /*currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
    });*/
}

function selectAnswer() {
    //chooseAnswer..
}

function incrementCorrectAnswer() {

}

function incrementIncorrectAnswer() {

}

function showResults() {
    // Re-label button
    nextQuestion.innerHTML = "Submit";
}

