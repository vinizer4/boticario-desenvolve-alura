// A utilização errada do this pode alterar o objeto de referência a ser acessado, ocasionando problemas na execução do código. Seguindo esta linha de pensamento, qual alternativa retorna a frase abaixo no console do navegador:

// “O Robotron irá salvar o planeta Terra de um ataque alienígena!”.

// RESPOSTA CORRETA:

var heroi = {
  nome: "Robotron",
  cor: "Azul",
  frase: "O Robotron irá salvar o planeta Terra de um ataque alienígena!",
  enviaFrase() {
    return this.frase;
  },
};

console.log(heroi.enviaFrase());
