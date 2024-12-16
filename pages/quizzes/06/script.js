const questions = [
    {
        question: "Which property in CSS is used to set the background color of an element?",
        answers: [
            { Text: "background-color", correct: true },
            { Text: "color", correct: false },
            { Text: "border-color", correct: false },
            { Text: "background", correct: false },
        ],
    },
    {
        question: "Which of the following is the correct way to specify a color using hexadecimal in CSS?",
        answers: [
            { Text: "#ff5733", correct: true },
            { Text: "ff5733", correct: false },
            { Text: "rgb(255, 87, 51)", correct: false },
            { Text: "rgba(255, 87, 51, 0.5)", correct: false },
        ],
    },
    {
        question: "Which property is used to set the text color in CSS?",
        answers: [
            { Text: "color", correct: true },
            { Text: "text-color", correct: false },
            { Text: "font-color", correct: false },
            { Text: "background-color", correct: false },
        ],
    },
    {
        question: "Which of the following is the correct CSS function to define a color using RGB values?",
        answers: [
            { Text: "rgb(255, 0, 0)", correct: true },
            { Text: "color(255, 0, 0)", correct: false },
            { Text: "rgb(255, 0, 0, 0.5)", correct: false },
            { Text: "rgba(255, 0, 0)", correct: false },
        ],
    },
    {
        question: "What does the 'rgba' function in CSS stand for?",
        answers: [
            { Text: "Red, Green, Blue, Alpha", correct: true },
            { Text: "Red, Green, Black, Alpha", correct: false },
            { Text: "Red, Gradient, Blue, Alpha", correct: false },
            { Text: "Random, Gradient, Blue, Alpha", correct: false },
        ],
    },
    {
        question: "Which CSS property is used to change the opacity of an element?",
        answers: [
            { Text: "opacity", correct: true },
            { Text: "visibility", correct: false },
            { Text: "background-color", correct: false },
            { Text: "display", correct: false },
        ],
    },
    {
        question: "Which color format in CSS defines a color using three values for red, green, and blue?",
        answers: [
            { Text: "RGB", correct: true },
            { Text: "HSL", correct: false },
            { Text: "RGBA", correct: false },
            { Text: "HEX", correct: false },
        ],
    },
    {
        question: "What is the default color of text in an HTML document?",
        answers: [
            { Text: "Black", correct: true },
            { Text: "White", correct: false },
            { Text: "Gray", correct: false },
            { Text: "Transparent", correct: false },
        ],
    },
    {
        question: "Which of the following is the correct way to set a background color using an RGB value?",
        answers: [
            { Text: "background-color: rgb(255, 0, 0);", correct: true },
            { Text: "background: rgb(255, 0, 0);", correct: false },
            { Text: "background-color: rgb(255, 0, 0, 0.5);", correct: false },
            { Text: "color: rgb(255, 0, 0);", correct: false },
        ],
    },
    {
        question: "How do you define a color using the HSL function in CSS?",
        answers: [
            { Text: "hsl(120, 100%, 50%)", correct: true },
            { Text: "hsl(120, 50%, 100%)", correct: false },
            { Text: "rgb(120, 100%, 50%)", correct: false },
            { Text: "rgba(120, 100%, 50%)", correct: false },
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
