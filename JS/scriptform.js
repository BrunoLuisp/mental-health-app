// Controle de Navegação de Perguntas e Barra de Progresso
let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progress = document.querySelector('.progress');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');

// Função para mostrar a pergunta atual e atualizar a barra de progresso
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

// Função para mudar de pergunta (próxima ou anterior)
function changeQuestion(step) {
    currentQuestion = Math.min(Math.max(currentQuestion + step, 0), questions.length - 1);
    showQuestion(currentQuestion);
}

// Inicializa o formulário, mostrando a primeira pergunta
showQuestion(currentQuestion);

// Popup LGPD
window.onload = function () {
    const modal = document.getElementById('lgpdModal');
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');

    // Mostrar o modal ao carregar a página
    modal.style.display = 'block';

    // Fechar o modal ao clicar em "Aceito"
    acceptBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Redirecionar para a página inicial ao clicar em "Não Aceito"
    declineBtn.onclick = function () {
        window.location.href = '../home.html';
    };
};

