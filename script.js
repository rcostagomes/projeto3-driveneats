 function selecionarprato(nomeClasse) {
     const botaoclicado = document.querySelector (".selecionado")
     if (botaoclicado !== null) {
        botaoclicado.classList.remove("selecionado")
     }
     
        const botao = document.querySelector(`.${nomeClasse}`);
        botao.classList.add("selecionado");
    } 
