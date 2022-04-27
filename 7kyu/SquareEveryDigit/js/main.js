function squareDigits(num) {
    num = num.toString().split('').map(x => x ** 2).join('')
    return +num
}

(squareDigits(3212))