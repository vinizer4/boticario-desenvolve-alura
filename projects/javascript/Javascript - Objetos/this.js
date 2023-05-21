const pessoa = {
  nome: "Ana",
  email: "a@email.com",
  imprimeNome: function () {
    // console.log(`${pessoa.nome}`);
    console.log(`${this.nome}`);
  },
};

pessoa.imprimeNome(); //Ana

// _________________________ //

function imprimeNomeEmail() {
  console.log(`nome: ${this.nome}, email ${this.email}`);
}

const pessoa1 = {
  nome: "Ana",
  email: "a@email.com",
  imprimeInfo: imprimeNomeEmail,
};

const pessoa2 = {
  nome: "Paula",
  email: "p@email.com",
  imprimeInfo: imprimeNomeEmail,
};

pessoa1.imprimeInfo();
//nome: Ana, email a@email.com
pessoa2.imprimeInfo();
//nome: Paula, email p@email.com

// _________________________ //

function Pessoa(nome, email) {
  this.nome = nome;
  this.email = email;
  this.imprimeNomeEmail = function () {
    console.log(`nome: ${this.nome}, email: ${this.email}`);
  };
}

const pessoa3 = new Pessoa("Ana", "a@email.com");
const pessoa4 = new Pessoa("Paula", "p@email.com");

pessoa3.imprimeNomeEmail();
// nome: Ana, email: a@email.com
pessoa4.imprimeNomeEmail();
// nome: Paula, email: p@email.com
