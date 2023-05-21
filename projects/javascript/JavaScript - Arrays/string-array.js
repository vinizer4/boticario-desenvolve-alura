const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas); //ALURA

// _________________________________ //

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura";

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto); //Fundamentos de JS Alura

// _________________________________ //

// MAP

const texto = "string";

const textoAtualizado = texto
  .split("") // transforma a string em array : ["s", "t", "r", "i", "n", "g"]
  .map((letra) => letra.toUpperCase())
  .join(""); // tranforma array em string
console.log(textoAtualizado); // "STRING"

// FILTER

const texto2 = "string";
const textoAtualizado2 = texto2
  .split("")
  .filter((letra) => letra.toUpperCase())
  .join("");
console.log(textoAtualizado2); // "string"
// filter apenas retorna true ou false
