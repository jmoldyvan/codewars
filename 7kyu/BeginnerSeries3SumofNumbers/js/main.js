function getSum(a, b) {
    let x = ([a, b]).sort((a, b) => b - a)
    let f = 0
    for (let i = x[x.length - 1]; i <= x[0]; i++) {
        f += i;
    }
    return f
}

getSum(6, 2)