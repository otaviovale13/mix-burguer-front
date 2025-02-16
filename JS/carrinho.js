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
        let totalItem = precoNumerico * item.Quantidade;
        item.Adicionais.forEach(adicional => {
            totalItem += adicional.Preco * adicional.Quantidade;
        });
        total += totalItem;

        produtosHTML += `
           <div class="content">
            <div class="quadrado">
              <div class="imgs">
                <img class="img00" src="${item.Imagem}" alt="" srcset="">
            </div>
            <div class="text0">
                ${item.Nome} - Quantidade: ${item.Quantidade} - Preço Unitário: R$ ${precoNumerico.toFixed(2).replace(".", ",")}
                ${item.Adicionais.map(adicional => `
                    <p>Adicional: ${adicional.Nome} - Preço Unitário: R$ ${adicional.Preco.toFixed(2).replace(".", ",")} (x${adicional.Quantidade})</p>
                `).join("")}
            </div>
            <div class="textValue">
            Total: R$ ${totalItem.toFixed(2).replace(".", ",")}
            </div>
            </div>
            <div class="btnsDuplicar">
              <button class="btnRemove0" data-index="${index}">Remover</button>
            <button class="btnDuplicar0" data-index="${index}">Duplicar</button>
            </div>
        </div>
        `
    });

    produtosDiv.innerHTML = produtosHTML;
    totalDiv.style.display = "block";
    btnFinalizar.style.display = "block"; // Mostra o botão finalizar

    // Calcular o total incluindo os adicionais
    let totalComAdicionais = 0;
    carrinho.forEach(item => {
        const precoNumerico = parseFloat(item.Preco.replace("R$", "").replace(",", "."));
        let totalItem = precoNumerico * item.Quantidade;
        item.Adicionais.forEach(adicional => {
            totalItem += adicional.Preco * adicional.Quantidade;
        });
        totalComAdicionais += totalItem;
    });

    totalDiv.textContent = `Total: R$ ${totalComAdicionais.toFixed(2).replace(".", ",")}`;

    document.querySelectorAll('.btnRemove0').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            carrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        });
    });

    document.querySelectorAll('.btnDuplicar0').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            const itemDuplicado = JSON.parse(JSON.stringify(carrinho[index])); // Corrigir a duplicação do item
            carrinho.push(itemDuplicado);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        });
    });
}

btnFinalizar.addEventListener('click', () => {
    document.getElementById('popupPagamento').style.display = 'flex';
    copiarValorTotal();
});

function copiarValorTotal() {
    const totalDiv = document.getElementById("total");
    const precoRealElement = document.getElementById("PrecoReal");
    let total = parseFloat(totalDiv.textContent.replace("Total: R$ ", "").replace(",", "."));
    
    const formaEntrega = document.querySelector('input[name="formaEntrega"]:checked');
    if (formaEntrega && formaEntrega.value === 'casa') {
        total += 10; // Adiciona o valor do frete
    }

    precoRealElement.textContent = total.toFixed(2).replace(".", ",");
}

function atualizarOpcoesPagamento() {
    const tipoPagamento = document.querySelector('input[name="tipoPagamento"]:checked').value;
    const opcaoDinheiro = document.getElementById('opcaoDinheiro');
    const pagamentoOpcoes = document.querySelectorAll('input[name="pagamento"]');

    if (tipoPagamento === 'online') {
        opcaoDinheiro.style.display = 'none';
        pagamentoOpcoes.forEach(opcao => {
            if (opcao.value === 'dinheiro') {
                opcao.checked = false;
                opcao.disabled = true;
            }
        });
    } else {
        opcaoDinheiro.style.display = 'block';
        pagamentoOpcoes.forEach(opcao => {
            if (opcao.value === 'dinheiro') {
                opcao.disabled = false;
            }
        });
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
    copiarValorTotal(); // Atualiza o valor total ao mudar a forma de entrega
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
    } else if (cupom !== "") {
        alert("Cupom inválido.");
    }
}

function FinalizarPagamento() {
    // Verifica se uma forma de pagamento foi selecionada
    const selectedPayment = document.querySelector('input[name="pagamento"]:checked');
    const tipoPagamento = document.querySelector('input[name="tipoPagamento"]:checked').value;

  
    if (tipoPagamento === 'online' && selectedPayment.value === 'dinheiro') {
        alert("Pagamento em dinheiro não é permitido para pagamentos online.");
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

function alternarVisibilidadeItens() {
    const itensDoCarrinho = document.getElementById('ItensDoCarrinho');
    const btnMostrarItens = document.getElementById('btnMostrarItens');
    const btnEsconderItens = document.getElementById('btnEsconderItens');

    if (itensDoCarrinho.style.display === 'none' || itensDoCarrinho.style.display === '') {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        let itensHTML = "";

        carrinho.forEach(item => {
            const precoNumerico = parseFloat(item.Preco.replace("R$", "").replace(",", "."));
            let totalItem = precoNumerico * item.Quantidade;
            item.Adicionais.forEach(adicional => {
                totalItem += adicional.Preco * adicional.Quantidade;
            });

            itensHTML += `
                <div class="itemCarrinho" data-preco="${totalItem}">
                    <p>${item.Nome} - Quantidade: ${item.Quantidade} - Preço Unitário: R$ ${precoNumerico.toFixed(2).replace(".", ",")}</p>
                    ${item.Adicionais.map(adicional => `
                        <p>Adicional: ${adicional.Nome} - Preço Unitário: R$ ${adicional.Preco.toFixed(2).replace(".", ",")} (x${adicional.Quantidade})}</p>
                    `).join("")}
                    <p>Total: R$ ${totalItem.toFixed(2).replace(".", ",")}</p>
                </div>
            `;
        });

        itensDoCarrinho.innerHTML = itensHTML;
        itensDoCarrinho.style.display = 'block';
        btnMostrarItens.style.display = 'none';
        btnEsconderItens.style.display = 'block';
    } else {
        itensDoCarrinho.style.display = 'none';
        btnMostrarItens.style.display = 'block';
        btnEsconderItens.style.display = 'none';
    }
}

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o botão de finalizar pagamento
    const finalizarPagamentoButton = document.querySelector("#btnFinalizarPagamento");
    // Seleciona o elemento que exibe o preço total
    const precoRealElement = document.getElementById("PrecoReal");
    // Seleciona o contêiner dos itens do carrinho
    const itensDoCarrinho = document.getElementById("ItensDoCarrinho");

    // Remover o evento de input no campo de cupom de desconto
    // document.getElementById('cupomDesconto').addEventListener('input', aplicarCupomDesconto);

    // Adicionar evento de clique ao botão de aplicar cupom
    document.getElementById('btnAplicarCupom').addEventListener('click', aplicarCupomDesconto);

    // Adicionar evento de tecla ao campo de cupom de desconto
    document.getElementById('cupomDesconto').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            aplicarCupomDesconto();
        }
    });

    // Adiciona um evento de clique ao botão de finalizar pagamento
    finalizarPagamentoButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do botão

        // Verifica se uma forma de pagamento foi selecionada
        const selectedPayment = document.querySelector('input[name="pagamento"]:checked');

        if (!selectedPayment) {
            alert("Por favor, selecione uma forma de pagamento.");
            return;
        }

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

    document.getElementById('btnMostrarItens').addEventListener('click', alternarVisibilidadeItens);
    document.getElementById('btnEsconderItens').addEventListener('click', alternarVisibilidadeItens);
});

function atualizarCarrinho() {
    if (carrinho.length === 0) {
        produtosDiv.innerHTML = "<p class='pCarrinho'>Seu carrinho está vazio! </p>";
        totalDiv.style.display = "none";
        btnFinalizar.style.display = "none"; // Esconde o botão finalizar
    } else {
        let total = 0;
        let produtosHTML = "";

        carrinho.forEach((item, index) => {
            const precoNumerico = parseFloat(item.Preco.replace("R$", "").replace(",", "."));
            let totalItem = precoNumerico * item.Quantidade;
            item.Adicionais.forEach(adicional => {
                totalItem += adicional.Preco * adicional.Quantidade;
            });
            total += totalItem;

            produtosHTML += `
                <div class="content">
                    <div class="quadrado">
                        <div class="imgs">
                            <img class="img00" src="${item.Imagem}" alt="" srcset="">
                        </div>
                        <div class="text0">
                            ${item.Nome} - Quantidade: ${item.Quantidade} - Preço Unitário: R$ ${precoNumerico.toFixed(2).replace(".", ",")}
                            ${item.Adicionais.map(adicional => `
                                <p>Adicional: ${adicional.Nome} - Preço Unitário: R$ ${adicional.Preco.toFixed(2).replace(".", ",")} (x${adicional.Quantidade})}</p>
                            `).join("")}
                        </div>
                        <div class="textValue">
                            Total: R$ ${totalItem.toFixed(2).replace(".", ",")}
                        </div>
                    </div>
                    <button class="btnRemove0" data-index="${index}">Remover</button>
                    <button class="btnDuplicar0" data-index="${index}">Duplicar</button>
                </div>
            `;
        });

        produtosDiv.innerHTML = produtosHTML;
        totalDiv.style.display = "block";
        btnFinalizar.style.display = "block"; // Mostra o botão finalizar

        totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;

        document.querySelectorAll('.btnRemove0').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                carrinho.splice(index, 1);
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                atualizarCarrinho();
            });
        });

        document.querySelectorAll('.btnDuplicar0').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                const itemDuplicado = JSON.parse(JSON.stringify(carrinho[index])); // Corrigir a duplicação do item
                carrinho.push(itemDuplicado);
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                atualizarCarrinho();
            });
        });
    }
}