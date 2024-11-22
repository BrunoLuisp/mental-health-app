document.addEventListener("DOMContentLoaded", function() {
  const resultContainer = document.getElementById("result-container");

  // Exibe o pop-up automaticamente ao carregar a página
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("closePopup");

  popup.classList.add("show");

  // Fecha o pop-up ao clicar no botão
  closePopupButton.addEventListener("click", function() {
    popup.classList.remove("show");
  });

  // Recupera o resultado armazenado no localStorage
  const burnoutResult = JSON.parse(localStorage.getItem("burnoutResult"));

  if (burnoutResult) {
    const sections = [
      {
        title: "Exaustão Emocional",
        level: burnoutResult.exaustaoEmocional,
        description: "A exaustão emocional refere-se ao sentimento de esgotamento físico e mental decorrente do estresse contínuo.",
        solution: getEmotionalExhaustionSolution(burnoutResult.exaustaoEmocional)
      },
      {
        title: "Despersonalização",
        level: burnoutResult.despersonalizacao,
        description: "A despersonalização é o distanciamento emocional de colegas e clientes, levando a uma resposta impessoal.",
        solution: getDepersonalizationSolution(burnoutResult.despersonalizacao)
      },
      {
        title: "Realização Profissional",
        level: burnoutResult.realizacaoProfissional,
        description: "A realização profissional mede o sentimento de satisfação e propósito no trabalho.",
        solution: getProfessionalAchievementSolution(burnoutResult.realizacaoProfissional)
      },
      {
        title: "Impacto na Vida Pessoal e Social",
        level: burnoutResult.impactoVidaPessoal,
        description: "O impacto na vida pessoal e social avalia o efeito do trabalho sobre sua vida fora do ambiente profissional.",
        solution: getPersonalLifeImpactSolution(burnoutResult.impactoVidaPessoal)
      }
    ];

    // Gera HTML para cada seção de resultado
    sections.forEach(section => {
      const sectionHTML = `
        <section class="result-section ${section.level.toLowerCase()}">
          <h2>${section.title}</h2>
          <p><strong>Nível:</strong> ${section.level}</p>
          <p>${section.description}</p>
          <p><br><strong>Solução:</strong> <br>${section.solution}</p>
        </section>
      `;
      resultContainer.innerHTML += sectionHTML;
    });
  } else {
    resultContainer.innerHTML = "<p>Desculpe, nenhum resultado foi encontrado. Por favor, faça a avaliação novamente.</p>";
  }
});

// Funções de solução para cada nível e categoria
function getEmotionalExhaustionSolution(level) {
  switch (level) {
    case "Baixo":
      return `Objetivo: Proteger seu bem-estar para que o estresse atual não evolua para algo mais intenso.
      <br><br> Cuide de Seu Corpo e Sua Mente: Procure manter uma rotina de sono saudável, alimentar-se bem e incluir movimento físico no seu dia a dia.
      Separe alguns minutos para algo relaxante, como ouvir uma música que gosta, meditar ou simplesmente respirar fundo.`;
    case "Moderado":
      return `Objetivo: Reduzir a sobrecarga e encontrar equilíbrio. <br><br> Veja se consegue ajustar sua carga de trabalho e planeje intervalos curtos para descansar.
      <br><br> Pratique o Autocuidado Regularmente e considere explorar práticas de mindfulness ou atividades relaxantes que aliviem o cansaço mental.`;
    case "Alto":
      return `Objetivo: Interromper o ciclo de exaustão e restaurar o bem-estar. <br><br> Procure ajuda profissional, como terapia, para lidar com a origem desse esgotamento.
      <br><br> Se possível, converse sobre um afastamento temporário para aliviar a carga e restaurar a energia.`;
    default:
      return "";
  }
}

function getDepersonalizationSolution(level) {
  switch (level) {
    case "Baixo":
      return `Conecte-se com as Pessoas ao Seu Redor: Troque experiências com colegas e participe de momentos sociais para evitar o distanciamento.
      <br><br> Lembre-se do impacto que seu trabalho tem e veja o valor do que você faz, mesmo que pequeno.`;
    case "Moderado":
      return `Fortaleça a Conexão: Evite isolar-se. Procure a companhia de colegas e amigos para compartilhar as dificuldades.
      <br><br> Busque apoio emocional com alguém que entenda sua realidade ou um mentor para reorganizar prioridades.`;
    case "Alto":
      return `Redescubra o Propósito: Com ajuda terapêutica, reavalie o sentido do seu trabalho e busque uma conexão autêntica com ele.
      <br><br> Participe de grupos de apoio, onde possa compartilhar experiências com quem passa por algo semelhante.`;
    default:
      return "";
  }
}

function getProfessionalAchievementSolution(level) {
  switch (level) {
    case "Alto":
      return `Invista no Seu Crescimento: Continue buscando desafios e aprimorando suas habilidades.
      <br><br> Peça feedback positivo e reveja seus objetivos para manter o alinhamento com o que deseja alcançar.`;
    case "Moderado":
      return `Converse Sobre Seus Planos: Fale com alguém que possa ajudar a desenvolver suas habilidades e reenergizar seu entusiasmo pelo trabalho.
      <br><br> Participe de projetos significativos que tragam mais propósito ao seu dia a dia.`;
    case "Baixo":
      return `Reavalie Suas Prioridades de Vida: Considere ajustes na carreira para se alinhar melhor com seus valores e objetivos pessoais.
      <br><br> Busque atividades ou cursos que tragam entusiasmo e ajudem a redescobrir a alegria no aprendizado.`;
    default:
      return "";
  }
}

function getPersonalLifeImpactSolution(level) {
  switch (level) {
    case "Baixo":
      return `Desligue-se do Trabalho: Estabeleça um limite de horário e dedique-se totalmente a hobbies e momentos com pessoas próximas.
      <br><br> Envolva-se em atividades que recarreguem suas energias e tragam satisfação.`;
    case "Moderado":
      return `Desenvolva Relações de Suporte: Encontre tempo para ver amigos e familiares, e fortaleça sua inteligência emocional para lidar com o estresse.
      <br><br> Estabeleça limites entre o trabalho e a vida pessoal para evitar sobrecarga.`;
    case "Alto":
      return `Conecte-se com Quem Ama: Aproveite o tempo com pessoas queridas e respeite seus limites para restaurar a energia.
      <br><br> Defina limites claros para si mesmo, tanto no trabalho quanto fora dele, e priorize a saúde física e mental.`;
    default:
      return "";
  }
}
