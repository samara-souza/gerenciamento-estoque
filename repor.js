// Carrega os produtos do Local Storage
let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

// Select do nome do produto
const nomeSelect = document.getElementById("nome");
produtos.forEach(p => {
  const option = document.createElement("option");
  option.value = p.nome;
  option.text = p.nome;
  nomeSelect.appendChild(option);
});

// Preenche os campos com base no nome do produto
function preencherCampos(nome) {
  const produto = produtos.find(p => p.nome === nome);
  if (produto) {
    document.getElementById("codigo").value = produto.codigo;
    document.getElementById("valor").value = produto.valor;
  }
}

// Aumenta a quantidade do produto no Local Storage
function atualizarQuantidade(codigo, quantidade) {
  const produto = produtos.find(p => p.codigo === parseInt(codigo));
  if (produto) {
    produto.quantidade += parseInt(quantidade);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }
}

// Evento caso usuário digite código do produto
document.getElementById("codigo").addEventListener("change", function() {
  const codigo = this.value;
  const produto = produtos.find(p => p.codigo === parseInt(codigo));
  if (produto) {
    document.getElementById("nome").value = produto.nome;
    document.getElementById("valor").value = produto.valor;
  }
});

// Evento caso usuário selecione o produto
nomeSelect.addEventListener("change", function() {
  const nome = this.value;
  preencherCampos(nome);
});

// Botão para atualizar o registro
document.getElementById("form-altera").addEventListener("submit", function(event) {
  event.preventDefault();
  const codigo = document.getElementById("codigo").value;
  const quantidade = document.getElementById("quantidade").value;
  atualizarQuantidade(codigo, parseInt(quantidade));
  
  // Limpar os campos do formulário
  document.getElementById("codigo").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("quantidade").value = "";
});