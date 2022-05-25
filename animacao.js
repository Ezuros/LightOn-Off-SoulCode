const divLampada = document.querySelector('div.lampada')
const btnAddRemover = document.querySelector('#adicionar-remover')
const divIluminacao = document.querySelector('.iluminacao')

const btnImg = document.querySelector('#btn-img')


btnAddRemover.addEventListener('click', () =>{
    divLampada.classList.toggle('ligado')
    divIluminacao.classList.toggle('clarear')

    if(divLampada.classList.contains('ligado')){
        btnImg.setAttribute('src', 'img/interruptor2.png')
    }
    else{
        btnImg.setAttribute('src', 'img/interruptor1.png')
    }
    
})

