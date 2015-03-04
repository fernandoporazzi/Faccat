// Fatorial por iteração
function iterativeFactorial (n) {
  if (n < 0) {
 
      return "You can't type 0, man!";
  
  } else if (n === 0) {
  
      return 1;
  
  } else {
  
    var tmp = n;
  
    while (n-- > 2) {
     
      tmp *= n;
    
    }
    
    return tmp;
  
  }
}


// Fatorial por recursão
function recursiveFactorial (n) {
  if (n < 0) {
   
    return "You can't type 0, man!";
  
  } else if (n === 0) {
  
    return 1;
  
  } else {
  
    return (n * recursiveFactorial(n - 1));
  
  }
}

console.log(iterativeFactorial(4));
console.log(recursiveFactorial(5));