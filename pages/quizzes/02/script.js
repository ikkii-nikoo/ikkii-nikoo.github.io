const questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { Text: "Cascading Style Sheets", correct: true },
            { Text: "Creative Style Sheets", correct: false },
            { Text: "Cascading Simple Sheets", correct: false },
            { Text: "Computer Style Sheets", correct: false },
        ],
    },
    {
        question: "Which property is used to change the background color of an element?",
        answers: [
            { Text: "color", correct: false },
            { Text: "background-color", correct: true },
            { Text: "bg-color", correct: false },
            { Text: "background", correct: false },
        ],
    },
    {
        question: "Which property is used to change the text color in CSS?",
        answers: [
            { Text: "color", correct: true },
            { Text: "text-color", correct: false },
            { Text: "font-color", correct: false },
            { Text: "background-color", correct: false },
        ],
    },
    {
        question: "Which property is used to change the font size in CSS?",
        answers: [
            { Text: "font-size", correct: true },
            { Text: "text-size", correct: false },
            { Text: "font", correct: false },
            { Text: "text-font", correct: false },
        ],
    },
    {
        question: "Which property is used to add space inside an element, around its content?",
        answers: [
            { Text: "padding", correct: true },
            { Text: "margin", correct: false },
            { Text: "spacing", correct: false },
            { Text: "border-spacing", correct: false },
        ],
    },
    {
        question: "Which property is used to add space outside an element, around its border?",
        answers: [
            { Text: "margin", correct: true },
            { Text: "padding", correct: false },
            { Text: "spacing", correct: false },
            { Text: "border-spacing", correct: false },
        ],
    },
    {
        question: "Which property is used to align text to the center of an element?",
        answers: [
            { Text: "text-align: center;", correct: true },
            { Text: "align-text: center;", correct: false },
            { Text: "center-align: true;", correct: false },
            { Text: "text-center: true;", correct: false },
        ],
    },
    {
        question: "What is the default value of the 'display' property for a <div> element?",
        answers: [
            { Text: "block", correct: true },
            { Text: "inline", correct: false },
            { Text: "flex", correct: false },
            { Text: "none", correct: false },
        ],
    },
    {
        question: "Which property is used to make text bold in CSS?",
        answers: [
            { Text: "font-weight", correct: true },
            { Text: "font-style", correct: false },
            { Text: "font-size", correct: false },
            { Text: "text-decoration", correct: false },
        ],
    },
    {
        question: "Which property is used to create a border around an element in CSS?",
        answers: [
            { Text: "border", correct: true },
            { Text: "border-style", correct: false },
            { Text: "border-width", correct: false },
            { Text: "border-color", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    if (score >= 5) {
        questionElement.innerHTML = `
            You scored ${score} out of ${questions.length}! 🎉 <br>
            <a href="https://example.com/reward" target="_blank" class="reward-link">Click here for your reward!</a>
        `;
    } else {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}. Better luck next time!`;
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
