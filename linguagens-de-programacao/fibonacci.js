// Fernando Porazzi

// The fucking cool recursive way
// Complexity: O(n^n)
function fibRecursive (n) {

  if (n === 1 || n === 2) {
    
    return 1;
  
  } else {
  
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  
  }

}

// The fucking boring iterative way
// Complexity : O(n)
function fibIterative (n) {

  if (n === 1 || n === 2) {
  
    return 1;
  
  } else {
  
    var last = 1, 
      beforeLast = 0,
      temp;

    for (var i = 1; i < n; i++) {
  
      temp = last;
      last = last + beforeLast;
      beforeLast =  temp;
  
    }

    return last;

  }

}

console.log(fibRecursive(5));
console.log(fibIterative(5));
