const cartao = (function(){


    function adicionaEventoRemoveCartao(event, $cartao) {
        if (event.target.classList.contains("opcoesDoCartao-remove")) {
            $cartao.addClass("cartao--some")
            removeCartao({ $cartao:$cartao, evento:"transitionend" }) // named parameter, passando o valor do parametro para um objeto com propriedades com nomes
        }
    }
    function removeCartao({ $cartao, evento }) { // named parameters, ele recebe o valor pelo nome do parametro
        $cartao.on(evento, function() {
            $cartao.remove();
        })
    }
    function adicionarEventos($cartao) {
        $cartao.on("change", function(event) {
            const elementoHtml = event.target // o event é um elemento do DOM e não do jquery
            isRadioTipo = elementoHtml.classList.contains("opcoesDoCartao-radioTipo");
            if (isRadioTipo) {
                $cartao.addClass('cartao--muda--cor')
                var corEscolhida = elementoHtml.value
                $cartao.css("background-color", corEscolhida)
            }
      })
        $cartao.on("focusin", () => {
            $cartao.addClass("cartao--focado")
        })
        $cartao.on("focusout", () => {
            $cartao.removeClass("cartao--focado")
        })
        $cartao.on("keydown", e => {
            /* if (e.key === "Enter" || e.key === " ") {
                e.target.click();
            } */
            if(e.code === "Enter" || e.code === "Space"){
            e.target.click();
            }
        })
        $cartao.on("click", function(event){
            adicionaEventoRemoveCartao(event, $cartao)
        })
    }
    let contador = 0
    function adicionaCartaoMural(cartaoOBJ){
            contador++
            const conteudoDoCartao = cartaoOBJ.conteudo
            const cor = cartaoOBJ.cor
            const templateCartao = $(`
            <article id="cartao_${contador}" class="cartao" tabindex="0" style="background-color:${cor}">
            <div class="opcoesDoCartao">
              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
              </button>
    
              <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
              <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
              </label>
    
              <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
              <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
              </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
          </article>
            `) // notacao com crase ``(jquery) e usar ${} interpolador para usar js(nao eh jquery)

            const $novoCartao = $(templateCartao) // crio um elemento jquery
            
            // Adiciona os eventos a um elemento jquery
            adicionarEventos($novoCartao)

            $(".mural").append($novoCartao) // adiciona o elemento jquery no mural
    }
    return {
        adiciona : adicionaCartaoMural
    }
})()