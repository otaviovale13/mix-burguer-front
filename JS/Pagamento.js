// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de finalizar pagamento
  const finalizarPagamentoButton = document.querySelector(
    "#FinalizarPagamento button"
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
    precoRealElement.textContent = total.toFixed(2);
  }

  // Função para aplicar cupom de desconto
  function aplicarCupomDesconto() {
    const cupomInput = document.getElementById('cupomDesconto');
    const cupom = cupomInput.value.trim();

    if (cupom === "DESCONTO10") {
      alert("Cupom aplicado: 10% de desconto!");
      // Atualize o preço total com o desconto
      let total = parseFloat(precoRealElement.textContent);
      total = total * 0.9;
      precoRealElement.textContent = total.toFixed(2);
    } else {
      alert("Cupom inválido.");
    }
  }

  // Adiciona um evento de clique ao botão de finalizar pagamento
  finalizarPagamentoButton.addEventListener("click", () => {
    aplicarCupomDesconto();
    // Seleciona a opção de pagamento escolhida
    const selectedPayment = document.querySelector(
      'input[name="pagamento"]:checked'
    );

    // Verifica se nenhuma opção de pagamento foi selecionada
    if (!selectedPayment) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    // Exibe uma mensagem de confirmação de pagamento
    const paymentMethod = selectedPayment.value;
    alert(`Pagamento finalizado com sucesso usando ${paymentMethod}.`);
  });

  // Seleciona todas as opções de pagamento
  const paymentOptions = document.querySelectorAll('input[name="pagamento"]');
  paymentOptions.forEach((option) => {
    // Adiciona um evento de mudança a cada opção de pagamento
    option.addEventListener("change", () => {
      paymentOptions.forEach((opt) => {
        // Aplica uma animação de escala e sombra à opção selecionada
        opt.parentElement.style.transform = opt.checked
          ? "scale(1.1)"
          : "scale(1)";
      });
    });
  });

  // Inicializa o preço total
  atualizarPrecoTotal();
});
