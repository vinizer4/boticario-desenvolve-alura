const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log("Curso criado!");
  },
};

// Object.setPrototypeOf (define um protótipo(objeto que vai herdar, objeto que vai ceder))
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
