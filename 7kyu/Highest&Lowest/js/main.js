function highAndLow(numbers) {
    // ...
    let num = numbers.split(' ').sort((a, b) => b - a)
    return (`${num[0]} ${num[num.length - 1]}`)
}

highAndLow("1 9 3 4 -5")


function highAndLow(numbers){
    let high = {number:0}
    let low = {number:0}
    for(i=0;i<numbers.length-1;i++){
      let element = Number(numbers[i])
      if(high[number] > element){
        continue
      }
      else{
        high[number] = element}
    
    if(low[number] < element){
      continue
    }
    else{low[number] = element}
    }
    console.log(high)
  }