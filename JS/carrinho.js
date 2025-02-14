function btnVoltar() {
    window.location.href = "/cardapio.html";
}

const produtosDiv = document.getElementById("produtos");
const totalDiv = document.getElementById("total");
const btnFinalizar = document.getElementById("btnFinalizar");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

if (carrinho.length === 0){
    produtosDiv.innerHTML = "<p class='pCarrinho'>Seu carrinho está vazio! </p>";
    totalDiv.style.display = "none";
    btnFinalizar.style.display = "none"; // Esconde o botão finalizar
}else {
    let total = 0;
    let produtosHTML = "";

    carrinho.forEach((item, index) => {
        const precoNumerico = parseFloat(item.Preco.replace("R$", "").replace(",",".")); 
        total += precoNumerico;

        produtosHTML += `
           <div class="content">
            <div class="quadrado">
              <div class="imgs">
                <img class="img00" src="${item.Imagem}" alt="" srcset="">
            </div>
            <div class="text0">
                ${item.Nome}
                <p class="descricaoCarrinho">${item.Descricao}</p>
            </div>
            <div class="textValue">
            ${item.Preco}
            </div>
            </div>
            <button class="btnRemove0" data-index="${index}">Remover</button>
            <button class="btnDuplicar0" data-index="${index}">Duplicar</button>
        </div>
        `
    });

    produtosDiv.innerHTML = produtosHTML;
    totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace(".",",")}`
    totalDiv.style.display = "block";
    btnFinalizar.style.display = "block"; // Mostra o botão finalizar

    document.querySelectorAll('.btnRemove0').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            carrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            window.location.reload();
        });
    });

    document.querySelectorAll('.btnDuplicar0').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            const itemDuplicado = { ...carrinho[index] };
            carrinho.push(itemDuplicado);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            window.location.reload();
        });
    });
}

btnFinalizar.addEventListener('click', () => {
    document.getElementById('popupPagamento').style.display = 'flex';
});

function atualizarOpcoesPagamento() {
    const tipoPagamento = document.querySelector('input[name="tipoPagamento"]:checked').value;
    const opcaoDinheiro = document.getElementById('opcaoDinheiro');
    if (tipoPagamento === 'online') {
        opcaoDinheiro.style.display = 'none';
    } else {
        opcaoDinheiro.style.display = 'block';
    }
}

function atualizarFormaEntrega() {
    const formaEntrega = document.querySelector('input[name="formaEntrega"]:checked').value;
    const enderecoEntrega = document.getElementById('enderecoEntrega');
    const frete = document.getElementById('frete');
    if (formaEntrega === 'casa') {
        enderecoEntrega.style.display = 'block';
        frete.style.display = 'block'; // Mostra o frete
    } else {
        enderecoEntrega.style.display = 'none';
        frete.style.display = 'none'; // Esconde o frete
    }
}

function buscarEndereco() {
    const cep = document.getElementById('cep').value;
    if (cep.length === 8) {
        // Simulação de busca de endereço
        document.getElementById('rua').value = "Rua Exemplo";
    }
}

function mostrarInputCupom() {
    document.getElementById('cupomDesconto').style.display = 'block';
    document.getElementById('btnAplicarCupom').style.display = 'none';
    document.getElementById('btnCancelarCupom').style.display = 'block';
}

function cancelarCupom() {
    document.getElementById('cupomDesconto').style.display = 'none';
    document.getElementById('cupomDesconto').value = '';
    document.getElementById('btnAplicarCupom').style.display = 'block';
    document.getElementById('btnCancelarCupom').style.display = 'none';
}

function fecharPopup() {
    document.getElementById('popupPagamento').style.display = 'none';
}

function aplicarCupomDesconto() {
    const cupomInput = document.getElementById('cupomDesconto');
    const cupom = cupomInput.value.trim();

    if (cupom === "DESCONTO10") {
        alert("Cupom aplicado: 10% de desconto!");
        // Atualize o preço total com o desconto
        let total = parseFloat(totalDiv.textContent.replace("Total: R$ ", "").replace(",", "."));
        total = total * 0.9;
        totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    } else if (cupom !== "") {
        alert("Cupom inválido.");
    }
}

function FinalizarPagamento() {
    // Verifica se uma forma de pagamento foi selecionada
    const selectedPayment = document.querySelector('input[name="pagamento"]:checked');
    if (!selectedPayment) {
        alert("Por favor, selecione uma forma de pagamento.");
        return;
    }

    // Exibe uma mensagem de confirmação de pagamento
    const paymentMethod = selectedPayment.value;
    alert(`Pagamento finalizado com sucesso usando ${paymentMethod}.`);

    // Limpa o carrinho
    localStorage.removeItem('carrinho');

    // Redireciona para a página de carrinho
    window.location.href = "/carrinho.html";
}

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de finalizar pagamento
  const finalizarPagamentoButton = document.querySelector(
    "#btnFinalizarPagamento"
  );
  // Seleciona o elemento que exibe o preço total
  const precoRealElement = document.getElementById("PrecoReal");
  // Seleciona o contêiner dos itens do carrinho
  const itensDoCarrinho = document.getElementById("ItensDoCarrinho");

  // Função para atualizar o preço total dinamicamente
  function atualizarPrecoTotal() {
    let total = 0;

    // Seleciona todos os itens do carrinho com o atributo data-preco
    const itens = itensDoCarrinho.querySelectorAll("[data-preco]");
    itens.forEach((item) => {
      // Soma os preços dos itens
      total += parseFloat(item.getAttribute("data-preco"));
    });
    // Atualiza o texto do elemento de preço total
    precoRealElement.textContent = total.toFixed(2).replace(".", ",");
  }

  // Adiciona um evento de input ao campo de cupom de desconto
  document.getElementById('cupomDesconto').addEventListener('input', aplicarCupomDesconto);

  // Adiciona um evento de clique ao botão de finalizar pagamento
  finalizarPagamentoButton.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do botão

    // Verifica se uma forma de pagamento foi selecionada
    const selectedPayment = document.querySelector(
      'input[name="pagamento"]:checked'
    );

    if (!selectedPayment) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    // Exibe uma mensagem de confirmação de pagamento
    const paymentMethod = selectedPayment.value;
    alert(`Pagamento finalizado com sucesso usando ${paymentMethod}.`);

    // Limpa o carrinho
    localStorage.removeItem("carrinho");

    // Redireciona para a página de carrinho
    window.location.href = "/carrinho.html";
  });

  // Seleciona todas as opções de pagamento
  const paymentOptions = document.querySelectorAll('input[name="pagamento"]');
  paymentOptions.forEach((option) => {
    // Adiciona um evento de mudança a cada opção de pagamento
    option.addEventListener("change", () => {
      paymentOptions.forEach((opt) => {
        // Aplica uma animação de escala e sombra à opção selecionada
        opt.parentElement.style.transition = "transform 0.3s, box-shadow 0.3s";
        opt.parentElement.style.transform = opt.checked ? "scale(1.1)" : "scale(1)";
      });
    });
  });

 


 
});

function mostrarItens() {
    const itensDoCarrinho = document.getElementById('ItensDoCarrinho');
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let itensHTML = "";

    carrinho.forEach(item => {
        itensHTML += `
            <div class="itemCarrinho" data-preco="${parseFloat(item.Preco.replace("R$", "").replace(",", "."))}">
                <p>${item.Nome} - ${item.Preco}</p>
                ${item.Adicionais.map(adicional => `
                    <p>Adicional: ${adicional.Nome} - R$ ${adicional.Preco.toFixed(2).replace(".", ",")} (x${adicional.Quantidade})</p>
                `).join("")}
            </div>
        `;
    });

    itensDoCarrinho.innerHTML = itensHTML;
  
    itensDoCarrinho.style.display = 'block';
    document.getElementById('btnMostrarItens').style.display = 'none';
    document.getElementById('btnEsconderItens').style.display = 'block';
}

function esconderItens() {
    document.getElementById('ItensDoCarrinho').style.display = 'none';
    document.getElementById('btnMostrarItens').style.display = 'block';
    document.getElementById('btnEsconderItens').style.display = 'none';
}