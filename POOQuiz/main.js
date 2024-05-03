const answerButtons = document.querySelectorAll('.answer-btn');
const resultContainer = document.getElementById('result-container');

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedAnswer = button.textContent;
        checkAnswer(selectedAnswer);
    });
});

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === 'Word') {
        showResult('¡Correcto!');
    } else {
        showResult('Incorrecto');
    }
}

function showResult(result) {
    resultContainer.textContent = result;
}