// Add event listener to start the quiz when the login button is clicked
document.getElementById('login-button').addEventListener('click', startQuiz);

// Define the questions for the quiz
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2 // Correct answer index
    },
    {
        question: "Which language is used for web development?",
        answers: ["Python", "JavaScript", "C++", "Java"],
        correct: 1
    },
    {
        question: "What is the result of 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestionIndex = 0; // To keep track of the current question
let score = 0; // To keep track of the user's score
let timer; // Timer variable
const questionDuration = 15; // Time duration for each question in seconds

// Function to start the quiz
function startQuiz() {
    const username = document.getElementById('username').value.trim();
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'flex';
        showQuestion(); // Show the first question
    } else {
        alert('Please enter your username'); // Alert if username is not entered
    }
}

// Function to display the current question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.answers.map((answer, index) => `
            <button onclick="selectAnswer(${index})">${answer}</button>
        `).join('')}
        <div class="timer" id="timer"></div>
    `;
    updateProgressBar();
    startTimer(); // Start the timer for the question
}

// Function to handle answer selection
function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++; // Increment score for correct answer
        document.getElementsByTagName('button')[index].style.backgroundColor = 'green';
    } else {
        document.getElementsByTagName('button')[index].style.backgroundColor = 'red';
    }
    // Disable all buttons after an answer is selected
    document.querySelectorAll('.question-container button').forEach(button => button.disabled = true);
    document.getElementById('next-button').style.display = 'block'; // Show the next button
    clearInterval(timer); // Clear the timer
}

// Function to go to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-button').style.display = 'none'; // Hide the next button
    } else {
        showResults(); // Show results if all questions are answered
    }
}

// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('
