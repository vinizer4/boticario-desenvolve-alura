const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

// user.exibirInfos(); // Juliana j@j.com
// _____________________________________________ //
// const exibir = user.exibirInfos;
// exibir(); // undefined undefined (perde o contexto)
// _____________________________________________ //
const exibir = function () {
  console.log(this.nome);
};

const exibirNome = exibir.bind(user); // bind prende a função a um contexto específico

exibirNome(); // Juliana
exibir(); // undefined
