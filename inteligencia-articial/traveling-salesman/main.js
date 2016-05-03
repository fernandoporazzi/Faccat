var Immutable = require('immutable');

var cities = require('./cities');

var chromosomesToBeGenerated = 1000,
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

    // Since we need to go back to the origin point,
    // we append the first child to the end of the list
    shuffled = shuffled.push(shuffled.toJS()[0]);

    chromosomesList.push(shuffled.toJS());
  }
}

function calculateFitness() {
  var l = chromosomesList.length;

  // loops through every chromosome
  for (var i = 0; i < l; i++) {

    console.log('______________________________________________________');
    console.log('');

    chromosomesList[i].totalKM = 0;

    // loops through every chromosome city
    for (var j = 0; j < chromosomesList[i].length - 1; j++) {
      //console.log(chromosomesList[i][j].city);

      // Loops through all destination and try to find the previous city
      for (var k = 0; k < chromosomesList[i][j].to.length; k++) {
        var self = chromosomesList[i][j].to[k];

        if (self.city === chromosomesList[i][j + 1].city) {

          console.log(chromosomesList[i][j].city, '->', self.city, ', km: ', self.km);
          chromosomesList[i].totalKM = chromosomesList[i].totalKM + self.km;
        }
      }
    }
  }
}

function getBestRoute() {
  var km = chromosomesList[0].totalKM,
    route,
    index;

  for (var i = 0; i < chromosomesList.length; i++) {
    var self = chromosomesList[i];

    if (self.totalKM < km) {
      km = self.totalKM;
      route = self;
      index = i;
    }
  }

  return {
    km: km,
    route: route,
    index: index
  };
}

function init() {
  console.time();
  generateChromosomes();

  calculateFitness();

  console.log(getBestRoute());
  console.log('time: ');
  console.timeEnd();
}

init();
