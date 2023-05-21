// var, let e const

// _________________________________________ //

// var não é mais utilizado

// var altura = 5;
// var comprimento = 7;
// area = altura * comprimento; // funciona sem declarar a variável porém não é recomendado.
// console.log(area); // 35
// var area; // deve sempre declarar a variável

// _________________________________________ //

// let só é possível utilizar após a declaração do mesmo

// let forma = "retângulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === "retângulo") {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area); // 35

// _________________________________________ //

// const não é possível mudar o valor após sua declaração
// const deve ter um valor para iniciar, portanto "const area;" não funciona.

// const forma = "triângulo";
// const altura = 5;
// const comprimento = 7;
// let area; // deve ser utilizado let porque const não pode ser declarado dessa forma.

// if (forma === "quadrado") {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area); // 17.5

// EXERCÍCIO SOBRE VARIÁVEIS

var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;
console.log(respostaDeTudo, idade, pi);

{
  var respostaDeTudo = 3.14;
  let idade = 42;
  const pi = 29;
  console.log(respostaDeTudo, idade, pi);
}
console.log(respostaDeTudo, idade, pi);
