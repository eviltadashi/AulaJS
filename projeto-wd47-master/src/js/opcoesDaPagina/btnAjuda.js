; (function () {
    const btnAjuda = document.querySelector("#btnAjuda");
    btnAjuda.classList.remove("no-js");

    btnAjuda.addEventListener("click", function () {


        $.ajax({
            method: "GET",
            url: "http://ceep.herokuapp.com/cartoes/instrucoes",
            dataType: "json"
          })
          .done(function( response ) {
            var ajudas = response.instrucoes
                ajudas.forEach(function (ajuda) {
                cartao.adiciona(ajuda);
          });




        /* axios({
            method:'get',
            url:'http://ceep.herokuapp.com/cartoes/instrucoes',
            responseType:'json'
          })
            .then(function (response) {
                var ajudas = response.data.instrucoes
                
                ajudas.forEach(function (ajuda) {
                cartao.adiciona(ajuda);


            }); */

           


        
        //usando ajax
        /* const xhr = new XMLHttpRequest()        
        xhr.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes')
        xhr.responseType = "json"
        xhr.send()
        xhr.addEventListener("load", function(){
            const objeto = xhr.response
            const ajudas = objeto.instrucoes

            ajudas.forEach(function (ajuda) {
            cartao.adiciona(ajuda);
        }) */

        /*
        const ajudas = [{conteudo: "Bem Vindo ao Ceep",cor: "#F05450"},{conteudo: "Clique no btn Linhas para mudar o Layout",cor:"#92C4EC"}]
        */
       
        })
    })
})()




/*

// GET request for remote image
axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });


*/