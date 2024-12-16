const questions = [
    {
        question: "Which CSS selector is used to select all elements of a specific class?",
        answers: [
            { Text: ".class-name", correct: true },
            { Text: "#class-name", correct: false },
            { Text: "class-name", correct: false },
            { Text: "class", correct: false },
        ],
    },
    {
        question: "Which CSS selector is used to select an element with a specific ID?",
        answers: [
            { Text: "#id-name", correct: true },
            { Text: ".id-name", correct: false },
            { Text: "id-name", correct: false },
            { Text: "id", correct: false },
        ],
    },
    {
        question: "Which CSS selector targets elements based on their HTML tag name?",
        answers: [
            { Text: "element-name", correct: false },
            { Text: "tag-name", correct: false },
            { Text: "div", correct: true },
            { Text: "p", correct: false },
        ],
    },
    {
        question: "What is the correct syntax to select an element with both a class and ID?",
        answers: [
            { Text: ".class-name#id-name", correct: true },
            { Text: "#id-name.class-name", correct: false },
            { Text: "class-name#id-name", correct: false },
            { Text: ".id-name.class-name", correct: false },
        ],
    },
    {
        question: "Which selector is used to select all elements inside an element?",
        answers: [
            { Text: "element *", correct: true },
            { Text: "element > *", correct: false },
            { Text: "element + *", correct: false },
            { Text: "element ~ *", correct: false },
        ],
    },
    {
        question: "Which selector is used to select the first child of an element?",
        answers: [
            { Text: "element:first-child", correct: true },
            { Text: "element:nth-child(1)", correct: false },
            { Text: "element:first-of-type", correct: false },
            { Text: "element:last-child", correct: false },
        ],
    },
    {
        question: "Which selector is used to select an element with a specific attribute?",
        answers: [
            { Text: "[attribute]", correct: true },
            { Text: ".attribute", correct: false },
            { Text: "#attribute", correct: false },
            { Text: "attribute", correct: false },
        ],
    },
    {
        question: "Which selector selects the direct child of an element?",
        answers: [
            { Text: "element >", correct: true },
            { Text: "element +", correct: false },
            { Text: "element ~", correct: false },
            { Text: "element", correct: false },
        ],
    },
    {
        question: "Which selector selects elements with a specific class and tag name?",
        answers: [
            { Text: "tag.class", correct: true },
            { Text: "class.tag", correct: false },
            { Text: "#class.tag", correct: false },
            { Text: "tag#class", correct: false },
        ],
    },
    {
        question: "Which selector selects all elements except a specific one?",
        answers: [
            { Text: ":not(selector)", correct: true },
            { Text: ":exclude(selector)", correct: false },
            { Text: ":except(selector)", correct: false },
            { Text: ":exclude-all(selector)", correct: false },
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
