function sumTwoSmallestNumbers(numbers) {
    let num1 = numbers.sort((a, b) => a - b)
    return (num1[0] + num1[1])

}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])