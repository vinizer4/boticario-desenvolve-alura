const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

console.log(cliente.cpf.substring(0, 3)); // 125 (exibe somente os três primeiros dígitos do cpf)
