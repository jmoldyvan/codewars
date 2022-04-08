// function invert(yyy) {
//     let xxx = yyy
//     xxx.forEach((x, i) => {
//         if (xxx[i] > 0) {
//             xxx[i] *= (-1)
//         }
//         else if (xxx[i] <= 0) {
//             xxx[i] = -xxx[i]
//         }
//     });
//     return (yyy, xxx)
// }








// function sumDigits(number) {
//     let num1 = Math.abs(number);
//     // console.log(num1)
//     let arr = String(num1).split('').map((num1) => {
//         return +(num1)
//     })
//     // console.log(arr)
//     let result = arr.reduce((total, x) => total + x, 0);
//     return result

// }










// function descendingOrder(n) {
//     //...

//     let x = Array.from(n.toString()).map(Number);
//     let descend = x.sort((a, b) => b - a).join('')
//     return +descend

// }

// console.log(descendingOrder(1021))

// let w = [1, 3, 5, 7, 9]
// let f = [1, 1, 1, 2, 10, 8, 6, 4, 2]

// function mergeArrays(arr1, arr2) {
//     return ([...new Set((arr1.concat(arr2)).sort((a, b) => a - b))]);
// }

// console.log(mergeArrays(w, f))








// function palindrome(num) {
//     //Code goes here
//     let x = (num.toString().split('').reverse().join(''));
//     if (num !== +(num) || num <= 0) {
//         return "Not valid"
//     }
//     else if (x == num) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// console.log(palindrome(0))





// function longest(s1, s2) {
//     // your code
//     xxx = s1 + s2;
//     xxx = xxx.split('').sort();
//     return ([...new Set(xxx)]).join('')
// }

// console.log((longest("inmanylanguages", "theresapairoffunctions")))






// String.prototype.toJadenCase = function () {
//     //...
//     x = this.split(' ').map(y => y[0].toUpperCase() + y.slice(1)).join(' ')
//     return x
// };




// const closestMultiple10 = num => {
//     return Math.round(num / 10) * 10;
// };

// console.log(closestMultiple10(1320))


// function eachCons(array, n) {
//     let w = []
//     for (let i = 0; i < array.length; i++) {
//         w.push(array.slice(i, i + n));
//     }
//     return w.filter(e => e.length === n);
// }

// console.log(eachCons([1, 2, 3, 4], 3))





// given a list of numbers make eevry indexed item in list increase in value by 1

// function pipeFix(numbers) {
//     let xxx = []
//     for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
//         const ele = i;
//         xxx.push(ele)
//     }
//     console.log(xxx)
// }

// pipeFix([6, 8, 9])


// find the numerical middle and say which index its in

// function gimme(triplet) {
//     let xxx = triplet.slice().sort((a, b) => a - b);
//     for (let i = 0; i < triplet.length; i++) {
//         if (triplet[i] == xxx[1]) {
//             return (i)
//         }
//     }
// }

// gimme([10, 5, 14])


let array = [1, 2, 3, 4, 56]
sort = arr => ((arr.reduce((t, c) => t + c)) > 32) ? "true" : "false"
console.log(sort(array))