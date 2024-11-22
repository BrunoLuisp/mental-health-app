async function calculateBurnout() {
  // Inicializando as pontuações
  let exaustaoEmocional = 0;
  let despersonalizacao = 0;
  let realizacaoProfissional = 0;
  let impactoVidaPessoal = 0;

  // Mapeamento das respostas para os pontos
  const pointsMap = {
    "Nunca": 0,
    "Raramente": 1,
    "Às vezes": 2,
    "Frequentemente": 3,
    "Sempre": 4
  };

  // Função auxiliar para obter a pontuação de uma pergunta específica
  function getPoints(name) {
    const answer = document.querySelector(`input[name="${name}"]:checked`);
    return answer ? pointsMap[answer.value] : 0; // Retorna 0 se nenhuma resposta estiver selecionada
  }

  // Calculando as pontuações
  for (let i = 1; i <= 4; i++) {
    exaustaoEmocional += getPoints(`exaustao${i}`);
  }

  for (let i = 5; i <= 7; i++) {
    despersonalizacao += getPoints(`exaustao${i}`);
  }

  for (let i = 8; i <= 11; i++) {
    realizacaoProfissional += getPoints(`exaustao${i}`);
  }

  for (let i = 12; i <= 15; i++) {
    impactoVidaPessoal += getPoints(`exaustao${i}`);
  }

  // Funções de classificação
  function classifyExaustaoEmocional(score) {
    if (score <= 5) return "Baixo";
    if (score <= 10) return "Moderado";
    return "Alto";
  }

  function classifyDespersonalizacao(score) {
    if (score <= 4) return "Baixo";
    if (score <= 8) return "Moderado";
    return "Alto";
  }

  function classifyRealizacaoProfissional(score) {
    if (score >= 16) return "Alto";
    if (score >= 12) return "Moderado";
    return "Baixo";
  }

  function classifyImpactoVidaPessoal(score) {
    if (score <= 5) return "Baixo";
    if (score <= 10) return "Moderado";
    return "Alto";
  }

  // Classificando os resultados
  const classification = {
    exaustaoEmocional: classifyExaustaoEmocional(exaustaoEmocional),
    despersonalizacao: classifyDespersonalizacao(despersonalizacao),
    realizacaoProfissional: classifyRealizacaoProfissional(realizacaoProfissional),
    impactoVidaPessoal: classifyImpactoVidaPessoal(impactoVidaPessoal)
  };

  // Armazenando no localStorage
  localStorage.setItem("burnoutResult", JSON.stringify(classification));

  // Captura dos dados do formulário
  const userData = {
    nome: document.getElementById('nome')?.value || "Não informado",
    email: document.getElementById('email')?.value || "Não informado",
    idade: parseInt(document.getElementById('idade')?.value) || 0,
    empresa: document.getElementById('empresa')?.value || "Não informado",
    setor: document.getElementById('setor')?.value || "Não informado",
    genero: document.getElementById('genero')?.value || "Não informado",
    resultados: classification
  };

  // Enviando os dados para a API
  try {
    console.log("Dados enviados:", JSON.stringify(userData));
    const response = await fetch('https://mental-health-api-f9889fb79718.herokuapp.com/api/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Respostas salvas com sucesso!");
      window.location.href = "resultado.html"; // Redireciona para a página de resultados
    } else {
      const errorData = await response.json();
      console.error("Erro ao salvar respostas:", errorData);
      alert("Erro ao salvar as respostas. Verifique a API.");
    }
  } catch (error) {
    console.error("Erro na comunicação com a API:", error);
    alert("Erro ao salvar as respostas. Tente novamente mais tarde.");
  }
}

