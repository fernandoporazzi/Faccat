'use strict';

let matrizInicial = [
  [8, 7, 6],
  [5, 0, 4],
  [3, 2, 1]
];

const matrizFinal = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

let matrizTemp = {};

for (let i = 0; i < matrizInicial.length; i++) {
  
  for (let j = 0; j < matrizInicial.length; j++) {

    let atual = matrizInicial[i][j];

    if (atual === 0) {
      moverAcima(i, j);
    }

  }

}

function moverAcima (i, j) {
  var next = i-1;
  if (next === 0) {
    error('Posição acima inválida');
  }
  let atual = matrizInicial[i][j];
  let temp = matrizInicial[next][j];
  matrizInicial[next][j] = atual;
  matrizInicial[i][j] = temp;
};

function moverAbaixo (i, j) {
  var next = i+1;
  if (next === 2) {
    error('Posição acima inválida');
  }
  let atual = matrizInicial[i][j];
  let temp = matrizInicial[next][j];
  matrizInicial[next][j] = atual;
  matrizInicial[i][j] = temp;
};

function moverEsquerda (i, j) {
  var next = j-1;
  if (next === 0) {
    error('Posição acima inválida');
  }
  let atual = matrizInicial[i][j];
  let temp = matrizInicial[i][next];
  matrizInicial[i][next] = atual;
  matrizInicial[i][j] = temp;
};

function moverDireita (i, j) {
  var next = j+1;
  if (next === 0) {
    error('Posição acima inválida');
  }
  let atual = matrizInicial[i][j];
  let temp = matrizInicial[i][next];
  matrizInicial[i][next] = atual;
  matrizInicial[i][j] = temp;
};

function error (message) {
  new Error(message);
}
