;(function() {

    const cartoes = document.querySelectorAll(".cartao");

    cartoes.forEach(cartao => {
        
        cartao.addEventListener("change", function(event) {
            const elementoHtml = event.target
            
            isRadioTipo = elementoHtml.classList.contains("opcoesDoCartao-radioTipo");

            if (isRadioTipo) {
                cartao.classList.add('cartao--muda--cor')
                var corEscolhida = elementoHtml.value
                cartao.style.backgroundColor = corEscolhida
            }
        })

        cartao.addEventListener("focusin", () => {
            cartao.classList.add("cartao--focado")
        })

        cartao.addEventListener("focusout", () => {
            cartao.classList.remove("cartao--focado")
        })

        cartao.addEventListener("keydown", e => {
            /* if (e.key === "Enter" || e.key === " ") {
                e.target.click();
            } */

            if (e.code === "Enter" || e.code === "Space") {
                e.target.click();
            }
        })

    })

})()