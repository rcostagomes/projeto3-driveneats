function activeBorder(element){

    let selector = document.querySelector('.conteinerfeed .selecionar .icon2')
    if(selector !== null){
        selector.classList.remove('.selecionar')
    }
    element.classList.add('selecionar')

    if(selector !== null){
        selector.classList.remove('.icon2')
    }
    element.classList.add('icon2')

}

function activeBorder2(element){

    let selector = document.querySelector('.conteinerfeed2 .selecionar');
    if(selector !== null){
        selector.classList.remove('.selecionar');
    }

    else {element.classList.add('.selecionar')
    activeGreen ()
    }
}

function activeBorder3(element){
    let selector = document.querySelector('.conteinerfeed3 .selecionar')
    if(selector !== null){
        selector.classList.remove('.selecionar')
    }
    element.classList.add('.selecionar')
    activeGreen ()
}