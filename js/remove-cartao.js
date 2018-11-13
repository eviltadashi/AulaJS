
(function(){

    var btn = document.querySelector(".opcoesDoCartao-remove");

    function removeCartao(){
        var cartao = btn.parentNode.parentNode;
        cartao.classList.add("cartao--some");
        cartao.addEventListener("transitionend",function(){
            cartao.remove();
        })
    }
    btn.onclick = removeCartao;

})()


