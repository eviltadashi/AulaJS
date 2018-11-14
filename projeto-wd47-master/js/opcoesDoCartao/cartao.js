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
    })

})()