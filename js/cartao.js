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


;(
    function(){
        const cartoes = document.querySelectorAll(".cartao")

        cartoes.forEach(function(cartao){
        
           
            cartao.addEventListener("focusin",function(){
                cartao.classList.add("cartao--focado")
            })

            cartao.addEventListener("focusout",function(){
                cartao.classList.remove("cartao--focado")
            })
        })
    }
)()


;(
    function(){
        const cartoes = document.querySelectorAll(".cartao");

        cartoes.forEach(function(cartao){
            
            cartao.addEventListener("keydown",function(e){
                if(e.key==="enter" || e.key===" "){
                    e.target.click()
                }
            })

        })
    }

)()