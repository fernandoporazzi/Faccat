// Matriz de origens e o custo até cada destino
var graph = [
  {
    //0: {
      1: 2,
      2: 7,
      3: 3,
      4: 6
    //}
  },
  {
    //1: {
      0: 2,
      2: 4,
      3: 3,
      4: 5
    //}
  },
  {
    //2: {
      0: 7,
      1: 4,
      3: 7,
      4: 3
    //}
  },
  {
    //3: {
      0: 3,
      1: 3,
      2: 7,
      4: 3
    //}
  },
  {
    //4: {
      0: 6,
      1: 5,
      2: 3,
      3: 3
    //}
  }
];

var starterPoint = 0;
var hasVisited = [];
var done = false;
var nodesLength = 4;

// recebe o caminho mais curto a partid do índice inicial
var minRouteForCurrentIndex = getMinRoute(graph[starterPoint]);

//console.log(minRouteForCurrentIndex, graph[starterPoint][starterPoint][minRouteForCurrentIndex]);

//hasVisited.push(minRouteForCurrentIndex);

console.log('hasVisited', hasVisited);

//

while(nodesLength > 0) {
  minRouteForCurrentIndex = getMinRoute(graph[minRouteForCurrentIndex]);
  console.log('hasVisited', hasVisited);
  nodesLength--;
}


function getMinRoute(argument) {
  console.log('argument', argument);
  var arr = [],
    minPath;

  for (var property in argument) {
    if (argument.hasOwnProperty(property)) {
      console.log(argument[property]);
      arr.push(argument[property]);
    }
  }

  arr = arr.sort((a, b) => {
    return a > b;
  });

  for (var property in argument) {
    if (argument.hasOwnProperty(property)) {

      if (arr[0] === argument[property]) {
        minPath = property;
        hasVisited.push(minPath);
        break;
      }
    }
  }

  //getMinRoute(graph[minPath]);
  //nodesLength--;

  return minPath;
}
