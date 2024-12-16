const questions = [
    {
        question: "What attribute is used to specify the URL of an external webpage in the <a> tag?",
        answers: [
            { Text: "href", correct: true },
            { Text: "src", correct: false },
            { Text: "link", correct: false },
            { Text: "url", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify an alternative text for an image?",
        answers: [
            { Text: "alt", correct: true },
            { Text: "title", correct: false },
            { Text: "desc", correct: false },
            { Text: "src", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify the ID of an HTML element?",
        answers: [
            { Text: "id", correct: true },
            { Text: "class", correct: false },
            { Text: "name", correct: false },
            { Text: "ref", correct: false },
        ],
    },
    {
        question: "What is the correct attribute to specify the width of an image?",
        answers: [
            { Text: "width", correct: true },
            { Text: "height", correct: false },
            { Text: "size", correct: false },
            { Text: "image-width", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify the type of a button?",
        answers: [
            { Text: "type", correct: true },
            { Text: "value", correct: false },
            { Text: "action", correct: false },
            { Text: "name", correct: false },
        ],
    },
    {
        question: "Which attribute is used to link an HTML document to an external CSS file?",
        answers: [
            { Text: "href", correct: true },
            { Text: "src", correct: false },
            { Text: "link", correct: false },
            { Text: "stylesheet", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify the target window or frame for a hyperlink?",
        answers: [
            { Text: "target", correct: true },
            { Text: "window", correct: false },
            { Text: "frame", correct: false },
            { Text: "url", correct: false },
        ],
    },
    {
        question: "What attribute is used to specify the source of a video in the <video> tag?",
        answers: [
            { Text: "src", correct: true },
            { Text: "link", correct: false },
            { Text: "source", correct: false },
            { Text: "file", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify the value of a <textarea> element?",
        answers: [
            { Text: "value", correct: false },
            { Text: "content", correct: false },
            { Text: "text", correct: false },
            { Text: "placeholder", correct: true },
        ],
    },
    {
        question: "Which attribute is used to specify the action of a form when it is submitted?",
        answers: [
            { Text: "action", correct: true },
            { Text: "method", correct: false },
            { Text: "submit", correct: false },
            { Text: "type", correct: false },
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
