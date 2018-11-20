;(
    function(){

        let contador = 0

        const form = $(".formNovoCartao")


        form.submit(function(event){
        

            event.preventDefault()//função que define que o submit não sera recarregado a pagina.
            
            const textarea = form.find(".formNovocartao-conteudo")
            const isTextAreaVazio = textarea.val().trim().length === 0
            if(isTextAreaVazio){
                const msgErro = document.createElement("div");
                msgErro.addClas.add("cartao-msg")
                msgErro.textContent = "Formulario Invalido, não digite varios nada";

                const btnSubmit = form.children[form.children.length-1]
                form.on("animationend", function(event){
                    event.target.remove()
                })
                form.insertBefore(msgErro,btnSubmit)
            }else{
                contador++
                const conteudoDoCartao = textarea.val()
                const formCartao=`<article id="cartao_${contador}" class="cartao">
                <div class="opcoesDoCartao">
                  <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                    <svg><use xlink:href="#iconeRemover"></use></svg>
                  </button>
                  <input type="radio" name="corDoCartao1" value="#EBEF40" id="corPadrão-cartao1" class="opcoesDoCartao-radioTipo" checked>
                  <label for="corPadrão-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                    Padrão
                  </label>
                  <input type="radio" name="corDoCartao1" value="#F05450" id="corImportante-cartao1" class="opcoesDoCartao-radioTipo">
                  <label for="corImportante-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                    Importante
                  </label>        
                  <input type="radio" name="corDoCartao1" value="#92C4EC" id="corTarefa-cartao1" class="opcoesDoCartao-radioTipo">
                  <label for="corTarefa-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                    Tarefa
                  </label>        
                  <input type="radio" name="corDoCartao1" value="#76EF40" id="corInspiração-cartao1" class="opcoesDoCartao-radioTipo">
                  <label for="corInspiração-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                    Inspiração
                  </label>
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
              </article>`


              cartao.on("keydown",function(e){
                if(e.key==="enter" || e.key===" "){
                    e.target.click()
                }
            })
            cartao.on('click', function(event){
                const elementoSelecionado = event.target
                if(elementoSelecionado.hasClass('opcoesDoCartao-remove')){
                    cartao.addClass("cartao--some")
                    cartao.on("transictionEnd",function(){
                        cartao.remove()
                    })
                }
            })
/******************************************************************************************/
                $(".mural").append(formCartao)

     
                
            }
        
        })

        form.removeClass("no-js")


})()