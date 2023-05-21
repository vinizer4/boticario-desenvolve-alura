// Importante: para utilizar a sintaxe ESM com NodeJS é preciso incluir, no arquivo package.json, a propriedade ”type”: “module” e sempre incluir a extensão do arquivo .js nos caminhos de importação - por exemplo import soma from ‘./caminho/arquivo.js’;

// Inserir no terminal npm init -y (cria um arquivo package.json), entrar no arquivo e adicionar "type": "module"

// EXPORTAÇÃO

export function soma(num1, num2) {
  return num1 + num2;
}

export function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}

// ______________________________ //

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}

export default multiplica;

// ______________________________ //

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}

export { multiplica, soma };

// IMPORTAÇÃO

import soma from "./caminho/arquivo.js";
// ______________________________ //
import { soma, multiplica } from "./caminho/arquivo.js";
// ______________________________ //
import * as operacoes from "./caminho/arquivo.js";
const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);
