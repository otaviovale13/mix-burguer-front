function btnVoltar(){
    window.location.href = "/cardapio.html";
}

const produtosDiv = document.getElementById("produtos");
const totalDiv = document.getElementById("total");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

if (carrinho.length === 0){
    produtosDiv.innerHTML = "<p class='pCarrinho'>Seu carrinho está vazio! </p>";
    totalDiv.style.display = "none";
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

var btnFinalizar = document.getElementById("btnFinalizar");
btnFinalizar.addEventListener('click', () => {
    window.location.href = "/pagamento.html";
});

