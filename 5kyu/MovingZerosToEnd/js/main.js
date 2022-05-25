// could indexfind all 0's
// splice them or slice from the index point
// filter out all the 0'
// and push them to original arr

function moveZeros(arr) {
    let oldArr = arr
    let numOfZeros = []
    while ( (arr.includes(0)) === true){
        let zeroIndex = arr.indexOf(0);
        let zeroSplice = arr.splice(zeroIndex , 1);
        numOfZeros.push(zeroSplice)
    }
    mergeZeros = numOfZeros.flat(1)
    return (oldArr.concat(mergeZeros))
  }

  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));