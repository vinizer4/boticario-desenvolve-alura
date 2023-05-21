// DECLARAÇÃO DE FUNÇÃO

// Sem função:

// let x = "aaa";
// console.log(x); // aaa
// x = "oi";
// console.log(x); // oi

// Utilizando funções:

function imprimeTexto(texto) {
  console.log(texto);
}

imprimeTexto("Estou utilizando uma função que imprime um texto");

function soma() {
  return 2 + 2;
}

console.log(soma()); // 4

// Função dentro da outra:

imprimeTexto(soma()); // 4
