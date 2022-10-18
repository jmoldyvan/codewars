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

// make 2 functions 
// 2 things, 1 the array, the other is element in array
// take the element and shift the element one place left or right depending on the function
// always an array, element can be different ttypes, element is a single digit or a string, element always in the string
// if on far left or right dont move, mutate original array

function moveLeft(arr,element){
    
    let elementIndex = arr.indexOf(element)
    console.log(elementIndex)
    if(elementIndex!==0){
        arr.splice(elementIndex,1)
        arr.splice(elementIndex-1,0,element)
    }
    console.log(arr)
}
function moveRight(arr,element){

    let elementIndex = arr.indexOf(element)
    console.log(elementIndex)
    if(elementIndex!==(arr.length-1)){
        arr.splice(elementIndex,1)
        arr.splice(elementIndex+1,0,element)
    }
    console.log(arr)

}
myArray = ['abc',  1, 2, 'Hey!',89,98,'xyz', 'carbs', 'special']
// console.log(moveLeft(myArray, 'xyz'))
// console.log(moveLeft(myArray, 'xyz'))
// console.log(moveRight(myArray, 'special'))
// console.log(moveRight(myArray, 2))

// day3

// give me array, sort with strings containing a on left, and then more than 3 characters to the right
// always a strings? alway 3 char words? always striongs? empty array?

// lets return the array sorted

function aSortThen3(arr){

let Aarr = arr.filter((x) => x.includes('a') || x.includes('A'))
let LongerThan3arr = arr.filter((x) => x.length>3)
arr = arr.filter((x) => x.length<=3 && !x.includes('a'))

console.log( Aarr.concat(arr).concat(LongerThan3arr))
}
myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
    // ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']
// console.log(aSortThen3(myArr))


// day 4

function goUp(element, arr) {
    let indexOfElement = 0
    let dimension = 0
    for (let i = 0; i < arr.length; i++) {
        let ind = arr[i].indexOf(element)
        if(ind!== -1){
            dimension = i
            indexOfElement = ind
        }
    }
    if(dimension!==0){
        let replacementChar = arr[dimension-1][indexOfElement]
        arr[dimension-1].splice(indexOfElement,1,element)
        arr[dimension].splice(indexOfElement,1,replacementChar)
    }
    console.log(arr);
    return arr
}
function goDown(element, arr) {
    let indexOfElement = 0
    let dimension = 0
    for (let i = 0; i < arr.length; i++) {
        let ind = arr[i].indexOf(element)
        if(ind!== -1){
            dimension = i
            indexOfElement = ind
        }
    }
    if(dimension!==arr.length-1){
        let replacementChar = arr[dimension+1][indexOfElement]
        arr[dimension+1].splice(indexOfElement,1,element)
        arr[dimension].splice(indexOfElement,1,replacementChar)
    }
    console.log(arr);
    return arr
}

myGrid = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]
goDown('h',myGrid)