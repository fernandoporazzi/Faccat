var Immutable = require('immutable');
var _ = require('underscore');
var async = require('async');

var cities = require('./cities');

var chromosomesToBeGenerated = 5000,
  ages = 100,
  chromosomesList = [];

function start() {
  async.each(_.range(ages), (i, cb) => {
    console.log(`create age ${i}`);
    createAge();
    cb();
  }, () => {
    calculateFitness();
    orderChromosomes();

    for (var j = 0; j < chromosomesList[0].length; j++) {
      console.log(chromosomesList[0][j].city);
    }
    console.log('Kilometros: ', chromosomesList[0].totalKM)
  });
}

function createAge() {
  if (chromosomesList.length === 0) {
    generateChromosomes();
  }

  calculateFitness();
  orderChromosomes();
  killWeak();
  doCrossOver();
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
    chromosomesList[i].totalKM = 0;

    // loops through every chromosome city
    for (var j = 0; j < chromosomesList[i].length - 1; j++) {
      // Loops through all destination and try to find the previous city
      for (var k = 0; k < chromosomesList[i][j].to.length; k++) {
        var self = chromosomesList[i][j].to[k];

        if (self.city === chromosomesList[i][j + 1].city) {
          chromosomesList[i].totalKM = chromosomesList[i].totalKM + self.km;
        }
      }
    }
  }
}

function orderChromosomes() {
  chromosomesList.sort((a, b) => {
    return a.totalKM > b.totalKM;
  });
}

function killWeak() {
  chromosomesList = chromosomesList.splice(0, 4000);
}

function doCrossOver() {
  var children = [];

  for (var i = 0; i < chromosomesList.length; i += 2) {
    var half = Math.round(chromosomesList[i].length / 2);

    var left = chromosomesList[i].slice(half);
    var right = chromosomesList[i + 1];

    var child = left;
    var diff = [];

    //
    for (var j = 0; j < right.length; j++) {
      var self = right[j];
      var exists = false;

      for (var k = 0; k < child.length; k++) {
        if (self.city === child[k].city) {
          exists = true;
          break;
        }
      }

      if (!exists) {
        diff.push(self);
      }
    }

    child = Immutable.fromJS(child.concat(diff));

    children.push(child.toJS());
  }

  chromosomesList = chromosomesList.concat(children);
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
  start();
  console.timeEnd();
}

init();
