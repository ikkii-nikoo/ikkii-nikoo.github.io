const questions = [
    {
        question: "Which property in CSS defines the space inside an element, between the content and its border?",
        answers: [
            { Text: "padding", correct: true },
            { Text: "margin", correct: false },
            { Text: "border", correct: false },
            { Text: "content", correct: false },
        ],
    },
    {
        question: "Which property in CSS is used to set the width of the border of an element?",
        answers: [
            { Text: "border-width", correct: true },
            { Text: "border-style", correct: false },
            { Text: "border-color", correct: false },
            { Text: "padding", correct: false },
        ],
    },
    {
        question: "Which property in CSS sets the distance between an element's border and its surrounding elements?",
        answers: [
            { Text: "margin", correct: true },
            { Text: "padding", correct: false },
            { Text: "border", correct: false },
            { Text: "content", correct: false },
        ],
    },
    {
        question: "What is the correct order of the components in the CSS Box Model?",
        answers: [
            { Text: "Content, Padding, Border, Margin", correct: true },
            { Text: "Margin, Padding, Border, Content", correct: false },
            { Text: "Padding, Border, Margin, Content", correct: false },
            { Text: "Content, Margin, Padding, Border", correct: false },
        ],
    },
    {
        question: "Which property controls the width of the content area in the CSS Box Model?",
        answers: [
            { Text: "width", correct: true },
            { Text: "height", correct: false },
            { Text: "padding", correct: false },
            { Text: "margin", correct: false },
        ],
    },
    {
        question: "Which of the following is part of the CSS Box Model?",
        answers: [
            { Text: "Content", correct: true },
            { Text: "Font", correct: false },
            { Text: "Text", correct: false },
            { Text: "Color", correct: false },
        ],
    },
    {
        question: "What does the 'box-sizing' property do in CSS?",
        answers: [
            { Text: "It changes how the width and height of the box are calculated.", correct: true },
            { Text: "It sets the padding of an element.", correct: false },
            { Text: "It sets the margin of an element.", correct: false },
            { Text: "It controls the element's border style.", correct: false },
        ],
    },
    {
        question: "Which value of 'box-sizing' includes padding and border in the total width and height of the element?",
        answers: [
            { Text: "border-box", correct: true },
            { Text: "content-box", correct: false },
            { Text: "padding-box", correct: false },
            { Text: "box", correct: false },
        ],
    },
    {
        question: "What is the effect of setting the 'margin' property to 'auto' on a block-level element?",
        answers: [
            { Text: "It centers the element horizontally.", correct: true },
            { Text: "It centers the element vertically.", correct: false },
            { Text: "It removes the element's margin.", correct: false },
            { Text: "It makes the element invisible.", correct: false },
        ],
    },
    {
        question: "Which property in CSS defines the space between the content and the border?",
        answers: [
            { Text: "padding", correct: true },
            { Text: "margin", correct: false },
            { Text: "border", correct: false },
            { Text: "width", correct: false },
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
