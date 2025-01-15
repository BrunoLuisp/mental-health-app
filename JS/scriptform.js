let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progress = document.querySelector('.progress');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');

// Obtendo os elementos do pop-up e dos botões
const modal = document.getElementById("lgpdModal");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");

function showModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function goToHome() {
    window.location.href = "../home.html";
}

acceptBtn.addEventListener("click", closeModal);
declineBtn.addEventListener("click", goToHome);


window.onload = showModal;

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