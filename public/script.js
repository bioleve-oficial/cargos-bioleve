const cargos = [
  {
    nome: "Técnico de TI",
    descricao: "Responsável por manter os sistemas de tecnologia funcionando, prestar suporte aos usuários e realizar manutenção nos equipamentos.",
    categoria: "ADMINISTRAÇÃO"
  },
  {
    nome: "Auxiliar Administrativo",
    descricao: "Auxilia nas rotinas administrativas da empresa, como organização de documentos, atendimento telefônico e suporte às áreas.",
    categoria: "ADMINISTRAÇÃO"
  },
  {
    nome: "Analista Financeiro",
    descricao: "Analisa e controla o fluxo financeiro da empresa, realiza relatórios e acompanha pagamentos e recebimentos.",
    categoria: "ADMINISTRAÇÃO"
  },
  {
    nome: "Ajudante de Expedição",
    descricao: "Auxilia no processo de separação, embalagem e expedição de produtos para envio aos clientes.",
    categoria: "FÁBRICA"
  },
  {
    nome: "Operador de Máquina",
    descricao: "Opera máquinas industriais, seguindo os padrões de produção e segurança da fábrica.",
    categoria: "FÁBRICA"
  },
  {
    nome: "Inspetor de Qualidade",
    descricao: "Verifica e garante que os produtos estejam em conformidade com os padrões de qualidade estabelecidos.",
    categoria: "FÁBRICA"
  }
];

// Cria os cards no carregamento da página
function criarCards() {
  const adminContainer = document.getElementById("admin-container");
  const fabricaContainer = document.getElementById("fabrica-container");

  cargos.forEach((cargo) => {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.textContent = cargo.nome;

    const botao = document.createElement("button");
    botao.textContent = "Visualizar";
    botao.onclick = () => mostrarDescricao(cargo.nome, cargo.descricao);

    card.appendChild(titulo);
    card.appendChild(botao);

    if (cargo.categoria === "ADMINISTRAÇÃO") {
      adminContainer.appendChild(card);
    } else if (cargo.categoria === "FÁBRICA") {
      fabricaContainer.appendChild(card);
    }
  });
}

// Filtra os cargos com base no campo de busca
document.getElementById("search").addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const titulo = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = titulo.includes(termo) ? "block" : "none";
  });

  if (termo === "") {
    document.getElementById("admin-container").style.display = "none";
    document.getElementById("fabrica-container").style.display = "none";
  } else {
    document.getElementById("admin-container").style.display = "flex";
    document.getElementById("fabrica-container").style.display = "flex";
  }
});

// Alterna a visibilidade das categorias
function toggleCategoria(id) {
  const container = document.getElementById(id);
  const isVisible = container.style.display === "flex";
  container.style.display = isVisible ? "none" : "flex";
}

// Exibe o modal com a descrição do cargo
function mostrarDescricao(titulo, descricao) {
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-description").textContent = descricao;
  document.getElementById("modal").style.display = "block";
}

// Fecha o modal
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Inicializa os cards
document.addEventListener("DOMContentLoaded", criarCards);
