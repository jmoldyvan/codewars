function createPhoneNumber(numbers){
  let xxx = numbers.join('').split('')
  let first3 = xxx.filter((x , i) => [i] < 3)
  let second3 = xxx.filter((x , i) => [i] > 2 && [i] < 6)
  let last4 = xxx.filter((x , i) => [i] > 5)
    first3.unshift('(')
    first3.push(')')
    second3.unshift(' ')
    second3.push('-')
    let firstSecond = first3.concat(second3)
    let phone = firstSecond.concat(last4)
    phone = phone.join('')
    return phone
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])