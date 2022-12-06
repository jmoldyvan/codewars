// function getUniqueIntegers(N) {
//     let integers = [];
//     for (let i = Math.floor(-(N - 1) / 2); i <= Math.floor((N - 1) / 2); i++) {
//       integers.push(i);
//     }
//     console.log( integers);
//   }
var getUniqueIntegers = function(n) {
    let ar = [];
    ar.length = n;
    for (let i = 0; i < n; i++) ar[i] = i * 2 - n + 1;
    console.log( ar)
};
  getUniqueIntegers(5)
  getUniqueIntegers(9)
  getUniqueIntegers(6)
  getUniqueIntegers(8)