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
        Imagem: "https://github.com/otaviovale13/mix-burguer-front/blob/main/IMGS/1738688942957-removebg.png?raw=true",
    },
    {
        Nome: "Anel de Cebola",
        Preco: "R$ 16,00",
        Imagem: "https://github.com/otaviovale13/mix-burguer-front/blob/main/IMGS/1738688943009-removebg.png?raw=true",
    },
    {
        Nome: "Coca Cola",
        Preco: "R$ 5,00",
        Imagem: "https://github.com/otaviovale13/mix-burguer-front/blob/main/IMGS/coca%20lata.png?raw=true",
    },
]

const categorias = document.getElementById("categorias")

categorias.innerHTML = Object.keys(Categorias)
    .map(categoria => `
            <div id="categoria" class="categoria">
                <h1 style="color: white;">${categoria}</h1>
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
  <div style="height: 60rem; background-blend-mode: overlay; background-size: cover; background-image: url(/IMGS/fundo_mixburguer.jpg);"
    class="p-0 m-0 w-100">
    <div class="d-flex gap-1">
        <div style="margin-top: 1.4rem; width: 20rem; height: 15rem;"
            class="d-flex object-fit-cover">
            <img src="${imagem}"
                 alt="ImagemDoLanche"
                 style="margin-top: 1.4rem; margin-left: 4rem; width: 20rem; height: 15rem; border-radius: 10px;"
                 class="d-flex object-fit-cover r" />
        </div>
        <div style="margin-left: 24rem;"
            class="mt-4 d-flex flex-column align-items-center justify-content-center">
            <h1 style="font-size: 48px; color: rgb(254, 216, 60); font-family: Lily Script One; text-shadow: 2px 2px 4px rgb(0, 0, 0);"
                class="mb-1">${nome}</h1>
            <div style="font-size: 20px; color: rgb(0, 0, 0); font-family: Days One; background-color: #fed73ca6; border-radius: 10px; width: 24rem;"
                class="text-center p-1">
                <p>
                    ${descricao}
                </p>
                <div style="font-size: 36px; color: rgb(255, 255, 255); font-family: Days One;"
                    class="preçoLanche"><p>${preco}</p></div>
            </div>
        </div>
    </div>
    <div id="adicionaisPai" 
        class="adicionaisPai">
        <div>
            <p style="color: rgb(0, 0, 0); font-size: 2rem; font-family: Arial, Helvetica, sans-serif;"
                class="text-center mt-5">Turbine seu Burguer! <br />(escolha até 10 opções)</p>
            <div class="d-flex align-items-center justify-content-evenly">
                ${Adicionais.map(itemAdd => `
                <div style="color: #000000; font-size: 1.5rem;"
                    class="adicionais">
                    <img style="width: 5rem;" src="${itemAdd.Imagem}"
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
    <div style="margin-top: 7rem;"
        class="d-flex flex-column align-items-center justify-content-center"
        id="finalizarCarrinhoMenuLanche">
        <p style="font-size: 24px; color: rgb(254, 216, 60); font-family: Days One; margin-top: -5rem;"
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
