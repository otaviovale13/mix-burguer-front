const Categorias = {
  Destaques: [
    {
      Nome: "COMBO CASAL",
      Descricao:
        "2 hambúrguer top onion 200gramas de batata crocante 1 porção de anel de cebola e 2 coca cola lata.",
      Preco: "R$ 68,00",
      Imagem:
        "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FLUGWlenr9ACZhRV86ec1_900x900.webp?alt=media&token=7b4acc66-64f5-4bd0-86d5-bb82b0350f38",
    },
    {
      Nome: "COMBO FAMILIA : 2 Classic + 2 Mix + 1 Refrigerante 1,5L",
      Descricao:
        "Aproveite este combo com dois hambúrgueres Classic e dois Mix, acompanhado de um refrigerante de 1,5 litros para completar sua refeição!Perfeito para compartilhar com amigos e família.",
      Preco: "R$ 80,00",
      Imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZzTc6D3nHxSlyt6PMJY6V_CHolPuGPfnXA&s",
    },
  ],
  Hambúrguers: [
    {
      Nome: "Mix",
      Descricao:
        "Nosso clássico e irresistível Mix: Carne smash suculenta, queijo derretido e maionese da casa exclusiva, tudo servido em um pão brioche macio. Uma combinação perfeita de simplicidade e sabor que agrada a todos os paladares.",
      Preco: "R$ 21,95",
      Imagem:
        "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FsQOGG266owKD412TDneW_900x900.webp?alt=media&token=0482d83c-d900-454a-b486-98abb3eae5f9",
    },
    {
      Nome: "Classic",
      Descricao:
        "Experimente o nosso Classic Burger: Carne smash suculenta, queijo derretido, alface americana fresca, tomate maduro, cebola roxa crocante e a nossa exclusiva maionese da casa, tudo isso servido em um pão brioche macio. Uma combinação clássica que nunca sai de moda, perfeita para qualquer ocasião na Mix Burguer.",
      Preco: "R$ 25,95",
      Imagem:
        "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2F6D3H0y7gvVbjla1lTWJ1_900x900.webp?alt=media&token=94da58c9-07f1-456e-8c9a-bb124c83e0ac",
    },
  ],
};

let carrinho = [];

const carrinhoTotalPopUp = "R$ 0,00";

const Adicionais = [
  {
    Nome: "Batata",
    Preco: "R$ 8,90",
    Imagem: "IMGS/1738688942957-removebg.png",
  },
  {
    Nome: "Anel de Cebola",
    Preco: "R$ 11,90",
    Imagem: "IMGS/1738688943009-removebg.png",
  },
  {
    Nome: "Coca Cola",
    Preco: "R$ 5,00",
    Imagem:
      "https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/3716-coca-cola-lata-350ml-12un.20250131112806.png?_a=BAAAV6GX",
  },
];

const categorias = document.getElementById("categorias");

categorias.innerHTML = Object.keys(Categorias)
  .map(
    (categoria) => `
            <div class="categoria">
                <h1 class="tituloCate">${categoria}</h1>
                ${Categorias[categoria]
                  .map(
                    (item) => `
                            <div class="produtos" onclick="popUp('${item.Nome}', '${item.Descricao}', '${item.Preco}', '${item.Imagem}',)"> 
                                <div>
                                    <h2 class="itemTitulo">${item.Nome}</h2>
                                    <h3 class="descricao">${item.Descricao}</h3>
                                    <h2 class="preco">${item.Preco}</h2>
                                </div>
                                <div class="divImg">
                                    <img src="${item.Imagem}" />
                                </div>
                            </div>
                        `
                  )
                  .join("")}
            </div>
        `
  )
  .join("");

function buscarLanche() {
  const inputBuscar = document
    .getElementById("inputBuscar")
    .value.toLowerCase();
  const categorias = document.querySelectorAll(".categoria");
  const mensagem = document.getElementById("mensagem");

  categorias.forEach((categoria) => {
    const produtos = categoria.querySelectorAll(".produtos");
    let visibilidade = false;

    produtos.forEach((item) => {
      if (item.textContent.toLowerCase().includes(inputBuscar)) {
        item.style.display = "";
        visibilidade = true;
        mensagem.style.display = "none";
      } else {
        item.style.display = "none";
        mensagem.style.display = "flex";
      }
    });

    categoria.style.display = visibilidade ? "" : "none";
  });
}

function popUp(nome, descricao, preco, imagem) {
  const popUps = document.querySelector(".popUps");
  popUps.innerHTML = "";

  const novaDiv = document.createElement("div");
  novaDiv.className = "popUp";

  novaDiv.innerHTML = `
      <div class="colunn-1">
        <h1 class="titulo">${nome}</h1>
        <img src="${imagem}" />
        <button onclick="addCarrinho()">Adicionar ao Carrinho</button>
        <div id="carrinhoPopUp" class="carrinhoPopUp">
          <i class="bi bi-cart-fill"></i>
          <h2>Carrinho Atual:</h2>
          ${carrinho
            .map(
              (produto) => `
              <h3>${produto.Nome} - ${produto.Quantidade}x</h3>
              ${produto.Adicionais.map(
                (adicional) => `<h4>${adicional.Nome} - ${adicional.Quantidade}x</h4>`
              ).join("")}
            `
            )
            .join("")}
        </div>
        <div id="carrinhoTotalPopUp" class="carrinhoPopUp">
          <h3>Total: R$ ${localStorage.getItem("carrinhoTotal") || "0,00"}</h3>
        </div>
      </div>
      <div class="colunn-1">
        <h1 class="titulo">${preco}</h1>
        <p class="descricaoPopUp">${descricao}</p>
        <div id="escolhas" class="escolhas">
          <h2 id="tituloEscolhas">Tem certeza que deseja adicionar ao carrinho?</h2>
          <div id="botoes" class="botoes">
            <button id="btnConfirmacaoCarrinho" onclick="confirmacaoCarinho('${nome}', '${descricao}', '${preco}', '${imagem}')">Sim</button>
            <button id="btnRemocaoCarrinho" onclick="remocaoCarinho()">Não</button>
          </div>
        </div>
        <div id="adicionais" class="adicionais"></div>
        <button onclick="fecharBtn()">Sair</button>
      </div>
  `;

  popUps.appendChild(novaDiv);
  popUps.style.display = "flex";
}

function popUpEnviar(nome, descricao, preco, imagem) {
  const popUps = document.querySelector(".popUps");
  popUps.innerHTML = "";

  const novaDiv = document.createElement("div");
  novaDiv.className = "popUp";

  novaDiv.innerHTML = `
      <div class="colunn-1">
        <h1 class="titulo">${nome}</h1>
        <img src="${imagem}" />
        <button onclick="addCarrinho()">Adicionar ao Carrinho</button>
        <div id="carrinhoPopUp" class="carrinhoPopUp">
          <i class="bi bi-cart-fill"></i>
          <h2>Carrinho Atual:</h2>
          ${carrinho
            .map(
              (produto) => `
              <h3>${produto.Nome} - ${produto.Quantidade}x</h3>
              ${produto.Adicionais.map(
                (adicional) => `<h4>${adicional.Nome} - ${adicional.Quantidade}x</h4>`
              ).join("")}
            `
            )
            .join("")}
        </div>
        <div id="carrinhoTotalPopUp" class="carrinhoPopUp">
          <h3>Total: R$ ${localStorage.getItem("carrinhoTotal") || "0,00"}</h3>
        </div>
      </div>
      <div class="colunn-1">
        <h1 class="titulo">${preco}</h1>
        <p class="descricaoPopUp">${descricao}</p>
        <div id="escolhas" class="escolhasPopUp2">
          <h2 id="tituloEscolhas">Deseja adicionar Adicionais?</h2>
          <div id="botoes" class="botoes">
            <button id="btnAdicionaisSimPopUp" onclick="btnAdicionaisSimPopUp()">Sim</button>
            <button id="btnAdicionaisNãoPopUp" onclick="btnAdicionaisNaoPopUp()">Não</button>
          </div>
        </div>
        <div id="adicionais" class="adicionais"></div>
        <button onclick="fecharBtn()">Sair</button>
      </div>
  `;

  popUps.appendChild(novaDiv);
  popUps.style.display = "flex";
  atualizarTotalCarrinho();
}

function atualizarTotalCarrinho() {
  let total = 0;

  carrinho.forEach((produto) => {
    let preco = parseFloat(produto.Preco.replace("R$", "").trim().replace(",", "."));
    total += preco * produto.Quantidade;

    produto.Adicionais.forEach((adicional) => {
      let precoAdicional = parseFloat(adicional.Preco.replace("R$", "").trim().replace(",", "."));
      total += precoAdicional * adicional.Quantidade;
    });
  });

  // Atualiza o total no localStorage
  localStorage.setItem("carrinhoTotal", total.toFixed(2).replace(".", ","));

  // Atualiza o total no popup
  const carrinhoTotalPopUp = document.querySelectorAll("#carrinhoTotalPopUp h3");
  carrinhoTotalPopUp.forEach((elemento) => {
    elemento.innerText = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
  });

  console.log("Valor total do carrinho atualizado:", total);
}

function addCarrinho() {
  const escolhas = document.getElementById("escolhas");
  escolhas.style.display = "flex";
}

function remocaoCarinho() {
  const escolhas = document.getElementById("escolhas");
  escolhas.style.display = "none";
}

function confirmacaoCarinho(nome, descricao, preco, imagem) {
  const botoes = document.getElementById("botoes");
  const tituloEscolhas = document.getElementById("tituloEscolhas");
  const btnConfirmacaoCarrinho = document.getElementById(
    "btnConfirmacaoCarrinho"
  );
  const btnRemocaoCarrinho = document.getElementById("btnRemocaoCarrinho");

  tituloEscolhas.innerText = "Quantos deseja adicionar ao Carrinho?";

  if (btnConfirmacaoCarrinho) btnConfirmacaoCarrinho.remove();
  if (btnRemocaoCarrinho) btnRemocaoCarrinho.remove();

  const inputQuantidade = document.createElement("input");
  inputQuantidade.type = "number";
  inputQuantidade.placeholder = "0";
  inputQuantidade.id = "inputQuantidade";
  inputQuantidade.className = "inputQuantidade";
  inputQuantidade.min = "1";
  botoes.appendChild(inputQuantidade);

  const btnEnviarPopUp = document.createElement("button");
  btnEnviarPopUp.innerText = "Enviar";
  btnEnviarPopUp.id = "btnEnviarPopUp";
  botoes.appendChild(btnEnviarPopUp);

  btnEnviarPopUp.addEventListener("click", () => {
    const quantidade = parseInt(inputQuantidade.value);

    if (!quantidade || quantidade < 1) {
      alert("Você precisa adicionar pelo menos 1 item ao carrinho.");
      return;
    }

    const carrinhoDisplay = document.getElementById("carrinhoDisplay");

    const produto = {
      Nome: nome,
      Preco: preco,
      Descricao: descricao,
      Imagem: imagem,
      Quantidade: quantidade,
      Adicionais: [],
    };

    carrinho.push(produto);
    console.log("Carrinho atualizado:", carrinho);

    popUpEnviar(nome, descricao, preco, imagem);

    atualizarTotalCarrinho();

    const carrinhoPopUp = document.getElementById("carrinhoPopUp");

    let total =
      parseFloat(preco.replace("R$", "").trim().replace(",", ".")) * quantidade;

    const valDisplay = document.createElement("h3");
    valDisplay.innerText = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
  });
}

function btnAdicionaisSimPopUp() {
  escolhas.style.display = "none";

  const adicionais = document.querySelector(".adicionais");
  const adicionaisList = document.createElement("div");
  adicionaisList.className = "adicionaisList";
  adicionaisList.innerHTML = `
        <h2>Adicionais - (Escolha no Máximo 10)</h2>
        <div class="adicionaisOptions">
          ${Adicionais.map(
            (adicional) => `
            <div class="adicionalItem">
              <h3 class="tituloAdicional">${adicional.Nome}</h3>
              <img class="fotoAdicional" src="${adicional.Imagem}" alt="${adicional.Nome}" />
              <h3>${adicional.Preco}</h3>
              <input type="number" class="inputQuantidadeAdicional" value="0" min="0" max="10" data-nome="${adicional.Nome}" data-preco="${adicional.Preco}" />
            </div>
          `
          ).join("")}
        </div>
        <button class="btnAdicionaisEnviarPopUp" id="btnAdicionaisEnviarPopUp" onclick="adicionarAdicionais('produto')">Enviar</button>
      `;
  adicionais.appendChild(adicionaisList);
}

function btnAdicionaisNaoPopUp() {
  alert("Carrinho Atualizado!");

  escolhas.style.display = "none";
}

  function converterPreco(precoString) {
    return parseFloat(precoString.replace("R$", "").trim().replace(",", "."));
  }
  

  function adicionarAdicionais(produto) {
    const inputsAdicionais = document.querySelectorAll(".inputQuantidadeAdicional");
    let adicionaisSelecionados = [];
    let totalAdicionais = 0;
  
    // Verifica os adicionais selecionados e soma seus valores corretamente
    inputsAdicionais.forEach((input) => {
      const quantidade = parseInt(input.value);
      if (quantidade > 0) {
        let precoAdicional = input.dataset.preco ? parseFloat(input.dataset.preco.replace("R$", "").trim().replace(",", ".")) : 0;
        
        if (!isNaN(precoAdicional)) {
          adicionaisSelecionados.push({
            Nome: input.dataset.nome,
            Preco: precoAdicional,
            Quantidade: quantidade,
          });
  
          totalAdicionais += precoAdicional * quantidade;
        }
      }
    });
  
    // Atualiza os adicionais no produto
    produto.Adicionais = adicionaisSelecionados;
  
    // Obtém o preço atual do carrinho corretamente (já incluindo o lanche)
    let precoBaseTexto = document.getElementById("carrinhoTotalPopUp").textContent.replace("Total: R$", "").trim().replace(",", ".");
    let precoBase = isNaN(parseFloat(precoBaseTexto)) ? 0 : parseFloat(precoBaseTexto);
  
    // Soma o total dos adicionais ao total do carrinho
    let novoTotal = precoBase + totalAdicionais;
  
    // Atualiza o valor do carrinho corretamente
    document.getElementById("carrinhoTotalPopUp").textContent = `Total: R$ ${novoTotal.toFixed(2).replace(".", ",")}`;
  
    console.log("Produto atualizado com adicionais:", produto);
    alert("Adicionais adicionados ao carrinho!");
  
    // Esconde a interface de escolha de adicionais
    const escolhas = document.getElementById("escolhas");
    if (escolhas) {
      escolhas.style.display = "none";
    }
  
    const adicionaisList = document.querySelector(".adicionaisList");
    if (adicionaisList) {
      adicionaisList.style.display = "none";
    }

    Adicionais.push({
      Nome: input.dataset.nome,
      Preco: precoAdicional,
    })
  }  

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.location.href = "/carrinho.html";
}

function carregarCarrinho() {
  const carrinhoSalvo = localStorage.getItem("carrinho");
  if (carrinhoSalvo) {
    carrinho.push(...JSON.parse(carrinhoSalvo));
  }
}

function removerAdicional(button) {
  const quantidadeSpan = button.nextElementSibling;
  let quantidade = parseInt(quantidadeSpan.textContent);
  if (quantidade > 0) {
    quantidade--;
    quantidadeSpan.textContent = quantidade;
    const precoBase = document.querySelector(".preçoLanche p").textContent;
    calcularPrecoTotal(precoBase);
  }
}

function calcularTotalAdicionais() {
  let total = 0;
  document.querySelectorAll(".adicionais .quantidade").forEach((span) => {
    total += parseInt(span.textContent);
  });
  return total;
}
function fecharBtn() {
  const popUps = document.querySelector(".popUps");
  popUps.style.display = "none";
}

function voltarHome() {
  window.location.href = "/index.html";
}

function voltarPedido() {
  window.location.href = "/pedido.html";
}

function irSugestão() {
  window.location.href = "/sugestoes.html";
}

function AdicionarLanche(nome, preco, descricao, imagem) {
  let valorTotalFloat =
    parseFloat(preco.replace("R$", "").trim().replace(",", ".")) || 0;

  // Adiciona o valor dos adicionais selecionados
  const adicionaisSelecionados = [];
  document.querySelectorAll(".adicionais").forEach((adicionalDiv) => {
    const quantidade = parseInt(
      adicionalDiv.querySelector(".quantidade").textContent
    );
    const adicionalNome = adicionalDiv.querySelector("p").textContent;
    const adicionalPreco =
      parseFloat(
        adicionalDiv
          .querySelector("button[data-preco]")
          .dataset.preco.replace("R$", "")
          .trim()
          .replace(",", ".")
      ) || 0;
    if (quantidade > 0) {
      valorTotalFloat += adicionalPreco * quantidade;
      adicionaisSelecionados.push({
        Nome: adicionalNome,
        Preco: adicionalPreco,
        Quantidade: quantidade,
      });
    }
  });

  const produto = {
    Nome: nome,
    Preco: `R$ ${valorTotalFloat.toFixed(2).replace(".", ",")}`,
    Descricao: descricao,
    Imagem: imagem,
    Adicionais: adicionaisSelecionados,
  };
  carrinho.push(produto);

  console.log("carrinho atualizado:", carrinho);

  // Exibir alerta informando que o produto foi adicionado ao carrinho
  alert(`${nome} foi adicionado ao carrinho.`);
}

function toggleAdicional(button) {
  button.classList.toggle("selected");
  const precoBase = document.querySelector(".preçoLanche p").textContent;
  calcularPrecoTotal(precoBase);
}

function calcularPrecoTotal(precoBase) {
  let valorTotalFloat =
    parseFloat(precoBase.replace("R$", "").trim().replace(",", ".")) || 0;

  // Adiciona o valor dos adicionais selecionados
  document.querySelectorAll(".adicionais").forEach((adicionalDiv) => {
    const quantidade = parseInt(
      adicionalDiv.querySelector(".quantidade").textContent
    );
    const adicionalPreco =
      parseFloat(
        adicionalDiv
          .querySelector("button[data-preco]")
          .dataset.preco.replace("R$", "")
          .trim()
          .replace(",", ".")
      ) || 0;
    valorTotalFloat += adicionalPreco * quantidade;
  });

  // Formata corretamente como moeda brasileira
  document.getElementById("ValorTotal").textContent = `R$ ${valorTotalFloat
    .toFixed(2)
    .replace(".", ",")}`;
}
