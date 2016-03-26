'use strict';

var Immutable = require('immutable');

const matrizInitial = Immutable.fromJS([
  [8, 7, 6],
  [5, 0, 4],
  [3, 2, 1]
]);

const matrizFinal = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

function each (matriz) {
  let matrizTemp = [];

  for (let i = 0; i < matriz.size; i++) {
    for (let j = 0; j < matriz.size; j++) {
      matrizTemp.push(moveUp(matriz, i, j));
      matrizTemp.push(moveDown(matriz, i, j));
      matrizTemp.push(moveLeft(matriz, i, j));
      matrizTemp.push(moveRigth(matriz, i, j));
    }
  }

  return matrizTemp.filter(a => !!a);
}

function moveUp (matriz, i, j) {
  let matrizTemp = matriz.toJS();

  var next = i-1;
  if (next < 0) return;

  let temp = matrizTemp[next][j];
  if (temp != 0) return;

  let atual = matrizTemp[i][j];
  matrizTemp[next][j] = atual;
  matrizTemp[i][j] = temp;
  return Immutable.fromJS(matrizTemp);
};

function moveDown (matriz, i, j) {
  let matrizTemp = matriz.toJS();

  var next = i+1;
  if (next > 2) return;

  let temp = matrizTemp[next][j];
  if (temp != 0) return;

  let atual = matrizTemp[i][j];
  matrizTemp[next][j] = atual;
  matrizTemp[i][j] = temp;
  return Immutable.fromJS(matrizTemp);
};

function moveLeft (matriz, i, j) {
  let matrizTemp = matriz.toJS();

  var next = j-1;
  if (next < 0) return;

  let temp = matrizTemp[i][next];
  if (temp != 0) return;

  let atual = matrizTemp[i][j];
  matrizTemp[i][next] = atual;
  matrizTemp[i][j] = temp;
  return Immutable.fromJS(matrizTemp);
};

function moveRigth (matriz, i, j) {
  let matrizTemp = matriz.toJS();

  var next = j+1;
  if (next > 2) return;

  let temp = matrizTemp[i][next];
  if (temp != 0) return;

  let atual = matrizTemp[i][j];
  matrizTemp[i][next] = atual;
  matrizTemp[i][j] = temp;
  return Immutable.fromJS(matrizTemp);
};

console.log(each(matrizInitial));
