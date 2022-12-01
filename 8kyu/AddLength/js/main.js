// add the length of each word to the endof that word
// seperate by space

// return an array, with each word and length as the elements

function addLength(str){

    splitArray = str.split(' ')
    addedLengthAndSpaceToElement = splitArray.map((x) => `${x} ${x.length}`)
    return addedLengthAndSpaceToElement
}