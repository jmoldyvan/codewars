function highAndLow(numbers) {
    // ...
    let num = numbers.split(' ').sort((a, b) => b - a)
    return (`${num[0]} ${num[num.length - 1]}`)
}

highAndLow("1 9 3 4 -5")