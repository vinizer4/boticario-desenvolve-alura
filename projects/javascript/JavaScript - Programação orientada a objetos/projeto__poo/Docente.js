import User from "./User.js";

export default class Docente extends User {
  constructor(
    nome,
    sobrenome,
    email,
    nascimento,
    role = "docente",
    ativo = true,
  ) {
    super(nome, sobrenome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso ${curso}.`;
  }
}

const novoDocente = new Docente("Mariana", "Rios", "m@m.com", "2021-01-01");

console.log(novoDocente);
// // Docente {}

console.log(novoDocente.exibirInfos());
// // Mariana Rios, m@m.com, 2021-01-01, docente, true

console.log(novoDocente.aprovaEstudante("Juliana", "JS"));
// // Estudante Juliana passou no curso JS.
