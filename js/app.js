let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');
const correctAnswersElement = document.getElementById('correct-answers');
const wrongAnswersElement = document.getElementById('wrong-answers');
const percentageElement = document.getElementById('percentage');

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerHTML = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;

        if (userAnswers[currentQuestionIndex] !== undefined) {
            optionElement.classList.add('selected');
            if (index === userAnswers[currentQuestionIndex]) {
                if (index === question.correctAnswer) {
                    optionElement.classList.add('correct');
                } else {
                    optionElement.classList.add('incorrect');
                }
            }
        }

        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });

    updateProgress();
    updateButtons();
}

function selectOption(index) {
    if (userAnswers[currentQuestionIndex] !== undefined) return;

    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    userAnswers[currentQuestionIndex] = index;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1 || userAnswers[currentQuestionIndex] === undefined;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function showResults() {
    let correct = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            correct++;
        }
    });

    score = correct;
    const wrong = questions.length - correct;
    const percentage = ((correct / questions.length) * 100).toFixed(2);

    correctAnswersElement.textContent = correct;
    wrongAnswersElement.textContent = wrong;
    percentageElement.textContent = `${percentage}%`;

    quiz.classList.add('hidden');
    results.classList.remove('hidden');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    quiz.classList.remove('hidden');
    results.classList.add('hidden');
    loadQuestion();
}

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1 && userAnswers[currentQuestionIndex] !== undefined) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

submitBtn.addEventListener('click', showResults);
restartBtn.addEventListener('click', restartQuiz);

// Initialize
loadQuestion();