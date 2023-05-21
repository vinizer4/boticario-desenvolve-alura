const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((_, indice) => notas[indice] < 5);
// _ é utilizado quando existe o parâmetro mas não é utilizado.
console.log(`reprovados: ${reprovados}`);
