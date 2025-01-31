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

const categorias = document.getElementById("categorias")

categorias.innerHTML = Object.keys(Categorias)
    .map(categoria => `
            <div class="categoria">
                <h1>${categoria}</h1>
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

        function buscarLanche(){
            const inputBuscar = document.getElementById("inputBuscar").value.toLowerCase()
            const categorias = document.querySelectorAll(".categoria")

            categorias.forEach(categoria => {
                const produtos = categoria.querySelectorAll(".produtos");
                let visibilidade = false;

                produtos.forEach(item => {
                    if(item.textContent.toLowerCase().includes(inputBuscar)){
                        item.style.display = "";
                        visibilidade = true;
                    } else{
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
                    src="https://firebasestorage.googleapis.com/v0/b/brendi-app.appspot.com/o/public%2Fstores%2FliDYZPGpWDhaJHW0sWIk%2Fimages%2Fproducts%2Fresized%2FgvGEiOdReVw4lycHtukd_900x900.webp?alt=media&token=4c8eca87-503e-4844-af35-c11571fb9e23"
                    alt="ImagemDoLanche"
                    class="imagemLancheMenuLanche"
                  />
                </div>
                <div class="nomeLancheMenuLanche">
                  <h1 class="tituloLancheMenuLanche">Top Onion</h1>
                  <div class="descriçãoLanche">
                    <p>
                      Descubra o Top Onion Burger da Mix Burguer em Itupeva: Carne smash
                      suculenta, queijo derretido, 3 anéis de cebola crocantes e um
                      delicioso molho barbecue, tudo servido em um pão brioche macio.
                      Uma explosão de sabores e texturas, perfeita para quem busca um
                      hambúrguer único e saboroso.
                    </p>
                    <div class="preçoLanche"><p>R$ 25,95</p></div>
                  </div>
                </div>
              </div>
              <div class="adicionaisPai">
                <div>
                  <p class="adicionaisTurbinar">Turbine seu Burguer! <br />(escolha até 10 opções)</p>
                  <div class="adicionaisMenuLanche">
                    <div class="batataMenuLanche">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/024/508/765/small/french-fries-isolated-on-background-with-generative-ai-png.png"
                        alt="Batata"
                      />
                      <p>Batata:R$ 8,90</p>
                      <button>adicionar</button>
                    </div>
                    <div class="anelDeCebolaMenuLanche">
                      <img
                        src="https://www.cerealistaexpress.com.br/media/tmp/webp/catalog/product/cache/1/image/420x545/9df78eab33525d08d6e5fb8d27136e95/a/r/aros-de-cebola-jpge.webp"
                        alt="Anel de Cebola"
                      />
                      <p>Anel de Cebola:R$ 16,00</p>
                      <button>adicionar</button>
                    </div>
                    <div class="cocaColaMenuLanche">
                      <img
                        src="https://ibassets.com.br/ib.item.image.large/l-e6f31072323140d495404980871f7a15.png"
                        alt="Coca Cola"
                      />
                      <p>Coca Cola:R$ 5,00</p>
                      <button>adicionar</button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="finalizarCarrinhoMenuLanche">
              <p id="valorTotalMenuLanche">Valor Total: R$ 0,00</p>
              <button id="botaoFinalizarMenuLanche">Finalizar Carrinho</button>
              <button id="botaoFinalizarMenuLanche"  onclick="fecharBtn()">Sair</button>
            </div>
            </div>
            `;
        
            popUps.appendChild(novaDiv);
            popUps.style.display = "flex";
        }

        function fecharBtn() {
            const popUps = document.querySelector(".popUps");
            popUps.style.display = "none";
        }
        
        function btnSacola(){
          window.location.href = "/carrinho.html"
        }

        function voltarHome(){
            window.location.href = "/index.html"
          }