const sequenceSum = (begin, end, step) => {
    let arr = []
    if( begin < end){
    for (let i = begin; i <= end; i = i + step) {
        arr.push(i) 
        console.log(arr);
    }}
    else{
      arr.push(0)
    }
    return arr.reduce((t,c) => t+c)
  };