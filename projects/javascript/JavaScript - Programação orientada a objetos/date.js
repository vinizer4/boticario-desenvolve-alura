let dataEHora1 = Date(); // utilizando a chamada de função diretamente
console.log(dataEHora1);
// Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora1);
// string

// ______________________________________ //

let dataEHora2 = new Date(); // utilizando o construtor do objeto Date
console.log(dataEHora2);
// 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora2);
// object

// ______________________________________ //

let dataComConstrutor = new Date();
let data1 = dataComConstrutor.getDate();
console.log(data1); // 15

// let dataFuncao = Date();
// let data2 = dataFuncao.getDate();
// console.log(data2); // TypeError: dataFuncao.getDate is not a function

// ______________________________________ //

// Alguns exemplos de outros métodos disponíveis no objeto Date são:

// .getDate()
// .getMillisseconds()
// .getSeconds()
// .getMinutes()
// .getHours()
// .getDay()
// .getMonth()
// .getFullYear()

let data = new Date(); // Mon May 15 2023 20:58:40 GMT-0300 (Horário Padrão de Brasília)
let date = data.getDate(); // 15
let millisecond = data.getMilliseconds(); // 975
let second = data.getSeconds(); // 40
let minute = data.getMinutes(); // 58
let hour = data.getHours(); // 20
let day = data.getDay(); // 1
// Um número inteiro, entre 0 e 6, representando o dia da semana para a data especificada de acordo com o horário local: 0 para domingo, 1 para segunda-feira, 2 para terça-feira e assim por diante. Retorna NaN se a data for inválida.
let month = data.getMonth(); // 4
// Um número inteiro, entre 0 e 11, representando o mês da data especificada de acordo com a hora local: 0 para janeiro, 1 para fevereiro e assim por diante. Retorna NaN se a data for inválida.
let year = data.getFullYear(); // 2023

console.log(`
${data},
${date},
${millisecond},
${second},
${minute},
${hour},
${day},
${month},
${year}`);
