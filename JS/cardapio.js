const Categorias = {
  Destaques: [
    {
      Nome: "COMBO CASAL",
      Descricao: "2 hambúrguer top onion 200gramas de batata crocante 1 porção de anel de cebola e 2 coca cola lata.",
      Preco: "R$ 68,00",
      Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FLUGWlenr9ACZhRV86ec1_900x900.webp?alt=media&token=7b4acc66-64f5-4bd0-86d5-bb82b0350f38",
    },
    {
      Nome: "COMBO FAMILIA : 2 Classic + 2 Mix + 1 Refrigerante 1,5L",
      Descricao: "Aproveite este combo com dois hambúrgueres Classic e dois Mix, acompanhado de um refrigerante de 1,5 litros para completar sua refeição!Perfeito para compartilhar com amigos e família.",
      Preco: "R$ 80,00",
      Imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZzTc6D3nHxSlyt6PMJY6V_CHolPuGPfnXA&s",
    },
  ],
  Hambúrguers: [
    {
      Nome: "Mix",
      Descricao: "Nosso clássico e irresistível Mix: Carne smash suculenta, queijo derretido e maionese da casa exclusiva, tudo servido em um pão brioche macio. Uma combinação perfeita de simplicidade e sabor que agrada a todos os paladares.",
      Preco: "R$ 21,95",
      Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FsQOGG266owKD412TDneW_900x900.webp?alt=media&token=0482d83c-d900-454a-b486-98abb3eae5f9",
    },
    {
      Nome: "Classic",
      Descricao: "Experimente o nosso Classic Burger: Carne smash suculenta, queijo derretido, alface americana fresca, tomate maduro, cebola roxa crocante e a nossa exclusiva maionese da casa, tudo isso servido em um pão brioche macio. Uma combinação clássica que nunca sai de moda, perfeita para qualquer ocasião na Mix Burguer.",
      Preco: "R$ 25,95",
      Imagem: "https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2F6D3H0y7gvVbjla1lTWJ1_900x900.webp?alt=media&token=94da58c9-07f1-456e-8c9a-bb124c83e0ac",
    },
  ],
}

const carrinho = []

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
    Imagem: "https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/3716-coca-cola-lata-350ml-12un.20250131112806.png?_a=BAAAV6GX",
  },
]

const categorias = document.getElementById("categorias")

categorias.innerHTML = Object.keys(Categorias)
  .map(categoria => `
            <div class="categoria">
                <h1 class="tituloCate">${categoria}</h1>
                ${Categorias[categoria]
      .map(item => `
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
                        `)
      .join("")}
            </div>
        `)
  .join("")

function buscarLanche() {
  const inputBuscar = document.getElementById("inputBuscar").value.toLowerCase()
  const categorias = document.querySelectorAll(".categoria")

  categorias.forEach(categoria => {
    const produtos = categoria.querySelectorAll(".produtos");
    let visibilidade = false;

    produtos.forEach(item => {
      if (item.textContent.toLowerCase().includes(inputBuscar)) {
        item.style.display = "";
        visibilidade = true;
      } else {
        item.style.display = "none";
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
          <h3 id="carrinhoDisplay">Seu Carrinho está Vazio!</h3>
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
  const btnConfirmacaoCarrinho = document.getElementById("btnConfirmacaoCarrinho");
  const btnRemocaoCarrinho = document.getElementById("btnRemocaoCarrinho");

  tituloEscolhas.innerText = "Quantos deseja adicionar ao Carrinho?";

  btnConfirmacaoCarrinho.remove();
  btnRemocaoCarrinho.remove();

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
    if (inputQuantidade.value === "") {
      alert("Você precisa adicionar pelo menos 1 item ao carrinho.");
      return;
    } else {
      const carrinhoDisplay = document.getElementById("carrinhoDisplay");

      const produto = {
        Nome: nome,
        Preco: preco,
        Descricao: descricao,
        Imagem: imagem,
      }

      carrinho.push(produto);

      console.log("carrinho atualizado:", carrinho);

      carrinhoDisplay.innerText = `${nome} - ${inputQuantidade.value}x`;

      const carrinhoPopUp = document.getElementById("carrinhoPopUp");

      const valDisplay = document.createElement("h3");

      valDisplay.innerText = `${preco}`

      valDisplay.id = "precoTotal";

      carrinhoPopUp.appendChild(valDisplay);

      tituloEscolhas.innerText = "Deseja adicionar Adicionais ao Carrinho?";

      inputQuantidade.remove();
      btnEnviarPopUp.remove();

      const btnAdicionaisSimPopUp = document.createElement("button");
      btnAdicionaisSimPopUp.innerText = "Sim";
      btnAdicionaisSimPopUp.id = "btnAdicionaisSimPopUp";
      botoes.appendChild(btnAdicionaisSimPopUp);

      btnAdicionaisSimPopUp.addEventListener("click", () => {
        escolhas.style.display = "none";

        const adicionais = document.querySelector(".adicionais");
        const adicionaisList = document.createElement("div");
        adicionaisList.className = "adicionaisList";
        adicionaisList.innerHTML = `
  <h2>Adicionais - (Escolha no Máximo 10)</h2>
  <div class="adicionaisOptions">
    ${Adicionais.map(adicional => `
      <div class="adicionalItem">
        <h3 class="tituloAdicional">${adicional.Nome}</h3>
        <img class="fotoAdicional" src="${adicional.Imagem}" alt="${adicional.Nome}" />
        <h3>${adicional.Preco}</h3>
        <input type="number" class="inputQuantidadeAdicional" value="0" min="0" max="10" />
      </div>
    `).join("")}
  </div>
  <button class="btnAdicionaisEnviarPopUp" id="btnAdicionaisEnviarPopUp" onclick="btnAdicionaisEnviarPopUp()">Enviar</button>
`;

adicionais.appendChild(adicionaisList);
      });

      const btnAdicionaisNaoPopUp = document.createElement("button");
      btnAdicionaisNaoPopUp.innerText = "Não";
      btnAdicionaisNaoPopUp.id = "btnAdicionaisNaoPopUp";
      botoes.appendChild(btnAdicionaisNaoPopUp);
      btnAdicionaisNaoPopUp.addEventListener("click", () => {
        alert("Carrinho Atualizado!");
        escolhas.style.display = "none";
        return;
      });
    }
  });
}

function btnAdicionaisEnviarPopUp(){
  const adicionaisOptions = document.querySelectorAll(".adicionalItem");
  const adicionaisSelecionados = [];

  adicionaisOptions.forEach(adicional => {
    const quantidade = parseInt(adicional.querySelector(".inputQuantidadeAdicional").value);
    const adicionalNome = adicional.querySelector(".tituloAdicional").textContent;
    const adicionalPreco = adicional.querySelector("h3").textContent;
    if (quantidade > 0) {
      adicionaisSelecionados.push({ Nome: adicionalNome, Preco: adicionalPreco, Quantidade: quantidade });
    }
  });

  console.log("adicionaisSelecionados:", adicionaisSelecionados);

  const carrinhoDisplay = document.getElementById("carrinhoDisplay");
  carrinhoDisplay.innerText = `${carrinhoDisplay.innerText} + Adicionais`;

  const carrinhoPopUp = document.getElementById("carrinhoPopUp");

  const valDisplay = document.createElement("h3");

  valDisplay.innerText = `${adicionaisSelecionados.map(adicional => `${adicional.Nome} - ${adicional.Quantidade}x`).join(", ")}`

  carrinhoPopUp.appendChild(valDisplay);

  const precoTotal = document.getElementById("precoTotal");
  let valorTotalFloat = parseFloat(precoTotal.innerText.replace("R$", "").trim().replace(",", ".")) || 0;

  adicionaisSelecionados.forEach(adicional => {
    valorTotalFloat += parseFloat(adicional.Preco.replace("R$", "").trim().replace(",", ".")) * adicional.Quantidade;
  });

  precoTotal.innerText = `R$ ${valorTotalFloat.toFixed(2).replace(".", ",")}`;
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.location.href = "/carrinho.html";
}

function adicionarAdicional(button) {
  const quantidadeSpan = button.nextElementSibling.nextElementSibling;
  let quantidade = parseInt(quantidadeSpan.textContent);
  const totalAdicionais = calcularTotalAdicionais();

  if (totalAdicionais < 10) {
    quantidade++;
    quantidadeSpan.textContent = quantidade;
    const precoBase = document.querySelector(".preçoLanche p").textContent;
    calcularPrecoTotal(precoBase);
  } else {
    alert("Você só pode adicionar até 10 adicionais no total.");
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
  document.querySelectorAll(".adicionais .quantidade").forEach(span => {
    total += parseInt(span.textContent);
  });
  return total;
}
function fecharBtn() {
  const popUps = document.querySelector(".popUps");
  popUps.style.display = "none";
}

function voltarHome() {
  window.location.href = "/index.html"
}
function irSugestão() {
  window.location.href = "/sugestoes.html"
}

function AdicionarLanche(nome, preco, descricao, imagem) {
  let valorTotalFloat = parseFloat(preco.replace("R$", "").trim().replace(",", ".")) || 0;

  // Adiciona o valor dos adicionais selecionados
  const adicionaisSelecionados = [];
  document.querySelectorAll(".adicionais").forEach(adicionalDiv => {
    const quantidade = parseInt(adicionalDiv.querySelector(".quantidade").textContent);
    const adicionalNome = adicionalDiv.querySelector("p").textContent;
    const adicionalPreco = parseFloat(adicionalDiv.querySelector("button[data-preco]").dataset.preco.replace("R$", "").trim().replace(",", ".")) || 0;
    if (quantidade > 0) {
      valorTotalFloat += adicionalPreco * quantidade;
      adicionaisSelecionados.push({ Nome: adicionalNome, Preco: adicionalPreco, Quantidade: quantidade });
    }
  });

  const produto = {
    Nome: nome,
    Preco: `R$ ${valorTotalFloat.toFixed(2).replace(".", ",")}`,
    Descricao: descricao,
    Imagem: imagem,
    Adicionais: adicionaisSelecionados
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
  let valorTotalFloat = parseFloat(precoBase.replace("R$", "").trim().replace(",", ".")) || 0;

  // Adiciona o valor dos adicionais selecionados
  document.querySelectorAll(".adicionais").forEach(adicionalDiv => {
    const quantidade = parseInt(adicionalDiv.querySelector(".quantidade").textContent);
    const adicionalPreco = parseFloat(adicionalDiv.querySelector("button[data-preco]").dataset.preco.replace("R$", "").trim().replace(",", ".")) || 0;
    valorTotalFloat += adicionalPreco * quantidade;
  });

  // Formata corretamente como moeda brasileira
  document.getElementById("ValorTotal").textContent = `R$ ${valorTotalFloat.toFixed(2).replace(".", ",")}`;
}