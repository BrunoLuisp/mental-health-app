let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progress = document.querySelector('.progress');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');

function showQuestion(n) {
    questions.forEach((question, index) => {
        question.classList.toggle('active', index === n);
    });

    // Atualiza a barra de progresso
    const progressPercentage = ((n + 1) / questions.length) * 100;
    progress.style.width = progressPercentage + '%';

    // Mostra/esconde botões de navegação e envio
    prevBtn.style.display = n === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = n === questions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = n === questions.length - 1 ? 'inline-block' : 'none';
}

function changeQuestion(step) {
    currentQuestion = Math.min(Math.max(currentQuestion + step, 0), questions.length - 1);
    showQuestion(currentQuestion);
}

// Inicializa o formulário
showQuestion(currentQuestion);