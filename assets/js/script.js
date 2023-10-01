import { questions } from '../assets/js/questions.js';

// Get DOM elements
const buttons = document.getElementsByClassName('btn')[0];
const startButton = document.querySelector('.start-button');
const questionElement = document.querySelector('.question-line');
const answerButtons = document.querySelectorAll('.answer-option');
const nextQuestionButton = document.querySelector('.next-question');
const correctScoreElement = document.getElementById('score-correct');
const incorrectScoreElement = document.getElementById('score-incorrect');
let currentQuestionIndex = 0;
let correctScore = 0;
let incorrectScore = 0;

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

// Function to display a question
function displayQuestion(index) {
    let currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;
    // Disable the Next Question button
    nextQuestionButton.disabled = true;
    // Loop through answer buttons with forEach
    answerButtons.forEach((button, i) => {
        button.textContent = currentQuestion.answers[i].text;
        // Set the dataset to determine if an answer is correct
        if (currentQuestion.answers[i].correct) {
            button.dataset.correct = "true";
        } else {
            button.dataset.correct = "false";
        }
        // Add a click event listener to enable the Next Question button on answer selection
        button.addEventListener("click", () => {
            selectAnswer();
            // Enable the Next Question button
            nextQuestionButton.disabled = false;
        });
    });
}

// Add event listener to Next button to display the next question
nextQuestionButton.addEventListener("click", displayNextQuestion);

// Function to display the next question
function displayNextQuestion() {
    currentQuestionIndex++;
    resetButtonStyles();
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        // Handle the end of quiz
        // Show the user's score
        showResults();
    }

    // Enable all answer buttons for the next question
    answerButtons.forEach(button => {
        button.disabled = false;
    });

    // Remove event listeners from answer buttons
    answerButtons.forEach(button => {
        button.removeEventListener("click", () => {
            selectAnswer();
            // Enable the Next Question button
            nextQuestionButton.disabled = false;
        });
    });
}

// Function to handle selection of an answer
function selectAnswer() {
    const selectedBtn = event.target;
    const data = selectedBtn.dataset.correct;
    // Check if the dataset of answers is true or false
    if (data == "true") {
        // Change color to green if correct
        selectedBtn.classList.add("correct");
        // Increment correct score
        correctScore++;
    } else if (data == "false") {
        // Change color to red if incorrect
        selectedBtn.classList.add("incorrect");
        // Increment incorrect score
        incorrectScore++;
    } else {
        alert("Please select an answer :D");
    }
    // Update and display scores
    updateScoreDisplay();
    // Disable answer buttons
    disableButtons();
}

// Function to update score tally
function updateScoreDisplay() {
    // Update correct score display
    correctScoreElement.textContent = correctScore;
    // Update incorrect score display
    incorrectScoreElement.textContent = incorrectScore;
}

// Function to disable answer buttons
function disableButtons() {
    // Disable answer buttons once an answer is chosen
    answerButtons.forEach(button => {
        button.removeEventListener("click", () => {
            selectAnswer();
            // Enable the Next Question button
            nextQuestionButton.disabled = false;
        });
    });
}

// Function to reset button styles
function resetButtonStyles() {
    answerButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
    });
}

// Function to show final quiz results
function showResults() {
    // Handle showing the quiz results/display the final score
}