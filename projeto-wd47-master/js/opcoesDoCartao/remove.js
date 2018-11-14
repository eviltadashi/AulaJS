; (function () { // chamado de IIFE -> Immediately Invoked Function Expression
    var btns = document.querySelectorAll('.opcoesDoCartao-remove') // elementos btn
    
    function removeCartao() {
        const cartao = this.parentNode.parentNode // this eh a referencia para o proprio btn
        cartao.classList.add('cartao--some') // adiciono a classe que faz a transition

        cartao.addEventListener("transitionend", function () { // adiciono evento, quando acabar a transition executa alguma coisa
            cartao.remove() // executa a funcao remove
        })
    }
    /* btns.forEach(function(btn) {
        btn.addEventListener('click', removeCartao)
    }) */

    /* btns.forEach(btn => btn.addEventListener('click', removeCartao)) sem as chaves ele retorna um valor */

    btns.forEach(btn => {  // arrow function
        btn.addEventListener('click', removeCartao)
    })

/* SPREAD operator => var obj2 = {..., obj} clona o obj em uma nova instancia obj2
    Oject.assign({}, obj) -> clona obj e retorna uma nova instancia, ambos sobrescrevem propriedades
*/

})()