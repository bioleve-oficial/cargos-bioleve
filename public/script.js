const data = {
  administracao: {
    TI: [
      {
        nome: "Analista de Negócios de TI",
        descricao: "Desenvolve, planeja e coordena a implementação de projetos de sistemas de informação.",
        competencia: "Cultura De Segurança; Flexibilidade; Iniciativa; Visão Do Negocio; Trabalho Em Equipe; Gestão Do Conhecimento."
      }
    ],
    "ADMINISTRAÇÃO COMERCIAL": [
      {
        nome: "Cargo Teste ADM",
        descricao: "Responsável por apoiar atividades administrativas da área comercial.",
        competencia: "Organização; Comunicação; Responsabilidade."
      }
    ],
    "CLIENTES ESPECIAIS": [
      {
        nome: "Cargo Teste Comercial",
        descricao: "Gerencia carteira de clientes diferenciados.",
        competencia: "Relacionamento; Proatividade; Foco no Cliente."
      }
    ],
    "DIRETORIA SBC": [
      {
        nome: "Cargo Teste Diretoria SBC",
        descricao: "Apoio direto à presidência nas decisões.",
        competencia: "Visão Estratégica; Liderança; Planejamento."
      }
    ],
    "DIRETORIA LINDOIA": [
      {
        nome: "Cargo Teste Diretoria Lindóia",
        descricao: "Acompanhamento das operações em Lindóia.",
        competencia: "Visão de Negócio; Liderança; Tomada de Decisão."
      }
    ],
    "DIRETORIA COMERCIAL": [
      {
        nome: "Cargo Teste Diretoria Comercial",
        descricao: "Planejamento estratégico de vendas.",
        competencia: "Gestão Comercial; Liderança; Visão Sistêmica."
      }
    ]
  },
  fabrica: {
    Expedição: [
      {
        nome: "Líder de Expedição II",
        descricao: "Coordena a expedição de produtos.",
        competencia: "Organização; Liderança; Trabalho em Equipe."
      }
    ],
    Produção: [
      {
        nome: "Coordenador de Produção",
        descricao: "Coordena os times e processos produtivos.",
        competencia: "Liderança; Planejamento; Proatividade."
      }
    ],
    Qualidade: [
      {
        nome: "Analista Controle Qualidade I",
        descricao: "Realiza liberações e análises da qualidade.",
        competencia: "Rigor Técnico; Atenção a Detalhes; Trabalho em Equipe."
      }
    ],
    GARRAFÃO: [
      {
        nome: "Cargo Teste Produção Fábrica",
        descricao: "Atua na produção da linha de garrafão.",
        competencia: "Força Física; Disciplina; Agilidade."
      }
    ],
    "EXPEDICAO LINDOIA": [
      {
        nome: "Cargo Teste Expedição",
        descricao: "Responsável pela expedição na unidade Lindóia.",
        competencia: "Precisão; Agilidade; Responsabilidade."
      }
    ]
  },
  GARRAFÃO: {
    Garrafao: [
      {
        nome: "Cargo Teste Garrafão",
        descricao: "Atua na linha de produção de garrafões.",
        competencia: "Foco; Disciplina; Organização."
      }
    ]
  },
  "EXPEDICAO LINDOIA": {
    ExpedicaoLindoia: [
      {
        nome: "Cargo Teste Expedição Lindóia",
        descricao: "Trabalha na área de expedição da unidade de Lindóia.",
        competencia: "Agilidade; Organização; Comprometimento."
      }
    ]
  },
  "ADMINISTRAÇÃO COMERCIAL": {
    AdministracaoComercial: [
      {
        nome: "Cargo Teste Administração Comercial",
        descricao: "Atua em rotinas administrativas da área comercial.",
        competencia: "Organização; Comunicação; Planejamento."
      }
    ]
  },
  "CLIENTES ESPECIAIS": {
    ClientesEspeciais: [
      {
        nome: "Cargo Teste Clientes Especiais",
        descricao: "Responsável por atendimento a contas especiais.",
        competencia: "Relacionamento; Solução de Problemas; Proatividade."
      }
    ]
  },
  "DIRETORIA SBC": {
    Diretorias: [
      {
        nome: "Cargo Teste Diretoria Geral",
        descricao: "Atua com a alta gestão da empresa.",
        competencia: "Visão Estratégica; Liderança; Governança."
      }
    ]
  },
  Qualidade: {
    ControleQualidade: [
      {
        nome: "Cargo Teste Qualidade",
        descricao: "Responsável por garantir a qualidade dos produtos.",
        competencia: "Rigor Técnico; Análise Crítica; Melhoria Contínua."
      }
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
const modalBemVindo = document.getElementById("modalBemVindo");
const closeBemVindo = document.getElementById("closeBemVindo");

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
  modal.style.display = "flex";
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
    modalErro.style.display = "flex";
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

document.getElementById("searchButton").addEventListener("click", searchCargos);
document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const termo = document.getElementById("searchInput").value.trim();
    if (termo !== "") {
      searchCargos();
    }
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.style.display = "none";
});

closeModalErro.addEventListener("click", () => {
  modalErro.classList.add("hidden");
  modalErro.style.display = "none";
});

closeBemVindo.addEventListener("click", () => {
  modalBemVindo.classList.add("hidden");
  modalBemVindo.style.display = "none";
});

document.querySelectorAll(".main-card").forEach(card => {
  card.addEventListener("click", () => {
    const area = card.getAttribute("data-area");
    renderDepartments(area);
  });
});

// Mostra modal de boas-vindas ao entrar na página
window.onload = () => {
  modalBemVindo.classList.remove("hidden");
  modalBemVindo.style.display = "flex";
};
