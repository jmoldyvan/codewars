function minMax(arr){
    arr = arr.flat()
    arr = arr.sort((a,b) => a - b)
    // let high = 
    return [arr[0], +(arr.slice(-1))]; // fix me!
  }