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
        Imagem: "https://github.com/otaviovale13/mix-burguer-front/blob/feature/code/IMGS/1738688942957-removebg.png?raw=true",
    },
    {
        Nome: "Anel de Cebola",
        Preco: "R$ 16,00",
        Imagem: "https://github.com/otaviovale13/mix-burguer-front/blob/feature/code/IMGS/1738688943009-removebg.png?raw=true",
    },
    {
        Nome: "Coca Cola",
        Preco: "R$ 5,00",
        Imagem: "https://github.com/otaviovale13/mix-burguer-front/blob/feature/code/IMGS/coca%20lata.png?raw=true",
    },
]

const categorias = document.getElementById("categorias")

categorias.innerHTML = Object.keys(Categorias)
    .map(categoria => `
            <div id="categoria" class="categoria">
                <h1 class="text-light">${categoria}</h1>
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
    const mensagem = document.getElementById("mensagem")

    categorias.forEach(categoria => {
        const produtos = categoria.querySelectorAll(".produtos");
        let visibilidade = false;

        produtos.forEach(item => {
            if (item.textContent.toLowerCase().includes(inputBuscar)) {
                item.style.display = "";
                visibilidade = true;
                mensagem.className = "d-none"
            } else {
                item.style.display = "none";
                mensagem.className = "d-flex"
            }
        });

        categoria.style.display = visibilidade ? "" : "none";
    });
}


function popUp(nome, descricao, preco, imagem) {
    console.log("Abrindo popUp:", nome, descricao, preco, imagem);
    const popUps = document.querySelector(".popUps");
    popUps.innerHTML = "";

    const novaDiv = document.createElement("div");
    novaDiv.className = "popUp";

    novaDiv.innerHTML = `
  <div class="img-fundo-popup bg-size bg-blend-mode h-60rem p-0 m-0 w-100">
    <div class="d-flex gap-1">
        <div class="h-15rem w-20rem mt-1-4 d-flex object-fit-cover">
            <img src="${imagem}"
                 alt="ImagemDoLanche"
                 class="rounded-10px h-15rem w-20rem ms-4rem mt-1-4 d-flex object-fit-cover" />
        </div>
        <div class="ms-24rem mt-4 d-flex flex-column align-items-center justify-content-center">
            <h1 class="text-shadow font-lily text-amarelo-mix fs-48px mb-1">${nome}</h1>
            <div class="w-24rem rounded-10px bg-amarelo-mix text-light fs-20px text-center p-1">
                <p>
                    ${descricao}
                </p>
                <div class="font-days text-light fs-36px"><p>${preco}</p></div>
            </div>
        </div>
    </div>
    <div id="adicionaisPai" 
        class="adicionaisPai">
        <div>
            <p class="font-arial fs-2rem text-black text-center mt-5">Turbine seu Burguer! <br />(escolha até 10 opções)</p>
            <div class="d-flex align-items-center justify-content-evenly">
                ${Adicionais.map(itemAdd => `
                <div class="text-black fs-1-5rem">
                    <img class="w-5rem"
                    src="${itemAdd.Imagem}"
                         alt="Batata" />
                    <p>${itemAdd.Nome}</p>
                    <p>${itemAdd.Preco}</p>
                    <button class="btnCardapio" onclick="AdicionarLanche('BatataMenuLancheFuncao')">adicionar</button>
                </div>
                `
                ).join("")}
            </div>
        </div>
    </div>
    <div class="mt-7rem d-flex flex-column align-items-center justify-content-center"
        id="finalizarCarrinhoMenuLanche">
        <p class="fs-24px text-amarelo-mix font-days mt-menos-5"
            id="valorTotalMenuLanche">Valor Total: R$ <span id="ValorTotal">0,00</span></p>
        <button class="botaoFinalizarMenuLanche" id="botaoFinalizarMenuLanche" onclick="addProduto('${nome}', '${preco}', '${descricao}', '${imagem}' )">Adicionar ao carrinho</button>
        <button class="mb-5 botaoFinalizarMenuLanche" id="botaoFinalizarMenuLanche" onclick="fecharBtn()">Sair</button>
    </div>
</div>
  `;
    popUps.appendChild(novaDiv);
    popUps.classList.remove("d-none");
    popUps.style.display = "flex";
}

function fecharBtn() {
    const popUps = document.querySelector(".popUps");
    popUps.style.display = "none";
}

function AdicionarLanche(LancheMenuLancheFuncao) {
    let valorTotal = document.getElementById("ValorTotal").textContent;

    valorTotal = valorTotal.replace("R$", "").trim().replace(",", ".");

    let valorAdicional = 0;

    if (LancheMenuLancheFuncao === "BatataMenuLancheFuncao") {
        valorAdicional = parseFloat(document.getElementById("valorBatata").textContent.replace(",", ".")) || 0;
    } else if (LancheMenuLancheFuncao === "CebolaMenuLancheFuncao") {
        valorAdicional = parseFloat(document.getElementById("valorCebola").textContent.replace(",", ".")) || 0;
    } else if (LancheMenuLancheFuncao === "CocaMenuLancheFuncao") {
        valorAdicional = parseFloat(document.getElementById("valorCoca").textContent.replace(",", ".")) || 0;
    } else if (LancheMenuLancheFuncao === "LancheMenuLancheFuncao") {
        valorAdicional = parseFloat(document.querySelector(".preçoLanche p").textContent.replace("R$", "").trim().replace(",", ".")) || 0;
    }

    valorTotalFloat += valorAdicional;

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

    fecharBtn();
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    window.location.href = "/carrinho.html";
}
