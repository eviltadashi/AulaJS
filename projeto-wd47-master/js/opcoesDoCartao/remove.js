; (function () { // chamado de IIFE -> Immediately Invoked Function Expression
    var btns = document.querySelectorAll('.opcoesDoCartao-remove') // elementos btn
    
    function removeCartao() {
        const cartao = this.parentNode.parentNode // this eh a referencia para o proprio btn
        cartao.classList.add('cartao--some') // adiciono a classe que faz a transition

        cartao.addEventListener("transitionend", function () { // adiciono evento, quando acabar a transition executa alguma coisa
            cartao.remove() // executa a funcao remove
        })
    }
    btns.forEach(function(btn) {
        btn.addEventListener('click', removeCartao)
    })
})()