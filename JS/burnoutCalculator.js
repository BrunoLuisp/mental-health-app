function calculateBurnout() {
  // Definindo as pontuações iniciais para cada categoria
  let exaustaoEmocional = 0;
  let despersonalizacao = 0;
  let realizacaoProfissional = 0;
  let impactoVidaPessoal = 0;

  // Mapeando os valores das respostas
  const pointsMap = {
    "Nunca": 0,
    "Raramente": 1,
    "Às vezes": 2,
    "Frequentemente": 3,
    "Sempre": 4
  };

  // Função auxiliar para somar pontuação de uma pergunta específica
  function getPoints(name) {
    const answer = document.querySelector(`input[name="${name}"]:checked`);
    return answer ? pointsMap[answer.value] : 0;
  }

  // Adiciona pontuação para Exaustão Emocional
  for (let i = 1; i <= 8; i++) {
    exaustaoEmocional += getPoints(`exaustao${i}`);
  }

  // Adiciona pontuação para Despersonalização
  for (let i = 9; i <= 16; i++) {
    despersonalizacao += getPoints(`exaustao${i}`);
  }

  // Adiciona pontuação para Realização Profissional
  for (let i = 17; i <= 24; i++) {
    realizacaoProfissional += getPoints(`exaustao${i}`);
  }

  // Adiciona pontuação para Impacto na Vida Pessoal e Social
  for (let i = 25; i <= 32; i++) {
    impactoVidaPessoal += getPoints(`exaustao${i}`);
  }

  // Classificação das pontuações
  const classification = {
    exaustaoEmocional: classifyExaustaoEmocional(exaustaoEmocional),
    despersonalizacao: classifyDespersonalizacao(despersonalizacao),
    realizacaoProfissional: classifyRealizacaoProfissional(realizacaoProfissional),
    impactoVidaPessoal: classifyImpactoVidaPessoal(impactoVidaPessoal)
  };

  // Armazena os resultados no localStorage para serem acessados na página de resultados
  localStorage.setItem("burnoutResult", JSON.stringify(classification));

  // Redireciona para a página de resultados
  window.location.href = "resultado.html";
}

// Funções de classificação para cada categoria
function classifyExaustaoEmocional(score) {
  if (score <= 10) return "Baixo";
  if (score <= 20) return "Moderado";
  return "Alto";
}

function classifyDespersonalizacao(score) {
  if (score <= 6) return "Baixo";
  if (score <= 12) return "Moderado";
  return "Alto";
}

function classifyRealizacaoProfissional(score) {
  if (score >= 16) return "Alto";
  if (score >= 9) return "Moderado";
  return "Baixo";
}

function classifyImpactoVidaPessoal(score) {
  if (score <= 6) return "Baixo";
  if (score <= 12) return "Moderado";
  return "Alto";
}

