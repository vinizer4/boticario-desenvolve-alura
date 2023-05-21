// Conversões de tipo de valores

let number = 456;
let string = "456";

console.log(number == string); // true
console.log(number === string); // false
console.log(number + string); // 456456

// Conversão implícita

// Number() -> Converte para número
// String() -> Converte para string

const numero = 456;
const numeroString = Number("456"); // String convertido em Number

console.log(numero + numeroString); // 912

console.log(Number("456a")); // -> NaN

// Conversão explícita

console.warn(new Error("oi"));

// OUTRAS FORMAS DE CONVERSÃO

let telefone = 12341234;
console.log("O telefone é " + telefone.toString());
// toString() converte para string

let largura = "10";
let altura = "5";
console.log(+largura * +altura);
// Conversão de String para números usando o sinal de + antes das variáveis (Não é muito utilizado)
