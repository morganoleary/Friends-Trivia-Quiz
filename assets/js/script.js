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
let totalQuestions = 25;
let questionsAnswered = 0;

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
    },
    {
        question: "The series 'Friends' is set in which city?",
        answers: [
            { text: 'Los Angeles', correct: false },
            { text: 'New York City', correct: true },
            { text: 'Miami', correct: false },
            { text: 'Seattle', correct: false },
        ]
    },
    {
        question: "What is Monica skilled at?",
        answers: [
            { text: 'Bricklaying', correct: false },
            { text: 'Singing', correct: false },
            { text: 'Cooking', correct: true },
            { text: 'American football', correct: false },
        ]
    },
    {
        question: "What’s the name of the 1950s-themed diner where Monica worked as a waitress?",
        answers: [
            { text: 'Marilyn & Audrey', correct: false },
            { text: 'Twilight Galaxy', correct: false },
            { text: 'Marvin\'s', correct: false },
            { text: 'Moondance Diner', correct: true },
        ]
    },
    {
        question: "Which cartoon character was on Phoebe’s thermos that Ursula threw under a bus?",
        answers: [
            { text: 'Pebbles Flinstone', correct: false },
            { text: 'Yogi Bear', correct: false },
            { text: 'Judy Jetson', correct: true },
            { text: 'Bullwinkle', correct: false },
        ]
    },
    {
        question: "What's the name of Janice's first husband?",
        answers: [
            { text: 'Sid Goralnik', correct: true },
            { text: 'Gary Litman', correct: false },
            { text: 'Rob Bailystock', correct: false },
            { text: 'Nick Layster', correct: false },
        ]
    },
    {
        question: "What job does Ross have?",
        answers: [
            { text: 'Artist', correct: false },
            { text: 'Photographer', correct: false },
            { text: 'Paleontologist', correct: true },
            { text: 'Insurance salesman', correct: false },
        ]
    },
    {
        question: "What does Joey never share?",
        answers: [
            { text: 'His books', correct: false },
            { text: 'His food', correct: true },
            { text: 'His information', correct: false },
            { text: 'His DVD\'s', correct: false },
        ]
    },
    {
        question: "Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives?",
        answers: [
            { text: 'Pete Becker', correct: false },
            { text: 'Ross Geller', correct: false },
            { text: 'Joey Tribbiani', correct: true },
            { text: 'Eddie Menuek', correct: false },
        ]
    },
    {
        question: "What’s the name of the grumpy person who works at the coffee shop?",
        answers: [
            { text: 'Herman', correct: false },
            { text: 'Gunther', correct: true },
            { text: 'Frasier', correct: false },
            { text: 'Eddie', correct: false },
        ]
    },
    {
        question: "Who sang the Friends theme?",
        answers: [
            { text: 'The Rembrandts', correct: true },
            { text: 'The Banksys', correct: false },
            { text: 'The Constables', correct: false },
            { text: 'The Da Vinci Band', correct: false },
        ]
    },
    {
        question: "What kind of uniform does Joey wear to Monica and Chandler’s wedding?",
        answers: [
            { text: 'Chef', correct: false },
            { text: 'Fire fighter', correct: false },
            { text: 'A baseball player', correct: false },
            { text: 'Soldier', correct: true },
        ]
    },
    {
        question: "What are Ross and Monica's parents called?",
        answers: [
            { text: 'Jack and Jill', correct: false },
            { text: 'Philip and Holly', correct: false },
            { text: 'Jack and Judy', correct: true },
            { text: 'Margeret and Peter', correct: false },
        ]
    },
    {
        question: "When Ross and Rachel were“on a break, Ross slept with Chloe. Where does she work?",
        answers: [
            { text: 'Xerox', correct: true },
            { text: 'Microsoft', correct: false },
            { text: 'Domino\'s', correct: false },
            { text: 'Bank of America', correct: false },
        ]
    },
    {
        question: "Chandler’s mom had an interesting career and even more interesting love life. What’s her name?",
        answers: [
            { text: 'Priscilla Mae Galway', correct: false },
            { text: 'Mary Jane Blaese', correct: false },
            { text: 'Nora Tyler Bing', correct: true },
            { text: 'Jessica Grace Carter', correct: false },
        ]
    },
    {
        question: "Monica and Chandler met on Thanksgiving in 1987. She pursued her career as a chef because Chandler complimented her on which dish?",
        answers: [
            { text: 'Green bean casserole', correct: false },
            { text: 'Meatloaf', correct: false },
            { text: 'Stuffing', correct: false },
            { text: 'Macaroni and cheese', correct: true },
        ]
    },
];

// Function to randomize questions - using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);

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
    // Hide the results page
    const resultsPage = document.querySelector('.results-page');
    resultsPage.style.display = 'none';
}

// Add event listener to Next button to display the next question
nextQuestionButton.addEventListener("click", displayNextQuestion);

// Function to stop quiz after 10 questions are answered
function stopQuiz() {
    return questionsAnswered >= 10;
}

// Function to display the next question
function displayNextQuestion() {
    currentQuestionIndex++;
    resetButtonStyles();
    questionsAnswered++;
    // End quiz after 10 questions of if there are no more questions
    if (stopQuiz() || currentQuestionIndex >= questions.length) {
        showResults();
        return; // Exit the function
    }

    displayQuestion(currentQuestionIndex);

    // Enable all answer buttons for the next question
    answerButtons.forEach(button => {
        button.disabled = false;
    });
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

        // Remove previous event listeners to avoid duplicates
        button.removeEventListener('click', handleAnswerClick);

        // Add a click event listener to enable the Next Question button on answer selection
        button.addEventListener("click", handleAnswerClick);

    });
}

function handleAnswerClick() {
    selectAnswer();
    // Enable the Next Question button
    nextQuestionButton.disabled = false;
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

// Function to disable answer buttons once an answer is selected
function disableButtons() {
    answerButtons.forEach(button => {
        if (questionsAnswered < 9) {
            button.removeEventListener("click", () => {
                selectAnswer();
                // Enable the Next Question button
                nextQuestionButton.disabled = false;
            });
        } else {
            button.disabled = true;
            nextQuestionButton.disabled = false;
        }
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
    // Show results/feedback page
    resultsPage.style.display = 'block';

    // Hide quiz area (*****NOT WORKING*****)
    quizArea.style.display = 'none';

}