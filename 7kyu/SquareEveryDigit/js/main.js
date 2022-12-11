// 2023

function squareDigits(num){
    num = num.toString().split('')
    return Number(num.map((x) => x*x).join(''));
  }


  
function squareDigits(num) {
    num = num.toString().split('').map(x => x ** 2).join('')
    return +num
}

(squareDigits(3212))