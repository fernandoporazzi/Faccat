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

while (fineshed) {
  matrizExists.push(matrizTemp.toJS().toString());
  console.log('matriz exists: %d', matrizExists.length);
  console.log('MATRIZ: ', matrizTemp);
  let children = getChildren(matrizTemp);
  console.log('children: ', children);
  matrizTemp = getMinimumMatriz(children);
  if (!matrizTemp) fineshed = false;
  console.log('\n\n');
}

function getMinimumMatriz (children) {
  let index;
  let minimum = Math.pow(2,32);
  for (let i = 0; i < children.size; i++) {
    let child = children.get(i).toJS();
    for (var j = 0; j < matrizExists.length; j++) {
      if (matrizExists[j] != child.toString()) {
        let distance = getDistance(child);
        if (distance < minimum) {
          index = i;
          minimum = distance;
        }
      }
    }
  }
  if (minimum === 0) return null;
  return children.get(index);
};

function getDistance (matriz) {
  let distance = 0;
  for (let i = 0; i < matrizFinal.length; i++) {
    for (let j = 0; j < matrizFinal.length; j++) {
      distance += calculateDistance(matriz, i, j);
    }
  }
  return distance;
};

function calculateDistance (matriz, x, y) {
  var original = matrizFinal[x][y];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      let current = matriz[i][j];
      if (original === current) {
        let result = x-i < 0 ? (x-i)*-1 : x-i ;
        result += y-j < 0 ? (y-j)*-1 : y-j ;
        return result;
      }
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
