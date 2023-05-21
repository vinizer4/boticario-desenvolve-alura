// TRUTHY - FALSY

// Boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
// 0 -> false
// 1 -> true

console.log(0 == false); // true
console.log("" == false); // true
console.log(1 == true); // true

// undefined -> indefinido
// null -> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar); // undefined
console.log(varNull); // null
console.log("" == varNull); // false
console.log([] == null); // false
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(undefined == null); // true

let numero = 3;
let texto = "Alura";

console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof minhaVar); // undefined
console.log(typeof varNull); // object
