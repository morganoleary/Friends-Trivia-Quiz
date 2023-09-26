let buttons = document.getElementsByTagName('button')[0];
let startButton = document.getElementsByClassName('start-button')[0];
let quizArea = document.getElementsByClassName('quiz-area')[0];
let homePage = document.getElementsByClassName('start-page')[0];

buttons.addEventListener('click', function () {
    if (this.getAttribute('data-type') === "begin-quiz") {
        startQuiz();
    } else {
        alert("Oops! Something has gone wrong!");
    }
});

function startQuiz() {

    console.log("starting");
    startButton.style.visibility = 'hidden';
    homePage.style.visibility = 'hidden';
    quizArea.style.visibility = 'visible';

    displayQuestion();
}

function displayQuestion() {

}

function selectAnswer() {

}

function incrementCorrectAnswer() {

}

function incrementIncorrectAnswer() {

}

/*
let questions = [
    {
        question: 'In which episode did ....',
        answers: [
            { text: 'The one where...', correct: true },
            { text: 'The one when...', correct: false },
            { text: 'The one when...', correct: false },
            { text: 'The one when...', correct: false },
        ]
    }
];
*/
