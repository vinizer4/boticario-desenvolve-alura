// Esse método permite que uma função seja chamada com parâmetros e valor de this específicos.

// Criamos uma função imprimeNomeEmail que recebe como parâmetro um dado que chamamos de tipoCliente. Esta função imprime no terminal um string com tipoCliente mais duas informações que estão associadas a algum objeto (ainda não informado) com this.

// Como a função está sendo chamada como objeto do método call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos.

// O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.

function imprimeNomeEmail(tipoCliente) {
  console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`);
}

const cliente1 = {
  nome: "Carlos",
  email: "c@email.com",
};

const cliente2 = {
  nome: "Fred",
  email: "f@email.com",
};

imprimeNomeEmail.call(cliente1, "cliente especial");
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante");
// cliente estudante - nome: Fred, email: f@email.com
