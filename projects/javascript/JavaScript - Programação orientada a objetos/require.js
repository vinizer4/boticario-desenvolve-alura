// EXPORTAR

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}

module.exports = { multiplica, soma };

// ______________________________ //

// IMPORTAR

const { multiplica, soma } = require("./caminho/arquivo");

const resultadoMult = multiplica(2, 2);
const resultadoSoma = soma(2, 2);
