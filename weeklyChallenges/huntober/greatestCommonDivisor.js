// Find the greatest common divisor of two positive integers. 
// The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the
//  greatest common divisor will always be an integer that is also greater or equal to 1.

assert.strictEqual(mygcd(30, 12),  6)
assert.strictEqual(mygcd(36, 12), 12)
assert.strictEqual(mygcd( 8,  9),  1)
assert.strictEqual(mygcd( 1,  1),  1)

function mygcd(x,y){

  }
































































// function mygcd(x,y){
//     return y == 0 ? x : mygcd(y, x % y)
//   }