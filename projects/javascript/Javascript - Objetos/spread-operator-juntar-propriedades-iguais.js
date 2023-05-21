const mago = {
  nome: "Gandalf",
  classe: "mago",
};

const guerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const ranger = {
  nome: "Legolas",
  classe: "ranger",
};

// Os três objetos acima têm as mesmas propriedades. Vamos ver o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator;

const personagens = { ...mago, ...guerreiro, ...ranger };
console.log(personagens);

// O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens.
