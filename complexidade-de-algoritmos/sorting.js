function generateData (size) {
  list = [];
  
  for (var i = 0; i < size; i++){
    list.push(Math.floor((Math.random() * size) + 1));
  }

  return list;
}

function bubbleSort (size) {
  var list = generateData(size),
    swapped;
  
  do {
    swapped = false;
  
    for (var i = 0; i < list.length - 1; i++) {
  
      if (list[i] > list[i + 1]) {
        var temp = list[i];

        list[i] = list[i + 1];
        list[i + 1] = temp;
        swapped = true;
      }

    }
  
  } while (swapped);

  return list;
}

function quickSort (list) {
  if (list.length == 0) return [];
 
  var left = [], right = [], pivot = list[0];
 
  for (var i = 1; i < list.length; i++) {
    list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
  }
 
  return quickSort(left).concat(pivot, quickSort(right));
}

function init (size) {
  var d;

  d = new Date();
  console.log(bubbleSort(size));
  console.log('Bubble sort execution time:', new Date() - d);

  d = new Date();
  console.log(quickSort(generateData(size)));
  console.log('Quick sort execution time:', new Date() - d);
}

var size = 100000;

init(size);

// Average time to sort a list with 100000 indexes:
// Bubble sort: 23 seconds
// Quick sort: 116 miliseconds