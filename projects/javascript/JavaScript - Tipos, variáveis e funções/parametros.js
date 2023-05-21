// Parâmetros de função

// function soma(numero1, numero2) {
//   return numero1 + numero2;
// }

// console.log(soma(2, 2)); // 4
// console.log(soma(245, 20)); // 265
// console.log(soma(-500, 60)); // -440

// parâmetros x argumentos

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade} anos.`;
}

console.log(nomeIdade(40, "Juliana")); // errado
console.log(nomeIdade("Juliana", 40)); // correto

// _______________________________________ //

function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(1, 2)); // 1 + 2 = 3

// _______________________________________ //

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

console.log(multiplica(soma(4, 5))); // 9
