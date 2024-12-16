const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { Text: "Hyper Text Markup Language", correct: true },
            { Text: "Home Tool Markup Language", correct: false },
            { Text: "Hyperlinks and Text Markup Language", correct: false },
            { Text: "High Tech Markup Language", correct: false },
        ],
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { Text: "&lt;a&gt;", correct: true },
            { Text: "&lt;link&gt;", correct: false },
            { Text: "&lt;href&gt;", correct: false },
            { Text: "&lt;hyperlink&gt;", correct: false },
        ],
    },
    {
        question: "Which tag is used to insert an image in HTML?",
        answers: [
            { Text: "&lt;image&gt;", correct: false },
            { Text: "&lt;img&gt;", correct: true },
            { Text: "&lt;picture&gt;", correct: false },
            { Text: "&lt;src&gt;", correct: false },
        ],
    },
    {
        question: "What is the purpose of the &lt;title&gt; tag in HTML?",
        answers: [
            { Text: "To add a heading to the page", correct: false },
            { Text: "To specify the title of the web page", correct: true },
            { Text: "To link to an external stylesheet", correct: false },
            { Text: "To create a subtitle", correct: false },
        ],
    },
    {
        question: "Which tag is used to create an ordered list in HTML?",
        answers: [
            { Text: "&lt;ol&gt;", correct: true },
            { Text: "&lt;ul&gt;", correct: false },
            { Text: "&lt;list&gt;", correct: false },
            { Text: "&lt;order&gt;", correct: false },
        ],
    },
    {
        question: "How do you specify a comment in HTML?",
        answers: [
            { Text: "&lt;!-- Comment --&gt;", correct: true },
            { Text: "// Comment", correct: false },
            { Text: "/* Comment */", correct: false },
            { Text: "# Comment", correct: false },
        ],
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        answers: [
            { Text: "&lt;tr&gt;", correct: true },
            { Text: "&lt;td&gt;", correct: false },
            { Text: "&lt;th&gt;", correct: false },
            { Text: "&lt;row&gt;", correct: false },
        ],
    },
    {
        question: "Which attribute is used to specify the source of an image in HTML?",
        answers: [
            { Text: "src", correct: true },
            { Text: "href", correct: false },
            { Text: "alt", correct: false },
            { Text: "link", correct: false },
        ],
    },
    {
        question: "What is the correct syntax for creating a line break in HTML?",
        answers: [
            { Text: "&lt;br&gt;", correct: true },
            { Text: "&lt;break&gt;", correct: false },
            { Text: "&lt;lb&gt;", correct: false },
            { Text: "&lt;newline&gt;", correct: false },
        ],
    },
    {
        question: "Which tag is used to create a form in HTML?",
        answers: [
            { Text: "&lt;form&gt;", correct: true },
            { Text: "&lt;input&gt;", correct: false },
            { Text: "&lt;table&gt;", correct: false },
            { Text: "&lt;button&gt;", correct: false },
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
