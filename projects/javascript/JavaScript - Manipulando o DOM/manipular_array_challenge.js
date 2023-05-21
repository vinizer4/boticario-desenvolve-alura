// Chegou a hora de praticar! No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor da lista utilizando um método do JavaScript. Utilize a lista abaixo como base:

//_             0            1         2          3        4
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

var indice = lista.indexOf("Vermelho"); // procura o indice do valor "Vermelho" // 1

lista.splice(indice, 1); // a partir do indice, excluir 1

console.log(lista);
