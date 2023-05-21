const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

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
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(
      evento.target.dataset.peca,
      evento.target.dataset.controle,
    );
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca, controle) {
  if (controle === "+") {
    estatisticas.forEach((elemento) => {
      elemento.textContent =
        parseInt(elemento.textContent) +
        pecas[peca][elemento.dataset.estatistica];
    });
  }

  if (controle === "-") {
    estatisticas.forEach((elemento) => {
      elemento.textContent =
        parseInt(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica];
    });
  }
}

const setas = document.querySelectorAll("[data-seta]");

const robo = document.querySelector("#robo");

const cores = ["azul", "branco", "preto", "rosa", "vermelho", "amarelo"];

let contador = 0;

setas.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const seta = elemento.dataset.seta;

    if (seta === "direita") {
      contador++;
    } else if (seta === "esquerda") {
      contador--;
    }

    if (contador >= cores.length - 1) {
      elemento.setAttribute("disabled", "");
      contador = cores.length - 1;
    } else {
      setas[1].removeAttribute("disabled", "");
    }

    if (contador <= 0) {
      elemento.setAttribute("disabled", "");
      contador = 0;
    } else {
      setas[0].removeAttribute("disabled", "");
    }

    const cor = `./img/robotrons/${cores[contador]}/robotron.png`;
    robo.setAttribute("src", cor);
  });
});
