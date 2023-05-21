export default class User {
  #nome; // # serve para deixar privado
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`;
  }

  get sobrenome() {
    return this.#sobrenome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Formato inválido");
    }
    let [nome, ...sobrenome] = novoNome.split(" ");
    sobrenome = sobrenome.join(" ");
    this.#nome = nome;
    this.#sobrenome = sobrenome;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}

// const novoUser = new User("Juliana", "j@j.com", "2021-01-01");
// console.log(User.prototype.isPrototypeOf(novoUser)); // true

// // Ou seja, por baixo da classe user, temos uma propriedade prototype, que além de tudo foi passada pela cadeia de protótipo, para dentro de novoUser, mesmo usando a sintaxe de classe, e mesmo criando, instanciando através do construtor, através de uma nova classe.
