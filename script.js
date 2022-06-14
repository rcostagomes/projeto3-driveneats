 function selecionarprato(nomeClasse) {
     let botaoclicado = document.querySelector (".Prato .selecionado");
     if (botaoclicado !== null) {
        botaoclicado.classList.remove("selecionado");
     }
     
        let botao = document.querySelector(`.${nomeClasse}`);
        botao.classList.add("selecionado");
   }

   function selecionarbebida(nomeClasse) {
      let botaoclicado = document.querySelector (".Bebida .selecionado");
      if (botaoclicado !== null) {
         botaoclicado.classList.remove("selecionado");
      }
      
         const botao = document.querySelector(`.${nomeClasse}`);
         botao.classList.add("selecionado");
    
    }


    function selecionardoce(nomeClasse) {
      let botaoclicado = document.querySelector (".Doce .selecionado");
      if (botaoclicado !== null) {
         botaoclicado.classList.remove("selecionado");
      }
      
         let botao = document.querySelector(`.${nomeClasse}`);
         botao.classList.add("selecionado");
         
         verificarItens();
    }

    function verificarItens() {
      let lista = document.querySelectorAll(".selecionado");
      let fecharPedido = document.querySelector(".text-around");
      if (lista.length == 3) {
          fecharPedido.classList.add ('fecharPedido')
       }
       fecharPedido.innerHTML = "Fazer pedido";

   }


   function Whats() {
      const prato = document.querySelector(".Prato .selecionado .titulo ").textContent;
      const bebida = document.querySelector(".Bebida .selecionado .titulo ").textContent;
      const sobremesa = document.querySelector(".Doce .selecionado .titulo ").textContent;
      let custoPrato = document.querySelector(".Prato .selecionado .valor .TT").textContent;
      let custoBebida = document.querySelector(".Bebida .selecionado .valor .TT").textContent;
      let custoSobremesa = document.querySelector(".Doce .selecionado .valor .TT").textContent;
    
      custoPrato = Number(custoPrato.replace(",", ".",));
      custoBebida = Number(custoBebida.replace(",", "."));
      custoSobremesa = Number(custoSobremesa.replace(",", "."));
      let custoTotal = (custoPrato + custoBebida + custoSobremesa).toFixed(2);
        console.log(custoTotal);
    

      let texto1 = "https://wa.me/5521980596416?text=";
      let texto2 = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n  Total: R$ ${custoTotal}`;
      let encoded = encodeURIComponent(texto2);
    
      window.open(texto1 + encoded, "_blank");
    }

