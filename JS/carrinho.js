function btnVoltar(){
    window.location.href = "/cardapio.html";
}

const produtosDiv = document.getElementById("produtos");
const totalDiv = document.getElementById("total");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

if (carrinho.length === 0){
    produtosDiv.innerHTML = "<p>Seu carrinho está vazio! </p>";
    totalDiv.style.display = "none";
}else {
    let total = 0;
    let produtosHTML = "";

    carrinho.forEach((item) => {
        const precoNumerico = parseFloat(item.Preco.replace("R$", "").replace(",","."));
        total += precoNumerico;

        produtosHTML += `
           <div class="content">
            <div class="quadrado">
              <div class="imgs">
                <img class="img00" src="/IMGS/1738688942957.jpg" alt="" srcset="">
            </div>
            <div class="text0">
                ${item.Nome}
            </div>
            <div class="textValue">
            ${item.Preco}
            </div>
           
            </div>
            <button class="btnRemove0">Remover</button>
        </div>
        `
    });

    produtosDiv.innerHTML = produtosHTML;
    totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace(".",",")}`
    totalDiv.style.display = "block";
}
