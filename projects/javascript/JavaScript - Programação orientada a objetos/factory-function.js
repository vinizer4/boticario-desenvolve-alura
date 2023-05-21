// Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

// Veja que, um pouco diferente do que foi feito na aula, não se trata de um objeto literal mas sim uma função que retorna (através da palavra-chave return) um objeto.

// A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`;
    },
  };
}

const newUser = criaUser("Rodrigo", "r@r.com");
console.log(newUser);
console.log(newUser.exibeInfos());

// {
//   nome: 'Rodrigo',
//   email: 'r@r.com',
//   exibeInfos: [Function: exibeInfos]
// }
// Rodrigo, r@r.com
