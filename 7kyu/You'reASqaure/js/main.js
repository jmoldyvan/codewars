// better way
let isSquare = n => Math.sqrt(n) % 1 !== 0 ? false : true;

// var isSquare = function (n) {
//     if (Math.sqrt(n) % 1 !== 0) {
//         console.log(false);
//     }
//     else {
//         console.log(true);
//     }
// }

isSquare(11)