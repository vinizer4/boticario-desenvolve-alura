// O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:

// Chamando imprimeNomeEmail com o método apply() e passando um array de dados como segundo parâmetro (lembrando que o primeiro parâmetro de apply() se refere ao contexto de this, igual ao método call():

// Utilize o método apply() caso você tenha um array de dados e o call() para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.

function imprimeNomeEmail(tipoCliente, agencia) {
  console.log(`
   ${tipoCliente} da agência ${agencia}:
   - nome: ${this.nome}, email: ${this.email}
   `);
}

const cliente1 = {
  nome: "Carlos",
  email: "c@email.com",
};

const cliente2 = {
  nome: "Fred",
  email: "f@email.com",
};

const clienteEspecial = ["cliente especial", "Rio de Janeiro"];
const clienteEstudante = ["cliente estudante", "Fortaleza"];

imprimeNomeEmail.apply(cliente1, clienteEspecial);
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante);
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com
