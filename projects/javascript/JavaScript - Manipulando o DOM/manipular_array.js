var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];

var primeiroItem = listaDeFrutas[0]; // Pega o item 'Maçãs'
var segundoItem = listaDeFrutas[1]; // Pega o item 'Uvas'
var terceiroItem = listaDeFrutas[2]; // Pega o item 'Bananas'

listaDeFrutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçãs 0
// Uvas 1
// Bananas 2
// Abacaxi 3
// Morangos 3

// Acessando um elemento pelo seu índice
var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];
var pos = listaDeFrutas.indexOf("Bananas");
//pos = 2

// Adicionar elementos
// Em push e unshift devemos passar como parâmetro o elemento que queremos adicionar.

// Para adicionar um elemento ao final do array podemos usar o push()
var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];
listaDeFrutas.push("Laranjas");
// ['Maçãs','Uvas','Bananas','Abacaxi','Morangos', 'Laranjas']

//Para adicionar um elemento no início do array podemos usar o unshift()
var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];
listaDeFrutas.unshift("Laranjas");
// ['Laranjas','Maçãs','Uvas','Bananas','Abacaxi','Morangos]

// Remover elementos
// Em shift e pop não é preciso passar o elemento como parâmetro.

// Para remover um elemento do início de um array podemos usar o shift()
var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];
listaDeFrutas.shift();
// ['Uvas','Bananas','Abacaxi','Morangos']

// Para remover um elemento do final de um array podemos usar o pop()
var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];
listaDeFrutas.pop();
// ['Maçãs','Uvas','Bananas','Abacaxi']

// Para remover um item a partir de seu índice com o método splice()
var listaDeFrutas = ["Maçãs", "Uvas", "Bananas", "Abacaxi", "Morangos"];
var pos = listaDeFrutas.indexOf("Abacaxi"); //pos = 3
listaDeFrutas.splice(pos, 1);
// ['Maçãs','Uvas','Bananas','Morangos']
// No método splice() o primeiro parâmetro deve ser a posição a partir do qual queremos remover os elementos, e o segundo parâmetro é a quantidade que queremos remover.
