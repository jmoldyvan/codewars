function pipeFix(numbers) {
  let xxx = []
  for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
    const ele = i;
    xxx.push(ele)
  }
  return xxx
}

// 2023

function pipeFix(numbers){
  let result = []
  for(i = numbers[0]; i <= numbers[numbers.length-1]; i++){
    result.push(i)
  }
  return result
}