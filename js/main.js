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







// let rev = array.reverse()
// sort = arr => ((arr.reduce((t, c) => t + c)) > 32) ? "true" : "false"
// console.log(sort(array))

// let newsort = array.sort((a,b) => a-b);
// alert(newsort[0], newsort[newsort.length-1])

// let x = ([...new Set(array)])

// Math.floor(Math.random) * (min-max+1) + min

// prompt("whats yer name", )
// let array = [1, 2, 3, 4, 56]

// let newarr = ([...new Set(array)])
// (Math.floor(Math.random) * (0 - 2 +1) + 0)




// let number = function (busStops) {
//     // Good Luck!
//     let y = []
//     busStops.forEach(arr => {
//         let x = (arr[0] - arr[1])
//         y.push(x)
//     });
//     return (Math.abs(y.reduce((t, c) => t - c, 0)))
// }

// number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])






// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     return ((classPoints.reduce((t, c) => t + c)) / classPoints.length) < yourPoints ? true : false
// }


// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))


// function vowelIndices(word) {
//     vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
//     result = []
//     for (var i = 0; i < word.length; i++) {
//         if (vowels.indexOf(word[i]) != -1) {
//             result.push(i + 1);
//         }
//     }
//     return result;
// }

// vowelIndices('orange')


var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// sort by length high to low push to array
// do same for 2nd array
// do a 3rd sort, push 1st position, return its length
function mxdiflg(a1, a2) {
    let w = []
    w.push(a1.sort((a, b) => a.length - b.length).slice(-1))
    w.push(a2.sort((a, b) => a.length - b.length).slice(-1))
    let f = w.sort((a, b) => a.length - b.length).slice(-1)
    f = f.toString()
    console.log(f.length)
    return f.length
}

mxdiflg(s1, s2)