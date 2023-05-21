// CONTEÚDO DA AULA 1 ______________________________ //

// function tocaSom(idElementAudio) {
//   document.querySelector(idElementAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll(".tecla");

// let contador = 0;
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`;
//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };
//   contador = contador + 1;
// }

// CONTEÚDO DA AULA 2 ______________________________ //

// function tocaSom(idElementAudio) {
//   document.querySelector(idElementAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll(".tecla");

// for (let contador = 0; contador < listaDeTeclas.length; contador++) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`;

//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };

//   tecla.onkeydown = function (evento) {
//     if (evento.code === "Enter" || evento.code === "Space") {
//       tecla.classList.add("ativa");
//     }
//   };

//   tecla.onkeyup = function () {
//     tecla.classList.remove("ativa");
//   };
// }

// CONTEÚDO DA AULA 3 ______________________________ //

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  // elemento !== null
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

// MINHA PRIMEIRA SOLUÇÃO ______________________________ //

// const listaDeTeclas = document.querySelectorAll(".tecla");
// const listaDeSons = document.querySelectorAll("audio");

// for (let i = 0; i < listaDeTeclas.length; i++) {
//   listaDeTeclas[i].onclick = () => {
//     listaDeSons[i].play();
//   };
// }

// MINHA SEGUNDA SOLUÇÃO ______________________________ //

// const listaDeTeclas = document.querySelectorAll(".tecla");

// for (let i = 0; i < listaDeTeclas.length; i++) {
//   const tecla = listaDeTeclas[i];
//   tecla.onclick = () => {
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;
//     document.querySelector(idAudio).play();
//   };
// }
