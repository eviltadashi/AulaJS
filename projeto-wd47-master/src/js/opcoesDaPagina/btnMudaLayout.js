;(function() {
/*

var altera a qualquer momento
let pode alterar mas nao pode criar uma com o mesmo nome
const não muda o valor, nao deixa mudar o seu conteudo e nao deixa criar uma com o mesmo nome

*/

const btn = document.querySelector("#btnMudaLayout");

function mudaTexto() {
    btn.textContent = btn.textContent.trim() === "Linhas" ? "Blocos" : "Linhas";
}

// btn.onclick = mudaTexto; abaixo uma forma de adicionar varias funcoes a um determinado evento

// nesse momento nao pode usar mudaTexto(), pois o () entende-se que sera chamada a funcao


    function mudaLayout() {
        const mural = document.querySelector(".mural"); // recuperando o elemento html pela classe css
        mural.classList.toggle("mural--linha");
    }
    
    
    btn.addEventListener("click", function () {
        mudaTexto();
        mudaLayout();
    });
    
    
    /* remover a classe que esconde elementos que já foram implementados */
    btn.classList.remove("no-js");
    
})()