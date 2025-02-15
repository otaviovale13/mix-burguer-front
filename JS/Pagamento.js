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

  // Função para aplicar cupom de desconto
  function aplicarCupomDesconto() {
    const cupomInput = document.getElementById('cupomDesconto');
    const cupom = cupomInput.value.trim();

    if (cupom === "DESCONTO10") {
      alert("Cupom aplicado: 10% de desconto!");
      // Atualize o preço total com o desconto
      let total = parseFloat(precoRealElement.textContent.replace(",", "."));
      total = total * 0.9;
      precoRealElement.textContent = total.toFixed(2).replace(".", ",");
    } else if (cupom !== "") {
      alert("Cupom inválido.");
    }
  }

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

    // Aplica o cupom de desconto antes de finalizar o pagamento
    aplicarCupomDesconto();

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

  // Função para exibir os itens do carrinho
  function exibirItensDoCarrinho() {
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
    atualizarPrecoTotal();
  }

  // Inicializa o preço total e exibe os itens do carrinho
  exibirItensDoCarrinho();
});

function btnVoltar() {
  window.history.back();
}
