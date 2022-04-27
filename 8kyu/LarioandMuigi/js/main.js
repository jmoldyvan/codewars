function pipeFix(numbers) {
  let xxx = []
  for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
    const ele = i;
    xxx.push(ele)
  }
  return xxx
}