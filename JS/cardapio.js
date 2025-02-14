const Categorias = {
  Destaques: [
    {
      Nome: "COMBO CASAL",
      Descricao: "2 hambúrguer top onion 200gramas de batata crocante 1 porção de anel de cebola e 2 coca cola lata",
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
  <div class="mainSamu">
    <div class="menuLanche">
      <div class="imagemLancheMenuLanche">
        <img
          src="${imagem}"
          alt="ImagemDoLanche"
          class="imagemLancheMenuLanche"
        />
      </div>
      <div class="nomeLancheMenuLanche">
        <h1 class="tituloLancheMenuLanche">${nome}</h1>
        <div class="descriçãoLanche">
          <p>
            ${descricao}
          </p>
          <div class="preçoLanche"><p>${preco}</p></div>
        </div>
      </div>
    </div>
    <div class="adicionaisPai">
      <div>
        <p class="adicionaisTurbinar">Turbine seu Burguer! <br />(escolha até 10 opções)</p>
        <div class="adicionaisMenuLanche">
        ${Adicionais.map(itemAdd => `
          <div class="adicionais">
            <img
              src="${itemAdd.Imagem}"
              alt="Batata"
            />
            <p>${itemAdd.Nome}</p>
            <p>${itemAdd.Preco}</p>
            <button onclick="AdicionarLanche('BatataMenuLancheFuncao')">adicionar</button>
          </div>
        `
      ).join("")}
        </div>
      </div>
    </div>
    <div id="finalizarCarrinhoMenuLanche">
    <p id="valorTotalMenuLanche">Valor Total: R$ <span id="ValorTotal">0,00</span></p>
    <button id="botaoFinalizarMenuLanche" onclick="addProduto('${nome}', '${preco}', '${imagem}', '${descricao}')">Adicionar ao carrinho</button>
    <button id="botaoFinalizarMenuLanche"  onclick="fecharBtn()">Sair</button>
  </div>
  </div>
  `;
  popUps.appendChild(novaDiv);
  popUps.style.display = "flex";
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

function addProduto(nome, preco, descricao, imagem) {
  const produto = {
    Nome: nome,
    Preco: preco,
    Descricao: descricao,
    Imagem: imagem,
  }
  carrinho.push(produto);

  console.log("carrinho atualizado:", carrinho);


}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.location.href = "/carrinho.html";
}
