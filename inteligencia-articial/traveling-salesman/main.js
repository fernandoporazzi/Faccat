var Immutable = require('immutable');

var cities = require('./cities');

var chromosomesToBeGenerated = 5,
  chromosomesList = [];

function shuffleArray() {
  var array = cities;

  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function generateChromosomes() {
  var shuffled;

  for (var i = 0; i < chromosomesToBeGenerated; i++) {
    shuffled = Immutable.fromJS(shuffleArray());

    // console.log('fez shuffle');
    // console.log(shuffled.toJS());

    // Since we need to go back to the origin point,
    // we append the first child to the end of the list
    // shuffled.push(shuffled[0]);

    chromosomesList.push(shuffled.toJS());
  }

  console.log(chromosomesList);
}

function calculateFitness() {
  var l = chromosomesList.length;

  // loops through every chromosome
  for (var i = 0; i < l; i++) {

    console.log('______________________________________________________');
    console.log('');

    // loops through every chromosome city
    for (var j = 0; j < chromosomesList[i].length; j++) {
      console.log(chromosomesList[i][j].city);
    }
  }
}

function init() {
  generateChromosomes();

  //console.log(chromosomesList);

  // calculateFitness();
}

init();
