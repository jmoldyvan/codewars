// Write an algorithm to determine if a nber n is happy.

// A happy nber is a nber defined by the following process:

// Starting with any positive integer, replace the nber by the sum of the squares of its digits.
// Repeat the process until the nber equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those nbers for which this process ends in 1 are happy.
// Return true if n is a happy nber, and false if not.



// replace the nber by sum of the sqares of digits aka replace 12 with (1^2+2^2)= 5
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n===1){
        return true
    }
    if(n == 2 || n== 0){
        return false
    }
    else{    
    let digits = []
    if (n>10){
        digits.push(n % 10)
        n = Math.trunc( n / 10)
    }
    else{
        digits = [n]
    }
    let squared = digits.map((x) => Number(x) * Number(x))
    squared = squared.reduce((a,b) => a+b)
    return isHappy(squared)}
};