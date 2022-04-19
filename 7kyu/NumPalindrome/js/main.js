function palindrome(num) {
  //Code goes here
  let x = (num.toString().split('').reverse().join(''));
  if (num !== +(num) || num <= 0) {
    return "Not valid"
  }
  else if (x == num) {
    return true
  }
  else {
    return false
  }
}