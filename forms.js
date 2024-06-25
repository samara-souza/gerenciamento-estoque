let ultimoCodigo = 2000;
let produtos = [];

// Carrega os produtos do Local Storage
function carregarProdutos() {
  const produtosStorage = localStorage.getItem('produtos');
  if (produtosStorage) {
    produtos = JSON.parse(produtosStorage);
    ultimoCodigo = produtos.length > 0 ? produtos[produtos.length - 1].codigo + 1 : 2000;
    document.getElementById("codigo").value = ultimoCodigo;
    document.getElementById("codigo").readOnly = true; 
  }
}

document.addEventListener("DOMContentLoaded", carregarProdutos);

// Botão que faz novo registro
document.getElementById("adicionar-produto").addEventListener("click", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const valor = document.getElementById("valor").value;
  const quantidade = document.getElementById("quantidade").value;

  if (nome && valor && quantidade) {
    const produto = { codigo: ultimoCodigo, nome, valor, quantidade };
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    ultimoCodigo++;

    // Atualiza o valor do campo código com o novo valor
    document.getElementById("codigo").value = ultimoCodigo;

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
  } else {
    const mensagemErro = "Preencha todos os campos!";
    document.getElementById("mensagens-erro").innerHTML = mensagemErro;
  }
});
