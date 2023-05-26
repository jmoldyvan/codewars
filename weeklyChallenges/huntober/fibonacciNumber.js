// The Fibonacci numbers, commonly denoted F(n) form a sequence, 
// called the Fibonacci sequence, such that each number is the sum 
// of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(N) {
    if (N === 0 || N === 1) return N;
    
    let a = 0;
    let b = 1;
    let i = 2;
    
    for (; i <= N; i += 1) {
      const temp = a + b;
      a = b;
      b = temp; 
    }
    
    return b;
  };