// Given an array of digital numbers, return a new array of length number containing
//  the last even numbers from the original array (in the same order). The original 
//  array will be not empty and will contain at least "number" even numbers.

function returnKth(array,k){
let newArr=[]
for (let i = array.length-1; i >= 0; i--) {
    if( array[i] % 2 ==0 && newArr.length < k){
        newArr.push(array[i])
    }
}
console.log( newArr.reverse())
}


returnKth([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) //=> [4, 6, 8]
returnKth([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) //=> [-8, 26]
returnKth([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) //=> [6]