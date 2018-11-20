; (function () {

    const $form = $(".formNovoCartao")
    $form.removeClass("no-js"); // remove essa classe para mostrar o componente na tela


    $form.on("submit", function (event) {
        event.preventDefault() // funcao para nao submeter o botao ainda

        const $textArea = $form.find(".formNovoCartao-conteudo")
        const isTextAreaVazio = $textArea.val().trim().length === 0; // ou ! textArea.value.trim().length

        if (isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido. Não digite vários nada! :)"
            $textArea.val("")
            //const btnSubmit = form.cartao[form.children.length - 1] // ultimo elemento do form
            $form.before(msgErro);
            $form.on("animationend", function (event) {
        
                // animationend eh um css transition event ----https://developer.mozilla.org/en-US/docs/Web/Events

                // na classe .formNovoCartao-msg existe a propriedade animation
                event.target.remove() // o filho div executou esse evento e o pai form ouviu e a partir disso executa algo
            })
            //form.insertBefore(msgErro, btnSubmit) // vai adicionar a div antes do btn
        } else {         
            adicionaCartaoMural({conteudo:$textArea.val().trim(), cor:"red"})
            $textArea.val("")}
    })

    /* $nomeVariavel eh somente para ficar visivel quando estamos usando elemento jquery */
})()