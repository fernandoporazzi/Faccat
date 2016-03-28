'use strict';

const Immutable = require('immutable');

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

let matrizTemp = matrizInitial;
let matrizExists = [];
let fineshed = true;
let iteration = 0;

while (fineshed) {
  matrizExists.push(matrizTemp.toJS().toString());

  console.log('matriz current: ', matrizTemp.toJS());

  let children = getChildren(matrizTemp);
  console.log('children current: ', children.toJS());

  matrizTemp = getMinimumMatriz(children);

  iteration += 1;

  console.log('\n\niteration: %d', iteration);

  if (!fineshed) console.log('\n\nmatriz final: ', matrizTemp.toJS());
  console.log('\n\n');
}

function getMinimumMatriz (children) {
  let index;
  let minimum = Math.pow(2,32);
  for (let i = 0; i < children.size; i++) {
    let child = children.get(i).toJS();

    let exists = matrizExists.filter(matriz => matriz == child.toString())[0];
    if (!exists) {
      let distance = getDistanceManhattan(child);
      if (distance < minimum) {
        index = i;
        minimum = distance;
      }
    }
  }
  if (minimum === 0) fineshed = false;
  return children.get(index);
};

function getDistanceManhattan (matrizChild) {
  let distance = 0;
  let misplaced = 0;
  for (let i = 0; i < matrizFinal.length; i++) {
    for (let j = 0; j < matrizFinal.length; j++) {
      var result = calculateDistanceManhattan(matrizChild, i, j);
      distance += result;
      if (result !== 0) misplaced += 1;
    }
  }
  return distance + misplaced;
};

function calculateDistanceManhattan (matrizChild, x, y) {
  let current = matrizChild[x][y];
  if (current === 0) return 0;

  for (let i = 0; i < matrizFinal.length; i++) {
    for (let j = 0; j < matrizFinal.length; j++) {
      let original = matrizFinal[i][j];
      if (original === current) return Math.abs(x-i) + Math.abs(y-j);
    }
  }
};

function getChildren (matriz) {
  let matrizTemp = [];
  for (let i = 0; i < matriz.size; i++) {
    for (let j = 0; j < matriz.size; j++) {
      matrizTemp.push(moveUp(matriz, i, j));
      matrizTemp.push(moveDown(matriz, i, j));
      matrizTemp.push(moveLeft(matriz, i, j));
      matrizTemp.push(moveRigth(matriz, i, j));
    }
  }
  return Immutable.fromJS(matrizTemp.filter(a => !!a));
};

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
  if (next > matrizFinal.length-1) return;

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
  if (next > matrizFinal.length-1) return;

  let temp = matrizTemp[i][next];
  if (temp != 0) return;

  let atual = matrizTemp[i][j];
  matrizTemp[i][next] = atual;
  matrizTemp[i][j] = temp;
  return Immutable.fromJS(matrizTemp);
};
