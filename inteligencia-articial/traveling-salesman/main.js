var cities = require('./cities');

var chromosomesToBeGenerated = 10,
  chromosomesList = [];

function generateChromosomes() {
  for (var i = 0; i < chromosomesToBeGenerated; i++) {
    var shuffled = shuffleArray();

    chromosomesList.push(shuffled);
  }
}

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

function init() {
  generateChromosomes();

  console.log(chromosomesList[0]);
  console.log(chromosomesList[0][0]);
  console.log(chromosomesList[0][1]);
}

init();
