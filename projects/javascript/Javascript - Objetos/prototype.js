// INSERIR NO CONSOLE DE QUALQUER NAVEGADOR

const arr = [1, 2, 3];
console.log(arr.__proto__);

const obj = { a: 1, b: 2 };
console.log(obj.__proto__);

const texto = "Alura";
console.log(texto.__proto__);

const arrowFunction = () => {
  return 1;
};
console.log(arrowFunction.__proto__);

function funcao() {
  return 1;
}
console.log(funcao.__proto__);
