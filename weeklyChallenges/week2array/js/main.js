// Today's task is to write a function that will check equality between 2 arrays with a particular structure.
// 2 arrays: equal size, each nested arrays, each nested array = size, always na array, same amount of nested arrays, possible different types,

// boolean, strictly match the first array

function checkEquality(arr1, arr2){
    firstone = arr1.flat().join('')
    secondone = arr2.flat().join('')
    console.log(firstone===secondone?true:false)
}

const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

checkEquality(arr1, arr2) //true
checkEquality(arr1, arr3) //false
checkEquality(arr1, arr4) //false
checkEquality(arr2, arr4) //false


// day2

