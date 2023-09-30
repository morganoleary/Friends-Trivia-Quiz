// Get DOM elements
const buttons = document.getElementsByClassName('btn')[0];
const startButton = document.querySelector('.start-button');
const questionElement = document.querySelector('.question-line');
const answerButtons = document.querySelectorAll('.answer-option');
const nextQuestionButton = document.querySelector('.next-question');


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

    // Hide the start page
    const startPage = document.querySelector('.start-page');
    startPage.style.display = 'none';

    // Show the quiz area
    const quizArea = document.querySelector('.quiz-area');
    quizArea.style.display = 'block';

    // Display the first question
    displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {

    let currentQuestion = questions[index];

    questionElement.textContent = currentQuestion.question;

    questions.forEach(() => {
        currentQuestionIndex++;
    });
    // Clear previous answer buttons to update with current question's answers
    // Loop through buttons with forEach
    answerButtons.forEach((button, i) => {
        button.textContent = currentQuestion.answers[i].text;
        console.log(button);
        // Set the dataset to determine if an answer is correct
        if (currentQuestion.answers[i].correct) {
            button.dataset.correct = "true";
        } else {
            button.dataset.correct = "false";
        }

        console.log("Text content: ", button.textContent);
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * The below code was learned largely through the following YouTube video:
 * https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1403s 
 */
function selectAnswer(e) {

    const selectedBtn = e.target;
    console.log("Selected button: ", selectedBtn);

    const data = selectedBtn.dataset.correct;
    console.log(data);

    // Check if the dataset of answers is true or false
    if (data == "true") {
        console.log("It's correct!");
        // Add color to button in style.css
        selectedBtn.classList.add("correct");
        score++;
        disableButtons();
    } else if (data == "false") {
        console.log("Sorry! That's not the answer!");
        selectedBtn.classList.add("incorrect");
        score--;
        disableButtons();
    } else {
        alert("Please select an answer :D");
    }
}

function disableButtons() {
    // Disable answer buttons once an answer is chosen
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeEventListener("click", selectAnswer);
    }
}

// Add event listener to Next button to display the next question
nextQuestionButton.addEventListener("click", displayNextQuestion);

function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function incrementCorrectAnswer() {
    currentQuestionIndex = 0 + 1;
    nextQuestionButton.addEventListener("click", displayQuestion);
}

function incrementIncorrectAnswer() {
    currentQuestionIndex = 0 - 1;
    nextQuestionButton.addEventListener("click", displayQuestion);
}

function showResults() {

}

