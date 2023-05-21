import User from "./User.js";

export default class Admin extends User {
  constructor(
    nome,
    sobrenome,
    email,
    nascimento,
    role = "admin",
    ativo = true,
  ) {
    super(nome, sobrenome, email, nascimento, role, ativo);
  }

  exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}`;
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin("Rodrigo", "Pacheco", "r@r.com", "2021-01-01");

console.log(novoAdmin.criarCurso("JS", 20));
//Curso de JS criado com 20 vagas

console.log(novoAdmin);
// Admin {}

console.log(novoAdmin.exibirInfos());
// Rodrigo Pacheco, admin, true
