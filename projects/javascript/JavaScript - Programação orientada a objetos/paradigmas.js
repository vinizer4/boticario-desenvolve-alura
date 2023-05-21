// PARADIGMA IMPERATIVO

function dobra(vetor) {
  let resultados = [];
  for (let i = 0; i < vetor.length; i++) {
    resultados.push(vetor[i] * 2);
  }
  return resultados;
}

// PARADIGMA DECLARATIVO

function dobra(vetor) {
  return vetor.map((item) => item * 2);
}
