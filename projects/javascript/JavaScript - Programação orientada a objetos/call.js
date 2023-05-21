function exibeInfos() {
  console.log(this.nome, this.email);
}

const user = {
  nome: "Mariana",
  email: "m@m.com",
};

exibeInfos.call(user); // Mariana m@m.com

// ___________________________________ //

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibeInfos = function () {
    console.log(this.nome, this.email);
  };
}

const newUser = new User("mariana", "m@m.com");

const outroUser = {
  nome: "Rodrigo",
  email: "r@r.com",
};

newUser.exibeInfos(); // mariana m@m.com
newUser.exibeInfos.call(outroUser); // Rodrigo r@r.com

// ___________________________________ //

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const user0 = {
  nome: "Mariana",
  email: "m@m.com",
  executaFuncao: function (fn) {
    fn.call(user0, this.nome, this.email);
  },
};

user0.executaFuncao(exibeMensagem); // usuário: Mariana, email m@m.com
