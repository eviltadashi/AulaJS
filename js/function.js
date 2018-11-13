const btn = document.querySelector('#btnMudaLayout');

function mudaTexto(){
    if(btn.textContent==='Linhas'){
        btn.textContent='Blocos';
    }else{
        btn.textContent = 'Linhas'
    }
}


btn.onclick = mudaTexto;



const mural = document.querySelector('.mural')
function mudarLayout(){
    mural.classList.toggle('mural--linha')
}

btn.addEventListener('click', mudarLayout)