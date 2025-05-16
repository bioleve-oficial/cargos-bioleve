const data = {
  administracao: {
    TI: [
      { nome: "Técnico de TI", descricao: "Responsável pelo suporte técnico e infraestrutura de TI.", competencia: "Conhecimento técnico e resolução de problemas." },
      { nome: "Analista de Sistemas", descricao: "Desenvolve e mantém sistemas internos.", competencia: "Raciocínio lógico e capacidade analítica." }
    ],
    Compras: [
      { nome: "Assistente de Compras", descricao: "Auxilia na aquisição de materiais.", competencia: "Negociação e organização." },
      { nome: "Coordenador de Compras", descricao: "Gerencia processos e fornecedores.", competencia: "Liderança e gestão de processos." }
    ],
    RH: [
      { nome: "Analista de RH", descricao: "Gerencia processos de recrutamento e seleção.", competencia: "Comunicação e empatia." },
      { nome: "Auxiliar de RH", descricao: "Dá suporte às rotinas de departamento pessoal.", competencia: "Organização e atenção aos detalhes." }
    ]
  },
  fabrica: {
    Expedição: [
      { nome: "Conferente", descricao: "Confere os produtos antes da saída.", competencia: "Atenção e responsabilidade." },
      { nome: "Auxiliar de Expedição", descricao: "Organiza e separa produtos.", competencia: "Agilidade e organização." }
    ],
    Produção: [
      { nome: "Operador de Máquina", descricao: "Opera e monitora máquinas industriais.", competencia: "Precisão e conhecimento técnico." },
      { nome: "Ajudante de Produção", descricao: "Auxilia no processo produtivo.", competencia: "Trabalho em equipe e esforço físico." }
    ],
    Qualidade: [
      { nome: "Analista Controle Qualidade II", descricao: "Realiza abertura e  fechamento da fábrica. Libera e acompanha  as linhas de produções, testes pertinentes e testes físicos químicos. Atua na limpeza e sanitização de tubulações, máquinas antes e após o processo de produção. Realiza o desenvolvimento de procedimentos para a área da qualidade. Responsável pelo recebimento de testes de materiais, e pela aprovação de novos fornecedores.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Analista Controle Qualidade I", descricao: "Realiza abertura e  fechamento da fábrica. Libera e acompanha  as linhas de produções, testes pertinentes e testes físicos químicos. Atua na limpeza e sanitização de tubulações, máquinas antes e após o processo de produção. Realiza o desenvolvimento de procedimentos para a área da qualidade. Responsável pelo recebimento de testes de materiais, e pela aprovação de novos fornecedores.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Encarregado Controle Qualidade II", descricao: "Realiza a análise microbiológica para a verificação da qualidade dos produtos da divisão água para ter o controle dos microorganismos. Atua na preparação e no descarte de material microbiológico gerado no laboratório.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negócio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Supervisor Controle Qualidade II ", descricao: "Atua na coleta de amostras, limpeza e sanitização de modo geral em  poços e reservatórios. Responsável pela manutenção necessária em tubulações e equipamentos da área externa e interna da fábrica.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento; liderança;" },
      { nome: "Auxiliar Controle Qualidade III", descricao: "Atua no acompanhamento das linhas de produção e testes pertinentes. Realiza conferência de matérias primas e no preparo dos produtos. Faz o recebimento e os testes de materiais. Desempenha a análise físico químico.", competencia: "Cultura de segurança; disciplina; flexibilidade; iniciativa; visão do negocio." },
      { nome: "Auxiliar Controle Qualidade II ", descricao: "Atua na coleta de amostras e de organização e limpeza de modo geral em poços e reservatórios. Efetua análises físico químicos. ", competencia: "Cultura de segurança; disciplina; flexibilidade; iniciativa; visão do negocio." },
      { nome: "Encarregado Controle Qualidade II", descricao: "Realiza abertura e  fechamento da fábrica. Libera e acompanha  as linhas de produções, testes pertinentes e testes físicos químicos. Atua na limpeza e sanitização de tubulações, máquinas antes e após o processo de produção. Realiza o desenvolvimento de procedimentos para a área da qualidade. Responsável pelo recebimento de testes de materiais, e pela aprovação de novos fornecedores.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negócio; trabalho em equipe; gestão do conhecimento."},
      { nome: "Gerente Controle Qualidade I", descricao: "Supervisiona e gerencia toda a área da qualidade, bem como as coletas, matérias primas, análises físico químico, microbiológicos e todos os processos do controle de qualidade. Coordena a área de ped e assuntos regulatórios. Realiza auditorias tratativas com fornecedores e clientes. Exerce treinamentos.", competencia: "Cultura de segurança; liderança; visão sistemica; planejamento de futuro; gestão de mudanças; gestão estratégica; " },
      { nome: "Analista Controle Qualidade I  ", descricao: "Realiza a liberação de produtos para a linha de envase. Exerce as conferências de ordem de produção e de matérias primas no preparo dos produtos. Atua no revezamento do acompanhamento das linhas de produção e testes pertinentes. Faz o recebimento de materiais, e análise físico químicos. Exerce o teste e aprovação de novos fornecedores e o desenvolvimento de produtos.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." },
      { nome: "Analista Controle Qualidade III", descricao: "Realiza a análise microbiológica para a verificação da qualidade dos produtos da divisão suco para ter o controle dos microorganismos. Atua na preparação e no descarte de material microbiológico gerado no laboratório. Realiza análises físico químico. Atua na conferência de matérias primas para o preparo dos produtos. Opera na liberação de produtos para a linha de envase. Efetua o revezamento do acompanhamento das linhas de produção e testes pertinentes. Faz o recebimento de testes de materiais e o desenvolvimento de procedimentos da área de qualidade.", competencia: "Cultura de segurança; flexibilidade; iniciativa; visão do negocio; trabalho em equipe; gestão do conhecimento." }
    ]
  }
};

const departmentsContainer = document.getElementById("departments");
const modal = document.getElementById("modal");
const modalErro = document.getElementById("modalErro");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCompetencia = document.getElementById("modalCompetencia");
const closeModal = document.getElementById("closeModal");
const closeModalErro = document.getElementById("closeModalErro");

let activeArea = null;

function normalizeText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderDepartments(area) {
  if (activeArea === area) {
    departmentsContainer.innerHTML = "";
    activeArea = null;
    return;
  }

  activeArea = area;
  departmentsContainer.innerHTML = "";

  if (!data[area]) return;

  Object.entries(data[area]).forEach(([depNome, cargos]) => {
    const depCard = document.createElement("div");
    depCard.className = "department-card";

    const title = document.createElement("div");
    title.className = "department-title";
    title.textContent = depNome;

    const btn = document.createElement("button");
    btn.className = "department-button";
    btn.textContent = "Visualizar cargos";

    const cargoList = document.createElement("div");
    cargoList.className = "cargo-list";
    cargoList.style.display = "none";

    btn.addEventListener("click", () => {
      cargoList.style.display = cargoList.style.display === "none" ? "flex" : "none";
    });

    cargos.forEach(cargo => {
      const card = document.createElement("div");
      card.className = "cargo-card";

      const nome = document.createElement("span");
      nome.textContent = cargo.nome;

      const visualizar = document.createElement("button");
      visualizar.textContent = "Visualizar";
      visualizar.addEventListener("click", () => showModal(cargo));

      card.appendChild(nome);
      card.appendChild(visualizar);
      cargoList.appendChild(card);
    });

    depCard.appendChild(title);
    depCard.appendChild(btn);
    depCard.appendChild(cargoList);
    departmentsContainer.appendChild(depCard);
  });
}

function showModal(cargo) {
  modalTitle.textContent = cargo.nome;
  modalDescription.textContent = cargo.descricao;
  modalCompetencia.textContent = "Competências: " + cargo.competencia;
  modal.classList.remove("hidden");
}

function searchCargos() {
  const termo = normalizeText(document.getElementById("searchInput").value);
  if (!termo) return;

  const resultados = [];

  Object.entries(data).forEach(([area, setores]) => {
    Object.entries(setores).forEach(([setor, cargos]) => {
      cargos.forEach(cargo => {
        const nomeNormalizado = normalizeText(cargo.nome);
        if (nomeNormalizado.includes(termo)) {
          resultados.push(cargo);
        }
      });
    });
  });

  departmentsContainer.innerHTML = "";

  if (resultados.length === 0) {
    modalErro.classList.remove("hidden");
    return;
  }

  const resultadoCard = document.createElement("div");
  resultadoCard.className = "department-card";

  const title = document.createElement("div");
  title.className = "department-title";
  title.textContent = "Resultados da busca";

  const lista = document.createElement("div");
  lista.className = "cargo-list";

  resultados.forEach(cargo => {
    const card = document.createElement("div");
    card.className = "cargo-card";

    const nome = document.createElement("span");
    nome.textContent = cargo.nome;

    const btn = document.createElement("button");
    btn.textContent = "Visualizar";
    btn.addEventListener("click", () => showModal(cargo));

    card.appendChild(nome);
    card.appendChild(btn);
    lista.appendChild(card);
  });

  resultadoCard.appendChild(title);
  resultadoCard.appendChild(lista);
  departmentsContainer.appendChild(resultadoCard);
}

// Listeners
document.getElementById("searchButton").addEventListener("click", searchCargos);
document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const termo = document.getElementById("searchInput").value.trim();
    if (termo !== "") {
      searchCargos();
    }
  }
});
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
closeModalErro.addEventListener("click", () => modalErro.classList.add("hidden"));
document.querySelectorAll(".main-card").forEach(card => {
  card.addEventListener("click", () => {
    const area = card.getAttribute("data-area");
    renderDepartments(area);
  });
});
