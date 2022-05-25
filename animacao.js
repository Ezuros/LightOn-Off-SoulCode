const divLampada = document.querySelector('div.lampada')
const btnAddRemover = document.querySelector('#adicionar-remover')
const divIluminacao = document.querySelector('.iluminacao')


btnAddRemover.addEventListener('click', () =>{
    divLampada.classList.toggle('ligado')
    divIluminacao.classList.toggle('clarear') 
})

