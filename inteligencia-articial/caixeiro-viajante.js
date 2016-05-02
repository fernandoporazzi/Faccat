var graph = [
  {
    0: {
      to1: 2,
      to2: 7,
      to3: 3,
      to4: 6
    }
  },
  {
    1: {
      to0: 2,
      to2: 4,
      to3: 3,
      to4: 5
    }
  },
  {
    2: {
      to0: 7,
      to1: 4,
      to3: 7,
      to4: 3
    }
  },
  {
    3: {
      to0: 3,
      to1: 3,
      to2: 7,
      to4: 3
    }
  },
  {
    4: {
      to0: 6,
      to1: 5,
      to2: 3,
      to3: 3
    }
  }
];

for (var i = 0; i < graph.length; i++) {
  var minRouteForCurrentIndex = getMinRoute(graph[i][i]);

  console.log(minRouteForCurrentIndex, graph[i][i][minRouteForCurrentIndex]);
}

function getMinRoute(argument) {
  var arr = [],
    minPath;

  for (var property in argument) {
    if (argument.hasOwnProperty(property)) {
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
        break;
      }

    }
  }

  return minPath;
}


