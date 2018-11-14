;(function(){
    var cartoes = document.querySelectorAll(".cartao")

    cartoes.forEach(function(cartao){

        cartao.addEventListener("change",function(event){
            const elementoSelecionado = event.target
            const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
            if(isRadioTipo){
                cartao.style.backgroundColor = elementoSelecionado.value
            }
      })
    
        

    })

})()