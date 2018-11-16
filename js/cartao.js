;(function a(){
    var cartoes = document.querySelectorAll(".cartao")
    cartoes.forEach(function(cartao){
        cartao.on("change",function(event){
            const elementoSelecionado = event.target
            const isRadioTipo = elementoSelecionado.hasClass('opcoesDoCartao-radioTipo')
            if(isRadioTipo){
                cartao.style.backgroundColor = elementoSelecionado.value
            }
      })
    })
})()
;(  function b(){
        const cartoes = document.querySelectorAll(".cartao")
        cartoes.forEach(function(cartao){
            cartao.on("focusin",function(){
                cartao.addClass("cartao--focado")
            })
            cartao.on("focusout",function(){
                cartao.removeClass("cartao--focado")
            })
        })
    }
)()


