; (function () {

    const $form = $(".formNovoCartao")
    $form.removeClass("no-js"); // remove essa classe para mostrar o componente na tela
    let contador = 0 // let ele nao permite que outra variavel seja criada com o mesmo nome

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

            if (e.code === "Enter" || e.code === "Space") {
                e.target.click();
            }
        })

        $cartao.on("click", function(event){
            adicionaEventoRemoveCartao(event, $cartao)
        })
    }

    $form.on("submit", function (event) {
        event.preventDefault() // funcao para nao submeter o botao ainda

        const $textArea = $form.find(".formNovoCartao-conteudo")
        const isTextAreaVazio = $textArea.val().trim().length === 0; // ou ! textArea.value.trim().length

        if (isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido. Não digite vários nada! :)"

            const btnSubmit = form.children[form.children.length - 1] // ultimo elemento do form
            form.addEventListener("animationend", function (event) {

                // animationend eh um css transition event ----https://developer.mozilla.org/en-US/docs/Web/Events

                // na classe .formNovoCartao-msg existe a propriedade animation
                event.target.remove() // o filho div executou esse evento e o pai form ouviu e a partir disso executa algo
            })
            form.insertBefore(msgErro, btnSubmit) // vai adicionar a div antes do btn
        } else {

            contador++
            const conteudoDoCartao = $textArea.val().trim()
            const templateCartao = $(`
            <article id="cartao_${contador}" class="cartao" tabindex="0">
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
            $textArea.val("")
        }
    })


    /* $nomeVariavel eh somente para ficar visivel quando estamos usando elemento jquery */
})()