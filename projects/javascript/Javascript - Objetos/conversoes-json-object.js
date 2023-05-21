// JSON.parse(): converte JSON para um objeto JavaScript;
// JSON.stringify(): converte um objeto JavaScript para o formato JSON.

// O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização (ou marshaling em algumas linguagens como Go).

const jsonLivro = JSON.stringify({
  id: 50,
  titulo: "Primeiros Passos com NodeJS",
  autor: "João Rubens",
  categoria: "programação",
  versoes: ["ebook", "impresso"],
});

console.log(jsonLivro);
// {"id":50,"titulo":"Primeiros Passos com NodeJS","autor":"João Rubens","categoria":"programação","versoes":["ebook","impresso"]}

const objLivro = JSON.parse(jsonLivro);

console.log(objLivro);
// {
//  id: 50,
//  titulo: 'Primeiros Passos com NodeJS',
//  autor: 'João Rubens',
//  categoria: 'programação',
//  versoes: [ 'ebook', 'impresso' ]
// }
