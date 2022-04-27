<<<<<<< HEAD
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
=======
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
>>>>>>> ab797a2ef1ffb1728e4fd520a4d9b49cacd704ce
}