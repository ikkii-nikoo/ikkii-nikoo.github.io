const questions = [
    {
        question: "What does JavaScript do in a web page?",
        answers: [
            { Text: "Makes the web page static", correct: false },
            { Text: "Adds interactivity to the page", correct: true },
            { Text: "Changes the style of the page", correct: false },
            { Text: "Improves the design of the page", correct: false },
        ],
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { Text: "//", correct: true },
            { Text: "#", correct: false },
            { Text: "/*", correct: false },
            { Text: "--", correct: false },
        ],
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
            { Text: "let myVariable;", correct: true },
            { Text: "variable myVariable;", correct: false },
            { Text: "var myVariable;", correct: false },
            { Text: "set myVariable;", correct: false },
        ],
    },
    {
        question: "Which method is used to find the length of a string in JavaScript?",
        answers: [
            { Text: "string.length()", correct: true },
            { Text: "length.string()", correct: false },
            { Text: "string.size()", correct: false },
            { Text: "size.length()", correct: false },
        ],
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        answers: [
            { Text: "=", correct: true },
            { Text: "==", correct: false },
            { Text: "===" , correct: false },
            { Text: "+=", correct: false },
        ],
    },
    {
        question: "What type of data does 'typeof' return in JavaScript?",
        answers: [
            { Text: "The value of the variable", correct: false },
            { Text: "The type of the variable", correct: true },
            { Text: "The content of the variable", correct: false },
            { Text: "The number of characters in the variable", correct: false },
        ],
    },
    {
        question: "How can you convert a string to a number in JavaScript?",
        answers: [
            { Text: "Number('string')", correct: true },
            { Text: "parseInt('string')", correct: true },
            { Text: "parseFloat('string')", correct: true },
            { Text: "All of the above", correct: true },
        ],
    },
    {
        question: "Which keyword is used to create a function in JavaScript?",
        answers: [
            { Text: "function", correct: true },
            { Text: "create", correct: false },
            { Text: "def", correct: false },
            { Text: "func", correct: false },
        ],
    },
    {
        question: "What will the following code output: console.log(2 + '2');",
        answers: [
            { Text: "4", correct: false },
            { Text: "'22'", correct: true },
            { Text: "Error", correct: false },
            { Text: "'4'", correct: false },
        ],
    },
    {
        question: "How do you write a JavaScript array?",
        answers: [
            { Text: "[1, 2, 3, 4]", correct: true },
            { Text: "{1, 2, 3, 4}", correct: false },
            { Text: "(1, 2, 3, 4)", correct: false },
            { Text: "array(1, 2, 3, 4)", correct: false },
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
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
 
    if (score >= 5) {
        questionElement.innerHTML = `
            You scored ${score} out of ${questions.length}! 🎉 <br>
<a href="/pages/classes/advanced-class/Pac-Man/" target="_blank" class="reward-link">Click here for your reward!</a>
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