// OBJETOS LITERAIS

const gato = {
  // características
  nome: "Churrumina",
  nascimento: "25/11/2018",
  pelagem: "mesclada",
  status: {
    castrada: true,
    vacinada: true,
    vermifugada: true,
  },
  miar: function () {
    // comportamentos
    // qualquer função que é executada dentro do contexto de um objeto é chamado de MÉTODO
    console.log("miau");
  },
};

// MODELOS DE OBJETOS

const modeloGato = {
  nome: stringNome,
  nascimento: stringData,
  pelagem: stringPelagem,
  status: {
    castrado: boolCastrado,
    vacinado: boolVacinado,
    vermifugado: boolVermifugado,
  },
};

// Usando essa estrutura, poderá criar uma lista de objetos, no caso, lista de gatos.
