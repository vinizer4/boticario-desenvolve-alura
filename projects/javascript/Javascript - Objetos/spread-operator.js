const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

// const guerreiro = { fichaGuerreiro, equipoGuerreiro };
// console.log(guerreiro);
// {
//   fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
//   equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
// }

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro };
console.log(guerreiro);
// {
//   nome: 'Aragorn',
//   classe: 'guerreiro',
//   espada: 'Andúril',
//   capa: 'capa élfica +2'
// }
