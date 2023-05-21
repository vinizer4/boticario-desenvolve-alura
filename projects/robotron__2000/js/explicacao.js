const controle = document.querySelectorAll("[data-controle]");
// Está capturando todas as tags com o atributo data-controle

const estatisticas = document.querySelectorAll("[data-estatistica]");
// Está capturando todas as tags com o atributo data-estatistica

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    // elemento -> <buttom class="controle-ajuste" data-controle="-">-</buttom> ou <buttom class="controle-ajuste" data-controle="+">+</buttom>

    // evento.target.textContent -> pega o valor (texto) que está dentro da tag (Porém não será utilizado)

    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);

    // console.log(evento.target); // procura o elemento clicado

    // evento.target.dataset.controle -> data-controle="+" e data-controle="-" (pega o valor do data-attributes, no caso o sinal de + ou -)

    // console.log(evento.target.parentNode); // procura quem é o pai do elemento clicado

    atualizaEstatisticas(evento.target.dataset.peca);
    // evento.target.dataset.peca são os valores do data-peca="valores" que estão nos buttons.
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  // Captura o pai do elemento clicado (pai do + ou - clicado (div)), e dentro desse pai, ele busca o filho que tem o data-contador

  if (operacao === "-") {
    // Se operação for igual a - , então o input recebe o valor numérico do input -1, senão recebe +1
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  // Parâmetro peca = evento.target.dataset.peca

  // evento.target.dataset.peca são os valores do data-peca="valores" que estão nos buttons.

  // console.log(pecas[peca]);
  estatisticas.forEach((elemento) => {
    // estatisticas.forEach((elemento) -> Para cada tag que tem o data-estatistica, captura a tag;

    // console.log(elemento.dataset.estatistica);
    // console.log(elemento.textContent);

    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
    // Valor que está dentro tag recebe o valor que está dentro da tag e soma seu valor numérico + pecas[peca][elemento.dataset.estatistica]

    // pecas[peca][elemento.dataset.estatistica] significa:
    // pecas é o objeto inteiro.
    // pecas[peca] é o valor de pecas[data-peca="valor"] então é como se estivesse buscando o objeto que está dentro do objeto inteiro pecas utilizando o valor de data-peca="valor"}
    // pecas[peca][elemento.dataset.estatistica] está capturando o valor numérico de cada objeto que está dentro do objeto inteiro pecas utilizando o valor de data-estatistiva="valor" (forca, poder, energia, velocidade)
  });
}

/*

  EXPLICAÇÃO DO CÓDIGO

  Para cada tag (button com sinal de + ou -) com o atributo data-controle, deve escutar o clique do mouse e executar a função manipulaDados.
  Na função manipulaDados, o primeiro parâmetro, captura o valor do elemento clicado com evento.target e capturando o "+" ou "-" que está dentro do data-controle com o evento.target.dataset.controle.
  O segundo parâmetro captura o pai do elemento clicado (div) com o evento.target.parentNode.
  Assim dentro da função, se o valor do data-controle for - ou + (diferente de -) , ele respectivamente, subtrai ou soma, o conteúdo da tag que tem o data-contador (Que no caso é o input que tem o valor zero 0).
  Porém para capturar o data-contador correto, ele busca o pai do elemento clicado (pai do + ou - clicado (div)), e dentro desse pai, ele busca o filho que tem o data-contador e realiza a subtração ou soma.

  E está utilizando os valores que estão dentro de "" no data-estatistica e data-peca que estão no html em conjunto com o objeto const pecas que está neste arquivo, realizando os cálculos para alterar a força, poder, energia e velocidade conforme altera a quantidade de braços, blindagem, núcleos, pernas e foguetes.
*/

/*

  DESCONSIDERAR OS CÓDIGOS ABAIXO

// const robo = document.querySelector("#robo");

// robo.onclick = () => {
//   alert("Robô");
// };

// robo.addEventListener("click", () => {
//   alert(`Oi`);
// });

// function oi(nome) {
//   alert(`Oi ${nome}!!!`);
// }
// oi("Bárbara");

// robo.addEventListener("click", (evento) => {
//   console.log(evento);
// });

// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

// somar.addEventListener("click", () => {
//   braco.value = parseInt(braco.value) + 1;
// });

// subtrair.addEventListener("click", () => {
//   braco.value = parseInt(braco.value) - 1;
// });

// somar.addEventListener("click", () => manipulaDados("somar"));
// subtrair.addEventListener("click", () => manipulaDados("subtrair"));

// function manipulaDados(operacao) {
//   if (operacao === "subtrair") {
//     braco.value = parseInt(braco.value) - 1;
//   } else {
//     braco.value = parseInt(braco.value) + 1;
//   }
// }

*/

/* 

  CÓDIGO DO INSTRUTOR SOBRE A TROCA DE IMAGEM DO ROBO

  HTML:
  <section class="robotron">
           <section class="botoes">
               <button class="alterar" alterar onclick="trocaImagem('Azul')">Robotron Azul</button>
               <button class="alterar" alterar onclick="trocaImagem('Amarelo')">Robotron Amarelo</button>
               <button class="alterar" alterar onclick="trocaImagem('Branco')">Robotron Branco</button>
               <button class="alterar" alterar onclick="trocaImagem('Preto')">Robotron Preto</button>
               <button class="alterar" alterar onclick="trocaImagem('Rosa')">Robotron Rosa</button>
               <button class="alterar" alterar onclick="trocaImagem('Vermelho')">Robotron Vermelho</button>
           </section>
           <img class="robo" src="/img/Robotron 2000 - Azul.png" alt="Robotron">
           <figcaption class="titulo">ROBOTRON <br>2000</figcaption>
       </section>

  CSS:
  .alterar {
    margin: 2px;
    width: 200px;
}

.botoes {
   position: relative;
   right: 5%;
   bottom: 10%;
   display: flex;
}

  JS:
  function trocaImagem(cor){
   document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
}

*/
