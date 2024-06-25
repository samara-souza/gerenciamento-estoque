function getListaProduto() {
    const listaProdutosStorage = localStorage.getItem('produtos');
    if (listaProdutosStorage) {
      return JSON.parse(listaProdutosStorage);
    } else {
      return [];
    }
}

function corFundo(quantidadeProduto) {
    if(quantidadeProduto < 10){
        return '#FF6347'
    }
}

const tabelaProdutos = document.querySelector('.lista-produtos'); 

function adicionarProduto() {
    const listaProduto = getListaProduto();

    listaProduto.forEach(produto => {
        const dadosProduto = document.createElement('tr');
        dadosProduto.classList.add('lista-produtos');

        const codigoProduto = document.createElement('td');
        codigoProduto.textContent = produto.codigo;

        const nomeProduto = document.createElement('td');
        nomeProduto.textContent = produto.nome;

        const valorProduto = document.createElement('td');
        valorProduto.textContent = "R$" + produto.valor;

        const quantidadeProduto = document.createElement('td');
        quantidadeProduto.textContent = produto.quantidade;

        dadosProduto.style.backgroundColor = corFundo(parseInt(produto.quantidade));

        dadosProduto.appendChild(codigoProduto);
        dadosProduto.appendChild(nomeProduto);
        dadosProduto.appendChild(valorProduto);
        dadosProduto.appendChild(quantidadeProduto);

        tabelaProdutos.appendChild(dadosProduto); 
    });
}

adicionarProduto();
