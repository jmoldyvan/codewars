function sumDigits(number) {
  let num1 = Math.abs(number);
  // console.log(num1)
  let arr = String(num1).split('').map((num1) => {
    return Number(num1)
  })
  // console.log(arr)
  let result = arr.reduce((total, x) => total + x, 0);
  return result

}