﻿let Categorias = {
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

const Adicionais = [
    {
        Nome: "Batata",
        Preco: "R$ 8,90",
        Imagem: "IMGS/1738688942957-removebg.png",
    },
    {
        Nome: "Anel de Cebola",
        Preco: "R$ 16,00",
        Imagem: "IMGS/1738688943009-removebg.png",
    },
    {
        Nome: "Coca Cola",
        Preco: "R$ 5,00",
        Imagem: "IMGS/coca lata.png",
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
                            <div class="font-arial d-flex gap-1">
                              <button class="btnCardapio">Remover</button>
                              <button class="btnCardapio">Editar</button>
                              <button class="btnCardapio">Adicionar Adicionais</button>
                              <button class="btnCardapio">Remover Adicionais</button>
                              <button class="btnCardapio">Editar Adicionais</button>
                            </div>
                        `)
            .join("")}
                        <div class="font-arial flex gap-1">
                              <button class="btnCardapio">Remover</button>
                        </div>
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

function criarModal() {
    const modal = document.createElement("div");
    modal.id = "popUpsAdicionar";
    modal.className = "popUpsAdicionar";
    modal.style.display = "none";

    document.body.appendChild(modal);
}

function adicionarCate() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
    <div class="w-35rem text-black rounded-10px p-20px bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
    <div class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">
      <label>Nome da Categoria:</label>
      <input class="border-solid-1px-black text-black text-center mt-3 mb-3"
      id="inputAdicionais" type="text" />
    </div>
    <div class="font-arial d-flex gap-2">
      <button class="btnCardapio"
      onclick="salvarCategoria()">Salvar</button>
      <button class="btnCardapio"
      onclick="fecharModal()">Fechar</button>
    </div>
    </div>
  `;
}

function salvarCategoria() {
    const inputAdicionais = document.getElementById("inputAdicionais").value.trim();

    if (inputAdicionais !== "") {
        if (!Categorias[inputAdicionais]) {
            Categorias[inputAdicionais] = [];
            fecharModal();
            atualizarCategorias();
        } else {
            alert("Essa categoria já existe!")
        }
    } else {
        alert("O nome da ctegoria não pode estar vazio!");
    }
}

function atualizarCategorias() {
    const categoriasDiv = document.getElementById("categorias");
    categoriasDiv.innerHTML = Object.keys(Categorias)
        .map(categoria => `
            <div id="categoria" class="categoria">
                <h1 class="text-light">${categoria}</h1>
                ${Categorias[categoria]
                .map(item => `
                        <div class="produtos" onclick="popUp('${item.Nome}', '${item.Descricao}', '${item.Preco}', '${item.Imagem}')"> 
                            <div>
                                <h2 class="itemTitulo">${item.Nome}</h2>
                                <h3 class="descricao">${item.Descricao}</h3>
                                <h2 class="preco">${item.Preco}</h2>
                            </div>
                            <div class="divImg">
                                <img src="${item.Imagem}" />
                            </div>
                        </div>
                        <div class="font-arial d-flex gap-3 mt-3">
                            <button class="btnCardapio" onclick="removerItem('${categoria}', '${item.Nome}')">Remover</button>
                            <button class="btnCardapio" onclick="editarItem('${categoria}', '${item.Nome}', '${item.Descricao}', '${item.Preco}', '${item.Imagem}')">Editar</button>
                            <button class="btnCardapio" onclick="adicionarAdicionais('${item.Nome}')">Adicionar Adicionais</button>
                            <button class="btnCardapio" onclick="removerAdicionais()">Remover Adicionais</button>
                            <button class="btnCardapio" onclick="editarAdicionais()">Editar Adicionais</button>
                        </div>
                    `).join("")}
                    <div class="font-arial d-flex gap-1 mt-3">
                            <button class="btnCardapio" onclick="adicionarProduto('${categoria}')">Adicionar Produto</button>
                    </div>
            </div>
        `).join("");
}

function removerItem(categoria, nomeItem) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";
    modal.innerHTML = `
      <div class="w-35rem text-black rounded-10px p-20px bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0 p-4">
          <div class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">
              <h1 class="font-arial">Tem certeza que deseja remover "${nomeItem}"?</h1>
          </div>
          <div style="font-family: Arial, sans serif;"
            class="d-flex gap-2">
              <button class="btnCardapio"
              onclick="confirmarRemocao('${categoria}', '${nomeItem}')">Sim</button>
              <button class="btnCardapio" 
              onclick="fecharModal()">Não</button>
          </div>
      </div>
  `;
}

function confirmarRemocao(categoria, nomeItem) {
    Categorias[categoria] = Categorias[categoria].filter(item => item.Nome !== nomeItem);
    atualizarCategorias();
    fecharModal();
}

document.addEventListener("DOMContentLoaded", criarModal);

function fecharModal() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "none";
}

function editarItem(categoria, nomeItem, descricaoItem, precoItem, imagemItem) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
        <div class="w-35rem text-black rounded-10px p-20px bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
            <h1 class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">Editar "${nomeItem}"</h1>
            <div class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">
                <label>Nome:</label>
                <input class="border-solid-1px-black text-black text-center mt-3 mb-3"
                id="inputNovoNome" 
                type="text"
                value="${nomeItem}" />
            </div>
            <div class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">
                <label>Descrição:</label>
                <textarea id="inputNovaDescricao" class="inputNovaDescricao">${descricaoItem}</textarea>
            </div>
            <div class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">
                <label>Preço:</label>
                <input class="border-solid-1px-black text-black text-center mt-3 mb-3"
                id="inputNovoPreco"
                type="text"
                value="${precoItem}" />
            </div>
            <div class="font-arial d-flex flex-column gap-1 justify-content-center align-items-center">
                <label>Imagem Atual:</label>
                <img id="imagemPreview"
                src="${imagemItem}" 
                class="imgPreview w-5rem" />
                <label>Nova Imagem:</label>
                <input class="border-solid-1px-black text-black text-center mt-3 mb-3"
                id="inputNovaImagem" 
                type="file" a
                ccept="image/*" o
                nchange="previewNovaImagem(event)" />
            </div>
            <div class="font-arial d-flex gap-2">
                <button class="btnCardapio" onclick="confirmarEdicao('${categoria}', '${nomeItem}')">Salvar</button>
                <button class="btnCardapio" onclick="fecharModal()">Cancelar</button>
            </div>
        </div>
    `;
}

function previewNovaImagem(event) {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        document.getElementById("imagemPreview").src = url;
    }
}

function confirmarEdicao(categoria, nomeItem) {
    const novoNome = document.getElementById("inputNovoNome").value.trim();
    const novaDescricao = document.getElementById("inputNovaDescricao").value.trim();
    const novoPreco = document.getElementById("inputNovoPreco").value.trim();
    const novaImagemInput = document.getElementById("inputNovaImagem").files[0];

    if (!novoNome || !novaDescricao || !novoPreco) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const item = Categorias[categoria].find(item => item.Nome === nomeItem);
    if (item) {
        item.Nome = novoNome;
        item.Descricao = novaDescricao;
        item.Preco = novoPreco;

        if (novaImagemInput) {
            const reader = new FileReader();
            reader.onload = function (e) {
                item.Imagem = e.target.result;
                atualizarCategorias();
                fecharModal();
            };
            reader.readAsDataURL(novaImagemInput);
        } else {
            atualizarCategorias();
            fecharModal();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarCategorias();
    criarModal();
});

function fecharModal() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "none";
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
    popUps.style.display = "none"
}

function adicionarAdicionais(nomeItem) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div style="padding: 20px; border-radius: 10px; color: black; width: 35rem;"
           class="bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
        <h1 style="font-family: Arial, Helvetica, sanas serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">Adicionar Adicional a "${nomeItem}"</h1>
        <div style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Nome:</label>
          <input 
          style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputAdicional" 
          type="text" />
        </div>
        <div style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Valor:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputAdicionalValor" 
          type="text" />
        </div>
        <div style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Imagem:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputAdicionalImagem" 
          type="file"
          accept="image/*" 
          onchange="previewNovaImagem(event)" />
       </div>
       <div style="font-family: dm sans;"
            class="d-flex gap-2">
         <button class="btnCardapio" onclick="salvarAdicional()">Salvar</button>
         <button class="btnCardapio" onclick="fecharModal()">Cancelar</button>
       </div>
      </div>
    `;
}

function salvarAdicional() {
    const inputAdicional = document.getElementById("inputAdicional").value.trim();
    const inputAdicionalValor = document.getElementById("inputAdicionalValor").value.trim();
    const inputAdicionalImagem = document.getElementById("inputAdicionalImagem").files[0];

    if (!inputAdicional || !inputAdicionalValor) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const index = document.getElementById("selectAdicional")?.value;

    if (index !== undefined && index !== "") {
        Adicionais[index].Nome = inputAdicional;
        Adicionais[index].Preco = inputAdicionalValor;

        if (inputAdicionalImagem) {
            const reader = new FileReader();
            reader.onload = function (e) {
                Adicionais[index].Imagem = e.target.result;
                fecharModal();
            };
            reader.readAsDataURL(inputAdicionalImagem);
        } else {
            fecharModal();
        }
    } else {
        const reader = new FileReader();
        reader.onload = function (e) {
            const novaImagem = e.target.result;

            Adicionais.push({
                Nome: inputAdicional,
                Preco: inputAdicionalValor,
                Imagem: novaImagem,
            });

            fecharModal();
        };

        if (inputAdicionalImagem) {
            reader.readAsDataURL(inputAdicionalImagem);
        } else {
            Adicionais.push({
                Nome: inputAdicional,
                Preco: inputAdicionalValor,
                Imagem: "IMGS/default.png",
            });
            fecharModal();
        }
    }
}

function removerAdicionais() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div style="padding: 20px; border-radius: 10px; color: black; width: 35rem;"
           class="bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
        <h1 style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">Remover Adicional</h1>
        <div style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
        ${Adicionais.map((itemAdd, index) => `
              <label>
                  <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
                  type="checkbox"
                  name="adicionalRemover"
                  value="${index}" />
                  ${itemAdd.Nome} - ${itemAdd.Preco}
              </label>
            `).join("")}
        </div>
       <div style="font-family: dm sans;"
            class="d-flex gap-2">
         <button class="btnCardapio" onclick="confirmarRemocaoAdicional()">Remover</button>
         <button class="btnCardapio" onclick="fecharModal()">Cancelar</button>
       </div>
      </div>
    `;
}

function confirmarRemocaoAdicional() {
    const selecionados = document.querySelectorAll("input[name='adicionalRemover']:checked");

    if (selecionados.length > 0) {
        const indicesParaRemover = Array.from(selecionados).map(input => parseInt(input.value)).sort((a, b) => b - a);

        indicesParaRemover.forEach(index => {
            Adicionais.splice(index, 1);
        });

        alert(`Foram removidos ${indicesParaRemover.length} adicionais!`);

        fecharModal();

        if (Adicionais.length === 0) {
            document.getElementById("adicionaisPai").style.display = "none"
        }
    } else {
        alert("Selecione pelo menos um adicional para remover!");
    }
}

function editarAdicionais() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div style="padding: 20px; border-radius: 10px; color: black; width: 35rem;"
           class="bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
        <h1 style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">Editar Adicional</h1>
        <div style="font-family: Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
            <label>Editar Adicional:</label>
            <select id="selectAdicional" onchange="preencherCamposAdicional()">
                <option value="" disabled selected>Selecione um adicional</option>
                ${Adicionais.map((itemEdit, index) => `
                    <option value="${index}">${itemEdit.Nome}</option>
                `).join("")}
            </select>
        </div>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Nome:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputAdicional" 
          type="text" />
        </div>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Valor:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputAdicionalValor" 
          type="text" />
        </div>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Imagem:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputAdicionalImagem" 
          type="file" accept="image/*" 
          onchange="previewNovaImagem(event)" />
        </div>
       <div style="Arial, Helvetica, sans serif;"
            class="d-flex gap-2">
         <button class="btnCardapio" onclick="salvarAdicional()">Salvar</button>
         <button class="btnCardapio" onclick="fecharModal()">Cancelar</button>
       </div>
      </div>
    `;
}

function preencherCamposAdicional() {
    const select = document.getElementById("selectAdicional");
    const index = select.value;

    if (index !== "") {
        const adicional = Adicionais[index];
        document.getElementById("inputAdicional").value = adicional.Nome;
        document.getElementById("inputAdicionalValor").value = adicional.Preco;
    }
}

function adicionarProduto(categoria) {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
      <div style="padding: 20px; border-radius: 10px; color: black; width: 35rem;"
           class="bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
        <h1 style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">Adicionar Produto à Categoria "${categoria}"</h1>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Nome do Produto:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputNomeProduto" 
          type="text" />
        </div>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Descrição:</label>
          <textarea style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputDescricaoProduto"></textarea>
        </div>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Preço:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputPrecoProduto" 
          type="text" />
        </div>
        <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
          <label>Imagem:</label>
          <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
          id="inputImagemProduto"
          type="file" 
          accept="image/*" 
          onchange="previewNovaImagem(event)" />
        </div>
        <div style="Arial, Helvetica, sans serif;;"
            class="d-flex gap-2">
          <button class="btnCardapio" onclick="salvarProduto('${categoria}')">Salvar</button>
          <button class="btnCardapio" onclick="fecharModal()">Cancelar</button>
        </div>
      </div>
    `;
}

function salvarProduto(categoria) {
    const nomeProduto = document.getElementById("inputNomeProduto").value.trim();
    const descricaoProduto = document.getElementById("inputDescricaoProduto").value.trim();
    const precoProduto = document.getElementById("inputPrecoProduto").value.trim();
    const imagemProduto = document.getElementById("inputImagemProduto").files[0];

    if (!nomeProduto || !descricaoProduto || !precoProduto) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const novoProduto = {
        Nome: nomeProduto,
        Descricao: descricaoProduto,
        Preco: precoProduto,
        Imagem: imagemProduto ? URL.createObjectURL(imagemProduto) : "IMGS/default.png",
    };

    Categorias[categoria].push(novoProduto);

    atualizarCategorias();

    fecharModal();
}

function removerCate() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";
    modal.innerHTML = `
        <div style="padding: 20px; border-radius: 10px; color: black; width: 35rem;"
           class="bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
            <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
                <h1>Deseja excluir qual Categoria?</h1>
                <select id="selectCate" onchange="excluirSelecionadoCate()">
                    <option value="" disabled selected>Selecione uma Categoria</option>
                    ${Object.keys(Categorias).map(categoria => `
                        <option value="${categoria}">${categoria}</option>
                    `).join("")}
                </select>
            </div>
            <div style="Arial, Helvetica, sans serif;"
            class="d-flex gap-2">
                <button class="btnCardapio" onclick="confirmarRemocaoCate()">Sim</button>
                <button class="btnCardapio" onclick="fecharModal()">Não</button>
            </div>
        </div>
    `;
}

function excluirSelecionadoCate() {
    const selectCate = document.getElementById("selectCate");
    const categoriaSelecionada = selectCate.value;
    if (categoriaSelecionada) {
        document.querySelector(".btnsSalvar button").disabled = false;
    }
}

function confirmarRemocaoCate() {
    const selectCate = document.getElementById("selectCate");
    const categoriaSelecionada = selectCate.value;

    if (categoriaSelecionada) {
        delete Categorias[categoriaSelecionada];
        atualizarCategorias();
        fecharModal();
    }
}

function editarCate() {
    const modal = document.getElementById("popUpsAdicionar");
    modal.style.display = "flex";

    modal.innerHTML = `
    <div style="padding: 20px; border-radius: 10px; color: black; width: 35rem;"
           class="bg-white text-center d-flex flex-column justify-content-center align-items-center gap-1 border-0">
      <h1 style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">Editar Categoria</h1>
      <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
        <h1>Deseja editar qual Categoria?</h1>
        <select id="selectCateEdit" onchange="preencherInputEditCate()">
            <option value="" disabled selected>Selecione uma Categoria</option>
            ${Object.keys(Categorias).map(categoria => `
                <option value="${categoria}">${categoria}</option>
            `).join("")}
        </select>
      </div>
      <div style="Arial, Helvetica, sans serif;"
             class="d-flex flex-column gap-1 justify-content-center align-items-center">
        <label>Nome:</label>
        <input style="color: black; border: solid 1px black;"
      class="text-center mt-3 mb-3"
        id="inputEditCate" 
        type="text" />
      </div>
      <div style="Arial, Helvetica, sans serif;"
            class="d-flex gap-2">
        <button class="btnCardapio" onclick="salvarNovaCategoria()">Salvar</button>
        <button class="btnCardapio" onclick="fecharModal()">Cancelar</button>
      </div>
    </div>
  `;
}

function preencherInputEditCate() {
    const selectCateEdit = document.getElementById("selectCateEdit");
    const categoriaSelecionadaEdit = selectCateEdit.value;

    if (categoriaSelecionadaEdit) {
        // Preenche o campo de entrada com o nome da categoria selecionada
        const inputEditCate = document.getElementById("inputEditCate");
        inputEditCate.value = categoriaSelecionadaEdit;  // Aqui preenche com o nome da categoria
        document.querySelector(".btnsSalvar button").disabled = false; // Habilita o botão "Salvar"
    }
}

function salvarNovaCategoria() {
    const selectCateEdit = document.getElementById("selectCateEdit");
    const categoriaSelecionadaEdit = selectCateEdit.value;
    const novoNomeCategoria = document.getElementById("inputEditCate").value.trim();

    if (categoriaSelecionadaEdit && novoNomeCategoria && categoriaSelecionadaEdit !== novoNomeCategoria) {
        // Criamos um array com a ordem original das categorias
        let categoriasOrdenadas = Object.keys(Categorias);

        // Criamos um novo objeto mantendo a ordem
        let novaListaCategorias = {};

        categoriasOrdenadas.forEach(categoria => {
            if (categoria === categoriaSelecionadaEdit) {
                // Renomeamos a categoria no mesmo local da lista
                novaListaCategorias[novoNomeCategoria] = Categorias[categoria];
            } else {
                novaListaCategorias[categoria] = Categorias[categoria];
            }
        });

        Categorias = novaListaCategorias;

        // Atualiza a interface
        atualizarCategorias();
        fecharModal();
    }
}

function voltarHome() {
    window.location.href = "/arielHome.html"
}